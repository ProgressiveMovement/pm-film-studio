"use client";

import { Dialog as CommandDialogPrimitive } from "@base-ui/react/dialog";
import { SearchIcon } from "lucide-react";
import type * as React from "react";
import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteSeparator,
} from "@/components/ui/autocomplete";
import { cn } from "@/lib/cn";

const CommandDialog = CommandDialogPrimitive.Root;

const CommandDialogPortal = CommandDialogPrimitive.Portal;

const CommandCreateHandle = CommandDialogPrimitive.createHandle;

function CommandDialogTrigger(props: CommandDialogPrimitive.Trigger.Props) {
  return (
    <CommandDialogPrimitive.Trigger
      data-slot="command-dialog-trigger"
      {...props}
    />
  );
}

function CommandDialogBackdrop({
  className,
  ...props
}: CommandDialogPrimitive.Backdrop.Props) {
  return (
    <CommandDialogPrimitive.Backdrop
      className={cn(
        "fixed inset-0 z-50 bg-black/32 backdrop-blur-sm transition-opacity duration-200 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0",
        className,
      )}
      data-slot="command-dialog-backdrop"
      {...props}
    />
  );
}

function CommandDialogViewport({
  className,
  ...props
}: CommandDialogPrimitive.Viewport.Props) {
  return (
    <CommandDialogPrimitive.Viewport
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center px-4 pt-[max(--spacing(4),4vh)] pb-4 sm:pt-[12vh]",
        className,
      )}
      data-slot="command-dialog-viewport"
      {...props}
    />
  );
}

function CommandDialogPopup({
  className,
  children,
  instant = false,
  ...props
}: CommandDialogPrimitive.Popup.Props & { instant?: boolean }) {
  return (
    <CommandDialogPortal>
      <CommandDialogBackdrop
        className={cn(
          instant &&
            "transition-none data-starting-style:opacity-100 data-ending-style:opacity-100",
        )}
      />
      <CommandDialogViewport>
        <CommandDialogPrimitive.Popup
          className={cn(
            "paper relative row-start-2 flex max-h-105 min-h-0 w-full min-w-0 max-w-xl flex-col text-popover-foreground outline-none transition-[scale,opacity,translate] will-change-transform duration-320 ease-(--ease-out) data-ending-style:duration-200 data-starting-style:scale-[.985] data-starting-style:translate-y-3.5 data-starting-style:opacity-0 data-ending-style:scale-[.985] data-ending-style:translate-y-3.5 data-ending-style:opacity-0 **:data-[slot=scroll-area-viewport]:data-has-overflow-y:pe-1",
            instant &&
              "transition-none data-starting-style:scale-100 data-starting-style:opacity-100 data-ending-style:scale-100 data-ending-style:opacity-100",
            className,
          )}
          data-slot="command-dialog-popup"
          {...props}
        >
          {children}
        </CommandDialogPrimitive.Popup>
      </CommandDialogViewport>
    </CommandDialogPortal>
  );
}

function Command({
  autoHighlight = "always",
  keepHighlight = true,
  ...props
}: React.ComponentProps<typeof Autocomplete>) {
  return (
    <Autocomplete
      autoHighlight={autoHighlight}
      inline
      keepHighlight={keepHighlight}
      open
      {...props}
    />
  );
}

function CommandInput({
  className,
  placeholder = undefined,
  ...props
}: React.ComponentProps<typeof AutocompleteInput>) {
  return (
    <div className="px-2.5 py-1.5">
      <AutocompleteInput
        autoFocus
        className={cn(
          "border-transparent! bg-transparent! shadow-none before:hidden has-focus-visible:ring-0 [&_input]:text-base",
          className,
        )}
        placeholder={placeholder}
        size="lg"
        startAddon={<SearchIcon />}
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteList>) {
  return (
    <AutocompleteList
      className={cn("not-empty:scroll-py-2 not-empty:p-2", className)}
      data-slot="command-list"
      {...props}
    />
  );
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteEmpty>) {
  return (
    <AutocompleteEmpty
      className={cn("not-empty:py-6", className)}
      data-slot="command-empty"
      {...props}
    />
  );
}

function CommandPanel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative min-h-0 **:data-[slot=scroll-area-scrollbar]:mt-2",
        className,
      )}
      {...props}
    />
  );
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteGroup>) {
  return (
    <AutocompleteGroup
      className={className}
      data-slot="command-group"
      {...props}
    />
  );
}

function CommandGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteGroupLabel>) {
  return (
    <AutocompleteGroupLabel
      className={className}
      data-slot="command-group-label"
      {...props}
    />
  );
}

function CommandCollection({
  ...props
}: React.ComponentProps<typeof AutocompleteCollection>) {
  return <AutocompleteCollection data-slot="command-collection" {...props} />;
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteItem>) {
  return (
    <AutocompleteItem
      className={cn("min-h-9 rounded-xl px-3.5 py-1.5 text-[13px]", className)}
      data-slot="command-item"
      {...props}
    />
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteSeparator>) {
  return (
    <AutocompleteSeparator
      className={cn("my-2", className)}
      data-slot="command-separator"
      {...props}
    />
  );
}

function CommandShortcut({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "ms-auto inline-flex shrink-0 items-center gap-1 font-medium font-sans text-muted-foreground/72 text-xs",
        className,
      )}
      data-slot="command-shortcut"
      {...props}
    />
  );
}

function CommandFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 border-t px-5 py-3 text-muted-foreground text-xs",
        className,
      )}
      data-slot="command-footer"
      {...props}
    />
  );
}

export {
  Command,
  CommandCollection,
  CommandCreateHandle,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandSeparator,
  CommandShortcut,
};
