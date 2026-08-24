# Design Pixel System

A Monodesk-inspired personal web design system for pulling reusable website sections, layout recipes, and design tokens into future builds.

## What Is Inside

- `index.html` - Monodesk-inspired marketplace-style overview of the system
- `websites.html` - complete website examples assembled from the system
- `previews/` - standalone full website previews that open outside the catalog frame
- `components.html` - browsable component catalog
- `layouts.html` - reusable layout arrangement recipes
- `tokens.html` - shared color, typography, spacing, radius, shadow, and motion rules
- `components/` - standalone component folders with HTML, CSS, and metadata
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

## Current Website Examples

- `freelancer` - Independent designer portfolio
- `photography-studio` - Photography and creative studio
- `church` - Church and community site
- `restaurant` - Restaurant and reservations
- `fitness` - Fitness coach and classes
- `nonprofit` - Nonprofit and donations

## Build Rule

Use public sites as design references, then rebuild the pattern as original reusable code. Do not copy proprietary source files, paid assets, trademarks, or exact brand identity.
