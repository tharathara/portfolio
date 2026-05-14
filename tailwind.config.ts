import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        "surface-2": "hsl(var(--surface-2))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        cyan: "hsl(var(--cyan))",
        emerald: "hsl(var(--emerald))",
        violet: "hsl(var(--violet))",
        amber: "hsl(var(--amber))",
        ring: "hsl(var(--ring))",
      },
      backgroundImage: {
        "grid-fade": "radial-gradient(ellipse at center, hsl(var(--background)) 0%, transparent 60%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      animation: {
        "shimmer": "shimmer 3s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "dash": "dash 3s linear infinite",
        "border-flow": "border-flow 6s linear infinite",
        "grid-drift": "grid-drift 30s linear infinite",
        "caret": "caret 1s steps(1) infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        dash: {
          to: { strokeDashoffset: "-20" },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "grid-drift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        caret: {
          "50%": { opacity: "0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px -10px hsl(var(--cyan) / 0.5)" },
          "100%": { boxShadow: "0 0 40px -5px hsl(var(--cyan) / 0.8)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
