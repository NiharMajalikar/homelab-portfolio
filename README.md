# Nihar Majalikar — Engineering Portfolio

A responsive, single-page engineering portfolio covering networking, infrastructure, security,
automation and telecommunications research.

The site covers:

- a Master of Engineering thesis project on GIS-assisted hybrid communications and segmented OT networks;
- an ELE5001 LTE-Advanced radio access network planning and simulation case study;
- a CSE5INE Intermediate Network Engineering case study covering eleven supervised routing labs;
- a CSE5NSW Network Systems and Web Security portfolio with ten documented labs;
- the physical Acer Nitro 5 and Netgear RAX10 setup;
- Proxmox virtualisation and storage;
- the Ubuntu Docker VM and running services;
- Pi-hole, Uptime Kuma and Nextcloud;
- Docker data migration to HDD-backed storage;
- weekly backup and health-check automation;
- troubleshooting case studies;
- skills, diagrams and a filterable evidence gallery.

Homelab claims and captions are derived from the supplied documentation, screenshots and diagrams.
Thesis claims are derived from the supplied thesis PDF. Security-lab claims and selected evidence are
derived from the supplied CSE5NSW assessment workbooks and redacted laboratory portfolio. Resume
facts are derived from the supplied 2026 resume. CSE5INE claims are derived from the approved
course summary, with seven reviewed figures copied from official instruction PDFs. Five
planned-capture cards remain for screenshots that are not yet available. ELE5001 claims and six
selected CelPlanner visuals are derived from the supplied project report; the raw assessment PDFs
and personal identifiers are not published.

## Local setup

Prerequisite: Node.js 22 or newer.

No third-party packages are required.

On Windows, use the included preview helper. It works with either a normal Node.js installation or
the Node.js runtime bundled with Codex:

```powershell
.\start-preview.ps1
```

If PowerShell blocks local scripts, run:

```powershell
powershell -ExecutionPolicy Bypass -File .\start-preview.ps1
```

If `npm` is installed, this command is equivalent:

```bash
npm run dev
```

Open `http://127.0.0.1:4173`.

## Production build

```bash
npm run build
npm test
```

The deployment-ready static site is written to `dist/`. Validation checks the content sections,
public assets, privacy-safe downloads and five planned screenshot placeholders, then smoke-tests
the page and a representative asset through the local server.

## Master’s thesis project

The portfolio includes a dedicated project section for:

**Design and Evaluation of a Geographic Information System-Assisted Hybrid Communication and Segmented Operational Technology Network Architecture for a Lagoon-Based Wastewater Treatment Plant**

The section documents:

- QGIS modelling of 423 infrastructure nodes and 395 communication links;
- LPWAN, Wi-Fi HaLow, 5G or fibre, and fibre-backhaul allocation;
- a 120-second ns-3 performance model;
- baseline, obstruction, traffic-load and combined sensitivity scenarios;
- flat-versus-segmented OT security testing;
- Packet Tracer validation of VLANs, redundancy, routing, an OT DMZ and firewall paths.

The download at `public/downloads/nihar-majalikar-masters-thesis-public.pdf` is a public-safe copy. The student ID on the cover and handwritten signature on the authorship page were removed. The original source PDF was not modified.

## CSE5INE intermediate network engineering

The CSE5INE case study documents eleven supervised university practical labs:

- Packet Tracer exploration, IPv4 subnetting and VLSM;
- basic router configuration and static routing in logical and physical modes;
- RIPv1, RIPv2 and a larger RIPv2 troubleshooting challenge;
- single-area OSPF, DR/BDR behaviour, an OSPF challenge and multi-area OSPF;
- basic BGP and a cumulative multi-protocol capstone.

The case study uses the Technical Editorial Control Plane sequence of challenge, decision,
implementation, evidence and learning. Seven PNG figures under
`public/assets/network-engineering/` are clearly labelled as official instruction-PDF references.
They illustrate lab scope; they are not presented as screenshots of the user's physical work or as
production deployment evidence.

The source summary PDF is not published, and no LMS PDF, Packet Tracer `.pka` file, score, student
identifier, LMS URL, device serial number, password or raw configuration is copied into the public
site.

## ELE5001 LTE-Advanced network planning

The ELE5001 case study documents a university planning and simulation project completed with
CelPlanner. It covers an 18.5 × 15.5 km service area, 18 tri-sector eNodeB sites, 54 cells, Band 8
frequency planning, antenna and power optimisation, composite coverage, C/I, maximum data rate and
traffic evaluation.

