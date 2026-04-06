@AGENTS.md

# Dorado Grove Site

Next.js 16 (App Router, Turbopack) + Tailwind CSS site built from Figma designs for Dorado Grove (luxury coastal residences).

## Pages
- `/` — Home (`src/app/page.tsx`)
- `/residences` — Residences (`src/app/residences/page.tsx`)
- `/amenities` — Amenities (`src/app/amenities/page.tsx`)

## Source Figma files
- Home: `pgpB4rgXjI0mJMd2BiLkf8`
- Residences: `2BHrkXrRg1dWGHK8RJRtTZ`
- Amenities: `njLUeFbEPjTvpp43z0tiBC`

Use the Figma MCP to fetch design context. Note: when fetching hero images, the topmost layer ID isn't always what's visually rendered — verify with `get_screenshot` and compare with Chrome DevTools MCP screenshots of localhost before assuming an asset URL is correct.

## Fonts (`src/app/layout.tsx`)
- **Platinum Signature** — local `src/app/fonts/PlatinumSignature.ttf` — used for script headings (`font-script`). The exact commercial font from Figma; do not substitute.
- **DM Sans** — Google Fonts — headings (`font-heading`)
- **Inter** — Google Fonts — body text (`font-[var(--font-inter)]`)

The user-provided `Fonts/` folder at the repo root contains additional designer-supplied fonts (Host Grotesk, Basis Grotesque Arabic Pro, Montserrat) that aren't currently wired up but match the Figma spec if more weights are needed.

## Design tokens (`src/app/globals.css`)
- `--color-cream: #f9f6f2`
- `--color-brown-dark: #4e4034`
- `--color-brown: #6a5c51`
- `--color-brown-light: #a09080`
- `--color-text: #515151`

## Layout conventions
- Inner content uses `max-w-[1440px] mx-auto px-6 lg:px-[240px]` — matches Figma's 240px side margins
- Full-bleed images use `max-w-[1920px]` or no max-width
- Section vertical padding: `py-16 lg:py-24`

## Animations (`src/components/ScrollReveal.tsx`)
Reusable client component using `IntersectionObserver` for scroll-triggered reveals. Patterns mirror thewellcg.com:
- `fadeInUp` — slides up 60px + fades in (1.25s default)
- `fadeIn` — opacity only, used on large images with `duration={1500}`
- `moveUp` — subtle 25px slide + fade, used on body text
- Stagger effects via `delay={200}` etc. on right-column content
- Hero text uses `delay={500}` and `delay={1200}` for staggered title/subtitle reveal

CSS for these is in `globals.css` under `.scroll-reveal` classes.

## Header (`src/components/Header.tsx`)
Three states:
1. **Transparent over hero** — white text, hamburger opens menu
2. **Sticky bar** (scrolled past 600px) — white bg, dark logo, "Inquire" pill, email, hamburger. Slides down with opacity transition.
3. **Slide-in menu panel** — full-screen overlay with hero image filling left 2/3 and white nav panel filling right 1/3. Pattern matches thewellcg.com's popup. X close button, dark logo, vertically-centered uppercase nav links with separator lines between each item. Locks body scroll while open.

The sticky header uses `/images/logo-dark.svg` (downloaded from Figma) — never use CSS `invert`/`brightness-0` on `logo.png` because the PNG has anti-aliased edges that produce a gray box.

## Script links
The decorative cursive links ("The Wellness", "the residences", "Floorplans" etc.) all use this pattern:
```jsx
<div className="mb-2 inline-flex items-center gap-2">
  <span className="font-script text-[#515151] text-3xl lg:text-[40px] capitalize leading-none">
    The wellness
  </span>
  <svg width="100" height="6" viewBox="0 0 100 6" className="text-[#a09080]">
    <line x1="0" y1="3" x2="90" y2="3" stroke="currentColor" strokeWidth="1" />
    <path d="M88,3 L95,0.5 L95,5.5 Z" fill="currentColor" />
  </svg>
</div>
<div className="w-[333px] h-[1px] bg-[#a09080]/40 mt-2" />
```

## Images (`public/images/`)
All downloaded from the Figma MCP. **Already optimized** — resized to max 1920px, JPEG quality 70 via `npx sharp-cli`. Total ~4.6MB (was ~87MB before optimization). If you re-download from Figma, re-compress before committing.

The contact form background (`contact-bg.jpg`) was originally a 270-byte broken file — re-downloaded to a real 77KB leaf image.

## Deployment
Pushed to `https://github.com/voxel-4565/728-doradosite` (`main` branch). Render.com Web Service:
- Build: `npm install && npm run build`
- Start: `npm start`
- Live at `dg.voxelworlds.com`

## Improvements over the initial Figma export
The Figma `get_design_context` tool returns absolutely-positioned React+Tailwind code that's not production-quality. This site improves on it in several ways:

1. **Responsive layouts** — replaced absolute positioning with semantic flex/grid layouts that work from 375px (mobile) to 1920px (desktop). Figma export was desktop-only.
2. **Reusable components** — broke each page into discrete section components instead of one giant `Component1920WHome()` function.
3. **Real Next.js Image** — uses `next/image` with proper `sizes`, `priority`, and aspect ratios for lazy loading and optimization.
4. **Working sticky header** — Figma has two stacked header layers; we built a single component that swaps between transparent (over hero) and sticky white state on scroll.
5. **Real navigation** — implemented the slide-in menu panel that the Figma file only hints at (it just has a hamburger icon node).
6. **Scroll animations** — added `IntersectionObserver`-based reveal animations matching thewellcg.com's behavior. Figma is static.
7. **Optimized assets** — compressed all images by 95% (87MB → 4.6MB).
8. **Form interactivity** — the Figma form is decorative; ours has real `<input>` and `<select>` elements with proper styling and focus states.
9. **Multi-page routing** — Figma has separate files for each page; we connected them via Next.js routing with shared Header/Footer components.
10. **Brand-correct fonts** — uses the actual Platinum Signature font file the designer supplied, plus the local Host Grotesk / Basis Grotesque fonts available in the `Fonts/` folder for future use.

## Things to double-check before shipping
- The **placeholder amenities image** (`amen-placeholder.jpg`) is a generic image-icon placeholder, not a real photo. The Figma uses the same placeholder so this is correct, but the client may want real photos here.
- The **video section** on the home page just has a play button — no actual video is wired up.
- **Form submission** is not wired to a backend — the Inquire button does nothing.
- The **Floorplans link** in Amenities and the script links throughout are not actually linked to anywhere.
