"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Line = {
  prompt?: string;
  text: string;
  delay?: number;
  variant?: "command" | "log" | "success" | "warn" | "comment";
};

const DEFAULT_LINES: Line[] = [
  { variant: "comment", text: "# Provisioning production environment" },
  { variant: "command", prompt: "▸", text: "terraform plan -out=tfplan", delay: 700 },
  { variant: "log", text: "Plan: 14 to add, 2 to change, 0 to destroy.", delay: 900 },
  { variant: "command", prompt: "▸", text: "terraform apply tfplan", delay: 600 },
  { variant: "log", text: "aws_eks_cluster.prod: Creating... [12s]", delay: 800 },
  { variant: "success", text: "Apply complete! Resources: 14 added.", delay: 700 },
  { variant: "command", prompt: "▸", text: "docker build -t app:1.4.2 .", delay: 600 },
  { variant: "log", text: "Successfully tagged registry.aws/app:1.4.2", delay: 700 },
  { variant: "command", prompt: "▸", text: "kubectl rollout status deploy/app -n prod", delay: 700 },
  { variant: "log", text: "deployment \"app\" successfully rolled out", delay: 600 },
  { variant: "success", text: "✓ deployment successful — uptime 100%", delay: 500 },
];

interface TerminalCardProps {
  lines?: Line[];
  className?: string;
  title?: string;
}

export function TerminalCard({
  lines = DEFAULT_LINES,
  className,
  title = "deploy.sh",
}: TerminalCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [shown, setShown] = React.useState<number>(0);

  React.useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    let i = 0;
    function next() {
      if (cancelled || i >= lines.length) return;
      const wait = lines[i]?.delay ?? 500;
      setTimeout(() => {
        if (cancelled) return;
        setShown((s) => s + 1);
        i += 1;
        next();
      }, wait);
    }
    next();
    return () => {
      cancelled = true;
    };
  }, [inView, lines]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-2xl glass-strong overflow-hidden font-mono text-[12.5px] leading-relaxed",
        "shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-2/40">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-red-500/70" />
          <span className="size-2.5 rounded-full bg-amber/80" />
          <span className="size-2.5 rounded-full bg-emerald/80" />
        </div>
        <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {title}
        </span>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald">
          <span className="size-1.5 rounded-full bg-emerald pulse-dot" />
          live
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-5 space-y-1.5 min-h-[280px] max-h-[340px] overflow-hidden bg-gradient-to-b from-background/60 to-surface/30">
        {lines.slice(0, shown).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex items-start gap-2"
          >
            {line.prompt ? (
              <span className="text-cyan select-none">{line.prompt}</span>
            ) : (
              <span className="w-3" />
            )}
            <span
              className={cn(
                line.variant === "command" && "text-foreground",
                line.variant === "log" && "text-muted-foreground",
                line.variant === "success" && "text-emerald",
                line.variant === "warn" && "text-amber",
                line.variant === "comment" && "text-muted-foreground/60 italic"
              )}
            >
              {line.text}
            </span>
          </motion.div>
        ))}
        {shown < lines.length && (
          <div className="flex items-center gap-2">
            <span className="text-cyan">▸</span>
            <span className="inline-block w-2 h-4 bg-foreground/80 animate-caret" />
          </div>
        )}
      </div>
    </div>
  );
}
