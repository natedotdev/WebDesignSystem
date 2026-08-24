# Design Pixel System

A personal web design system for pulling reusable website sections, layout recipes, and design tokens into future builds.

## What Is Inside

- `index.html` - visual overview of the system
- `components.html` - browsable component catalog
- `layouts.html` - reusable layout arrangement recipes
- `tokens.html` - shared design-token reference
- `components/` - standalone HTML/CSS component folders with metadata
- `layouts/` - reusable layout recipes
- `tokens/tokens.css` - portable CSS custom properties
- `bin/dps-add.mjs` - helper for copying one component or layout into another project

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
- `features/metro-feature-grid`
- `pricing/contrast-pricing-table`
- `testimonials/fanned-testimonial-cards`
- `footer/stacked-footer`

## Current Layouts

- `metro-grid`
- `split-proof`

## Build Rule

Use public sites as design references, then rebuild the pattern as original reusable code. Do not copy proprietary source files, paid assets, trademarks, or exact brand identity.
