import { Question } from '../../types';

export const batch2Questions: Question[] = [
  {
    id: 'q2',
    badge: 'CAPI & Cluster Lifecycle',
    title: 'Cluster API (CAPI) Management Cluster Architecture',
    scenario: 'An enterprise architect is designing an NKP multi-cluster management plane across dual Nutanix Prism Central instances.',
    prompt: 'What is the primary architectural responsibility of the NKP Management Cluster built with Cluster API (CAPI)?',
    options: [
      {
        id: 'a',
        text: 'Hosting end-user microservice application databases and caching layers.',
        isCorrect: false,
        explanation: 'Workload clusters host end-user application databases, not the CAPI management cluster.',
      },
      {
        id: 'b',
        text: 'Managing the lifecycle (creation, scaling, upgrading, and deletion) of managed workload clusters across infrastructure providers.',
        isCorrect: true,
        explanation: 'CAPI uses declarative Kubernetes custom resources to provision and lifecycle-manage workload clusters.',
      },
      {
        id: 'c',
        text: 'Providing hardware BIOS firmware updates for Nutanix AHV nodes.',
        isCorrect: false,
        explanation: 'Prism Central and IPMI handle hardware firmware updates.',
      },
      {
        id: 'd',
        text: 'Acting as an NFS storage server for virtual machine disk images.',
        isCorrect: false,
        explanation: 'Nutanix Files or Nutanix Volumes handle storage services.',
      },
    ],
    correctOptionId: 'b',
    keyTakeaway: 'The CAPI Management Cluster manages the declarative lifecycle of managed workload clusters.',
    deepExplanation: 'Cluster API extends Kubernetes to enable declarative creation, configuration, and management of cloud-native clusters.',
  }
];
