"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { GridBackground } from "@/components/grid-background";
import { services } from "@/data/services";

export function Services() {
  return (
    <section className="relative py-24 sm:py-32">
      <GridBackground variant="dots" fade="radial" className="opacity-40" />
      <div className="container-wide relative">
        <SectionHeading
          number="07"
          eyebrow="Services"
          title={
            <>
              How I can <span className="italic-accent">help</span>.
            </>
          }
          description="Whether you need a senior on the team or focused engineering for a specific outcome — here's where I can move the needle."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl glass card-shine p-6 hover-lift hover:border-foreground/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2/60 text-cyan group-hover:text-emerald group-hover:border-emerald/40 transition-colors duration-300">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </div>
                  <div className="space-y-1.5">
                    <div className="font-display text-base font-medium tracking-tight">
                      {service.title}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
