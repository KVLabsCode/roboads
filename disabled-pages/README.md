# Disabled pages

Kovio pivoted to a stealth, single-page waitlist site (2026-10-29). Everything
that made up the old multi-page ad-platform marketing site was moved here —
not deleted — so it can come back with a few `git mv`s whenever the full site
relaunches. Full history is preserved; `git log --follow` on any file here
still shows its original commits.

## What's here

- `app/brands`, `app/fleets`, `app/agencies`, `app/contact`, `app/case-studies`
  — the old route pages
- `components/site/Nav.tsx`, `LeadForm.tsx`, `VoiceCards.tsx`, `EqBars.tsx`,
  `Marquee.tsx`, `ContactSwitcher.tsx`, `LazyVideo.tsx` — components only
  those pages used
- `lib/case-studies.tsx` — the case-study content collection

## To restore

1. `git mv disabled-pages/app/<x> src/app/<x>` for each route you want back
2. `git mv disabled-pages/components/site/<X>.tsx src/components/site/<X>.tsx`
   for each component those routes import
3. `git mv disabled-pages/lib/case-studies.tsx src/lib/case-studies.tsx` if
   restoring case studies
4. Remove the matching redirect rules in `next.config.mjs`
5. Remove `"disabled-pages"` from `tsconfig.json` `exclude` and
   `.eslintrc.json` `ignorePatterns` once the folder is empty
6. Restore `src/app/page.tsx` and `src/app/layout.tsx` metadata from git
   history (`git log --follow -- src/app/page.tsx`) if the homepage itself
   should go back to the ad-platform version too

The lead API (`src/app/api/lead/route.ts`) was left fully backward
compatible — it still handles `trial`/`fleet`/`agency` kinds, so no backend
changes are needed to bring these pages back.
