"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

import { cn } from "@/lib/cn";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "relative inline-flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-[var(--edge-strong)] bg-[var(--field-fill)] outline-none ring-ring transition-shadow focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background aria-invalid:border-destructive data-checked:aria-invalid:border-destructive data-checked:border-transparent data-indeterminate:border-transparent data-disabled:opacity-50",
        className,
      )}
      data-slot="checkbox"
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className="-inset-px absolute flex items-center justify-center rounded-[4px] text-primary-foreground transition-[opacity,scale] duration-150 ease-out data-unchecked:pointer-events-none data-unchecked:scale-90 data-unchecked:opacity-0 data-checked:bg-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground motion-reduce:transition-[opacity] motion-reduce:data-unchecked:scale-100"
        keepMounted
        data-slot="checkbox-indicator"
        render={(props, state) => (
          <span {...props}>
            {state.indeterminate ? (
              <svg
                aria-hidden="true"
                className="size-3"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.252 12h13.496" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="size-3"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
              </svg>
            )}
          </span>
        )}
      />
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
