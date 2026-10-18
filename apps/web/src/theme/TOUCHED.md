# Files touched from upstream Kaneo (for cheap rebases)

- src/theme/tokens.css: Stage 2 token layer; Stage 3 polish: light `--scrim` .35, dark `--board-card-shadow` without inset highlight.
- src/theme/overrides.css: selector fixes: sidebar-inset hairline/no shadow, command-footer text colour, `[data-slot$="-backdrop"]` uses `--scrim`, `.border-destructive/20` (settings danger card) uses `--border`.
- src/theme/recipes.css: `@layer components` recipes (.glass, .glass-hero, .paper, .pillnav, .btn-light, .btn-ghost, .field, .row-hover, .shimmer-line, .pulse-dot, .u-reveal, .rise, .stagger, reduced-motion).
- src/components/ui/button.tsx: no press scale (active:brightness-[.98]), weights per size, disabled:opacity-50, pill 40px variants (default/outline/secondary/destructive/ghost restyled; keys unchanged).
- src/components/ui/card.tsx: `Card` gets `surface?: "glass" | "opaque"` (default glass recipe); sub-components unchanged.
