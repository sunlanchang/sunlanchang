# Handoff: sunlanchang.com Homepage

## Overview
Personal homepage for **Lanchang Sun** (sunlanchang.com) — "quiet confidence" direction: warm white + charcoal, large restrained typography, one cinematic dark band for the lead project (Ciyo). One page: hero → Ciyo → other experiments → notes + about → footer.

## About the Design Files
The files in this bundle are **design references created in HTML** — they show intended look and behavior, they are NOT production code to copy directly. Recreate them in the target codebase:

- **Target stack (already decided by the owner):** TanStack Start + TanStack Router, React, TypeScript, Vite + Cloudflare Vite plugin, Wrangler deploy to a Cloudflare Worker at `sunlanchang.com`. Model the deployment on the owner's existing `buzi` repo (`~/Workspace/buzi`): pnpm, `pnpm run deploy` → build + `wrangler deploy`. Do NOT copy buzi's D1/DO/KV/R2/auth infrastructure — this site needs none of it.
- Notes/articles will be **MDX files in the repo**, prerendered. The homepage Notes list should eventually read from those files; hardcode the three sample entries for v1 if MDX isn't wired yet.
- Styling: plain CSS with a small token file (values below). No CSS framework needed.
- Keep v1 small: no CMS, no dark mode, no search/tags.

## Fidelity
**High-fidelity.** Recreate pixel-perfectly: exact colors, sizes, spacing, and copy below.

## Files
- `homepage-reference.html` — self-contained static reference; open in a browser. This is the source of truth for all markup, inline styles, and copy.
- `Sunlanchang Homepage.dc.html` — original design-tool file (same design; needs its runtime, reference only).

## Design Tokens
- Page background: `#f7f5f2` (warm white)
- Text primary: `#211f1c` (warm charcoal); secondary: `rgba(33,31,28,.55)`; tertiary/meta: `rgba(33,31,28,.4)`
- Hairlines: `rgba(33,31,28,.08–.12)`
- Dark band: bg `#1d1b18`, text `#f3f1ed`, secondary `rgba(243,241,237,.65)`
- Card bg: `#fdfcfa`, border `rgba(33,31,28,.12)`, radius `14px`
- Accents (status dots, one per product, same chroma/lightness): Ciyo `oklch(0.72 0.13 250)`, SEO `oklch(0.72 0.13 150)`, Options `oklch(0.72 0.13 60)`, Buzi `oklch(0.72 0.13 320)`. Link accent on light bg: `oklch(0.55 0.09 250)`.
- Font: `'Helvetica Neue', Helvetica, Arial, sans-serif`; monospace meta: `ui-monospace, Menlo, monospace`
- Content max-width: `1180px`, horizontal padding `56px`

## Screens / Views — Homepage
1. **Nav** — "LS" wordmark left (15px/600); right: Work · Notes · About (14px, `rgba(33,31,28,.7)`, anchor links) + "EN / 中文" language switch (12px). 22px vertical padding.
2. **Hero** — h1 84px/1.02, letter-spacing -.035em, weight 600, max-width 900px: "I explore ideas by building products." Below (flex, gap 40px): intro paragraph 18px secondary max-width 460px ("Lanchang Sun — product builder, former Microsoft engineer, student of durable businesses.") + monospace "SUNLANCHANG.COM" 12px. Padding 110px top / 100px bottom.
3. **Ciyo dark band** (full-bleed `#1d1b18`, inner 1180px, 88px vertical padding) — header row: 8px blue status dot + "Ciyo" 44px/600 + "BUILDING NOW" uppercase 13px letter-spacing .1em at 45% opacity; right: "ciyo.ai →" link in blue accent. One-liner 19px max-width 600px. Product screenshot: 16/8 aspect, radius 14px, 1px light border — **placeholder in the reference; replace with a real Ciyo screenshot**. Below: three columns (flex, gap 56px, max-width 240px each) — Hypothesis / Exists today / Testing, uppercase 12px labels + 14px body.
4. **Other experiments** — h3 26px/600, 3-col grid gap 20px. Cards: `#fdfcfa`, 1px border, radius 14px, padding 26px; status dot + label 12px, name 18px/600, desc 14px/1.5. Buzi card is a link to `https://buzi.sunlanchang.com` (hover: border darkens).
5. **Notes + About** — 2-col grid gap 56px. Notes: h3 26px, hairline-separated rows (14px vertical padding): title 16px link left, date 13px tertiary right. About: h3 26px + paragraph 16px/1.65 at 65% opacity (exact copy in reference, ends "You can call me Chris.").
6. **Footer** — hairline top; "© 2026 Lanchang Sun" left; right: `sunlanchang@outlook.com` (mailto) and `@chris___sun` → `https://x.com/chris___sun`, 13px at 50–60% opacity.

## Interactions & Behavior
- Nav links smooth-scroll to `#work`, `#notes`, `#about` anchors.
- Links hover to `oklch(0.55 0.09 250)`.
- Scroll reveal: sections with `data-reveal` start `opacity:0; translateY(18px)` and transition to visible (`.7s ease`) via IntersectionObserver (threshold 0.12), once each. Respect `prefers-reduced-motion` in production (skip the effect).
- EN / 中文 switch is a visual affordance in v1; wire real i18n only when 中文 content exists.

## State Management
None beyond the reveal observer. All content static/prerendered. Notes list ← MDX frontmatter (title, date) when wired.

## Assets
- No images shipped. The Ciyo screenshot area is a striped CSS placeholder — replace with a real product shot (16:8 crop).
- Status dots and stripes are pure CSS; no icon set required.
