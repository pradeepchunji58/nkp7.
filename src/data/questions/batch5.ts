import { Question } from '../../types';

export const batch5Questions: Question[] = [
  {
    id: 'q5',
    badge: 'Security & Identity (OIDC/RBAC)',
    title: 'Integrating Keycloak and OIDC Authentication with NKP',
    scenario: 'An enterprise security officer mandates that all Kubernetes cluster administrator logins must authenticate via Corporate Active Directory / OIDC.',
    prompt: 'Which NKP component or Konvoy configuration manages external OIDC token validation and Kubernetes RBAC mapping?',
    options: [
      {
        id: 'a',
        text: 'kube-apiserver OIDC flags (--oidc-issuer-url, --oidc-client-id) combined with RoleBindings and ClusterRoleBindings.',
        isCorrect: true,
        explanation: 'Kubernetes API server natively validates OIDC JWT tokens and maps claims to user groups and RBAC roles.',
      },
      {
        id: 'b',
        text: 'Hardcoded local htpasswd file on each worker node.',
        isCorrect: false,
        explanation: 'Htpasswd is insecure and does not integrate with enterprise OIDC identity providers.',
      },
      {
        id: 'c',
        text: 'Docker Hub container registry authentication secrets.',
        isCorrect: false,
        explanation: 'Docker Hub secrets are for pulling container images, not user cluster authentication.',
      },
      {
        id: 'd',
        text: 'Nutanix Prism Central local user database exclusively.',
        isCorrect: false,
        explanation: 'Kubernetes RBAC is authenticated independently via OIDC / Dex / Keycloak within the cluster.',
      },
    ],
    correctOptionId: 'a',
    keyTakeaway: 'NKP integrates enterprise OIDC identity providers directly with the Kubernetes API server for secure RBAC.',
    deepExplanation: 'Konvoy configures the Kubernetes API server with OIDC flags to authenticate tokens issued by enterprise identity providers like Keycloak, Azure AD, or Okta.',
  }
];
