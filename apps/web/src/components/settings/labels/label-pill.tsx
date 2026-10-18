import { LabelDot } from "@/components/settings/labels/label-dot";
import { cn } from "@/lib/cn";

type LabelPillProps = {
  name: string;
  color: string;
  className?: string;
};

export function LabelPill({ name, color, className }: LabelPillProps) {
  return (
    <span
      className={cn(
        "inline-flex h-5.5 min-w-0 max-w-full items-center gap-1.5 rounded-sm border border-input bg-[var(--field-fill)] px-2 font-medium text-foreground text-xs",
        className,
      )}
    >
      <LabelDot color={color} />
      <span className="truncate">{name}</span>
    </span>
  );
}
