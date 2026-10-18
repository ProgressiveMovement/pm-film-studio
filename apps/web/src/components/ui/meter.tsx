"use client";

import { Meter as MeterPrimitive } from "@base-ui/react/meter";

import { cn } from "@/lib/cn";

function Meter({ className, children, ...props }: MeterPrimitive.Root.Props) {
  return (
    <MeterPrimitive.Root
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    >
      {children ? (
        children
      ) : (
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      )}
    </MeterPrimitive.Root>
  );
}

function MeterLabel({ className, ...props }: MeterPrimitive.Label.Props) {
  return (
    <MeterPrimitive.Label
      className={cn(
        "font-medium text-[12.5px] text-muted-foreground",
        className,
      )}
      data-slot="meter-label"
      {...props}
    />
  );
}

function MeterTrack({ className, ...props }: MeterPrimitive.Track.Props) {
  return (
    <MeterPrimitive.Track
      className={cn(
        "block h-1.5 w-full overflow-hidden rounded-full bg-[var(--input)]",
        className,
      )}
      data-slot="meter-track"
      {...props}
    />
  );
}

function MeterIndicator({
  className,
  ...props
}: MeterPrimitive.Indicator.Props) {
  return (
    <MeterPrimitive.Indicator
      className={cn(
        "rounded-full bg-primary transition-[width] duration-300 ease-linear",
        className,
      )}
      data-slot="meter-indicator"
      {...props}
    />
  );
}

function MeterValue({ className, ...props }: MeterPrimitive.Value.Props) {
  return (
    <MeterPrimitive.Value
      className={cn(
        "text-[12.5px] text-muted-foreground tabular-nums",
        className,
      )}
      data-slot="meter-value"
      {...props}
    />
  );
}

export { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue };
