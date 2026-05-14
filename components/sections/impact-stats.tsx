"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import { AnimatedCounter } from "@/components/animated-counter";
import { GridBackground } from "@/components/grid-background";

export function ImpactStats() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <GridBackground variant="grid-fine" fade="radial" className="opacity-50" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--cyan) / 0.08), transparent 70%)",
        }}
      />

      <div className="container-wide relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="h-px w-8 bg-border" />
            impact in numbers
            <span className="h-px w-8 bg-border" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-display-tight text-balance">
            Outcomes that move{" "}
            <span className="italic-accent">production</span> forward.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative group"
            >
              <div className="relative rounded-2xl glass card-shine p-6 sm:p-7 hover-lift hover:border-foreground/20 transition-all overflow-hidden">
                {/* Top index */}
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-none tracking-display-tight">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-snug">
                  {stat.label}
                </p>

                {/* Hover accent */}
                <div
                  aria-hidden
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
