import type { NavItem } from "@/types";

export const site = {
  name: "Tharaka Dilshan",
  initials: "TD",
  role: "Senior DevOps Engineer",
  location: "Sri Lanka",
  available: "Open to remote & international roles",
  email: "tharakadilshan14@gmail.com",
  social: {
    blog: "https://blog.sync95.net",
    portfolio: "https://tharaka.sync95.net",
    github: "https://github.com/tharathara",
    linkedin: "https://linkedin.com/in/tharaka-dilshan-61963163",
  },
  cv: "/Tharaka-Dilshan-CV.pdf",
} as const;

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
