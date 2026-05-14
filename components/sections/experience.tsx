"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

export function Experience() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="container-wide">
        <SectionHeading
          number="03"
          eyebrow="Experience"
          title={
            <>
              A timeline of <span className="italic-accent">shipped</span>{" "}
              infrastructure.
            </>
          }
          description="Five years across consumer platforms, fintech, ed-tech, and pet care — running production cloud across migrations, scale events, and zero-downtime cutovers."
        />

        <div ref={containerRef} className="relative mt-16">
          {/* Spine */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border" aria-hidden />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 sm:left-1/2 -translate-x-px top-0 w-px bg-gradient-to-b from-cyan via-emerald to-violet"
            aria-hidden
          />

          <ul className="space-y-12 sm:space-y-16">
            {experience.map((item, i) => {
              const side = i % 2 === 0 ? "left" : "right";
              return (
                <li
                  key={item.company}
                  className="relative grid sm:grid-cols-2 sm:gap-12"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="absolute left-4 sm:left-1/2 top-3 -translate-x-1/2 z-10"
                  >
                    <span className="relative flex">
                      <span className="size-3.5 rounded-full bg-background border border-foreground/40 shadow-[0_0_0_4px_hsl(var(--background))]" />
                      <span className="absolute inset-0 m-auto size-1.5 rounded-full bg-cyan" />
                      {item.current && (
                        <span className="absolute -inset-1 rounded-full border border-cyan/40 animate-ping" />
                      )}
                    </span>
                  </motion.div>

                  {/* Period (desktop) */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className={`hidden sm:flex flex-col items-end justify-start gap-2 pr-2 ${
                      side === "right" ? "sm:order-2 sm:items-start sm:pr-0 sm:pl-2" : ""
                    }`}
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {item.period}
                    </span>
                    <span className="text-xs text-muted-foreground/70 inline-flex items-center gap-1.5">
                      <MapPin className="size-3" />
                      {item.location}
                    </span>
                    {item.current && (
                      <Badge variant="emerald" className="text-[10px]">
                        <span className="size-1 rounded-full bg-emerald" />
                        Current
                      </Badge>
                    )}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`pl-12 sm:pl-0 ${side === "right" ? "sm:order-1" : ""}`}
                  >
                    <div className="relative rounded-2xl glass card-shine p-6 sm:p-7 hover:border-foreground/20 transition-all">
                      {/* Mobile period */}
                      <div className="sm:hidden mb-3 flex items-center gap-3 flex-wrap">
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          {item.period}
                        </span>
                        {item.current && (
                          <Badge variant="emerald" className="text-[10px]">
                            <span className="size-1 rounded-full bg-emerald" />
                            Current
                          </Badge>
                        )}
                      </div>

                      <h3 className="font-display text-xl tracking-tight font-medium">
                        {item.role}
                      </h3>
                      <div className="text-sm text-cyan font-medium mt-0.5">
                        {item.company}
                      </div>

                      <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                        {item.highlights.map((h) => (
                          <li key={h} className="flex gap-2.5">
                            <ChevronRight className="size-3.5 mt-1 shrink-0 text-cyan" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {item.stack && item.stack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-border">
                          {item.stack.map((s) => (
                            <span
                              key={s}
                              className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-border/60 text-muted-foreground"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
