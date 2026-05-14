"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Globe,
  BookOpen,
  Send,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/grid-background";
import { site } from "@/data/site";

const channels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "tharaka-dilshan", href: site.social.linkedin },
  { icon: Github, label: "GitHub", value: "tharathara", href: site.social.github },
  { icon: BookOpen, label: "Blog", value: "blog.sync95.net", href: site.social.blog },
  { icon: Globe, label: "Portfolio", value: "tharaka.sync95.net", href: site.social.portfolio },
  { icon: MapPin, label: "Location", value: site.location, href: undefined },
];

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 scroll-mt-24">
      <GridBackground variant="dots" fade="radial" className="opacity-40" />
      <div className="container-wide relative">
        <SectionHeading
          number="08"
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="italic-accent">reliable</span>.
            </>
          }
          description="Drop a note, share a brief, or just say hello — I read every message."
          align="center"
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_1.3fr] gap-6 lg:gap-8">
          {/* Contact channels */}
          <div className="space-y-5">
            <div className="rounded-2xl glass card-shine p-6 sm:p-7">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5">
                Direct channels
              </h3>
              <ul className="space-y-1">
                {channels.map((c, i) => {
                  const Icon = c.icon;
                  const isLink = Boolean(c.href);
                  const isExternal = c.href?.startsWith("http") ?? false;
                  const inner = (
                    <>
                      <div className="inline-flex size-9 items-center justify-center rounded-xl border border-border bg-surface-2/60 text-cyan group-hover:border-cyan/40 transition-colors">
                        <Icon className="size-4" strokeWidth={1.7} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                          {c.label}
                        </div>
                        <div className="text-sm font-medium text-foreground group-hover:text-cyan transition-colors truncate">
                          {c.value}
                        </div>
                      </div>
                    </>
                  );
                  const sharedClass =
                    "group flex items-center gap-4 py-3 border-b border-border last:border-b-0";
                  return (
                    <motion.li
                      key={c.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      {isLink ? (
                        <a
                          href={c.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className={sharedClass}
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className={sharedClass}>{inner}</div>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-2xl glass card-shine p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="size-1.5 rounded-full bg-emerald pulse-dot" />
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-emerald">
                  Available
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Currently open to{" "}
                <span className="text-foreground font-medium">
                  Senior DevOps, Platform & Cloud Engineering
                </span>{" "}
                roles — remote, international, or selected consulting engagements.
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={onSubmit}
            className="relative rounded-2xl glass card-shine p-6 sm:p-8 space-y-5"
          >
            <div className="space-y-1.5">
              <h3 className="font-display text-2xl tracking-display-tight">
                Send a message
              </h3>
              <p className="text-sm text-muted-foreground">
                I'll respond within 24 hours on weekdays.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field id="name" label="Name" placeholder="Jane Doe" required />
              <Field id="email" label="Email" type="email" placeholder="jane@company.com" required />
            </div>
            <Field id="subject" label="Subject" placeholder="Senior DevOps role · Remote" />
            <Field
              id="message"
              label="Message"
              placeholder="Tell me about the project, role, or what you're trying to solve."
              as="textarea"
              required
            />

            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground/70">
                {submitted ? "delivered" : "encrypted in transit"}
              </div>
              <Button type="submit" variant="accent" size="default" className="min-w-[160px]">
                {submitted ? (
                  <>
                    <CheckCircle2 className="size-4" /> Sent
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> Send message
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
  as,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  as?: "textarea";
}) {
  const base =
    "w-full bg-surface-2/40 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:border-cyan/60 focus-visible:ring-2 focus-visible:ring-cyan/20 transition-colors";
  return (
    <label htmlFor={id} className="block space-y-2">
      <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
        {label}
        {required && <span className="text-cyan ml-1">*</span>}
      </span>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          required={required}
          placeholder={placeholder}
          className={base + " resize-none"}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}
