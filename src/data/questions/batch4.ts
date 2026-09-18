import { Question } from '../../types';

export const batch4Questions: Question[] = [
  {
    id: 'q4',
    badge: 'Storage & CSI Integration',
    title: 'Nutanix Volumes and Nutanix Files CSI Storage Classes',
    scenario: 'A stateful PostgreSQL workload running on NKP requires ReadWriteMany (RWX) shared filesystem access across multiple worker pods.',
    prompt: 'Which CSI storage driver and access mode combination must be configured in the PersistentVolumeClaim (PVC)?',
    options: [
      {
        id: 'a',
        text: 'Nutanix Volumes CSI driver with ReadWriteOnce (RWO) block volume mode.',
        isCorrect: false,
        explanation: 'Nutanix Volumes provides block storage supporting ReadWriteOnce (RWO).',
      },
      {
        id: 'b',
        text: 'Nutanix Files CSI driver with ReadWriteMany (RWX) filesystem mode.',
        isCorrect: true,
        explanation: 'Nutanix Files provides file storage (NFS/SMB) supporting ReadWriteMany (RWX) access across multiple pods.',
      },
      {
        id: 'c',
        text: 'Local ephemeral storage with hostPath mounting.',
        isCorrect: false,
        explanation: 'HostPath is non-persistent and not suitable for production distributed stateful databases.',
      },
      {
        id: 'd',
        text: 'Nutanix Object Storage S3 gateway bucket.',
        isCorrect: false,
        explanation: 'S3 object storage is accessed via S3 API, not standard Kubernetes PVC CSI file/block mounts.',
      },
    ],
    correctOptionId: 'b',
    keyTakeaway: 'Nutanix Files CSI enables ReadWriteMany (RWX) shared file storage for Kubernetes pods.',
    deepExplanation: 'NKP integrates natively with Nutanix CSI drivers. Nutanix Volumes supplies block storage (RWO), while Nutanix Files supplies file storage (RWX).',
  }
];
