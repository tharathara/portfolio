import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium tracking-wide transition-colors backdrop-blur-md",
  {
    variants: {
      variant: {
        default: "border-border bg-surface/60 text-foreground",
        muted: "border-border/60 bg-surface-2/40 text-muted-foreground",
        cyan: "border-cyan/30 bg-cyan/10 text-cyan",
        emerald: "border-emerald/30 bg-emerald/10 text-emerald",
        violet: "border-violet/30 bg-violet/10 text-violet",
        amber: "border-amber/30 bg-amber/10 text-amber",
        outline: "border-border bg-transparent text-muted-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
