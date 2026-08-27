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
| 1 | Hero | Name + three-line manifesto, abstract orbit visual (pure CSS). |
| 2 | The Philosophy | Idea → System → Product → Ecosystem, told as prose + a 6-step flow. |
| 3 | What We Have Built | Connected ecosystem map, two groups: Business Systems / Internal & Experiments. Includes **School Community** as a real example of an internal system that became a platform (links to https://schoolcommunity.space/). |
| 4 | How We Build | Build → Learn → Improve → Automate → Scale, plus principles. |
| 5 | Technology Playground | Tool list framed as "tools are temporary, the ability to build is permanent". |
| 6 | The AI Era | AI as amplifier / accelerator / collaborator — not autopilot. |
| 7 | The Long-Term Vision | "Build things that matter" + abstract roadmap. |
| 8 | Closing Manifesto | Short closing + `Dream. Build. Learn. Repeat.` |

## Design

- Dark mode default: deep charcoal (`#08090c`), subtle radial gradients, masked grid background, soft glow.
- Type: Fraunces (display) + Inter (body) + JetBrains Mono (labels), via Google Fonts with system fallbacks.
- Electric accents: blue `#6ea8ff`, violet `#9b8cff`, warm `#ffb47a`.
- Motion kept subtle: shimmer on the title, slow orbit, scroll-reveal via `IntersectionObserver`. Respects `prefers-reduced-motion`.
- Responsive: single breakpoint at 860px, mobile nav collapse.

## Dual language

- Default **English**, toggle **EN / ID** in the nav.
- Every string is inline as `<span class="lang-en">…</span><span class="lang-id">…</span>`; one CSS rule (`[data-lang]`) shows/hides. Choice persisted in `localStorage` (`tdc-lang`).
- Proper nouns, tag chips, and the tech list stay single-language.

## Technical

- One file: `index.html` (CSS in `<style>`, JS in `<script>`).
- No npm, no bundler, no dependencies beyond the Google Fonts stylesheet.
- Semantic HTML, accessible contrast.

## Deploy — Cloudflare Pages

Static site, nothing to build:

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | *(empty)* |
| Build output directory | `/` |

Connect the GitHub repo (`imansubarkah09/thedreamcompany`) in the Cloudflare Pages
dashboard; every push to the default branch redeploys.

## Repo contents

Only `index.html` and `mockup-spec.md` are tracked (see `.gitignore`).
