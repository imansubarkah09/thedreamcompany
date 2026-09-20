# The Dream Company — Static Mockup Spec

A single-file storytelling / manifesto site for **The Dream Company**.
No backend, no build step, no framework. Open `index.html` in any browser.

## Purpose

A digital manifesto for what The Dream Company is building, what it has learned,
and what it still intends to build — not a product catalog. It answers:

1. What is The Dream Company?
2. Why does it exist?
3. What philosophy drives it?
4. What has been built so far?
5. How do the products connect?
6. What is the long-term goal?
7. Where does it go next?

## Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Hero | Name + three-line manifesto, abstract orbit visual (pure CSS) with meaningful aria-label describing the Dream→Ecosystem journey. Shimmer animation limited to 3 cycles, pauses on hover/focus. Single primary CTA: "See what we've built". Philosophy link moved inline in prose. Hero entrance stagger: title (0ms) → manifesto (150ms) → CTA (300ms) → orbit (450ms). |
| 2 | The Philosophy | Idea → System → Product → Ecosystem, told as prose + a 6-step flow (Dream→Idea→Experiment→System→Product→Ecosystem). Philosophy CTA now inline in first paragraph. |
| 3 | What We Have Built | Connected ecosystem map, two groups: Business Systems / Internal & Experiments. Includes **Brokado** (https://brokado.online), **School Community**, **Guyub** (https://guyub.thedreamcompany.space), and **Novel** (http://novel.thedreamcompany.space) as real, live examples (each card links out to its site). |
| 4 | How We Build | Build → Learn → Improve → Automate → Scale (5-node cycle), plus 7 principles. |
| 5 | Technology Playground | Tool list framed as "tools are temporary, the ability to build is permanent". |
| 6 | The AI Era | AI as amplifier / accelerator / collaborator — not autopilot. Equation with staggered reveal (120ms per row): One person + Clear ideas + Domain knowledge + AI agents + Persistence = Org outcomes. Role cards: Amplifier, Accelerator, Collaborator. "Co-pilot" disclaimer. |
| 7 | The Long-Term Vision | "Build things that matter" + 5 aspirations + 6-phase roadmap (Now/Next/Then/Always/Later/Open). Future phases visually demoted. |
| 8 | Closing Manifesto | Short closing with opacity hierarchy + signature + tagline "Dream. Build. Learn. Repeat." Hover pulse + color shift to accent-warm. |

## Design

- Dark mode default: deep charcoal (`#08090c`), subtle radial gradients, masked grid background, soft glow.
- Type: Fraunces (display) + Inter (body) + JetBrains Mono (labels), via Google Fonts with system fallbacks.
- Electric accents: blue `#6ea8ff`, violet `#9b8cff`, warm `#ffb47a`.
- Motion kept subtle: shimmer on the title (3 cycles, pauses on hover/focus), slow orbit, scroll-reveal via `IntersectionObserver`. Respects `prefers-reduced-motion`.
- Responsive: single breakpoint at 860px, mobile nav collapse with accessible toggle (48×48px touch target, aria-label, sr-only text).
- **Accessibility**: Visible `:focus-visible` styles (2px accent outline, 2px offset), nav links meet WCAG AA contrast (using `--text-dim`), semantic HTML, proper ARIA labels, language switching updates `lang` attribute.
- **Theme-aware colors**: All backgrounds, shadows, borders use `color-mix()` with semantic tokens (`--accent`, `--text`, `--bg`, `--panel`) — zero hardcoded rgba values. Works correctly in both dark and light modes.

## Dual language

- Default **English**, toggle **EN / ID** in the nav.
- Every string is inline as `<span class="lang-en">…</span><span class="lang-id">…</span>`; one CSS rule (`[data-lang]`) shows/hides. Choice persisted in `localStorage` (`tdc-lang`).
- Proper nouns, tag chips, and the tech list stay single-language.
- `lang` attribute and `documentElement.lang` updated on toggle for screen readers.
- Language toggle: cross-fade 180ms + button scale on active.

## Delight Features (Impeccable)

- **Theme toggle**: 300ms transition + brand dot scale on dark↔light switch
- **Language toggle**: Cross-fade 180ms + button press scale
- **Orbit nodes**: Hover/focus → tooltip (Dream, Idea, Experiment, System, Product & Ecosystem), node scale + glow
- **External links** (Brokado, School Community, Guyub, Novel): Click → toast "Go build something real → [name]" (auto-dismiss 2s)
- **Closing tagline**: Hover → subtle pulse (scale 1.02) + color shift to accent-warm
- **Hero entrance**: Staggered slide-up/fade-in animations

## Technical

- One file: `index.html` (CSS in `<style>`, JS in `<script>`).
- No npm, no bundler, no dependencies beyond the Google Fonts stylesheet.
- Semantic HTML, accessible contrast (WCAG AA).
- CSS custom properties for theming (dark/light), fluid type via `clamp()`.
- `color-mix()` for all theme-aware color compositions.
- Playwright test suite: 20 tests covering a11y, theming, interactions, animations, responsive, and content.

## Deploy — Cloudflare Pages

Static site, nothing to build:

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | *(empty)* |
| Build output directory | `/` |

Connect the GitHub repo (`imansubarkah09/thedreamcompany`) in the Cloudflare Pages dashboard; every push to the default branch redeploys.

## Repo contents

Only `index.html` and `mockup-spec.md` are tracked (see `.gitignore`).

## Playwright Test Coverage

| Test | Status |
|------|--------|
| Page loads without console errors | ✅ |
| Dark mode initial state | ✅ |
| Light mode toggle works | ✅ |
| Language toggle works | ✅ |
| Focus visible styles exist | ✅ |
| Nav links WCAG AA contrast (dark) | ✅ |
| Hero shimmer limited to 3 cycles | ✅ |
| Orbit meaningful aria-label | ✅ |
| Orbit node tooltips on hover | ✅ |
| Single primary CTA in hero | ✅ |
| Philosophy inline link in prose | ✅ |
| Mobile nav toggle accessibility | ✅ |
| Equation rows staggered transition-delay | ✅ |
| External links show toast on click | ✅ |
| Closing tagline hover effect | ✅ |
| Hero entrance animations present | ✅ |
| prefers-reduced-motion forces opacity:1 | ✅ |
| No hardcoded rgba in computed styles | ✅ |
| New external links: Guyub & Novel | ✅ |
| Light mode bg-layer uses color-mix | ✅ |

## Recent Improvements (from Impeccable critique + Delight + Playwright verification)

- **P0 Fixed**: Added global `:focus-visible` styles (2px accent outline, 2px offset) for all interactive elements
- **P0 Fixed**: Nav links now use `--text-dim` (#9aa2b1) for 6.1:1 contrast ratio (WCAG AA compliant)
- **P1 Fixed**: Hero shimmer animation limited to 3 cycles, pauses on hover/focus
- **P1 Fixed**: Orbit visual now has meaningful `aria-label` describing the 6-stage journey metaphor
- **P2 Fixed**: Hero CTA unified to single primary "See what we've built"; philosophy link moved inline in prose
- **P2 Fixed**: Mobile nav toggle: 48×48px touch target, `aria-label`, `aria-expanded`, visible focus ring, sr-only "Menu" text
- **P3 Fixed**: Equation rows stagger reveal with 120ms incremental transition-delay
- **Quality**: Added `.sr-only` utility class for screen-reader-only text
- **Delight**: Theme toggle transition + brand dot scale
- **Delight**: Language toggle cross-fade + button press scale
- **Delight**: Orbit node tooltips on hover/focus with scale + glow
- **Delight**: External link click toast notification ("Go build something real → [name]")
- **Delight**: Closing tagline hover pulse + color shift
- **Delight**: Hero entrance stagger animation
- **Theme**: All hardcoded rgba replaced with `color-mix()` using semantic tokens (--glow, --bg-layer, nav background, orbit shadows, tooltips, toast, mobile nav dropdown, eco-root badge, equation result)
- **Playwright**: 20 automated tests verifying all features in both dark/light modes