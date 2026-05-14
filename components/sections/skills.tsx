"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { GridBackground } from "@/components/grid-background";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

const accentTextMap: Record<string, string> = {
  cyan: "text-cyan",
  emerald: "text-emerald",
  violet: "text-violet",
  amber: "text-amber",
};

const accentBgMap: Record<string, string> = {
  cyan: "hover:border-cyan/40 hover:text-cyan hover:bg-cyan/5",
  emerald: "hover:border-emerald/40 hover:text-emerald hover:bg-emerald/5",
  violet: "hover:border-violet/40 hover:text-violet hover:bg-violet/5",
  amber: "hover:border-amber/40 hover:text-amber hover:bg-amber/5",
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 scroll-mt-24">
      <GridBackground variant="grid-fine" fade="radial" className="opacity-40" />
      <div className="container-wide relative">
        <SectionHeading
          number="02"
          eyebrow="Skills"
          title={
            <>
              The toolchain behind <span className="italic-accent">every deploy</span>.
            </>
          }
          description="A practitioner's stack — built up over five years of running production workloads, migrations, and pipelines."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl glass card-shine p-6 hover-lift hover:border-foreground/20 transition-all"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface-2/60",
                        accentTextMap[group.accent]
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-display text-base font-medium tracking-tight">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, k) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.05 * k,
                        ease: "easeOut",
                      }}
                      className={cn(
                        "text-[11px] font-medium px-2.5 py-1 rounded-full border border-border bg-surface-2/40 text-muted-foreground transition-all duration-200 cursor-default",
                        accentBgMap[group.accent]
                      )}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
