import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

type Variant = "primary" | "outline" | "ghost";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 shadow-soft",
  outline:
    "border border-foreground/20 bg-white/40 text-foreground backdrop-blur hover:bg-white/70",
  ghost: "text-foreground hover:bg-nude",
};

export function CtaButton({
  children,
  href = WHATSAPP_URL,
  variant = "primary",
  className = "",
  icon,
  size = "md",
}: Props) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {icon ?? (
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      )}
    </motion.a>
  );
}
