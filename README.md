# Design Pixel System

A personal web design system for pulling reusable website sections, layout recipes, and design tokens into future builds.

## What Is Inside

- `index.html` - premium marketplace-style overview of the system
- `websites.html` - complete website examples assembled from the system
- `components.html` - browsable component catalog
- `layouts.html` - reusable layout arrangement recipes
- `tokens.html` - shared color, typography, spacing, radius, shadow, and motion rules
- `components/` - standalone component folders with HTML, CSS, and metadata
- `examples/` - complete website directions built from the components
- `layouts/` - reusable layout recipes
- `tokens/tokens.css` - portable CSS custom properties
- `bin/dps-add.mjs` - small helper for copying one component or layout into another project

## List Available Parts

```bash
npm run list
```

## Copy A Component

```bash
node ./bin/dps-add.mjs navigation/colored-pill-navbar --out=./vendor/design-system
```

## Current Components

- `navigation/colored-pill-navbar`
- `hero/launch-dashboard-hero`
- `hero/finance-floating-cards`
- `features/metro-feature-grid`
- `scroll/sticky-stacking-cards`
- `pricing/contrast-pricing-table`
- `testimonials/fanned-testimonial-cards`
- `footer/stacked-footer`

## Current Website Examples

- `vaultix` - Startup & SaaS
- `victoria` - Professional Services
- `aeline` - Business
- `anderdark` - Portfolio

## Current Layouts

- `metro-grid`
- `split-proof`

## Build Rule

Use public sites as design references, then rebuild the pattern as original reusable code. Do not copy proprietary source files, paid assets, trademarks, or exact brand identity.
