"use client";

import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Workflow,
  ShieldCheck,
  Activity,
  Wallet,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { TerminalCard } from "@/components/terminal-card";
import { GridBackground } from "@/components/grid-background";

const highlights = [
  { icon: Server, label: "Production infrastructure ownership" },
  { icon: Cloud, label: "Cloud migrations" },
  { icon: Workflow, label: "DevOps automation" },
  { icon: ShieldCheck, label: "Secure architecture" },
  { icon: Activity, label: "Monitoring & reliability" },
  { icon: Wallet, label: "Cost optimization" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 scroll-mt-24">
      <GridBackground variant="dots" fade="radial" className="opacity-40" />
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left: copy */}
          <div className="space-y-10">
            <SectionHeading
              number="01"
              eyebrow="About"
              title={
                <>
                  Cloud platforms that{" "}
                  <span className="italic-accent">stay up</span>, scale calmly, and
                  cost less.
                </>
              }
            />

            <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
              >
                I'm an{" "}
                <span className="text-foreground font-medium">
                  AWS-certified Senior DevOps Engineer
                </span>{" "}
                from Sri Lanka with 5+ years of experience building, automating,
                securing, and optimizing cloud infrastructure across production AWS
                environments, Kubernetes migrations, CI/CD modernization, monitoring,
                incident response, and cost optimization.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I enjoy solving infrastructure problems, improving developer
                experience, reducing operational toil through automation, and
                building reliable cloud platforms that scale with the business.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-surface/40 backdrop-blur-md hover:border-foreground/20 transition-colors"
                  >
                    <Icon className="size-4 text-cyan" strokeWidth={1.7} />
                    <span className="text-sm text-foreground/90">{h.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan/20 via-transparent to-violet/20 blur-2xl opacity-50"
              />
              <TerminalCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
