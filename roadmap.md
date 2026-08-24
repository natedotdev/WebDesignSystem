# Design System Roadmap

## Goal

Create a personal web design system that can be browsed visually and used from the terminal to pull individual components into future sites.

## Reference Workflow

1. Capture a reference URL and screenshot.
2. Identify the pattern: navigation, hero, pricing, layout, testimonial, footer, gallery, form, or animation.
3. Abstract the pattern into content slots, spacing rules, visual hierarchy, responsive behavior, and states.
4. Rebuild it as original HTML/CSS/JS in a component folder.
5. Add metadata, preview it in the catalog, and update `library.json`.

## Near-Term Backlog

- Sticky stacking cards
- Pinned scroll slider
- Full-bleed landing hero
- About split section
- About section with counters
- Logo cloud strip
- Portfolio filter grid
- Blog card grid
- Contact form block
- Mega menu header
- One-page agency shell
- SaaS landing shell

## Component Folder Contract

Each component should include:

- `component.html`
- `styles.css`
- `script.js` when interaction is required
- `metadata.json`
- `preview.png` when screenshots are added

## Quality Bar

- Works on mobile and desktop
- No exact brand copies
- No proprietary images or downloaded paid assets
- Clear naming
- Small standalone CSS surface
- Usable without a framework
