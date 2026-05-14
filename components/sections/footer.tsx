"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Globe, BookOpen, MapPin } from "lucide-react";
import { site, nav } from "@/data/site";
import { GridBackground } from "@/components/grid-background";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border overflow-hidden">
      <GridBackground variant="grid-fine" fade="bottom" className="opacity-30" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 100%, hsl(var(--cyan) / 0.08), transparent 70%)",
        }}
      />

      <div className="container-wide relative pt-20 pb-10">
        {/* Big sign-off */}
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12 mb-16">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center size-12 rounded-full bg-gradient-to-br from-cyan/20 via-surface to-violet/20 border border-border">
                <span className="font-display text-base font-medium tracking-tight">
                  {site.initials}
                </span>
              </span>
              <div>
                <div className="font-display text-lg tracking-tight">
                  {site.name}
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  {site.role}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Building <span className="italic-accent">secure</span>,{" "}
              <span className="italic-accent">scalable</span>, and{" "}
              <span className="italic-accent">automated</span> cloud platforms — open
              to senior, remote, and consulting opportunities worldwide.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3" /> {site.location}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-cyan transition-colors"
                >
                  <Mail className="size-3.5" /> {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-cyan transition-colors"
                >
                  <Linkedin className="size-3.5" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-cyan transition-colors"
                >
                  <Github className="size-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.social.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-cyan transition-colors"
                >
                  <BookOpen className="size-3.5" /> Blog
                </a>
              </li>
              <li>
                <a
                  href={site.social.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-cyan transition-colors"
                >
                  <Globe className="size-3.5" /> Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Wordmark */}
        <div className="relative">
          <div
            aria-hidden
            className="font-display text-[clamp(3rem,18vw,16rem)] leading-none tracking-display-tight text-foreground/[0.04] select-none whitespace-nowrap text-center mask-fade-bottom"
          >
            TD · DevOps
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <span className="size-1.5 rounded-full bg-emerald pulse-dot" />
            <span className="uppercase tracking-[0.18em]">systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
