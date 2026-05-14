"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, Linkedin, MessageSquare } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";
import { GridBackground } from "@/components/grid-background";
import { site } from "@/data/site";

export function RecruiterCTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wide">
        <div className="relative rounded-3xl glass-strong overflow-hidden border border-border">
          <GridBackground variant="grid" fade="radial" className="opacity-60" />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 50% 0%, hsl(var(--cyan) / 0.18), transparent 70%), radial-gradient(ellipse 50% 50% at 90% 100%, hsl(var(--violet) / 0.12), transparent 70%)",
            }}
          />

          <div className="relative px-6 sm:px-12 py-14 sm:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 mb-7"
            >
              <span className="size-1.5 rounded-full bg-emerald pulse-dot" />
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                hiring for a senior?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl sm:text-4xl md:text-5xl tracking-display-tight max-w-3xl mx-auto text-balance leading-[1.05]"
            >
              Looking for a Senior DevOps Engineer who can{" "}
              <span className="italic-accent">own</span> cloud infrastructure and
              improve delivery speed?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              I'm open to Senior DevOps Engineer, Platform Engineer, Cloud Engineer,
              Lead DevOps, remote roles, international opportunities, and selected
              consulting projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <MagneticButton>
                <LinkButton
                  href={site.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="accent"
                  size="lg"
                >
                  <ArrowDownToLine className="size-4" />
                  Download CV
                </LinkButton>
              </MagneticButton>
              <MagneticButton>
                <LinkButton href="#contact" variant="primary" size="lg">
                  <MessageSquare className="size-4" />
                  Contact me
                </LinkButton>
              </MagneticButton>
              <LinkButton
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
              >
                <Linkedin className="size-4" />
                View LinkedIn
              </LinkButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
