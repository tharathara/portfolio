"use client";

import { motion } from "framer-motion";
import { recruiterCards } from "@/data/recruiter";
import { cn } from "@/lib/utils";

const accentRing: Record<string, string> = {
  cyan: "from-cyan/30 to-cyan/0 text-cyan",
  emerald: "from-emerald/30 to-emerald/0 text-emerald",
  violet: "from-violet/30 to-violet/0 text-violet",
  amber: "from-amber/30 to-amber/0 text-amber",
};

export function RecruiterSnapshot() {
  return (
    <section className="relative py-20 sm:py-28 -mt-8">
      <div className="container-wide">
        <div className="mb-8 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-cyan" />
          recruiter snapshot
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {recruiterCards.map((card, i) => {
            const Icon = card.icon;
            const a = card.accent ?? "cyan";
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl glass card-shine p-5 hover-lift hover:border-foreground/20 transition-all"
              >
                <div
                  aria-hidden
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                    "bg-gradient-to-br",
                    accentRing[a]
                  )}
                  style={{ maskImage: "linear-gradient(180deg, transparent 60%, black 100%)" }}
                />
                <div className="relative flex flex-col gap-3">
                  <div
                    className={cn(
                      "inline-flex size-9 items-center justify-center rounded-xl border border-border bg-surface-2/60",
                      accentRing[a].split(" ").pop()
                    )}
                  >
                    <Icon className="size-4" strokeWidth={1.7} />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                      {card.label}
                    </div>
                    <div className="font-display text-sm font-medium tracking-tight text-balance leading-snug">
                      {card.value}
                    </div>
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
