import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;

  // Supported by existing pages
  arrow?: boolean;
  showArrow?: boolean;
  external?: boolean;

  // Native button props
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  arrow = false,
  showArrow = false,
  external = false,
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg shadow-yellow-500/10",

    secondary:
      "bg-white text-black hover:bg-zinc-200",

    outline:
      "border border-zinc-700 bg-transparent text-white hover:border-yellow-500 hover:text-yellow-400",

    ghost:
      "bg-transparent text-zinc-300 hover:bg-white/5 hover:text-white",
  };

  const sizes = {
    sm: "min-h-10 px-4 text-sm",
    md: "min-h-12 px-6 text-sm sm:text-base",
    lg: "min-h-14 px-7 text-base",
  };

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-md",
    "font-semibold transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  const shouldShowArrow = arrow || showArrow;

  const content = (
    <>
      {children}

      {shouldShowArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    const isExternal =
      external ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={
            external || href.startsWith("http")
              ? "_blank"
              : undefined
          }
          rel={
            external || href.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}