Reported simulation results include more than 91% downlink area above −90 dBm, 87% uplink area
above −93 dBm and C/I above 20 dB across 90% of the service area. The section also preserves the
important limitation that high offered traffic produced session rejection, showing that RF coverage
does not by itself prove adequate capacity.

Six visually reviewed, cropped PNGs under `public/assets/lte-network-planning/` come from the
authored report. The original project instructions, report and supporting laboratory report are not
published because they contain student identifiers and other unnecessary personal information.
The work is labelled as university simulation, never as a live carrier deployment.

## CSE5NSW security laboratory portfolio

The security project section documents ten controlled laboratory exercises:

- DNS, HTTP/HTTPS, FTP, email, NTP and AAA service configuration;
- packet-flow and PDU inspection in Cisco Packet Tracer;
- Telnet-versus-SSH analysis and standard/extended ACLs;
- a simulated remote-access IPsec VPN;
- hashing, signing, certificate verification and PGP/GPG encryption;
- secured cloud-service, smart-home and IoT intruder-detector scenarios.

Six selected pages are rendered under `public/assets/security-labs/`. They were visually reviewed
before publication. The raw assessment workbooks and the 97-page portfolio are not copied into the
public site because they contain additional simulated credentials and identities that are not needed
to demonstrate the work.

## Deploy with GitHub Pages

The repository includes `.github/workflows/deploy.yml`.

1. Push the site to the repository’s `main` branch.
2. Open **Settings → Pages** in GitHub.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and run **Deploy portfolio to GitHub Pages**, or push a new commit to `main`.
5. The workflow builds, validates and publishes `dist/` to the `github-pages` environment.

The site uses relative asset paths, so it works at the project URL:

`https://NiharMajalikar.github.io/homelab-portfolio/`

## Add the remaining screenshots

The gallery currently contains placeholders for:

- Portainer dashboard
- Tailscale admin dashboard
- GitHub Actions successful deployment
- Homelab status app
- Nextcloud mobile access

To replace a placeholder:

1. Add a redacted, publication-ready image under `public/assets/images/`.
2. Add its supported caption and accessible alt text to the `galleryItems` array in `script.js`.
3. Remove the matching entry from `plannedItems`.
4. Run the production build and validation again.

## Resume and LinkedIn

The portfolio links to the verified
[LinkedIn profile](https://www.linkedin.com/in/nihar-ravi-majalikar-1bb75b199/) and includes
`public/downloads/nihar-majalikar-resume-public.pdf`.

The public resume is rebuilt from the supplied resume content and intentionally omits the original
street location, postcode, personal email address and phone number. It includes clickable LinkedIn,
GitHub and portfolio links. The source DOCX is not modified or published.

## Content and security notes

- Only the redacted portfolio-ready screenshots are copied into the website.
- Raw CSE5NSW assignments are not published; only visually reviewed evidence pages are included.
- The CSE5INE source PDF and `.pka` files are not published; only reviewed instruction-reference PNGs are included.
- Raw ELE5001 assessment PDFs are not published; only six reviewed, cropped CelPlanner outputs are included.
- The Pi-hole capture documents query collection, but its domains-on-lists and blocked-query counts were zero at capture time; the site labels that context.
- The 100%-full Ubuntu root filesystem is presented as a troubleshooting “before” state.
- The original backup-script screenshot exposed a database password. The included image is redacted, but the repository notes that the password must be rotated before publishing.
- The public thesis download omits the student ID and handwritten signature contained in the source PDF.
- Thesis performance and security results are labelled as simulation-based; the thesis recommends field and production-grade validation before deployment.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── assets/
│   │   ├── images/         # 21 redacted homelab screenshots
│   │   ├── diagrams/       # 4 architecture/workflow diagrams
│   │   ├── lte-network-planning/ # 6 reviewed CelPlanner simulation outputs
│   │   ├── network-engineering/ # 7 reviewed CSE5INE instruction references
│   │   ├── security-labs/  # 6 reviewed CSE5NSW evidence pages
│   │   └── thesis/         # 4 rendered thesis evidence pages
│   └── downloads/          # Public-safe resume and thesis PDFs
├── scripts/
│   ├── build.mjs
│   ├── dev.mjs
│   ├── smoke.mjs
│   └── validate.mjs
├── index.html
├── script.js
├── start-preview.ps1       # Windows preview helper (npm not required)
├── styles.css
└── package.json
```
