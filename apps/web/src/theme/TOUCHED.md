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
- src/components/ui/input.tsx: wrapper restyled to the .field look (edge-soft border, field fill, 14 px text, faint placeholder, edge-strong + stronger fill on focus); no red border or ring for invalid.
- src/components/ui/textarea.tsx: same wrapper as input, textarea text-sm with faint placeholder.
- src/components/ui/number-field.tsx: group restyled to the .field look (focus-within edge-strong), input placeholder faint; invalid styles removed.
- src/components/ui/combobox.tsx: chips container and chips input restyled to the .field look (combobox input itself inherits from input.tsx); invalid styles removed.
- src/components/ui/autocomplete.tsx: no change needed, its input renders input.tsx.
- src/components/ui/field.tsx: FieldError is now text-[12.5px] text-destructive.
- src/components/ui/badge.tsx: all variants hairline pill (rounded-full, chip vars); destructive text only; status variants keep tint
- src/components/task-chips/task-chip-class.ts: shared chip class is now the hairline pill (11px, chip vars, hover/open states)
- src/components/task-chips/label-chips.tsx: label colour via --label-c; text and 40% border from it, transparent fill, bg-current dot
- src/components/task-chips/due-date-chip.tsx: overdue/soon/done as text colour only (destructive/warning/success foreground)
- src/components/task-chips/checklist-chip.tsx: no-hover override uses chip var border
- src/components/task-chips/priority-chip.tsx: unchanged in source (inherits taskChipClass)
- src/components/task-chips/subtasks-chip.tsx: unchanged in source (inherits taskChipClass)
- src/components/task-chips/assignee-button.tsx: unchanged (avatar ring already on chip vars)
- src/components/ui/sidebar.tsx: width 15.5rem, inner border-r, group label and menu button restyle, paper on mobile popup
- src/components/app-sidebar.tsx: glowing 7px dot beside the workspace switcher
- src/components/nav-main.tsx: item height class min-h-9
- src/components/nav-projects.tsx: 6px dot instead of project icon, min-h-9, faint uppercase group label
- src/components/nav-secondary.tsx: item height class min-h-9
- src/theme/shiki-studio.json: new, themes "studio" (dark) and "studio-light" keyed in one file; ink/muted/faint only, keywords and storage bold
- src/lib/shiki-highlighter.ts: registers the two studio themes instead of github-dark/github-light
- src/components/task/extensions/shiki-code-block.ts: default themeDark "studio", themeLight "studio-light" (Kaneo switches by html.dark class, kept)
- src/components/task/extensions/mermaid-block.ts: theme "base" with themeVariables from tokens, Helvetica Neue; dark/light still chosen per render by isDarkTheme() and cache key
- src/theme/overrides.css: svg.lucide stroke-width 1.6 (3f).
# Touched in 3b.8 to 3b.11
- components/ui/toast.tsx: paper strip, 13.5px, bottom centre forced, 2.5s timeout, ok/bad text colour, no icon (close button never existed).
- components/ui/skeleton.tsx: shimmer-line h-2.5 rounded-full on transparent fill.
- components/ui/spinner.tsx: 10px shimmer bar (w-10 h-2.5), props kept, size ignored.
- components/ui/loading-skeleton.tsx: composes Skeleton bars with gaps.
- components/ui/avatar.tsx: size-6, bg-accent, 10px semibold accent-foreground, root and fallback.
- components/ui/tabs.tsx: default list is glass pillnav capsule, pillnav-item triggers, accent indicator; underline variant unchanged.
- components/ui/toggle-group.tsx: group is glass pillnav capsule; items pillnav-item, data-pressed accent.
- hooks/mutations/billing/use-billing-actions.ts: sonner replaced by "@/lib/toast".
- src/components/kanban-board/task-card/task-card-content.tsx: glass card, board tokens, 14px 600 title, mono id, done opacity-50, avatar ml-auto, shadow-[ removed
- src/components/kanban-board/column/index.tsx: lane transparent, hairline on image background, dark: and shadow removed
- src/components/kanban-board/column/column-header.tsx: 13px muted header, 12.5px faint count
- src/components/list-view/index.tsx: transparent list background
- src/components/list-view/list-column-section.tsx: hairline separators, transparent section header
- src/components/list-view/task-row.tsx: row-hover, hairline separators, token focus ring
- src/components/list-view/task-row-body.tsx: id and title typography as cards
- src/components/task/properties/properties-rail.tsx: metadata block is a dl
- src/components/task/properties/property-row.tsx: dt 10.5px uppercase faint labels, dd 13.5px values
- src/components/task/task-subtasks.tsx: checklist as inner hairline card
- src/components/task/task-description.tsx: 14px / 1.625 muted description
- src/components/task/task-activity.tsx: muted section heading
- src/components/task/task-details-content.tsx: faint context line, hairline rule
- src/components/task/task-title.tsx: 20px title
- src/components/task/task-pull-requests/pull-request-status-icon.tsx: dark: variant removed
# Stage 3d colour sweep
Rule: KANEO_STACK D10 (monochrome, signal colours as text/edge only).
- components/team/members-table.tsx: AVATAR_TONES (rose, amber, sky, emerald, violet, indigo tinted pairs) replaced by `bg-accent text-accent-foreground`, `bg-muted text-foreground`, `bg-primary text-primary-foreground`.
- components/calendar/calendar-task-bar.tsx: STATUS_CLASSES blue/amber/emerald fills and borders (and the slate to-do) replaced by `bg-accent`, `border-[var(--border)]`, hover `bg-muted`, plus a 2 px inset left edge (`shadow-[inset_2px_0_0_...]`): `--primary` for to-do, in-progress and the fallback, `--warning` for in-review, `--success` for done. Segments that continue from a previous week drop the edge (`shadow-none`).
- components/onboarding/preview/preview-avatars.tsx: invitedColors (violet, cyan, emerald, amber, rose 700) replaced by the three monochrome tone pairs; removed the hardcoded `text-white` so the pair's text colour applies.
- components/settings/notifications/channels/channels-section.tsx: Gotify icon `text-blue-500` to `text-muted-foreground`; ntfy icon `text-green-600` to `text-success-foreground`.
Not touched: components/task/**, constants/label-colors.ts, integration logos.
# Stage 3c2 leftovers
- components/activity/comment-input.tsx: composer wrapped in `border-t border-[var(--border)] pt-3`, row `flex items-start gap-2.5`: user Avatar (24 px default, initials fallback), the existing bordered editor box (`flex-1`, attach button kept inside it), and a `<Button size="sm">` default (white pill) labelled Post (`activity:comment.post`, defaultValue "Post"; the key is not in i18n/*.json yet) with the existing tooltip. Handlers, props and editor wiring unchanged; the icon-only ArrowUp submit and its opacity/bg overrides are gone.
- components/task/task-pull-requests/pull-request-status-icon.tsx: merged `text-violet-600` to `text-success-foreground`. Draft, open and closed already used tokens (draft muted, open success, closed destructive); left as is. Text colour only, no fill.
- i18n/en/activity.json: comment.post key (Post) for the composer button.
- src/components/calendar/calendar-task-bar.test.tsx: status colour assertions follow the 3d sweep (signal edge instead of tinted fill).
- src/components/editor/extensions.ts: shiki themes studio / studio-light (the shared editor named the removed github themes).
- src/components/ui/dialog.tsx, sheet.tsx: header sm:px-9 sm:pt-9 so the panel's pb-3 wins at 640px and up.
- src/theme/overrides.css: focus ring (2 px --ring) on input, textarea, number field and combobox chips wrappers.
- apps/web/nginx.kaneo.conf: Cache-Control map (no-cache for index.html and fallback, immutable for /assets/).
# Touched in p2
- components/ui/select.tsx: scroll-arrow fade starts from var(--paper-fill)
- components/ui/popover.tsx: tooltipStyle uses paper-sm, otherwise paper
- components/ui/sidebar.tsx: --sidebar-width (15.5rem) now set after caller style
- components/kanban-board/task-card/task-card-content.tsx: rounded-2xl removed, glass radius applies
- theme/recipes.css: added .paper-sm
- Open: common/layout.tsx and settings/settings-shell.tsx pass --sidebar-width: spacing*60 (240px); remove those to let the default apply.
- src/components/common/layout.tsx, settings/settings-shell.tsx: dead --sidebar-width overrides removed (provider default 15.5 rem wins).
- src/components/ui/input.tsx: inner input text-base sm:text-sm (iOS zoom).
- src/components/ui/textarea.tsx: inner textarea text-base sm:text-sm (iOS zoom).
- src/components/ui/number-field.tsx: inner input text-base sm:text-sm (iOS zoom).
- src/components/ui/combobox.tsx: chips input text-base sm:text-sm (iOS zoom).
- src/components/ui/toast.tsx: per-tone timeouts via toastManager.add (error 6000, loading 0, rest 2500); renders data.icon again.
- src/components/ui/tabs.tsx: pill classes scoped to default variant (data-variant on list), no active fill; underline restored to Kaneo classes.
# P3 task detail drawer (C2)
- components/task/task-details-sheet.tsx: already a Sheet; dropped the 4xl width overrides and `[&>button]:hidden` so the Sheet's own 34 rem popup and its 44 px round close button apply (below 640 px the Sheet's max-w rule gives near full width). Two-column layout removed: one scrolling column, content then the PropertiesRail inside the `properties` slot (after the title), as a two-column dl from sm up, then description, subtasks, activity and composer. PropertyChips no longer mounted here (file kept). initialFocus now targets the popup (was the removed header close button). URL wiring, shortcuts, delete dialog and open-full-page unchanged.
- components/task/header/task-sheet-header.tsx: own close button, `onClose` and `closeButtonRef` props removed; header 72 px with `pr-16` clearing the Sheet's close button; project name 12 px faint.
- Not done: no bottom-sheet switch on mobile (no useIsMobile outside ui/sidebar, which is off limits); the mobile drawer stays a right panel `calc(100vw - 1.5rem)` wide.
- # TOUCHED b3 (CI hygiene)
- Files changed outside apps/web, listed here so upstream merges are checked against them:
- `.github/workflows/studio-image.yml`: added a smoke test before the push. Builds `Dockerfile.kaneo` into the local daemon as `studio-smoke:local` (load, no push), starts `postgres:16-alpine` plus the image on a throwaway docker network, waits up to 90 s for `/api/health` on port 5173, prints the last 50 log lines and fails on timeout. The existing build-and-push step then runs from the shared gha cache scope `studio`. No new actions; existing SHA pins, permissions and concurrency unchanged.
- `.github/dependabot.yml`: upstream's file exists (npm weekly, github-actions weekly). Upstream entries are untouched; one entry appended: `github-actions`, directory `/`, target branch `theme/studio`, monthly, label `ci`.
- Merge note: on an upstream merge, keep upstream's entries and ours side by side. The label `ci` must exist in the repo or Dependabot skips it with a warning.
# TOUCHED b2
- components/ui/spinner.tsx: width follows `size` (<=16 -> 24 px, >=24 -> 56 px, else 40 px), height stays 10 px.
- components/ui/button.tsx: loading indicator only, `absolute inset-0 m-auto w-6 max-w-full` (centred, 24 px, no overflow).
- components/ui/skeleton.tsx: unchanged; `cn` is twMerge, so caller h-/size-/rounded- win over h-2.5 rounded-full. `.shimmer-line` is in the components layer, below utilities.
- components/ui/loading-skeleton.tsx: avatars `size-6 rounded-full`, icon block `size-16 rounded-2xl`.
- components/task-chips/label-chips.tsx: light text is color-mix 70% label + foreground, dark keeps raw colour; border 40% raw, dot raw.
# B1
- ui/sheet.tsx: unchanged. The Sheet's own close is already `size-11 rounded-full hover:bg-[var(--row-hover)]`; task-sheet-header.tsx has no close button (only `pr-16` to clear it). Single close, 44 px.
- hooks/use-is-mobile.ts (new): `useIsPhone`, matchMedia `(max-width: 639px)` via useSyncExternalStore, SSR snapshot false. Separate from hooks/use-mobile.ts (`useIsMobile`, 768 px, used by the sidebar).
- task/task-details-sheet.tsx: `side={isPhone ? "bottom" : "right"}`, popup gets `max-h-[90vh]`; the content wrapper already scrolls (`min-h-0 flex-1 overflow-y-auto`).
- index.html: title, meta title/description, og and twitter title/description, application-name and apple title now say Studio. Kept og:image, urls, canonical, keywords, manifest.
- Not done: PageTitle (components/page-title.tsx) still defaults `suffix = "Kaneo"` at runtime; not an i18n key.
- src/components/page-title.tsx: title suffix Studio.
- src/components/ui/sheet.tsx: close keeps 44 px at sm and up (sm:size-11 beats the icon variant's sm:size-8).
# Stage 4b touched files
- components/ui/empty.tsx: Empty is now `.glass`, px-5 py-7, centred 14px muted; media icon is a plain 16px muted icon (stacked-card illustration removed); title 14px foreground, description 13px muted.
- components/home/home-projects.tsx, activity-feed.tsx, up-next.tsx, components/inbox/inbox-list.tsx: hand-rolled empty states now glass boxes; the one action is the default pill button.
- components/common/project-unavailable.tsx: action uses default pill (outline variant dropped).
- components/onboarding/preview/preview-column.tsx, preview-skeleton-column.tsx, preview-task-card.tsx: glass columns, hairline rows (--edge-soft 0.5px, --field-fill).
- Reported, not changed: create-workspace-modal.tsx has no hard-coded strings, but i18n key `common:modals.createWorkspace.breadcrumbKaneo` carries Kaneo wording; its inputs are `unstyled` (large title style), not `.field`.
# Stage 4c: settings pages (components/settings only)
- settings-card.tsx: opaque card, `rounded-[25px] border border-[var(--edge-soft)] bg-card`, no glass, no shadow. Danger tone keeps its red text (set by children) and now uses the same neutral border; `border-destructive/20` removed and `data-tone={tone}` added. The `.border-destructive\/20` rule in theme/overrides.css is therefore no longer needed and can be deleted (left in place, not in my scope).
- nav/settings-nav-group.tsx, settings-nav-projects.tsx, settings-nav-project.tsx, settings-sidebar-header.tsx: items `min-h-9 rounded-xl px-3.5 text-[13px] font-medium`, active `bg-sidebar-accent text-sidebar-accent-foreground`, group labels `text-[10.5px] uppercase tracking-[.09em] text-[var(--color-faint)] font-semibold`.
- preferences/default-view-row.tsx, labels/label-pill.tsx, api-keys/api-key-expiry-toggle.tsx: `bg-background ... dark:bg-input/32` replaced by `bg-[var(--field-fill)]` (token switches by theme).
- notifications/workspaces/workspace-rule-projects.tsx: `dark:data-pressed:bg-input` dropped, `data-pressed:bg-input` for both themes.
- Not changed: settings-shell.tsx (its `shadow-sm/5` is a utility, not an arbitrary value; inset frame left as is), integrations brand logos.
- src/theme/overrides.css: danger-card override removed (SettingsCard carries data-tone and a neutral border itself).
# Stage 4a, auth pages
- components/auth/auth-page.tsx: shared shell for login, forgot/reset, check-email, invite accept. Favicon image replaced by `AuthWordmark` (7px glow dot + "Studio"); content sits in `<Card surface="opaque">`, max-w-sm.
- components/auth/layout.tsx: unused AuthLayout; Logo replaced by `AuthWordmark`, Card opaque.
- routes/auth/sign-up.tsx: closed message + link to sign-in unless an invitation or first-admin setup; registrationDisabledAlert branch removed.
- routes/auth/captcha-flow.test.tsx: sign-up cases run with an invitationId; closed-message test added.
- i18n wanted: "Sign-up is closed on this Studio. Ask Julian for an invitation." is hard-coded in sign-up.tsx (key e.g. auth:signUp.closed).
- i18n/en-US.json: auth.signUp.closed.
- src/components/settings/nav/settings-nav-group.tsx: data-[active=true] (presence variant lit every item). routes/auth/sign-up.tsx: closed branch waits for the instance-status query. components/auth/auth-page.tsx: dot aria-hidden, name from common:appName. components/import/import-not-allowed.tsx: no card classes on the glass Empty. i18n/en-US.json: signUp.closed wording, billing.disabled neutral.
- public/favicon.ico, favicon.svg, favicon-96x96.png, apple-touch-icon.png, web-app-manifest-192x192.png, web-app-manifest-512x512.png: PM mark on #0d0d0d, generated from Logo PM Film Production/SVG/PM_weiß.svg (mark at 70 percent of the square).
- public/logo-dark.svg (ink mark for the light theme), public/logo-light.svg (white mark for the dark theme): the PM mark; components/common/logo.tsx alt Studio.
- apps/web/nginx.kaneo.conf: application/manifest+json for .webmanifest.

## Completion pass, 18 October 2026 (after Stage 4)


Classes `rise` (page root) and `stagger` (children settle in 40 ms steps) from theme/recipes.css.
Applied on each route's root element only, so it mounts once per navigation and does not replay on refetch.

routes/_layout/_authenticated/dashboard/workspace/$workspaceId/
- index.tsx (home): `rise` on the scroll root, `stagger` on the content column (greeting header, week strip, truncation note, up next / projects / activity grid)
- my-tasks.tsx: `rise` on the scroll root
- inbox.tsx: `rise` on the two-pane root
- project/$projectId/board.tsx (board and list view): `rise` on the view root
- project/$projectId/backlog.tsx: `rise` on the view root
- project/$projectId/calendar.tsx: `rise` on the calendar root

Not done:
- Board lane stagger: the lane wrapper container lives in components/kanban-board/index.tsx (not column/index.tsx), which was out of scope. To add it, put `stagger` on its `flex h-full min-w-max gap-4` div.
- Settings pages: roots are components/settings/* (out of scope); settings.tsx wraps SettingsShell.
- Up next / projects / activity are inside one grid child, so they settle with the grid, not individually.


Restyled in apps/web/src/components/ui, props, exports and data-slots unchanged:

- table.tsx: hairline `--border` row separators, `row-hover`, header cells 12px uppercase tracking .06em `--color-faint` on `--field-fill`, cells `px-2.5 py-2`, selected row `--accent`, no zebra.
- breadcrumb.tsx: 12.5px `--color-faint`, current page `--foreground`, faint 14px chevron, focus ring on links.
- kbd.tsx: 11px hairline chip (`--chip-border`, `--field-fill`, `--chip-foreground`), `rounded-md px-1.5`.
- switch.tsx: track 36x20, thumb 16px `bg-background`, `--input` off, `bg-primary` on, disabled 50.
- checkbox.tsx: 16px, `--edge-strong` border, 4px radius, checked and indeterminate `bg-primary text-primary-foreground`.
- checkbox-group.tsx: gap 8px, 13px text.
- radio-group.tsx: 16px, `--edge-strong` border, dot `bg-primary`, gap 8px.
- slider.tsx: 4px `--input` track, `--primary` range, 16px `bg-primary` thumb, 2px `--ring` focus ring.
- progress.tsx, meter.tsx: 6px `--input` track, rounded-full `--primary` fill, label and value 12.5px muted.
- circular-progress.tsx: `--input` track, `--primary` stroke (also when complete), stroke width 2.


Files: pagination, accordion, alert, scroll-area, separator, toggle, input-otp,
frame, timeline, collapsible, fieldset, group, input-group, label, menubar,
preview-card. Props, variants, data-slots and exports unchanged.

- pagination: own pill-nav classes replace buttonVariants (type import of Button kept for `size`); active `bg-accent`.
- accordion: 13.5px triggers, `border-border` separators, 300ms `--ease-out` chevron and panel.
- alert: opaque `bg-card` rounded-2xl p-4; tone only in title and icon text colour.
- scroll-area: thumb `--color-faint`/40, ring 2px.
- separator: unchanged (already 1px `bg-border`).
- toggle: pill, pressed `bg-accent`, outline variant uses edge-soft and field fill.
- input-otp: 40x44 slots, field recipe, active slot edge-strong, tabular 16px.
- frame: opaque card, 25px outer and 16px inner radius.
- timeline: 8px faint dots, `border` line, 12px faint dates, 13.5px items.
- collapsible: no change (no palette colours present).
- fieldset: gap 12px, legend 10.5px uppercase `--color-faint`.
- group: gap 12px, text addon on field fill, `dark:` variants removed, separator `bg-border`.
- input-group: field recipe, `dark:` variants and shadows removed, focus edge-strong, disabled 50.
- label: 13px medium.
- menubar: bar is `paper-sm`; popups and items already come from menu.tsx.
- preview-card: `paper` popup (16px radius), p-3.


Files: components/calendar/{calendar-toolbar,day-overflow-popover,month-agenda,month-grid}.tsx, components/gantt/gantt-task-bar.tsx.
- Toolbar: month label 17px; prev/next/today stay Button outline (ghost pill). No view switcher exists in this file, so no glass pill nav was added.
- Month grid: hairline var(--border) separators, no weekend fill, today = 2px primary top edge, weekday headers 11px uppercase tracking-[.09em] faint, day numbers 12.5px tabular, out-of-month faint at 60%.
- Agenda: faint 10.5px uppercase date labels, 13.5px titles, hairline rows.
- Overflow popover: 36px rounded-xl row-hover items, 13px.
- Gantt bar: bg-accent, 2px primary left edge, 12.5px, hover edge-strong, done = opacity-50. No selected or milestone state exists in the bar.
- NOT touched: gantt chart/grid/today line live in routes/.../project/$projectId/gantt.tsx (route file, other agent).


- components/common/mobile-tab-bar.tsx (new): `MobileTabBar`, glass pillnav, phone only (useIsPhone, < 640 px).
- components/common/layout.tsx: mounts the bar after SidebarInset; SidebarInset gets `max-sm:pb-24`.
- components/common/mobile-tab-bar.test.tsx (new): one render test.

Notes
- Entries: Home, My tasks, Calendar (only while a project is open, the calendar is per project), Inbox (bg-success dot when a notification is unread), round New task button (hidden without create-task permission).
- New task dispatches the "c" keydown on document, the same path as the shortcut; the command palette's createTask handler opens the modal.
- Label key `navigation:sidebar.calendar` may not exist yet; it falls back to "Calendar".

- apps/web/src/theme/prose.css: TipTap and ProseMirror rules (type scale, paper menus, tables, code, quotes), wins on specificity over Kaneo's editor block.
- apps/web/src/theme/tokens.css: faint and the three light tone colours nudged so every text token reaches 4.5:1 on every surface.
- routes gantt.tsx: hairline grid, today as a 2 px top edge in the header and a 1 px primary line in the body, weekend fill removed.
- components/kanban-board/index.tsx: stagger on the lane container.
- components/settings/settings-shell.tsx: rise on the shell root.
- i18n/en-US.json: navigation.sidebar.calendar.
