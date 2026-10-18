import type { Loader2Icon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/cn";

// A 10 px shimmer bar. `size` (lucide: number | string, px) only picks the
// width: up to 16 -> 24 px, 24 and up -> 56 px, otherwise 40 px.
function widthClass(size: React.ComponentProps<typeof Loader2Icon>["size"]) {
  const n = Number(size);
  if (!size || Number.isNaN(n)) return "w-10";
  if (n <= 16) return "w-6";
  return n >= 24 ? "w-14" : "w-10";
}

export function Spinner({
  className,
  size,
  ...props
}: React.ComponentProps<typeof Loader2Icon>): React.ReactElement {
  const {
    color: _c,
    strokeWidth: _s,
    absoluteStrokeWidth: _a,
    ...rest
  } = props;
  return (
    <span
      aria-label="Loading"
      className={cn(
        "shimmer-line inline-block h-2.5 rounded-full",
        widthClass(size),
        className,
      )}
      role="status"
      {...(rest as React.ComponentProps<"span">)}
    />
  );
}
