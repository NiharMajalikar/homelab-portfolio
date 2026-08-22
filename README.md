# Nihar Majalikar - Engineering Portfolio

A recruiter-focused portfolio for telecommunications, networking, IT support, cloud infrastructure and endpoint management. The site presents evidence-led project work without an employment timeline or unsupported production claims.

## Technology stack

- Next.js App Router, React and strict TypeScript
- Tailwind CSS with a small component-oriented CSS layer
- Framer Motion for restrained, reduced-motion-aware transitions
- Lucide React icons
- ESLint and Prettier
- Static export for GitHub Pages; compatible with Vercel

## Main features

- Responsive dark and light themes
- Sticky, section-aware navigation and accessible mobile menu
- Structured skills, projects, certifications, education and profile data
- Project filters and native keyboard-accessible project details
- Sanitised evidence gallery plus clearly labelled planned captures
- August 2026 network-migration and service-recovery case study
- August 2026 private homelab MCP control-plane case study
- Detailed, privacy-reviewed homelab architecture reference split into three responsive panels
- Three responsive thesis diagrams covering the project overview, technical architecture and validation workflow
- Direct professional contact and thesis-access requests through LinkedIn
- Open Graph, Twitter, canonical, manifest, robots, sitemap and JSON-LD metadata

## Prerequisites and local setup

Use Node.js 20.9 or newer and pnpm 11.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. On Windows, `./start-preview.ps1` starts the site at `http://127.0.0.1:4173` by default.

## Environment variables

Copy `.env.example` to `.env.local` when configuration is required:

```env
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_BASE_PATH=
```

- `NEXT_PUBLIC_SITE_URL` sets canonical and social metadata.
- `NEXT_PUBLIC_BASE_PATH` is empty on Vercel and `/homelab-portfolio` on this repository's GitHub Pages workflow.
- Contact is routed through the public LinkedIn profile; no form service, API key or email credential is required.

## Development commands

```bash
pnpm dev           # Run the Next.js development server
pnpm preview       # Serve the latest production export at 127.0.0.1:4173
pnpm format        # Format source files
pnpm format:check  # Verify formatting
pnpm lint          # Run ESLint
pnpm typecheck     # Run strict TypeScript checks
pnpm build         # Generate the production site in out/
pnpm test          # Lint, type-check and validate the export
```

Run `pnpm build` before `pnpm test`, because export validation inspects `out/`.

## Deployment

### Vercel

Import the repository in Vercel, keep the detected Next.js settings, set `NEXT_PUBLIC_SITE_URL` to the final domain and leave `NEXT_PUBLIC_BASE_PATH` empty.

### GitHub Pages

The workflow at `.github/workflows/deploy.yml` installs dependencies, builds with the repository base path, validates `out/` and deploys it. In GitHub, select **Settings > Pages > Source > GitHub Actions**, then push to `main` or run the workflow manually.

Expected project URL: `https://niharmajalikar.github.io/homelab-portfolio/`

## Updating portfolio content

Most content changes require no component edits:

- Personal summary, email, location and resume: `data/profile.ts`
- Skills: `data/skills.ts`
- Projects and links: `data/projects.ts`
- Certifications: `data/certifications.ts`
- Education: `data/education.ts`
- Social links: `data/socials.ts`
- Navigation: `data/navigation.ts`
- Evidence and planned screenshots: `data/evidence.ts`
- Homelab recovery claims and evidence decisions: `docs/homelab-network-migration-recovery.md`
- Private homelab MCP claims and evidence boundaries: `docs/private-homelab-mcp-progress.md`
- Master's thesis diagram claims and evidence boundaries: `docs/thesis-portfolio-diagrams.md`

Put approved images under `public/assets/` and public-safe downloads under `public/downloads/`. Supply accurate width, height, alt text and captions. Never publish raw coursework, credentials, student identifiers, private network details or unreviewed screenshots. The full master's thesis is stored privately in OneDrive; visitors request access through LinkedIn and receive access only after review.

The detailed homelab reference panels live under `public/assets/diagrams/homelab-reference/`. Their captions must distinguish the current read-only MCP implementation from the planned report schedule, off-site backup and future approval-gated execution path.

The thesis journey source lives at `public/assets/thesis/thesis-journey-portfolio-diagrams-2026-08.png`. The site presents its project overview, technical architecture and validation workflow through responsive viewport panels. Captions and nearby explanations must keep SCADA, segmentation, firewall and delivery findings within their academic simulation and controlled Packet Tracer context.

## Project structure

```text
app/                  Routes, metadata and global styles
components/           Reusable server and interactive UI components
data/                 Typed portfolio content
lib/                  Site URL and base-path helpers
public/assets/         Sanitised images and diagrams
public/downloads/      Approved public downloads, currently the public resume
scripts/               Production export validation
types/                 Shared TypeScript interfaces
.github/workflows/     GitHub Pages deployment
```

## Screenshots and accessibility

The evidence section uses reviewed, privacy-safe captures for Proxmox, Portainer, Nextcloud, Pi-hole and Uptime Kuma. The Pi-hole mobile capture supports DNS-filtering totals only; it does not prove Tailscale remote access. Planned captures remain for Tailscale administration, a successful GitHub Actions deployment, the status application and Nextcloud mobile access.

The implementation uses semantic landmarks, logical headings, visible focus states, a skip link, native controls, descriptive alt text, 24-pixel-or-larger targets and reduced-motion support. Check keyboard flows and 360, 768 and 1440 CSS-pixel layouts after visual changes.

## Security and content boundaries

- Contact and thesis-access requests are handled through the public LinkedIn profile; the static site publishes no email address and bundles no form-service credentials.
- The full thesis PDF is excluded from the static export and public repository tree. Its case-study summary and sanitised evidence remain public; access to the complete document is granted individually from private OneDrive storage.
- The public site omits phone numbers, street addresses, credentials, raw configurations and student IDs.
- University labs are labelled as controlled or simulated work, not production deployments.
- Current and planned capabilities are separated, especially for the homelab status application.
- Tailscale is documented as installed on the Ubuntu Docker VM; external-access validation remains pending.
- A separate utility VM provides three read-only MCP tools over SSH standard input/output on a private route; it exposes no public listener or state-changing capability.
- Two local backup sets and a manifest are present, but integrity and restoreability are unverified. Automated integrity checks, restore testing and encrypted off-site backup remain planned.
- Public PDFs and screenshots must be sanitised before replacement.

## Future improvements

- Validate Tailscale external access and capture redacted evidence.
- Automate MCP report refresh while retaining fail-closed freshness and redaction controls.
- Implement backup-integrity verification, perform a restore test and add an encrypted off-site copy.
- Extend the MCP control plane with read-only Proxmox evidence before considering narrowly approval-gated development-pool actions.
- Add redacted GitHub Actions, status-application and Nextcloud mobile captures.
- Add a custom domain and update `NEXT_PUBLIC_SITE_URL`.
- Run field Lighthouse monitoring after deployment and optimise any measured regressions.
