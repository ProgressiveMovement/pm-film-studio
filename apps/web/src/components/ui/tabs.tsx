"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

import { cn } from "@/lib/cn";

type TabsVariant = "default" | "underline";

function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      className={cn(
        "flex flex-col gap-2 data-[orientation=vertical]:flex-row",
        className,
      )}
      data-slot="tabs"
      {...props}
    />
  );
}

function TabsList({
  variant = "default",
  className,
  children,
  ...props
}: TabsPrimitive.List.Props & {
  variant?: TabsVariant;
}) {
  return (
    <TabsPrimitive.List
      className={cn(
        "relative z-0 flex w-fit items-center justify-center gap-x-0.5 text-muted-foreground",
        "data-[orientation=vertical]:flex-col",
        variant === "default"
          ? "glass pillnav rounded-full p-1"
          : "data-[orientation=vertical]:px-1 data-[orientation=horizontal]:py-1 *:data-[slot=tabs-tab]:hover:bg-accent",
        className,
      )}
      data-slot="tabs-list"
      data-variant={variant}
      {...props}
    >
      {children}
      <TabsPrimitive.Indicator
        className={cn(
          "-translate-y-(--active-tab-bottom) absolute bottom-0 left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) transition-[width,translate] duration-200 ease-in-out",
          variant === "underline"
            ? "data-[orientation=vertical]:-translate-x-px z-10 bg-primary data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5 data-[orientation=horizontal]:translate-y-px"
            : "-z-1 rounded-full bg-accent",
        )}
        data-slot="tab-indicator"
      />
    </TabsPrimitive.List>
  );
}

function TabsTab({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      className={cn(
        "[&_svg]:-mx-0.5 relative flex shrink-0 grow cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap border border-transparent font-medium outline-none transition-[color,background-color,box-shadow] hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring data-disabled:pointer-events-none data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-disabled:opacity-64 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        // default: pill on the glass capsule, the sliding Indicator paints the accent
        "in-data-[variant=default]:pillnav-item in-data-[variant=default]:min-h-9 in-data-[variant=default]:rounded-full in-data-[variant=default]:px-3.5 in-data-[variant=default]:text-[13px] in-data-[variant=default]:data-active:text-accent-foreground",
        // underline: as Kaneo had it
        "in-data-[variant=underline]:h-9 in-data-[variant=underline]:rounded-md in-data-[variant=underline]:px-[calc(--spacing(2.5)-1px)] in-data-[variant=underline]:text-base in-data-[variant=underline]:data-active:text-foreground sm:in-data-[variant=underline]:h-8 sm:in-data-[variant=underline]:text-sm',",
        className,
      )}
      data-slot="tabs-tab"
      {...props}
    />
  );
}

function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      className={cn("flex-1 outline-none", className)}
      data-slot="tabs-content"
      {...props}
    />
  );
}

export {
  Tabs,
  TabsList,
  TabsPanel,
  TabsPanel as TabsContent,
  TabsTab,
  TabsTab as TabsTrigger,
};
