"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import { mergeProps } from "@base-ui/react/merge-props";
import type * as React from "react";

import { cn } from "@/lib/cn";

type TextareaProps = React.ComponentProps<"textarea"> & {
  size?: "sm" | "default" | "lg" | number;
  unstyled?: boolean;
};

function Textarea({
  className,
  size = "default",
  unstyled = false,
  ...props
}: TextareaProps) {
  return (
    <span
      className={
        cn(
          !unstyled &&
            "relative inline-flex w-full rounded-lg border border-[var(--edge-soft)] bg-[var(--field-fill)] text-sm text-foreground transition-colors has-focus-visible:border-[var(--edge-strong)] has-focus-visible:bg-[var(--field-fill-focus)] has-autofill:bg-foreground/4 has-disabled:opacity-64",
          className,
        ) || undefined
      }
      data-size={size}
      data-slot="textarea-control"
    >
      <FieldPrimitive.Control
        render={(defaultProps) => (
          <textarea
            className={cn(
              "field-sizing-content min-h-17.5 text-base sm:text-sm placeholder:text-[var(--color-faint)] w-full rounded-[inherit] px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1.5)-1px)] outline-none max-sm:min-h-20.5",
              size === "sm" &&
                "min-h-16.5 px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1)-1px)] max-sm:min-h-19.5",
              size === "lg" &&
                "min-h-18.5 py-[calc(--spacing(2)-1px)] max-sm:min-h-21.5",
            )}
            data-slot="textarea"
            {...mergeProps(defaultProps, props)}
          />
        )}
      />
    </span>
  );
}

export { Textarea, type TextareaProps };
