# Portfolio Design System

## Status and Scope

This document is the visual and experience specification for Nihar Majalikar's public portfolio. It governs layout, hierarchy, typography, colour, imagery, interaction, accessibility, and performance. `AGENTS.md` governs repository workflow and engineering conventions; this file governs presentation. When they conflict, follow the more accessible and privacy-preserving rule.

The implementation uses Next.js, React, TypeScript, Tailwind CSS, Framer Motion and Lucide React. It must retain a static export for GitHub Pages while remaining compatible with Vercel.

## Brand Purpose

The portfolio presents five evidence-led bodies of work:

1. A networking, infrastructure, and DevOps homelab.
2. A master's thesis project supported by the supplied PDF.
3. An ELE5001 LTE-Advanced radio access network planning case study.
4. A CSE5INE intermediate network engineering case study covering supervised routing labs.
5. A CSE5NSW network systems and web security laboratory portfolio.

The primary audiences are recruiters, hiring managers, and technical peers. The first viewport must quickly communicate:

- Nihar's name and professional focus.
- The five flagship project paths.
- A clear action: view projects, download the resume, or open a verified profile.

Do not present planned work as completed work. All claims, technologies, screenshots, and results must be traceable to repository evidence.

## Design Direction

Use a **Technical Editorial Control Plane** aesthetic: the precision of infrastructure software combined with the clarity and pacing of a well-designed technical publication.

The direction borrows principles—not components or branding—from:

- Carbon: disciplined role-based tokens, dark themes, and expressive typography.
- Primer: familiar developer patterns, strong focus states, and restrained responsive layouts.

The visual signature should come from route lines, node markers, numbered projects, metadata strips, evidence labels, and a subtle CSS grid texture. These elements should support comprehension rather than imitate a dashboard.

Design keywords: precise, calm, credible, technical, modern, evidence-led.

## Design Principles

1. **Evidence before decoration.** Real diagrams, screenshots, and documentation are the primary visual material.
2. **Technical but human.** Explain decisions and lessons in plain language; avoid a wall of product names.
3. **Clear hierarchy.** A visitor should understand the page at headline level before reading details.
4. **Purposeful density.** Use compact metadata for technical facts and generous space around major narratives.
5. **Progressive enhancement.** Core content and navigation must work without JavaScript.
6. **Authenticity by default.** Never generate or fabricate infrastructure screenshots, metrics, logs, or results.

## Colour System

Use semantic roles so colour choices remain consistent:

```css
:root {
  --color-canvas: #07111f;
  --color-canvas-deep: #050c16;
  --color-surface-1: #0d1b2d;
  --color-surface-2: #11243a;
  --color-surface-3: #162b42;
  --color-border: rgba(148, 177, 208, 0.16);
  --color-border-strong: rgba(148, 177, 208, 0.28);
  --color-text: #eef6ff;
  --color-text-muted: #9db1c7;
  --color-text-subtle: #6f88a2;
  --color-accent-homelab: #5eead4;
  --color-accent-research: #60a5fa;
  --color-warning: #fb923c;
  --color-danger: #f87171;
  --color-success: #4ade80;
}
```

Rules:

- Neutrals should occupy roughly 80% of the interface.
- Teal is the primary interaction and homelab accent; blue identifies thesis content; green identifies LTE radio-planning content.
- Orange may highlight troubleshooting or caution. Red is reserved for errors or destructive states.
- Never use colour as the only way to communicate meaning.
- Avoid rainbow palettes, neon glow, and gradient text.
- Use a two-part focus treatment: a high-contrast teal ring separated from the element by a canvas-coloured gap.

Verified palette contrast on the main canvas:

- Primary text: `#eef6ff` on `#07111f` — approximately 17.37:1.
- Muted text: `#9db1c7` on `#07111f` — approximately 8.61:1.
- Teal accent: `#5eead4` on `#07111f` — approximately 12.80:1.

Recheck contrast whenever text is placed on a surface other than the main canvas.

## Typography

The preferred family is **IBM Plex Sans** for display and body copy, with **IBM Plex Mono** used sparingly for labels, paths, dates, and technical metadata. If added, self-host only the necessary WOFF2 files and weights. Until those files exist, use the current system font stack as a performance-safe fallback.

Use weights 400, 600, and 700. Recommended responsive scale:

```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-body: clamp(1rem, 0.97rem + 0.15vw, 1.125rem);
--text-h3: clamp(1.25rem, 1.1rem + 0.7vw, 1.75rem);
--text-h2: clamp(2rem, 1.55rem + 2vw, 3.5rem);
--text-hero: clamp(2.75rem, 1.8rem + 4.5vw, 6.5rem);
```

