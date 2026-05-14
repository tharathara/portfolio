"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Container,
  GitBranch,
  Activity,
  Database,
  Shield,
  Hexagon,
  Boxes,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Node = {
  id: string;
  label: string;
  sub: string;
  icon: typeof Cloud;
  x: number; // percentage
  y: number;
  accent: "cyan" | "emerald" | "violet" | "amber";
  size?: "lg" | "md" | "sm";
};

// Coordinates are designed for an aspect ratio roughly 1:1
const NODES: Node[] = [
  { id: "core", label: "AWS Cloud", sub: "us-east-1", icon: Cloud, x: 50, y: 50, accent: "cyan", size: "lg" },
  { id: "eks", label: "EKS", sub: "Kubernetes", icon: Container, x: 18, y: 22, accent: "cyan", size: "md" },
  { id: "tf", label: "Terraform", sub: "IaC", icon: Hexagon, x: 82, y: 20, accent: "violet", size: "md" },
  { id: "ci", label: "CI / CD", sub: "Jenkins · GHA", icon: GitBranch, x: 12, y: 70, accent: "emerald", size: "md" },
  { id: "gitops", label: "Argo CD", sub: "GitOps", icon: Boxes, x: 86, y: 72, accent: "emerald", size: "md" },
  { id: "obs", label: "Datadog", sub: "Observability", icon: Activity, x: 50, y: 6, accent: "amber", size: "sm" },
  { id: "db", label: "RDS", sub: "Database", icon: Database, x: 50, y: 94, accent: "violet", size: "sm" },
  { id: "sec", label: "Secrets", sub: "KMS · WAF", icon: Shield, x: 6, y: 46, accent: "amber", size: "sm" },
  { id: "net", label: "VPC", sub: "Networking", icon: Cloud, x: 94, y: 46, accent: "cyan", size: "sm" },
];

const LINKS: Array<[string, string]> = [
  ["core", "eks"],
  ["core", "tf"],
  ["core", "ci"],
  ["core", "gitops"],
  ["core", "obs"],
  ["core", "db"],
  ["core", "sec"],
  ["core", "net"],
  ["ci", "eks"],
  ["tf", "net"],
  ["gitops", "eks"],
];

const accentMap: Record<Node["accent"], { fill: string; stroke: string; glow: string }> = {
  cyan: {
    fill: "hsl(var(--cyan) / 0.12)",
    stroke: "hsl(var(--cyan))",
    glow: "0 0 30px -8px hsl(var(--cyan) / 0.6)",
  },
  emerald: {
    fill: "hsl(var(--emerald) / 0.12)",
    stroke: "hsl(var(--emerald))",
    glow: "0 0 30px -8px hsl(var(--emerald) / 0.6)",
  },
  violet: {
    fill: "hsl(var(--violet) / 0.14)",
    stroke: "hsl(var(--violet))",
    glow: "0 0 30px -8px hsl(var(--violet) / 0.6)",
  },
  amber: {
    fill: "hsl(var(--amber) / 0.14)",
    stroke: "hsl(var(--amber))",
    glow: "0 0 30px -8px hsl(var(--amber) / 0.6)",
  },
};

export function AnimatedArchitecture({ className }: { className?: string }) {
  const nodesById = React.useMemo(
    () => Object.fromEntries(NODES.map((n) => [n.id, n])) as Record<string, Node>,
    []
  );

  return (
    <div className={cn("relative aspect-square w-full", className)}>
      {/* Outer ring + concentric guides */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <radialGradient id="ringFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--cyan) / 0.0)" />
            <stop offset="60%" stopColor="hsl(var(--cyan) / 0.0)" />
            <stop offset="100%" stopColor="hsl(var(--border))" />
          </radialGradient>
          <linearGradient id="linkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--cyan) / 0.0)" />
            <stop offset="50%" stopColor="hsl(var(--cyan) / 0.7)" />
            <stop offset="100%" stopColor="hsl(var(--violet) / 0.0)" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Concentric circles */}
        {[18, 30, 42].map((r, i) => (
          <motion.circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="0.15"
            strokeDasharray="0.6 1.2"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "50% 50%" }}
          />
        ))}

        {/* Rotating dashed ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="0.2"
          strokeDasharray="2 3"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "50% 50%" }}
          opacity={0.5}
        />

        {/* Links */}
        {LINKS.map(([a, b], i) => {
          const A = nodesById[a];
          const B = nodesById[b];
          return (
            <g key={`${a}-${b}`}>
              {/* base line */}
              <line
                x1={A.x}
                y1={A.y}
                x2={B.x}
                y2={B.y}
                stroke="hsl(var(--border))"
                strokeWidth="0.18"
              />
              {/* animated overlay */}
              <motion.line
                x1={A.x}
                y1={A.y}
                x2={B.x}
                y2={B.y}
                stroke="url(#linkGrad)"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeDasharray="2 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.8 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  animation: "dash 8s linear infinite",
                }}
              />
            </g>
          );
        })}

        {/* Traveling packets */}
        {LINKS.slice(0, 6).map(([a, b], i) => {
          const A = nodesById[a];
          const B = nodesById[b];
          return (
            <motion.circle
              key={`packet-${a}-${b}`}
              r="0.55"
              fill="hsl(var(--cyan))"
              filter="url(#glow)"
              initial={{ cx: A.x, cy: A.y, opacity: 0 }}
              animate={{
                cx: [A.x, B.x],
                cy: [A.y, B.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.8,
                delay: 1.8 + i * 0.4,
                repeat: Infinity,
                repeatDelay: 3.5,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {NODES.map((node, i) => {
        const Icon = node.icon;
        const sizePx = node.size === "lg" ? 84 : node.size === "md" ? 66 : 52;
        const a = accentMap[node.accent];
        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.5 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={cn(
                "group relative flex flex-col items-center justify-center rounded-2xl glass-strong",
                "transition-transform duration-300 hover:scale-110 cursor-default"
              )}
              style={{
                width: sizePx,
                height: sizePx,
                background: a.fill,
                borderColor: "hsl(var(--border))",
                boxShadow: a.glow,
              }}
            >
              {/* inner ring */}
              <div
                className="absolute inset-1 rounded-xl border opacity-50"
                style={{ borderColor: a.stroke + "40" }}
              />
              <Icon
                className="relative z-10"
                style={{
                  width: sizePx * 0.32,
                  height: sizePx * 0.32,
                  color: a.stroke,
                }}
                strokeWidth={1.6}
              />
              {node.size === "lg" && (
                <span className="relative z-10 mt-1 text-[10px] font-mono uppercase tracking-[0.18em] text-foreground/80">
                  {node.label}
                </span>
              )}

              {/* Floating label below for non-large nodes */}
              {node.size !== "lg" && (
                <div className="absolute top-full mt-1.5 -translate-y-0 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                  <div className="text-[10px] font-medium tracking-tight text-foreground/90">
                    {node.label}
                  </div>
                  <div className="text-[8.5px] font-mono uppercase tracking-[0.14em] text-muted-foreground/70">
                    {node.sub}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center label for core */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-center translate-y-12"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/80">
            production-grade
          </div>
        </motion.div>
      </div>
    </div>
  );
}
