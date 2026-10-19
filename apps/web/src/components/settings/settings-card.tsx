import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type SettingsCardProps = ComponentProps<"div"> & {
  tone?: "default" | "danger";
};

export function SettingsCard({
  tone = "default",
  className,
  ...props
}: SettingsCardProps) {
  return (
    <div
      data-tone={tone}
      className={cn(
        "divide-y divide-border overflow-hidden rounded-xl border border-border bg-card",
        className,
      )}
      {...props}
    />
  );
}
