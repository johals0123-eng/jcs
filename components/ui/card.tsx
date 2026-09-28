import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10",
        "bg-white/[0.03] backdrop-blur-sm",

        hover &&
          "transition-all duration-500 hover:-translate-y-1 " +
          "hover:border-yellow-500/30 hover:bg-white/[0.05]",

        className
      )}
    >
      {children}
    </div>
  );
}