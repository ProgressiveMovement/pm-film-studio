# Staying in step with upstream Kaneo

This repo is a fork of github.com/usekaneo/kaneo (remote `upstream`).
Our branch is `theme/studio` on github.com/ProgressiveMovement/pm-film-studio (remote `origin`); Studio 2.0 lives on `theme/studio-2` on top of it until it is merged.
Kaneo ships fast, about 140 commits in a week. The API security fixes only reach us through a rebase, so do not let this slide.

## What is ours

- Everything in `apps/web/src/theme/`: tokens.css, recipes.css, prose.css, overrides.css, shiki-studio.json, TOUCHED.md, this file. Upstream does not have this folder, so it never conflicts.
- The component files listed in `TOUCHED.md`. That list is the map of every conflict you can get. If you edit a new component, add it there the same day.
- One import line in `apps/web/src/index.css`.
- The first-paint script and the glass filter in `apps/web/index.html`.
- `public/site.webmanifest`.
- `.github/workflows/studio-image.yml` and `Dockerfile.kaneo` (the image build).
- Screenshots in `apps/web/theme-screens/<stage>/`. They are the visual regression reference.

## 1. Monthly rebase, step by step

Work on a clean `theme/studio`. Note the current deployed SHA first, it is your rollback.

1. `git fetch upstream --tags`
2. `git switch theme/studio`
3. `git log --oneline HEAD..upstream/main | wc -l` to see how far behind you are.
4. `git rebase upstream/main`
5. Fix conflicts (section 2), then `git add <file>` and `git rebase --continue`. Repeat.
6. `pnpm install --frozen-lockfile`
7. `pnpm --filter @kaneo/web typecheck`
   - In a fresh clone this shows errors from `@kaneo/email`. They are not ours and they were there before the theme. Run `pnpm --filter @kaneo/email build` once and they go away.
8. `pnpm --filter @kaneo/web test -- --run`
9. `pnpm --filter @kaneo/web build`
10. `git push --force-with-lease origin theme/studio`
11. Open the Actions run "Studio image". It builds on every push to `theme/studio` and tags the image with the full commit SHA (and `latest`). Wait for green.
12. On the server: run `/srv/stack/backup.sh`, then `/srv/stack/apps/kaneo/deploy.sh <full sha>`.
13. Write the new SHA and the old SHA in your notes. The old one is the rollback.

Rebase or merge?

- Prefer rebase. It keeps our commits on top, so `git log upstream/main..theme/studio` is a clean list of what we changed.
- Switch to `git merge upstream/main` if the rebase gets long. Rule of thumb: more than about 300 upstream commits behind, or you hit the same file in many of our commits. A rebase replays each of our commits, so one file can conflict again and again. A merge makes you resolve it once.
- To bail out of a rebase at any point: `git rebase --abort`. Nothing is lost.
- Merging means the push is a normal push, no force needed.

## 2. Which files conflict, and what to do

Most likely: the component files in `src/components/ui/` (button, card, dialog, alert-dialog, sheet, popover, menu, context-menu, select, command, input, textarea, number-field, combobox, badge, sidebar), the task chips, and the sidebar files (`app-sidebar.tsx`, `nav-main.tsx`, `nav-projects.tsx`, `nav-secondary.tsx`).
Rare: `src/index.css` (our import line), `index.html`, `shiki-highlighter.ts`, the two code and diagram extensions.
Never: anything under `src/theme/`.

By kind of conflict:

- Kaneo changed a class list that we also restyled. Keep upstream's new structure and logic, then re-apply our classes on top. Do not take upstream's classes, that undoes the restyle. TOUCHED.md says what each file should end up looking like.
- A new variant or size key appeared (button, badge, card). Add our styling for it so it matches its neighbours. Check the visual set afterwards.
- Kaneo changed logic or props in a file we touched. Take upstream's logic. Only our class strings, recipes and token names are ours.
- A file we touched was deleted or moved upstream. Find where it went: `git log --follow --stat upstream/main -- <old path>` or `git log upstream/main --diff-filter=R --name-status -- <old path>`. Re-apply our change in the new home and fix the path in TOUCHED.md.
- A dependency in `package.json` or the lockfile conflicts. Take upstream's version, then run `pnpm install` to regenerate the lockfile. Do not hand-edit the lockfile.
- Upstream adds a new component with hardcoded colours or radii. Leave it for now, list it in TOUCHED.md under "to restyle", and fix it in a follow-up commit.

Keep each conflict fix small. If a file is hopeless, copy upstream's version, then re-do our restyle from the TOUCHED.md line for that file.

## 3. Visual regression check

The tests do not see the theme. Your eyes do.

1. Run the new build, or open the deployed app, signed in.
2. Re-take the same screenshot set as the latest folder in `apps/web/theme-screens/`: same screens, at 1440 and 390 wide, dark and light.
3. Compare with the previous folder, by eye side by side, or with an image diff (for example ImageMagick `compare -metric AE old.png new.png diff.png`).
4. Look hardest at: dialogs and sheets, menus and popovers, the command palette, inputs, chips and badges, the sidebar, code blocks and mermaid diagrams.
5. Fix what drifted. Then commit the new set under `apps/web/theme-screens/<yyyy-mm-dd>/` and keep the old folder.

Push the fixes before you deploy, or deploy and fix straight after. Do not leave a known visual break on the server for days.

## 4. Cadence and checklist

Do this monthly. Do it at once for a Kaneo security release (watch the upstream releases page).

Checklist:

1. Note the deployed SHA (rollback).
2. `git fetch upstream --tags`, rebase (or merge) on `upstream/main`.
3. Resolve conflicts using section 2, update TOUCHED.md if files moved.
4. `pnpm install --frozen-lockfile`
5. Typecheck (build `@kaneo/email` first in a fresh clone).
6. Tests: `pnpm --filter @kaneo/web test -- --run`
7. Build: `pnpm --filter @kaneo/web build`
8. Push (`--force-with-lease` after a rebase), wait for the Actions run to go green.
9. Screenshots at 1440 and 390, dark and light, compared with the last set.
10. `/srv/stack/backup.sh`, then `/srv/stack/apps/kaneo/deploy.sh <full sha>`, click through the app, commit the new screenshots.

## 5. Rollback

- Code and styling: run `/srv/stack/apps/kaneo/deploy.sh <previous full sha>`. Every image stays in the registry under its SHA, so the old one is still there.
- Database: Kaneo migrations only go forward. Rolling the image back does not undo a migration. If the upstream range included a schema change, the real rollback is the dump from `/srv/stack/backup.sh` taken just before the deploy. Restore that dump, then deploy the old SHA.
- That is why the backup comes first, every time, even for a small update.
- After a rollback, do not force-push away the bad rebase. Branch it (`git branch broken-<date>`) so you can look at it later.
