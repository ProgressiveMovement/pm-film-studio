# Skins

Stylesheets that give other tools the PM Studio look. They live here because the
tokens come from `apps/web/src/theme/studio.css`; keep them in step when that
file changes.

## fastmail-studio-3.css

Fastmail's web app in the Studio 3 vocabulary: Helvetica Neue, Kaneo's blacks,
whites and greys, Dossier's three tones for flags, stars, pins and notices, glass
menus. Fastmail paints from two variable blocks (`:root.t-light`, `:root.t-dark`),
so the skin is mostly a second definition of those plus four hard-coded places
(the top bar, the app rail, the avatar colours, the popover page).

Install, Safari on the Mac:

1. App Store: install **Userscripts** (free, open source).
2. Safari, Settings, Extensions: tick Userscripts, allow it on `app.fastmail.com`
   (or all websites).
3. Click the Userscripts icon in Safari's toolbar, "Open Userscripts Directory"
   to see which folder it reads. Copy `fastmail-studio-3.css` into that folder.
4. Reload Fastmail. The Userscripts icon shows the style as active for the tab.

Fastmail's own theme setting (light, dark, auto) still decides light or dark; the
skin follows it. The Fastmail iPhone app and the Mac desktop app cannot take a
skin. If Fastmail renames a variable, that piece falls back to Fastmail's own
colour and nothing breaks; fix it against `document.styleSheets` as on 20 Oct 2026.
