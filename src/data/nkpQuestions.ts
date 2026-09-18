import { Question, VoiceOption } from '../types';
import { batch1Questions } from './questions/batch1';
import { batch2Questions } from './questions/batch2';
import { batch3Questions } from './questions/batch3';
import { batch4Questions } from './questions/batch4';
import { batch5Questions } from './questions/batch5';
import { batch6Questions } from './questions/batch6';
import { batch7Questions } from './questions/batch7';
import { batch8Questions } from './questions/batch8';
import { batch9Questions } from './questions/batch9';

export const AVAILABLE_VOICES: VoiceOption[] = [
  { id: 'Kore', name: 'Kore', gender: 'Female', tone: 'Clear, authoritative & articulate (Default)' },
  { id: 'Puck', name: 'Puck', gender: 'Male', tone: 'Energetic, crisp & engaging' },
  { id: 'Fenrir', name: 'Fenrir', gender: 'Male', tone: 'Deep, steady enterprise speaker' },
  { id: 'Zephyr', name: 'Zephyr', gender: 'Female', tone: 'Warm, calm & natural' },
  { id: 'Charon', name: 'Charon', gender: 'Male', tone: 'Grounded, resonant & serious' },
];

export const NKP_QUESTIONS: Question[] = [
  ...batch1Questions,
  ...batch2Questions,
  ...batch3Questions,
  ...batch4Questions,
  ...batch5Questions,
  ...batch6Questions,
  ...batch7Questions,
  ...batch8Questions,
  ...batch9Questions,
];
