import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "yellow" | "dark" | "outline";
}

export function Badge({
  children,
  className,
  variant = "yellow",
}: BadgeProps) {
  const variants = {
    yellow:
      "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",

    dark:
      "border-white/10 bg-white/5 text-zinc-300",

    outline:
      "border-zinc-700 bg-transparent text-zinc-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1.5",
        "text-xs font-semibold uppercase tracking-[0.16em]",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}