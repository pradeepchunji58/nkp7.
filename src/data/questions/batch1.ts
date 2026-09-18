import { Question } from '../../types';

export const batch1Questions: Question[] = [
  {
    id: 'q1',
    badge: 'Bastion & Air-Gapped Deployments',
    title: 'Configuring NKP Bastion Host and Image Registry Mirroring',
    scenario: 'An enterprise administrator is deploying Nutanix Kubernetes Platform (NKP) v2.x in an air-gapped secure data center environment where worker nodes have no direct outbound internet access.',
    prompt: 'Which prerequisite step is strictly required on the Bastion Host prior to bootstrapping the Konvoy control plane cluster in an air-gapped environment?',
    options: [
      {
        id: 'a',
        text: 'Deploying an external public NTP server synchronization daemon across all AHV hypervisor hosts.',
        isCorrect: false,
        explanation: 'NTP is important for cluster time sync, but not specifically the primary air-gapped registry mirroring prerequisite.',
      },
      {
        id: 'b',
        text: 'Configuring and populating a local container registry mirror with all required NKP core helm charts and container images using nkp pull bundle.',
        isCorrect: true,
        explanation: 'In air-gapped environments, the Bastion host must pull all container images and helm bundles using `nkp pull bundle` and push them to the local container registry mirror accessible by all cluster nodes.',
      },
      {
        id: 'c',
        text: 'Installing the Nutanix Files CSI driver directly on the Bastion Operating System.',
        isCorrect: false,
        explanation: 'CSI drivers are installed post-cluster creation via NKP addons or Helm charts.',
      },
      {
        id: 'd',
        text: 'Enabling SSH root password authentication across all control plane Virtual Machines.',
        isCorrect: false,
        explanation: 'Password authentication is insecure and not recommended; key-based SSH authentication is required.',
      },
    ],
    correctOptionId: 'b',
    keyTakeaway: 'Air-gapped NKP deployments require the Bastion host to bundle and mirror all system container images and helm charts locally.',
    deepExplanation: 'When deploying NKP in isolated air-gapped environments, the Bastion host acts as the operational jumpbox and staging server. Administrators must use `nkp pull bundle` to download validated software packages and mirror them to the internal registry.',
  }
];
