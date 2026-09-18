import { QuestionImageAttachment } from '../types';

type Listener = (images: QuestionImageAttachment[]) => void;

class ImageService {
  private images: QuestionImageAttachment[] = [];
  private listeners: Set<Listener> = new Set();
  private isLoaded = false;
  private readonly STORAGE_KEY = 'nkp_question_images_cache';

  constructor() {
    this.loadFromLocalStorage();
    this.fetchFromServer();
  }

  private loadFromLocalStorage() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.images = JSON.parse(stored);
        this.notify();
      }
    } catch (err) {
      console.warn('Failed to load cached images from localStorage:', err);
    }
  }

  private saveToLocalStorage() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.images));
    } catch (err) {
      console.warn('Failed to cache images to localStorage (quota or disabled):', err);
    }
  }

  public async fetchFromServer(): Promise<QuestionImageAttachment[]> {
    try {
      const res = await fetch('/api/question-images');
      if (res.ok) {
        const data: QuestionImageAttachment[] = await res.json();
        this.images = data;
        this.isLoaded = true;
        this.saveToLocalStorage();
        this.notify();
        return this.images;
      }
    } catch (err) {
      console.info('Using local offline cache for question images:', err);
    }
    this.isLoaded = true;
    return this.images;
  }

  public subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.images);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    for (const listener of this.listeners) {
      listener(this.images);
    }
  }

  public getAllImages(): QuestionImageAttachment[] {
    return this.images;
  }

  public getImagesForQuestion(questionId: string): QuestionImageAttachment[] {
    return this.images.filter((img) => img.questionId === questionId);
  }

  public async uploadFromFile(
    questionId: string,
    file: File,
    caption = ''
  ): Promise<QuestionImageAttachment> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const dataUrl = reader.result as string;
          const result = await this.uploadFromDataUrl(questionId, dataUrl, file.name, caption);
          resolve(result);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = () => reject(new Error('Failed to read selected image file.'));
      reader.readAsDataURL(file);
    });
  }

  public async uploadFromDataUrl(
    questionId: string,
    dataUrl: string,
    fileName = 'screenshot.png',
    caption = ''
  ): Promise<QuestionImageAttachment> {
    try {
      const res = await fetch('/api/question-images', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId, caption, fileName, dataUrl }),
      });

      if (res.ok) {
        const item: QuestionImageAttachment = await res.json();
        this.images = [item, ...this.images.filter((i) => i.id !== item.id)];
        this.saveToLocalStorage();
        this.notify();
        return item;
      } else {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Server rejected image upload.');
      }
    } catch (serverErr) {
      // Offline fallback: save dataUrl directly into local client storage
      console.warn('Server upload unavailable, storing locally in browser cache:', serverErr);
      const fallbackItem: QuestionImageAttachment = {
        id: `img-local-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        questionId,
        imageUrl: dataUrl,
        caption,
        fileName,
        fileSize: Math.round((dataUrl.length * 3) / 4),
        uploadedAt: new Date().toISOString(),
      };
      this.images = [fallbackItem, ...this.images];
      this.saveToLocalStorage();
      this.notify();
      return fallbackItem;
    }
  }

  public async deleteImage(id: string): Promise<boolean> {
    try {
      await fetch(`/api/question-images/${id}`, { method: 'DELETE' });
    } catch (e) {
      console.warn('Server delete failed or offline:', e);
    }
    this.images = this.images.filter((i) => i.id !== id);
    this.saveToLocalStorage();
    this.notify();
    return true;
  }

  public async updateCaption(id: string, caption: string): Promise<boolean> {
    try {
      await fetch(`/api/question-images/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ caption }),
      });
    } catch (e) {
      console.warn('Server update failed or offline:', e);
    }
    this.images = this.images.map((i) => (i.id === id ? { ...i, caption } : i));
    this.saveToLocalStorage();
    this.notify();
    return true;
  }

  public exportBackup(): string {
    return JSON.stringify(this.images, null, 2);
  }

  public importBackup(importedImages: QuestionImageAttachment[]) {
    if (!Array.isArray(importedImages)) return;
    const existingIds = new Set(this.images.map((i) => i.id));
    const toAdd = importedImages.filter((i) => !existingIds.has(i.id));
    this.images = [...toAdd, ...this.images];
    this.saveToLocalStorage();
    this.notify();
  }
}

export const imageService = new ImageService();
