"use client";

import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";

import { cn } from "@/lib/cn";

function CheckboxGroup({ className, ...props }: CheckboxGroupPrimitive.Props) {
  return (
    <CheckboxGroupPrimitive
      className={cn("flex flex-col items-start gap-2 text-[13px]", className)}
      {...props}
    />
  );
}

export { CheckboxGroup };
