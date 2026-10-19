import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PropertyRowProps = {
  label: string;
  align?: "center" | "start";
  className?: string;
  children: ReactNode;
};

export function PropertyRow({
  label,
  align = "center",
  className,
  children,
}: PropertyRowProps) {
  return (
    <div
      className={cn(
        "flex min-h-8 min-w-0",
        align === "start" ? "items-start" : "items-center",
        className,
      )}
    >
      <dt
        className={cn(
          "w-21 shrink-0 truncate pl-2 text-[10.5px] font-semibold uppercase tracking-[.09em] text-[var(--color-faint)]",
          align === "start" && "flex h-8 items-center",
        )}
      >
        {label}
      </dt>
      <dd
        className={cn(
          "m-0 flex min-w-0 flex-1 items-center text-[13.5px]",
          align === "start" && "py-px",
        )}
      >
        {children}
      </dd>
    </div>
  );
}
