import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Legacy Elastic Beanstalk → EKS Migration",
    problem:
      "Legacy Elastic Beanstalk apps were limiting scalability, deployment flexibility, and long-term maintainability.",
    solution:
      "Re-architected and migrated production workloads to a Kubernetes-based EKS platform with GitOps delivery and IaC-driven infrastructure.",
    impact:
      "Faster, safer rollouts with environment parity; improved scalability, observability, and platform consistency.",
    stack: ["AWS EKS", "Kubernetes", "Docker", "Terraform", "Jenkins", "Argo CD", "RDS", "CloudWatch"],
    accent: "cyan",
  },
  {
    title: "Major PHP Migration on AWS",
    problem:
      "Production PHP workloads needed to be upgraded across active Elastic Beanstalk environments without downtime.",
    solution:
      "Orchestrated a phased migration with automated rollbacks, environment validation, and end-to-end health checks.",
    impact:
      "Improved application compatibility, performance, and supportability across multiple production services.",
    stack: ["AWS Elastic Beanstalk", "PHP", "EC2", "RDS", "CloudWatch", "Jenkins"],
    accent: "violet",
  },
  {
    title: "Jenkins → EKS Cloud Nodes Migration",
    problem:
      "Existing Jenkins setup was slow, fragile, and bottlenecking developer productivity.",
    solution:
      "Re-platformed Jenkins onto EKS with elastic cloud-based agents provisioned on demand and managed via Terraform.",
    impact:
      "Significantly faster build times, improved reliability, and lower idle compute spend.",
    stack: ["Jenkins", "AWS EKS", "Kubernetes", "Docker", "Terraform", "EC2", "IAM"],
    accent: "emerald",
  },
  {
    title: "Dynamic EKS Environments for Automated Testing",
    problem:
      "QA cycles were slow because of shared, drift-prone test environments.",
    solution:
      "Built automation to spin up isolated EKS-based test environments per branch and tear them down after validation.",
    impact:
      "Faster QA turnaround, reliable test isolation, and improved developer confidence in releases.",
    stack: ["AWS EKS", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Docker"],
    accent: "cyan",
  },
  {
    title: "AWS Cost Optimization Automation",
    problem:
      "Cloud spend was creeping up due to always-on non-production resources.",
    solution:
      "Designed scheduled start/stop and cleanup automations using Lambda, CloudWatch Events, and tagging policies.",
    impact:
      "Eliminated waste in non-production environments and trimmed monthly cloud spend with no developer friction.",
    stack: ["AWS Lambda", "CloudWatch", "Terraform", "Python", "AWS CLI", "Slack"],
    accent: "amber",
  },
  {
    title: "Alerting & Monitoring Automation",
    problem:
      "Application issues were being detected too late, by users instead of operators.",
    solution:
      "Built unified alerting using Datadog, CloudWatch, and Lambda with intelligent Slack routing and noise reduction.",
    impact:
      "Faster MTTD/MTTR, fewer late-night pages, and clearer ownership of incidents.",
    stack: ["Datadog", "CloudWatch", "Lambda", "Slack", "Python", "AWS"],
    accent: "emerald",
  },
  {
    title: "NFT Live Ticketing Platform Infrastructure",
    problem:
      "Live NFT ticketing launch required highly available infrastructure to handle massive concurrent traffic.",
    solution:
      "Designed a resilient AWS architecture with autoscaling, WAF protection, and zero-downtime AB deployments.",
    impact:
      "Successfully supported ~15K concurrent users at launch with zero downtime.",
    stack: ["AWS", "Nginx", "Kafka", "Zookeeper", "RDS", "Jenkins", "CircleCI", "Terraform"],
    accent: "violet",
  },
  {
    title: "Secure AWS Infrastructure with Terraform",
    problem:
      "Needed a repeatable, secure baseline for production AWS environments.",
    solution:
      "Authored Terraform modules with private networking, least-privilege IAM, KMS-backed secrets, and full logging.",
    impact:
      "Consistent secure-by-default infrastructure with auditable, version-controlled changes.",
    stack: ["Terraform", "AWS VPC", "EC2", "RDS", "ALB", "Secrets Manager", "CloudWatch", "IAM"],
    accent: "cyan",
  },
];
