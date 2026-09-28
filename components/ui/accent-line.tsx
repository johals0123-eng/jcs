interface AccentLineProps {
  className?: string;
}

export function AccentLine({
  className = "",
}: AccentLineProps) {
  return (
    <span
      className={`block h-1 w-14 rounded-full bg-yellow-500 ${className}`}
    />
  );
}