- Body line-height: 1.6–1.7; headings: 0.98–1.15.
- Keep prose between 55 and 68 characters per line.
- Use uppercase only for short labels, with moderate letter spacing.
- Avoid long centre-aligned paragraphs and justified body copy.
- The main `h1` must include Nihar's name and professional focus.

## Spacing and Grid

Use a 4px base with a preferred sequence of `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.

- Maximum content width: 1240px.
- Desktop: conceptual 12-column grid.
- Tablet: 8-column grid.
- Mobile: 4-column grid, normally rendered as one content column.
- Page gutters: 16px mobile, 24px tablet, 32px desktop.
- Major section padding: `clamp(4.5rem, 8vw, 8rem)`.
- Dense subsections may use 48–80px vertical separation.

Use the existing 620px, 820px, and 1080px breakpoints as starting points. Add a breakpoint only when content visibly fails, not to target a specific device.

## Page Architecture

The page should read as a professional portfolio, not as a catalogue of homelab services:

1. **Hero** — identity, concise value statement, flagship paths, and primary actions.
2. **Featured projects** — one card for each documented project.
3. **Master's thesis case study** — question, approach, documented artefacts, and boundaries.
4. **ELE5001 LTE-Advanced planning** — design decisions, simulation evidence, capacity limits, and learning.
5. **CSE5INE case study** — challenge, decision, implementation, evidence, learning, and all eleven labs.
6. **CSE5NSW case study** — network services, secure access, cryptography, cloud, and IoT labs.
7. **Homelab case study**
   - Platform: physical infrastructure, architecture, and Proxmox.
   - Services: Ubuntu/Docker, Pi-hole, Uptime Kuma, and Nextcloud.
   - Resilience: storage recovery and clearly labelled planned automated/off-site backup.
   - Operations: troubleshooting case studies and documented lessons.
8. **Skills and technologies** — grouped by demonstrated evidence, not proficiency bars.
9. **Featured gallery** — a curated default set with access to the full evidence collection.
10. **Contact and resume** — verified GitHub, LinkedIn, and download actions.

Existing section anchors required by the project may remain nested within this hierarchy.

## Component Specifications

### Header

- Keep the primary navigation to approximately five top-level items.
- Use a compact sticky header only if it does not obscure anchored headings.
- Provide a visible skip link and an accessible mobile navigation control.
- Indicate the current section subtly; do not animate a continuous tracking line.

### Hero

- At 1440 × 800, show the name, summary, project routes, and at least one action without scrolling.
- Use one dominant headline, not multiple competing badges.
- A route-line or node composition may decorate the background using CSS.
- Do not use a stock photo, fake terminal, or decorative 3D scene.

### Project Cards

Each flagship card should contain:

- Project number and category.
- A plain-language title and one-sentence purpose.
- Scope or role supported by evidence.
- Two to four verified technologies or themes.
- One explicit action.

Use teal for the homelab route, blue for the thesis, green for LTE radio planning, violet for
intermediate routing labs and orange for security labs. Accent colour must not replace text labels.

### Case-Study Sections

Use the sequence **Challenge → Decision → Implementation → Evidence → Learning** where documentation permits it. Omit a stage rather than fill it with assumptions. Alternate layouts only when the image and narrative relationship benefits from it.

### Evidence Figures

- Place every screenshot or diagram inside a semantic `figure`.
- Captions should explain what the visitor should notice, not repeat the filename.
- Show source or evidence labels where useful, such as `DOCUMENTED`, `DIAGRAM`, or `SCREENSHOT`.
- Provide a text equivalent for complex diagrams.
- Use a keyboard-operable native dialog or dedicated link for enlargement.

### Gallery

- Feature approximately six strong images by default.
- Additional items may be revealed by category filtering or a “view all” action.
- Clearly label the five requested future screenshots as planned placeholders:
  Portainer, Tailscale, GitHub Actions deployment, homelab status app, and Nextcloud mobile access.
- Do not style a placeholder so convincingly that it appears to be completed evidence.

### Skills

Group skills by work demonstrated in the portfolio: networking, virtualisation, Linux/containers, observability, storage/backup, automation, and research where supported. Link or visually associate each group with relevant case-study evidence. Do not use percentage bars or unsubstantiated ratings.

## Image and Evidence Rules

- Prefer repository screenshots and diagrams over newly generated artwork.
- Images may be cropped, resized, compressed, or redacted for privacy; do not alter their technical meaning.
- Strip or obscure IP addresses, hostnames, usernames, keys, personal email addresses, and other sensitive data.
- Decorative generated imagery, if ever used, must remain abstract and use empty alt text.
- Every content image requires accurate alt text, width, height, and an informative caption.
- Serve lightweight thumbnails in the page and load full-resolution evidence on demand.
- Use lazy loading below the fold; do not lazy-load the primary hero visual.

## Responsive Behaviour

- At 360px, content becomes a single readable column with no horizontal page scroll.
- Do not hide essential evidence or explanations on small screens.
- Stack paired media and text; place the explanation before supporting evidence when reading order matters.
- Tables and command output must wrap, scroll within their own container, or transform into labelled rows.
- Controls must be at least 24 × 24 CSS pixels; prefer approximately 44 × 44 for touch.
- Test at 360px, 768px, and 1440px, plus zoom at 200%.

## Motion and Interaction

Motion should clarify hierarchy and state:

- Standard duration: 150–220ms.
- Use opacity and transform for entry or hover transitions.
- Limit movement to a few pixels and avoid layout-changing animation.
- No parallax, cursor followers, particle backgrounds, looping terminal text, or continuous ambient motion.
- Hover must never be the only way to reveal important information.
- Under `prefers-reduced-motion: reduce`, remove non-essential movement and smooth scrolling.

## Accessibility Standard

Target WCAG 2.2 AA:

- Use semantic landmarks and a logical heading hierarchy.
- Ensure all functionality is keyboard accessible.
- Maintain visible focus and never remove outlines without a better replacement.
- Give icon-only controls an accessible name.
- Associate validation messages with their controls.
- Use native elements before recreating behaviour with ARIA.
- Preserve content and functionality at 200% zoom and with increased text spacing.
- Test lightbox/dialog focus entry, focus containment, Escape dismissal, and focus return.

## Performance Budgets

Target:

- Largest Contentful Paint: ≤2.5 seconds.
- Interaction to Next Paint: ≤200ms.
- Cumulative Layout Shift: ≤0.1.
- Lighthouse performance and accessibility scores: ≥95 on a representative production build.

Working budgets:

- Critical hero image: no more than 250KB.
- Gallery thumbnail: normally no more than 120KB.
- Total CSS: approximately 50KB uncompressed or less.
- Total JavaScript: approximately 30KB uncompressed or less.
- Self-hosted fonts, if adopted: approximately 150KB total or less.

Prefer responsive AVIF/WebP with a conventional fallback. Set image dimensions, defer non-critical media, avoid third-party scripts, and retain the current static build unless measured evidence supports additional tooling.

## Content Voice

Write in concise, confident, first-person language where appropriate. Explain why a decision mattered before describing the tool used. Prefer:

> I moved Docker data to dedicated storage to separate application state from the host filesystem.

Avoid:

> I leveraged cutting-edge enterprise-grade technologies to build a world-class platform.

Rules:

- No unsupported superlatives, uptime claims, scale claims, or business outcomes.
- Define specialised terms when a non-specialist recruiter may encounter them.
- Label simulations, planned additions, and limitations explicitly.
- Keep cards scannable; move detailed explanations into case-study sections.

## Anti-Patterns

Do not add:

- Fabricated dashboards, metrics, command output, testimonials, or employer logos.
- Skill percentages, generic stock imagery, or invented project statistics.
- Heavy glassmorphism, excessive glow, gradient text, or decorative card grids.
- Additional frameworks, animation libraries, or icon packages without a measured need.
- Auto-playing media, custom cursors, scroll hijacking, or parallax.
- More top-level navigation items when a grouped project structure will work.
- Private thesis or infrastructure information that is unsafe for a public repository.

## Verification Checklist

Before approving a visual implementation:

- [ ] The first viewport identifies Nihar and exposes all five flagship projects.
- [ ] Every factual claim is supported by repository evidence.
- [ ] Homelab and thesis content are visually distinct but part of one system.
- [ ] The required homelab topics remain easy to navigate.
- [ ] Placeholders are clearly labelled as planned.
- [ ] Colour contrast and visible focus meet WCAG 2.2 AA.
- [ ] The page works with keyboard only and reduced motion enabled.
- [ ] No horizontal overflow appears at 360px.
- [ ] Images have accurate alt text, captions, and dimensions.
- [ ] Sensitive data has been reviewed and redacted.
- [ ] `pnpm build` and `pnpm test` pass.
- [ ] The production build meets the stated Core Web Vitals targets when measured.

## Research References

- [Carbon colour guidance](https://v10.carbondesignsystem.com/guidelines/color/overview/)
- [Carbon typography](https://carbondesignsystem.com/elements/typography/overview/)
- [Primer layout foundations](https://primer.style/product/getting-started/foundations/layout/)
- [Primer accessibility fundamentals](https://www.primer.style/accessibility/foundations/accessibility-fundamentals/)
- [Primer motion guidance](https://primer.style/accessibility/design-guidance/motion-and-animation/)
- [W3C Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- [web.dev responsive design basics](https://web.dev/articles/responsive-web-design-basics)
- [web.dev font performance guidance](https://web.dev/articles/font-best-practices)
