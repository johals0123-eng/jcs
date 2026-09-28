import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  background?: "default" | "dark" | "navy";
}

export function Section({
  children,
  id,
  className,
  containerClassName,
  background = "default",
}: SectionProps) {
  const backgrounds = {
    default: "bg-zinc-950",
    dark: "bg-black",
    navy: "bg-[#07111f]",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 sm:py-24 lg:py-28",
        backgrounds[background],
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1400px]",
          "px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}