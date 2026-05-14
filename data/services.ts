import {
  Cloud,
  FileCode,
  Workflow,
  Container,
  Activity,
  Wallet,
  Bot,
  Lock,
  Rocket,
  Globe,
} from "lucide-react";
import type { ServiceCard } from "@/types";

export const services: ServiceCard[] = [
  {
    title: "AWS Infrastructure Design",
    description: "Production-grade AWS architectures with reliability, security, and scale baked in.",
    icon: Cloud,
  },
  {
    title: "Terraform Infrastructure as Code",
    description: "Reusable, versioned Terraform modules for safe, auditable infrastructure changes.",
    icon: FileCode,
  },
  {
    title: "CI/CD Pipeline Setup",
    description: "Fast, reliable build & deploy pipelines using Jenkins, GitHub Actions, or Argo CD.",
    icon: Workflow,
  },
  {
    title: "Kubernetes / EKS Migration",
    description: "Move legacy workloads to EKS with zero-downtime cutovers and GitOps delivery.",
    icon: Container,
  },
  {
    title: "Monitoring & Alerting",
    description: "Actionable observability with Datadog, CloudWatch, Prometheus & smart Slack routing.",
    icon: Activity,
  },
  {
    title: "Cloud Cost Optimization",
    description: "Trim cloud waste with environment scheduling, rightsizing, and tagging automation.",
    icon: Wallet,
  },
  {
    title: "DevOps Automation",
    description: "Automate operational toil with Lambda, Python, Boto3, and clean tooling.",
    icon: Bot,
  },
  {
    title: "Secure Cloud Architecture",
    description: "Least-privilege IAM, private networking, KMS-backed secrets, WAF, and compliance ready.",
    icon: Lock,
  },
  {
    title: "Production Deployment Support",
    description: "On-call ready deployment strategies, blue/green or AB rollouts, and incident playbooks.",
    icon: Rocket,
  },
  {
    title: "Business Website Hosting",
    description: "Reliable WordPress / business website hosting and ongoing operational support.",
    icon: Globe,
  },
];
