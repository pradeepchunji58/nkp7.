import { Question } from '../../types';

export const batch3Questions: Question[] = [
  {
    id: 'q3',
    badge: 'Monitoring & Observability',
    title: 'Centralized Thanos Metrics and Prometheus Federation',
    scenario: 'Platform engineers are configuring Thanos Query and Prometheus Operator within NKP for long-term metrics retention.',
    prompt: 'Which component is responsible for receiving metrics pushed or federated from multiple managed workload cluster Prometheus instances into the Thanos storage tier?',
    options: [
      {
        id: 'a',
        text: 'Thanos Receive / Thanos Sidecar',
        isCorrect: true,
        explanation: 'Thanos Sidecar runs alongside Prometheus to upload TSDB blocks to object storage, or Thanos Receive accepts remote write data.',
      },
      {
        id: 'b',
        text: 'Kube-DNS resolver',
        isCorrect: false,
        explanation: 'Kube-DNS handles cluster internal domain name resolution.',
      },
      {
        id: 'c',
        text: 'Nutanix Volumes CSI provisioner',
        isCorrect: false,
        explanation: 'CSI provisioner handles block storage volumes.',
      },
      {
        id: 'd',
        text: 'FluentBit daemonset',
        isCorrect: false,
        explanation: 'FluentBit ships logs, not time-series metrics.',
      },
    ],
    correctOptionId: 'a',
    keyTakeaway: 'Thanos Sidecar integrates with Prometheus to provide global querying and long-term storage.',
    deepExplanation: 'Thanos seamlessly extends Prometheus deployments into a unified high availability metrics system with unlimited retention.',
  }
];
