"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, site } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button, LinkButton } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  // Close menu when clicking a link
  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "container-wide flex items-center justify-between rounded-full transition-all duration-500",
          scrolled
            ? "glass-strong border border-border/60 px-3 py-2 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]"
            : "px-4 py-2"
        )}
      >
        {/* Logo / mark */}
        <Link
          href="#hero"
          aria-label="Tharaka Dilshan"
          className="flex items-center gap-2.5 group"
        >
          <span className="relative flex items-center justify-center size-9 rounded-full bg-gradient-to-br from-cyan/20 via-surface to-violet/20 border border-border overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-br from-cyan/40 to-emerald/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="font-display text-sm font-medium tracking-tight relative z-10">
              {site.initials}
            </span>
          </span>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-sm font-medium tracking-tight">
              {site.name}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
              {site.role}
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-foreground/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA cluster */}
        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <LinkButton
            href={site.cv}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Download className="size-3.5" />
            CV
          </LinkButton>
          <LinkButton
            href="#contact"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Contact
          </LinkButton>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex size-10 items-center justify-center rounded-full glass border border-border"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden container-wide mt-2"
        >
          <div className="glass-strong rounded-3xl p-4 flex flex-col gap-1 border border-border">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="px-4 py-3 rounded-2xl text-foreground hover:bg-surface-2 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border mt-2">
              <ThemeToggle />
              <LinkButton
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={closeMenu}
              >
                <Download className="size-3.5" /> Download CV
              </LinkButton>
              <LinkButton
                href="#contact"
                variant="primary"
                size="sm"
                className="flex-1"
                onClick={closeMenu}
              >
                Contact
              </LinkButton>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
