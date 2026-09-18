import { Question } from '../../types';

export const batch8Questions: Question[] = [
  {
    id: 'q8',
    badge: 'Troubleshooting & CLI Diagnostics',
    title: 'Using `nkp diagnose` and Kubernetes Cluster Health Inspection',
    scenario: 'An engineer reports intermittent API server timeouts and failing health checks on an NKP workload cluster managed by Prism Central.',
    prompt: 'Which built-in NKP CLI command collects comprehensive cluster health logs, etcd status, and node conditions for troubleshooting?',
    options: [
      {
        id: 'a',
        text: 'nkp diagnose cluster --kubeconfig=<cluster>.conf',
        isCorrect: true,
        explanation: '`nkp diagnose` runs automated diagnostic checks against control plane and worker nodes to output troubleshooting bundles.',
      },
      {
        id: 'b',
        text: 'docker system prune -a',
        isCorrect: false,
        explanation: 'Docker prune deletes unused containers and images, but does not diagnose Kubernetes clusters.',
      },
      {
        id: 'c',
        text: 'kubectl check-cluster-health',
        isCorrect: false,
        explanation: 'check-cluster-health is not a standard native kubectl subcommand.',
      },
      {
        id: 'd',
        text: 'nutanix-vm-restart --force',
        isCorrect: false,
        explanation: 'Force restarting VMs can corrupt etcd quorum if multiple control plane nodes restart abruptly.',
      },
    ],
    correctOptionId: 'a',
    keyTakeaway: 'The `nkp diagnose` command is the primary diagnostic tool for inspecting cluster health and gathering logs.',
    deepExplanation: 'Administrators use `nkp diagnose` to validate cluster components, CAPI status, network connectivity, and node health during incident response.',
  }
];
