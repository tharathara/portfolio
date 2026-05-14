import { Award, Cloud, FileBadge, ShieldCheck } from "lucide-react";
import type { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    icon: Cloud,
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    icon: Award,
  },
  {
    title: "Microsoft 365 Fundamentals",
    issuer: "Microsoft",
    icon: FileBadge,
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    icon: ShieldCheck,
  },
];
