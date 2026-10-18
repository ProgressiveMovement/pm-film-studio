"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { cn } from "@/lib/cn";

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      className={cn("flex flex-col gap-2", className)}
      data-slot="radio-group"
      {...props}
    />
  );
}

function Radio({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      className={cn(
        "relative inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-[var(--edge-strong)] bg-[var(--field-fill)] outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background aria-invalid:border-destructive data-checked:aria-invalid:border-destructive data-checked:border-primary data-disabled:opacity-50",
        className,
      )}
      data-slot="radio"
      {...props}
    >
      <RadioPrimitive.Indicator
        className="absolute inset-0 flex items-center justify-center rounded-full before:size-2 before:rounded-full before:bg-primary data-unchecked:hidden"
        data-slot="radio-indicator"
      />
    </RadioPrimitive.Root>
  );
}

export { Radio, Radio as RadioGroupItem, RadioGroup };
