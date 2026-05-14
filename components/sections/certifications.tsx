"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, FileText } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="container-wide">
        <SectionHeading
          number="05"
          eyebrow="Certifications & Education"
          title={
            <>
              Verified credentials, <span className="italic-accent">grounded</span>{" "}
              in practice.
            </>
          }
        />

        {/* Certifications */}
        <div className="mt-14">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="relative rounded-2xl glass card-shine p-6 hover-lift hover:border-foreground/20 transition-all"
                >
                  <div className="flex flex-col gap-4">
                    <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-cyan/10 to-violet/5 text-cyan">
                      <Icon className="size-5" strokeWidth={1.6} />
                    </div>
                    <div className="space-y-1">
                      <div className="font-display text-sm font-medium leading-snug text-balance">
                        {cert.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {cert.issuer}
                      </div>
                    </div>
                    {/* Holographic shimmer line */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/70">
                      <span>verified</span>
                      <span className="text-emerald">●</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education + Publication */}
        <div id="education" className="mt-16 grid lg:grid-cols-[1.4fr_1fr] gap-6 scroll-mt-24">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Education
            </h3>
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl glass card-shine p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2/60 text-cyan">
                    <GraduationCap className="size-5" strokeWidth={1.6} />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-base font-medium tracking-tight">
                      Sri Lanka Institute of Information Technology
                    </div>
                    <div className="text-sm text-muted-foreground mt-0.5">
                      B.Sc. Special (Hons) in Information Technology
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground/70 mt-3">
                      2016 — 2020
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl glass card-shine p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2/60 text-emerald">
                    <BookOpen className="size-5" strokeWidth={1.6} />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-base font-medium tracking-tight">
                      Dharmaraja College, Kandy
                    </div>
                    <div className="text-sm text-muted-foreground mt-0.5">
                      Mathematics
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground/70 mt-3">
                      2001 — 2014
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Publication */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Publication
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl glass card-shine p-6 h-full"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2/60 text-violet">
                  <FileText className="size-5" strokeWidth={1.6} />
                </div>
                <div className="space-y-3">
                  <div className="font-display text-base font-medium tracking-tight leading-snug text-balance">
                    Smartphone-Based Approach to Enhance Mindfulness Among
                    Undergraduates with Stress
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    An Android mobile application designed to reduce stress among
                    university students using mindfulness-based concepts.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
