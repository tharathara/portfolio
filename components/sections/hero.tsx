"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridBackground } from "@/components/grid-background";
import { MagneticButton } from "@/components/magnetic-button";
import { AnimatedArchitecture } from "@/components/animated-architecture";
import { site } from "@/data/site";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const HEADLINE = [
  { text: "I build", italic: false },
  { text: "secure,", italic: true },
  { text: "scalable, and", italic: false },
  { text: "automated", italic: true },
  { text: "cloud platforms.", italic: false },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] pt-32 pb-20 sm:pt-36 sm:pb-28 overflow-hidden"
    >
      {/* Background layers */}
      <GridBackground variant="grid" fade="radial" className="opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(var(--cyan) / 0.10), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 30%, hsl(var(--violet) / 0.07), transparent 70%)",
        }}
      />

      {/* Decorative corner marker */}
      <div className="absolute top-24 right-6 sm:right-12 hidden md:flex flex-col items-end gap-1.5 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground/60">
        <span>v2026 · prod</span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-emerald pulse-dot" />
          available
        </span>
      </div>

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial="hidden"
              animate="show"
              variants={reveal}
              custom={0}
            >
              <Badge variant="cyan" className="rounded-full">
                <span className="size-1.5 rounded-full bg-cyan pulse-dot" />
                <span className="font-mono uppercase tracking-[0.18em] text-[10px]">
                  Senior DevOps Engineer
                </span>
              </Badge>
            </motion.div>

            {/* Headline with word-by-word reveal */}
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.25rem)] leading-[0.98] tracking-display-tight text-balance">
              <span className="block">
                {HEADLINE.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + i * 0.09,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word.italic ? (
                      <span className="font-serif italic font-normal text-gradient-cyan">
                        {word.text}
                      </span>
                    ) : (
                      <span className="text-foreground">{word.text}</span>
                    )}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              variants={reveal}
              initial="hidden"
              animate="show"
              custom={8}
              className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              AWS-certified DevOps Engineer with{" "}
              <span className="text-foreground font-medium">5+ years</span> designing,
              automating, migrating, and optimizing production infrastructure across{" "}
              <span className="text-foreground font-medium">
                AWS, Kubernetes, CI/CD
              </span>
              , observability, secure cloud operations, and cost optimization.
            </motion.p>

            {/* Meta row */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="show"
              custom={9}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5" />
                {site.location}
              </span>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-cyan" />
                {site.available}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="show"
              custom={10}
              className="flex flex-wrap items-center gap-3"
            >
              <MagneticButton>
                <LinkButton href={site.cv} target="_blank" rel="noopener noreferrer" variant="accent" size="lg">
                  <ArrowDownToLine className="size-4" />
                  Download CV
                </LinkButton>
              </MagneticButton>
              <MagneticButton>
                <LinkButton href="#projects" variant="outline" size="lg">
                  View projects
                  <ArrowRight className="size-4" />
                </LinkButton>
              </MagneticButton>
              <LinkButton href="#contact" variant="ghost" size="lg" className="hidden sm:inline-flex">
                Contact me
              </LinkButton>
            </motion.div>

            {/* Tech float badges */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="show"
              custom={11}
              className="flex flex-wrap items-center gap-2 pt-2"
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground/60 mr-2">
                stack
              </span>
              {["AWS", "Kubernetes", "Terraform", "Docker", "Jenkins", "Argo CD", "Datadog"].map(
                (t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + i * 0.05, duration: 0.4 }}
                    className="text-xs font-mono px-2.5 py-1 rounded-full border border-border bg-surface/40 backdrop-blur-md text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-200"
                  >
                    {t}
                  </motion.span>
                )
              )}
            </motion.div>
          </div>

          {/* Right: animated architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[560px] mx-auto"
          >
            <AnimatedArchitecture />
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground/60"
      >
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
      </motion.div>
    </section>
  );
}
