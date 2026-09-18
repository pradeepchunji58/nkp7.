import { Question } from '../../types';

export const batch6Questions: Question[] = [
  {
    id: 'q6',
    badge: 'Networking & Load Balancing',
    title: 'Calico CNI and MetalLB / Avi Load Balancer Integration',
    scenario: 'An NKP cluster administrator needs to expose Kubernetes LoadBalancer services on bare-metal Nutanix AHV infrastructure without cloud provider load balancer plugins.',
    prompt: 'Which load balancing solution is commonly deployed alongside Calico in NKP bare-metal environments to allocate routable IPs for LoadBalancer services?',
    options: [
      {
        id: 'a',
        text: 'MetalLB or Avi Load Balancer (VMware NSX / Avi Vantage)',
        isCorrect: true,
        explanation: 'MetalLB or Avi Load Balancer provides bare-metal LoadBalancer IP management for NKP clusters.',
      },
      {
        id: 'b',
        text: 'Apache HTTP Server reverse proxy daemon',
        isCorrect: false,
        explanation: 'Apache is an L7 web server, not a Kubernetes LoadBalancer IP allocator.',
      },
      {
        id: 'c',
        text: 'Localhost loopback interface binding',
        isCorrect: false,
        explanation: 'Loopback binding is local only and not routable externally.',
      },
      {
        id: 'd',
        text: 'Nutanix AHV software-defined bridge port mirroring',
        isCorrect: false,
        explanation: 'Port mirroring is for packet capture, not service IP routing.',
      },
    ],
    correctOptionId: 'a',
    keyTakeaway: 'MetalLB or Avi Load Balancer integrates with NKP to provision external IP addresses for Kubernetes LoadBalancer services.',
    deepExplanation: 'In on-premises Nutanix AHV environments, MetalLB or Avi Load Balancer assigns routable virtual IP addresses for Kubernetes services of type LoadBalancer.',
  }
];
