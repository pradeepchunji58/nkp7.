import { Question } from '../../types';

export const batch7Questions: Question[] = [
  {
    id: 'q7',
    badge: 'Cluster Upgrades & Lifecycle',
    title: 'Executing Rolling Upgrades of NKP Control Plane and Worker Nodes',
    scenario: 'An administrator is planning a zero-downtime Kubernetes minor version upgrade for an NKP cluster running on Nutanix AHV.',
    prompt: 'What mechanism does CAPI and NKP utilize to upgrade worker node operating systems and Kubernetes binaries with minimal application disruption?',
    options: [
      {
        id: 'a',
        text: 'Rolling out new MachineTemplates via MachineDeployments using rolling update strategy with drain and cordon.',
        isCorrect: true,
        explanation: 'CAPI MachineDeployments perform rolling updates, safely draining and cordoning worker nodes before termination.',
      },
      {
        id: 'b',
        text: 'Simultaneously deleting all worker virtual machines at midnight.',
        isCorrect: false,
        explanation: 'Simultaneous deletion causes total application downtime and data loss.',
      },
      {
        id: 'c',
        text: 'In-place yum update executed over SSH on live running nodes.',
        isCorrect: false,
        explanation: 'In-place package updates on running Kubernetes nodes can leave nodes in an inconsistent state.',
      },
      {
        id: 'd',
        text: 'Rebooting the physical Prism Central appliance.',
        isCorrect: false,
        explanation: 'Prism Central reboot does not upgrade guest Kubernetes cluster worker node binaries.',
      },
    ],
    correctOptionId: 'a',
    keyTakeaway: 'NKP leverages CAPI MachineDeployments to execute graceful rolling upgrades with node draining.',
    deepExplanation: 'Cluster API ensures high availability during upgrades by provisioning new nodes with updated binaries and gracefully draining existing workloads.',
  }
];
