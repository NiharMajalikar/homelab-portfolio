# Repository Guidelines

## Product Goal and Source of Truth

Build a recruiter-ready engineering portfolio for Nihar Majalikar. Above the fold, establish his name, engineering focus, strongest evidence, and a clear action.

Use only facts supported by repository documentation, screenshots, diagrams, approved lab summaries, the thesis, or reviewed ELE5001 reports. Distinguish simulations and controlled university labs from production results. Never expose credentials, private addressing, student identifiers, signatures, or other personal data. Keep planned screenshots clearly labelled as planned.

## Structure and Architecture

This is a dependency-free static site:

- `index.html`: content, landmarks, and metadata.
- `styles.css`: tokens and responsive components.
- `script.js`: gallery, lightbox, filters, and mobile navigation.
- `public/`: approved assets and sanitized downloads.
- `scripts/`: development, build, and tests.
- `.github/workflows/deploy.yml`: GitHub Pages deployment.

Never edit generated `dist/`. Preserve this architecture unless a requested feature justifies migration. Prefer stable web-platform features over dependency churn.

## Professional Design and Content

Maintain the dark infrastructure theme and existing `:root` tokens. Use teal as the primary accent with restrained supporting colors, strong contrast, and generous whitespace. Prefer semantic HTML, CSS Grid, Flexbox, custom properties, `clamp()`, ES modules, and native controls. Avoid stock imagery, excessive gradients, autoplay effects, and unexplained icons.

Use one descriptive `h1`, logical heading levels, concise introductions, evidence-led captions, and outcome-focused copy. Make the homelab, thesis, LTE-Advanced planning, intermediate network engineering and security lab work equally discoverable.

## Responsive, Accessible, and Fast

Meet WCAG 2.2 AA. Support keyboard use, visible focus, skip navigation, 4.5:1 body-text contrast, and targets at least 24×24 CSS pixels. Respect `prefers-reduced-motion` and never rely on color alone.

Test at 360, 768, and 1440 CSS pixels without horizontal overflow. Add breakpoints only when content needs them. Informative images need alt text and captions; decorative images use `alt=""`. Give complex diagrams nearby text explanations.

Set image `width` and `height`; lazy-load below-the-fold media, not the likely LCP image. Use responsive sources when they materially reduce transfer. Target LCP ≤2.5 s, INP ≤200 ms, and CLS ≤0.1 at the 75th percentile.

## Commands and Quality Gate

Requires Node.js 22+; no install is required.

```bash
.\start-preview.ps1
npm run dev
npm run build
npm test
git diff --check
```

Before handoff, build and test, inspect desktop and mobile layouts, test navigation and the lightbox by keyboard, verify links/assets, and confirm metadata matches the deployment URL. Aim for Lighthouse scores of 95+; explain exceptions.

## Code, Commits, and Reviews

Use two-space indentation, kebab-case CSS/assets, camelCase JavaScript, `const` by default, and semicolons. Keep core content readable without JavaScript. Use short imperative commits, such as `Improve thesis project hierarchy`. Pull requests must summarize changes, list tests, include desktop/mobile screenshots for visual work, and identify new factual claims or public assets.

## Standards Baseline

Follow [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [WAI image guidance](https://www.w3.org/WAI/tutorials/images/), [Core Web Vitals](https://web.dev/articles/defining-core-web-vitals-thresholds), [MDN responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images), and [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
