import { cn } from "@/lib/cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("shimmer-line h-2.5 rounded-full", className)}
      data-slot="skeleton"
      {...props}
    />
  );
}

export { Skeleton };
