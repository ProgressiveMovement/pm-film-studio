"use client";

import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset";

import { cn } from "@/lib/cn";

function Fieldset({ className, ...props }: FieldsetPrimitive.Root.Props) {
  return (
    <FieldsetPrimitive.Root
      className={cn("flex w-full max-w-64 flex-col gap-3", className)}
      data-slot="fieldset"
      {...props}
    />
  );
}
function FieldsetLegend({
  className,
  ...props
}: FieldsetPrimitive.Legend.Props) {
  return (
    <FieldsetPrimitive.Legend
      className={cn(
        "font-medium text-[10.5px] text-[var(--color-faint)] uppercase tracking-[.09em]",
        className,
      )}
      data-slot="fieldset-legend"
      {...props}
    />
  );
}

export { Fieldset, FieldsetLegend };
