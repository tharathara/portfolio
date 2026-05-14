import type { LucideIcon } from "lucide-react";

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  highlights: string[];
  stack?: string[];
};

export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  accent: "cyan" | "emerald" | "violet" | "amber";
  skills: string[];
};

export type Project = {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  accent: "cyan" | "emerald" | "violet" | "amber";
};

export type Certification = {
  title: string;
  issuer: string;
  icon: LucideIcon;
};

export type ServiceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ImpactStat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
};

export type RecruiterCard = {
  label: string;
  value: string;
  icon: LucideIcon;
  accent?: "cyan" | "emerald" | "violet" | "amber";
};

export type NavItem = {
  label: string;
  href: string;
};
