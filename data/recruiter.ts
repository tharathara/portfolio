import {
  Briefcase,
  Award,
  Crown,
  Container,
  GitBranch,
  Globe2,
} from "lucide-react";
import type { RecruiterCard } from "@/types";

export const recruiterCards: RecruiterCard[] = [
  {
    label: "Experience",
    value: "5+ years in DevOps",
    icon: Briefcase,
    accent: "cyan",
  },
  {
    label: "Certified",
    value: "AWS Solutions Architect",
    icon: Award,
    accent: "amber",
  },
  {
    label: "Current Role",
    value: "Senior DevOps Engineer",
    icon: Crown,
    accent: "violet",
  },
  {
    label: "Migrations",
    value: "EKS & Kubernetes",
    icon: Container,
    accent: "cyan",
  },
  {
    label: "Delivery",
    value: "CI/CD & Automation",
    icon: GitBranch,
    accent: "emerald",
  },
  {
    label: "Availability",
    value: "Open to remote roles",
    icon: Globe2,
    accent: "emerald",
  },
];
