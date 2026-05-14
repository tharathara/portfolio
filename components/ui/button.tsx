"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-background hover:bg-foreground/90 shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.5)] hover:shadow-[0_12px_40px_-8px_hsl(var(--foreground)/0.6)]",
        accent:
          "bg-gradient-to-br from-cyan to-emerald text-background hover:brightness-110 shadow-[0_8px_30px_-12px_hsl(var(--cyan)/0.7)] hover:shadow-[0_12px_40px_-8px_hsl(var(--cyan)/0.8)]",
        outline:
          "border border-border bg-surface/50 backdrop-blur-md text-foreground hover:bg-surface hover:border-foreground/30",
        ghost: "text-foreground hover:bg-surface-2",
        link: "text-cyan underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base [&_svg]:size-5",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Link variant – styled <a>
type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <a
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
LinkButton.displayName = "LinkButton";

export { Button, LinkButton, buttonVariants };
