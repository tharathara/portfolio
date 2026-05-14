"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Github, Globe, Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";

const links = [
  {
    label: "Blog",
    url: site.social.blog,
    domain: "blog.sync95.net",
    description: "Notes, learnings, and DevOps experiments.",
    icon: BookOpen,
  },
  {
    label: "Portfolio",
    url: site.social.portfolio,
    domain: "tharaka.sync95.net",
    description: "Personal portfolio archive and projects.",
    icon: Globe,
  },
  {
    label: "GitHub",
    url: site.social.github,
    domain: "github.com/tharathara",
    description: "Open-source experiments and infra modules.",
    icon: Github,
  },
  {
    label: "LinkedIn",
    url: site.social.linkedin,
    domain: "linkedin.com/in/tharaka-dilshan-…",
    description: "Career timeline, recommendations, network.",
    icon: Linkedin,
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="container-wide">
        <SectionHeading
          number="06"
          eyebrow="Writing & Sharing"
          title={
            <>
              Technical notes, <span className="italic-accent">in public</span>.
            </>
          }
          description="I share technical notes, DevOps learnings, cloud engineering experiments, and practical guides through my blog and portfolio."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-4 sm:gap-5">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 2) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl glass card-shine p-6 sm:p-7 hover:border-foreground/20 transition-all hover-lift block"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface-2/60 text-cyan group-hover:border-cyan/40 transition-colors">
                      <Icon className="size-5" strokeWidth={1.6} />
                    </div>
                    <div>
                      <div className="font-display text-lg font-medium tracking-tight">
                        {link.label}
                      </div>
                      <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                        {link.domain}
                      </div>
                    </div>
                  </div>
                  <div className="size-9 rounded-full border border-border bg-surface/40 flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-foreground/30 transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-5">{link.description}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
