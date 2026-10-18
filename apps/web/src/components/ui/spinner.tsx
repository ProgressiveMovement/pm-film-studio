import type { Loader2Icon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/cn";

// `size` and the rest of the icon props are accepted so call sites compile; the
// spinner is a 10 px shimmer bar and ignores them.
export function Spinner({
  className,
  size: _size,
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
        "shimmer-line inline-block h-2.5 w-10 rounded-full",
        className,
      )}
      role="status"
      {...(rest as React.ComponentProps<"span">)}
    />
  );
}
