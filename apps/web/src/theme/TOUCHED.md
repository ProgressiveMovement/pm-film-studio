# Files touched from upstream Kaneo (for cheap rebases)

- src/theme/tokens.css: Stage 2 token layer; Stage 3 polish: light `--scrim` .35, dark `--board-card-shadow` without inset highlight.
- src/theme/overrides.css: selector fixes: sidebar-inset hairline/no shadow, command-footer text colour, `[data-slot$="-backdrop"]` uses `--scrim`, `.border-destructive/20` (settings danger card) uses `--border`.
- src/theme/recipes.css: `@layer components` recipes (.glass, .glass-hero, .paper, .pillnav, .btn-light, .btn-ghost, .field, .row-hover, .shimmer-line, .pulse-dot, .u-reveal, .rise, .stagger, reduced-motion).
- src/components/ui/button.tsx: no press scale (active:brightness-[.98]), weights per size, disabled:opacity-50, pill 40px variants (default/outline/secondary/destructive/ghost restyled; keys unchanged).
- src/components/ui/card.tsx: `Card` gets `surface?: "glass" | "opaque"` (default glass recipe); sub-components unchanged.
- src/components/ui/dialog.tsx: opaque bg-card popup, 0.5px edge-strong, r25, p 24/36, 320ms ease-out entrance (translate-y 14, scale .985), 200ms exit, bottom sheet under 640px.
- src/components/ui/alert-dialog.tsx: same as dialog.
- src/components/ui/sheet.tsx: opaque r25 panel, 34rem wide, 12px inset, 44px round close with row-hover wash, 320ms/200ms motion, 13px description, side variants mirrored.
- src/components/ui/popover.tsx: popup gets `paper`, Kaneo border/bg/shadow/radius removed, 320 ms in / 200 ms out entrance (translateY 14px, scale .985).
- src/components/ui/menu.tsx: popup `paper`, items min-h-9 rounded-xl px-3.5 text-[13px], destructive text-destructive no fill, same entrance.
- src/components/ui/context-menu.tsx: content `paper`, items as menu, destructive no fill, same entrance.
- src/components/ui/select.tsx: popup `paper` (inner bordered panel dropped), items as menu, same entrance.
- src/components/ui/command.tsx: dialog popup `paper` max-w-xl, viewport top 12vh, input text-base, panel border/bg removed, items min-h-9 rounded-xl px-3.5, footer hairline kept.
