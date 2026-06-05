# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A one-page personal **CV website** for a DevSecOps engineer (Carlos Vázquez Lara),
built from the spec in `docs/SPEC.md`. Static **Astro + Tailwind CSS v4 + TypeScript**,
dark-by-default with a persistent light toggle, deployed to GitHub Pages via Actions.
Content language is Spanish.

## Commands

```bash
npm run dev      # dev server → http://localhost:4321/cv
npm run build    # static build → dist/  (must stay warning-free)
npm run preview  # serve the production build
```

No test suite; quality bar is a warning-free build and Lighthouse 95+.

## Architecture — the things that aren't obvious from a single file

- **Single source of truth: `src/data/cv.ts`.** All copy (header, experience, skills,
  education, languages, projects, nav, SEO meta) lives here, typed and `as const`.
  Components contain **zero hardcoded content** — they render from `cv`. Update the CV
  by editing only this file.
- **`todo: true` flags render a visible `<Todo>` badge.** Fields the owner must confirm
  (LinkedIn URL, consultancy name, photo, PDF, project descriptions) are intentionally
  surfaced in the UI, not hidden. See `docs/SPEC.md` §9. Don't silently resolve them.
- **Theming is CSS-variable driven, exposed as Tailwind tokens.** `src/styles/global.css`
  defines colors under `[data-theme="dark"]` / `[data-theme="light"]`, then maps them
  via `@theme inline` to Tailwind tokens (`bg-bg`, `text-ink`, `text-accent`,
  `border-line`, …). So utilities follow the theme automatically — **do not** add
  `dark:` variants; add/adjust a CSS variable instead. Theme is set pre-paint from
  `localStorage` (key `cv-theme`) by an inline script in `Base.astro` to avoid FOUC.
- **GitHub Pages `base` handling.** `astro.config.mjs` sets `base: '/cv'` (project page).
  `BASE_URL` has no trailing slash, so **always build public-asset URLs with
  `asset()` from `src/lib/url.ts`**, never by string-concatenating `BASE_URL` (that
  yields `/cvcv.pdf`). Switching to a user page = comment out `base` there only.
- **Icons are inline SVG** in `src/components/Icon.astro` (a name→path map), per the
  spec's "no heavy dependencies" rule. Add new icons there.
- **Scroll reveals** use a `.reveal` → `.is-visible` IntersectionObserver in
  `Base.astro`; `prefers-reduced-motion` disables all animation in `global.css`.

## Design intent

Aesthetic concept is an "engineering console / deploy pipeline": deep slate, restrained
amber accent, **Bricolage Grotesque** (display) + **JetBrains Mono** (technical) — Inter
and other generic fonts are deliberately avoided. Experience renders as a vertical
CI/CD pipeline; the footer simulates a passing deploy run. Keep new UI cohesive with
this direction rather than reaching for generic component patterns.

## Notes

- `docs/SPEC.md` is the original full specification (acceptance checklist in §8).
- `public/cv.pdf` and `public/og.svg` are placeholders; `public/profile.jpg` is not yet
  added (the `<img>` in `Header.astro` is commented out behind a placeholder card).
