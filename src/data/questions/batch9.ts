import { Question } from '../../types';

export const batch9Questions: Question[] = [
  {
    id: 'q9',
    badge: 'Backup & Disaster Recovery',
    title: 'Velero Backup and Disaster Recovery for NKP Workloads',
    scenario: 'An enterprise administrator is setting up automated daily backups for all persistent volumes and Kubernetes custom resources in NKP.',
    prompt: 'Which tool is natively integrated with NKP for cluster backup, snapshotting persistent volumes via CSI, and disaster recovery restoration?',
    options: [
      {
        id: 'a',
        text: 'Velero with Nutanix object storage (S3) and CSI snapshot plugins',
        isCorrect: true,
        explanation: 'Velero is the standard Kubernetes backup and disaster recovery tool integrated with NKP for cluster state and CSI volume snapshots.',
      },
      {
        id: 'b',
        text: 'Windows Backup and Restore wizard',
        isCorrect: false,
        explanation: 'Windows backup is not designed for Linux Kubernetes clusters.',
      },
      {
        id: 'c',
        text: 'Nutanix AHV snapshot manager without Kubernetes awareness',
        isCorrect: false,
        explanation: 'AHV VM snapshots capture raw disks but lack Kubernetes application state and etcd metadata awareness.',
      },
      {
        id: 'd',
        text: 'Rsync over SSH cronjob',
        isCorrect: false,
        explanation: 'Rsync does not backup Kubernetes API objects, secrets, CRDs, or CSI snapshots correctly.',
      },
    ],
    correctOptionId: 'a',
    keyTakeaway: 'Velero provides robust application-consistent backup and disaster recovery for NKP Kubernetes clusters.',
    deepExplanation: 'NKP supports Velero for backing up cluster resources, Kubernetes manifests, and persistent volumes stored in S3-compatible object storage.',
  }
];
