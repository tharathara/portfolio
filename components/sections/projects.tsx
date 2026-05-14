"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { GridBackground } from "@/components/grid-background";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const accentMap: Record<string, { glow: string; line: string; chip: string }> = {
  cyan: {
    glow: "from-cyan/20 via-cyan/0 to-cyan/0",
    line: "bg-cyan",
    chip: "text-cyan",
  },
  emerald: {
    glow: "from-emerald/20 via-emerald/0 to-emerald/0",
    line: "bg-emerald",
    chip: "text-emerald",
  },
  violet: {
    glow: "from-violet/20 via-violet/0 to-violet/0",
    line: "bg-violet",
    chip: "text-violet",
  },
  amber: {
    glow: "from-amber/20 via-amber/0 to-amber/0",
    line: "bg-amber",
    chip: "text-amber",
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const spotlight = useTransform(
    [mx, my],
    (vals: number[]) =>
      `radial-gradient(400px circle at ${vals[0]}% ${vals[1]}%, hsl(var(--cyan) / 0.12), transparent 50%)`
  );

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  const a = accentMap[project.accent];
  const featured = index === 0;

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative rounded-3xl glass card-shine overflow-hidden",
        "hover:border-foreground/20 transition-all duration-500 hover-lift",
        featured && "lg:col-span-2"
      )}
    >
      {/* Spotlight cursor follow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: spotlight }}
      />

      {/* Top accent line */}
      <div
        className={cn(
          "absolute top-0 inset-x-0 h-px opacity-60 group-hover:opacity-100 transition-opacity",
          a.line
        )}
      />

      <div className={cn("p-6 sm:p-8 flex flex-col gap-6", featured && "lg:p-10")}>
        {/* Index + accent */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Project {String(index + 1).padStart(2, "0")}
            </span>
            <span className={cn("size-1.5 rounded-full", a.line)} />
            <span className={cn("text-[10px] font-mono uppercase tracking-[0.18em]", a.chip)}>
              {project.accent}
            </span>
          </div>
          <div className="size-9 rounded-full border border-border bg-surface/40 flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-foreground/30 transition-all duration-300 group-hover:rotate-45">
            <ArrowUpRight className="size-4" />
          </div>
        </div>

        <h3 className={cn(
          "font-display tracking-display-tight text-balance",
          featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
        )}>
          {project.title}
        </h3>

        {/* P/S/I rows */}
        <dl className="grid sm:grid-cols-3 gap-5 sm:gap-6 text-sm">
          <div className="space-y-1.5">
            <dt className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              Problem
            </dt>
            <dd className="text-muted-foreground/90 leading-relaxed">{project.problem}</dd>
          </div>
          <div className="space-y-1.5">
            <dt className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              Solution
            </dt>
            <dd className="text-foreground/90 leading-relaxed">{project.solution}</dd>
          </div>
          <div className="space-y-1.5">
            <dt className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              Impact
            </dt>
            <dd className={cn("leading-relaxed font-medium", a.chip)}>
              {project.impact}
            </dd>
          </div>
        </dl>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[10.5px] font-mono uppercase tracking-wider px-2 py-1 rounded-md border border-border/60 bg-surface-2/40 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 scroll-mt-24">
      <GridBackground variant="grid" fade="radial" className="opacity-30" />
      <div className="container-wide relative">
        <SectionHeading
          number="04"
          eyebrow="Selected work"
          title={
            <>
              Real systems, <span className="italic-accent">production-grade</span>,
              shipped and supported.
            </>
          }
          description="Eight selected projects from the last few years — from EKS migrations to NFT-scale ticketing infrastructure and Terraform secure baselines."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
