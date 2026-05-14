import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://tharaka.sync95.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tharaka Dilshan — Senior DevOps Engineer",
    template: "%s — Tharaka Dilshan",
  },
  description:
    "AWS-certified Senior DevOps Engineer from Sri Lanka specializing in AWS, Kubernetes, Terraform, CI/CD, automation, observability, secure infrastructure, and cloud cost optimization.",
  keywords: [
    "Senior DevOps Engineer",
    "AWS DevOps Engineer",
    "Platform Engineer",
    "Cloud Engineer",
    "Kubernetes Engineer",
    "Terraform Engineer",
    "Remote DevOps Engineer",
    "DevOps Engineer Sri Lanka",
    "AWS Certified DevOps Engineer",
    "Cloud Infrastructure Engineer",
    "EKS Migration",
    "CI/CD",
    "Tharaka Dilshan",
  ],
  authors: [{ name: "Tharaka Dilshan" }],
  creator: "Tharaka Dilshan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Tharaka Dilshan",
    title: "Tharaka Dilshan — Senior DevOps Engineer",
    description:
      "AWS-certified Senior DevOps Engineer from Sri Lanka specializing in AWS, Kubernetes, Terraform, CI/CD, automation, observability, secure infrastructure, and cloud cost optimization.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharaka Dilshan — Senior DevOps Engineer",
    description:
      "AWS-certified Senior DevOps Engineer from Sri Lanka specializing in AWS, Kubernetes, Terraform, CI/CD, automation, observability, secure infrastructure, and cloud cost optimization.",
    creator: "@tharathara",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07080d" },
    { media: "(prefers-color-scheme: light)", color: "#fafbfc" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
