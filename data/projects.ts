import type { Project } from "@/types/portfolio";
import { linkedInUrl } from "@/data/socials";

export const projects: Project[] = [
  {
    slug: "homelab-infrastructure",
    title: "Homelab Infrastructure and Monitoring Platform",
    summary:
      "A Proxmox-based personal lab for virtualisation, containerised services, DNS filtering, monitoring and hands-on recovery work.",
    description:
      "An Acer Nitro 5 is repurposed as a Proxmox host. An Ubuntu Docker VM runs Pi-hole, Uptime Kuma, Nextcloud with MariaDB, Portainer and a Homelab Status App. Tailscale is installed on the VM; external-access validation is pending.",
    categories: ["Homelab", "Cloud & Infrastructure", "Networking"],
    technologies: [
      "Proxmox VE",
      "Ubuntu Server",
      "Docker Compose",
      "Pi-hole",
      "Uptime Kuma",
      "Nextcloud",
      "MariaDB",
      "Portainer",
      "Tailscale",
      "GitHub Actions",
    ],
    challenge:
      "Migrate the service VM to a new private-LAN allocation, recover services affected by root-storage exhaustion and restore DNS filtering without exposing internal network details.",
    approach:
      "Reserved the VM address through DHCP, expanded the LVM root volume from 19 GB to 38 GB, updated Nextcloud trusted domains, regenerated Pi-hole's invalid TLS certificate bundle, rebuilt Gravity and refreshed Uptime Kuma targets.",
    outcomes: [
      "Restored MariaDB and Nextcloud service health after increasing root-volume capacity.",
      "Restored the Pi-hole web interface and DNS filtering with 98,950 blocking domains.",
      "Verified eight monitored endpoints up with no current down states in Uptime Kuma.",
    ],
    currentFeatures: [
      "Proxmox host and Ubuntu Docker VM",
      "Pi-hole DNS filtering",
      "Uptime Kuma monitoring",
      "Nextcloud with MariaDB",
      "Portainer and Homelab Status App",
      "Tailscale installed; external validation pending",
    ],
    plannedFeatures: [
      "Automated backup-integrity verification, restore testing and encrypted off-site copy",
      "AI-assisted alert summarisation",
      "Automated health recommendations",
      "Centralised operational dashboard",
      "Controlled patch automation and log analysis",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/NiharMajalikar/homelab-portfolio",
        external: true,
      },
      { label: "Recovery case study", href: "#migration-recovery" },
      { label: "Detailed architecture", href: "#homelab-mcp" },
      { label: "View evidence", href: "#evidence" },
    ],
    image: {
      src: "/assets/diagrams/homelab-architecture-2026-08.svg",
      alt: "Current homelab architecture showing the private LAN, Proxmox host, Ubuntu Docker virtual machine, Pi-hole, Uptime Kuma, Nextcloud with MariaDB, Portainer, Homelab Status App and Tailscale with validation pending",
      width: 1600,
      height: 900,
    },
    status: "Active",
    featured: true,
    evidenceNote:
      "Personal infrastructure project, not a production deployment. Local backup sets exist, but integrity, restore testing and off-site resilience remain unverified; Tailscale external access also remains unverified.",
  },
  {
    slug: "private-homelab-mcp",
    title: "Private Homelab MCP Control Plane",
    summary:
      "A read-only, privacy-preserving MCP integration for inspecting bounded homelab health evidence without exposing a public listener or granting change access.",
    description:
      "A dedicated Ubuntu Server utility VM connects Codex Desktop to three parameterless evidence tools through SSH standard input/output over a private route. Reports are redacted and validated before cloud reasoning; version 1.0 cannot apply changes.",
    categories: ["Homelab", "AI & Automation", "Cloud & Infrastructure"],
    technologies: [
      "Model Context Protocol",
      "Proxmox VE",
      "Ubuntu Server",
      "SSH stdio",
      "UFW",
      "JSON Schema",
    ],
    challenge:
      "Enable useful AI-assisted infrastructure inspection while preventing broad shell access, public exposure and leakage of private network or system details.",
    approach:
      "Separated the MCP utility from the production VM, used a forced read-only report command, exposed only three fixed tools and added size, schema, sensitivity and freshness checks that fail closed.",
    outcomes: [
      "Verified all three tools end to end from a fresh Codex task on 20 August 2026.",
      "Tested fresh-report acceptance plus private-address and stale-report rejection.",
      "Observed 6 of 6 approved services running, with system and data volumes at 49% and 6% used in the redacted snapshot.",
    ],
    currentFeatures: [
      "Dedicated MCP utility VM",
      "Three read-only, parameterless tools",
      "Private SSH stdio transport with no public listener",
      "Bounded, redacted JSON reports",
      "One-hour freshness enforcement",
      "Local draft workflow with explicit human approval boundary",
    ],
    plannedFeatures: [
      "Scheduled report refresh",
      "Backup-integrity verification and restore testing",
      "Encrypted off-site backup copy",
      "Read-only Proxmox evidence",
      "Narrow approval-gated actions in a future development pool",
    ],
    links: [{ label: "View case study", href: "#homelab-mcp" }],
    image: {
      src: "/assets/diagrams/private-homelab-mcp-architecture-2026-08.svg",
      alt: "Private homelab MCP architecture showing Codex Desktop connecting over SSH standard input and output to a dedicated utility virtual machine and three read-only redacted-report tools",
      width: 1600,
      height: 900,
    },
    status: "Active",
    featured: true,
    evidenceNote:
      "Personal engineering environment, not a production deployment. The handbook and raw infrastructure details remain private. Version 1.0 is read-only and backup integrity is not yet verified.",
  },
  {
    slug: "homelab-status-app",
    title: "Homelab Status Application",
    summary:
      "A lightweight Docker-hosted status page deployed through GitHub Actions to present the documented state of homelab services.",
    description:
      "Repository inspection confirms a static HTML service inventory, Docker packaging and a GitHub Actions workflow configured to join Tailscale and deploy over SSH. A successful deployment capture remains pending, and the displayed states are static labels rather than live probes.",
    categories: ["AI & Automation", "Homelab", "Cloud & Infrastructure"],
    technologies: [
      "HTML",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "Tailscale",
      "SSH",
    ],
    challenge:
      "Provide one simple operational view and automate deployment to a private homelab environment.",
    approach:
      "Containerised a small status page and configured a CI/CD path to check out the repository, join the private network and deploy to the homelab host.",
    outcomes: [
      "Created a central static inventory of seven named homelab services.",
      "Documented a repeatable Docker and GitHub Actions deployment path.",
      "Established a clear baseline for future live monitoring and deployment validation.",
    ],
    currentFeatures: [
      "Static service inventory",
      "Status labels",
      "Docker deployment",
      "Configured private CI/CD connection; validation pending",
    ],
    plannedFeatures: [
      "Live availability checks",
      "Response-time monitoring",
      "Alert presentation",
      "Automated status reporting",
    ],
    links: [
      {
        label: "Private repository",
        href: "https://github.com/NiharMajalikar/homelab-status-app",
        external: true,
        note: "The repository is currently private.",
      },
    ],
    status: "Active",
    evidenceNote:
      "Current and planned capabilities are deliberately separated after repository inspection.",
  },
  {
    slug: "hybrid-communications",
    title: "Hybrid Communication Architecture for a Water Treatment Plant",
    summary:
      "A Master's research project using GIS and network simulation to evaluate resilient communications for remote industrial monitoring.",
    description:
      "The study models a hybrid architecture for lagoon, pipeline and process monitoring. It compares LPWAN, Wi-Fi HaLow, 5G or fibre and fibre backhaul options, then evaluates packet delivery, delay, throughput and loss in simulation.",
    categories: ["Telecommunications", "Networking"],
    technologies: [
      "QGIS",
      "ns-3",
      "Cisco Packet Tracer",
      "C++",
      "Python",
      "LPWAN",
      "Wi-Fi HaLow",
    ],
    challenge:
      "Reduce coverage gaps and support reliable communications across geographically distributed sensors, CCTV nodes, RTUs, gateways and a central server.",
    approach:
      "Mapped 423 infrastructure nodes and 395 communication links, compared access and backhaul technologies, evaluated traffic in ns-3 and validated segmented routing concepts in Packet Tracer.",
    outcomes: [
      "Produced a GIS-assisted network plan and simulation evidence.",
      "Compared coverage, reliability, scalability and practical deployment trade-offs.",
      "Validated VLAN separation, redundant core paths and restricted inter-zone flows in a controlled model.",
    ],
    currentFeatures: [
      "GIS-assisted coverage and link planning",
      "Hybrid access and fibre-backhaul comparison",
      "Network performance simulation",
      "Segmented OT architecture model",
      "Redundant core-path validation",
    ],
    plannedFeatures: [
      "Conceptual microwave-backhaul alternatives",
      "Edge anomaly-detection integration",
      "SCADA-facing integration patterns",
      "Digital-twin extensions",
    ],
    links: [
      { label: "Research evidence", href: "#evidence" },
      {
        label: "Request thesis access",
        href: linkedInUrl,
        external: true,
        note: "Requests are reviewed before restricted OneDrive access is granted.",
      },
    ],
    image: {
      src: "/assets/thesis/qgis-hybrid-network-map.png",
      alt: "Sanitised QGIS map visualising the proposed hybrid communications layout for the research study",
      width: 993,
      height: 1404,
    },
    status: "Completed",
    featured: true,
    evidenceNote:
      "Academic research and simulation, not a production deployment. The full thesis is stored privately and shared only after an access request is reviewed.",
  },
  {
    slug: "lte-network-planning",
    title: "LTE-Advanced Radio Network Planning",
    summary:
      "A CelPlanner study balancing coverage, interference, data rate and capacity across an assigned service area.",
    description:
      "The university planning exercise used 18 tri-sector eNodeB sites and 54 cells, with evidence for morphology, channel allocation, coverage, interference, maximum data rate and traffic capacity.",
    categories: ["Telecommunications", "Networking"],
    technologies: [
      "CelPlanner",
      "LTE-Advanced",
      "RF planning",
      "Coverage modelling",
    ],
    challenge:
      "Create a defensible radio plan while balancing coverage quality, interference and concentrated traffic demand.",
    approach:
      "Iterated site placement, antenna configuration, frequency reuse and power settings, then compared multiple prediction layers.",
    outcomes: [
      "Documented coverage and interference predictions across the assigned area.",
      "Identified that strong coverage did not guarantee capacity under heavy simulated demand.",
      "Proposed capacity-focused optimisation steps without claiming a live deployment.",
    ],
    currentFeatures: [
      "18 tri-sector sites",
      "54 planned cells",
      "Coverage prediction",
      "Interference analysis",
      "Traffic simulation",
    ],
    links: [{ label: "View evidence", href: "#evidence" }],
    image: {
      src: "/assets/lte-network-planning/downlink-coverage-prediction.png",
      alt: "CelPlanner downlink coverage prediction for the assigned LTE-Advanced service area",
      width: 925,
      height: 590,
    },
    status: "Completed",
    featured: true,
    evidenceNote: "Controlled university simulation and planning work.",
  },
  {
    slug: "intermediate-network-engineering",
    title: "Intermediate Network Engineering Laboratory Sequence",
    summary:
      "Eleven supervised university practical labs progressing from VLSM and router setup to OSPF, eBGP and a multi-protocol capstone.",
    description:
      "The sequence covers addressing, router configuration, static routing, RIPv1/v2, OSPF and DR/BDR behaviour, multi-area OSPF, eBGP and layered verification.",
    categories: ["Networking"],
    technologies: ["Cisco IOS", "Packet Tracer", "VLSM", "RIP", "OSPF", "BGP"],
    challenge:
      "Configure progressively larger routed topologies and diagnose failures using protocol evidence rather than isolated commands.",
    approach:
      "Verified interface state, addressing, routing tables, neighbour state, ping and traceroute at each layer.",
    outcomes: [
      "Built a repeatable layered troubleshooting method.",
      "Compared routing protocol behaviour across increasing topology scope.",
      "Documented results with official instruction-derived diagrams and summaries.",
    ],
    currentFeatures: [
      "VLSM",
      "Static routing",
      "RIPv1/v2",
      "Single and multi-area OSPF",
      "eBGP",
      "Multi-protocol capstone",
    ],
    links: [{ label: "View evidence", href: "#evidence" }],
    image: {
      src: "/assets/network-engineering/multi-area-ospf-topology.png",
      alt: "Instruction-derived multi-area OSPF topology used to explain the supervised university lab scope",
      width: 1034,
      height: 784,
    },
    status: "Documented labs",
    evidenceNote:
      "Controlled university lab work; not a production network deployment.",
  },
  {
    slug: "network-security-labs",
    title: "Network Systems and Web Security Laboratory Portfolio",
    summary:
      "Ten controlled exercises connecting network services, secure access, packet analysis, cryptography, VPNs and simulated cloud or IoT controls.",
    description:
      "The portfolio covers DNS, HTTP/HTTPS, FTP, email, NTP, AAA, Telnet/SSH comparison, ACLs, remote-access IPsec, hashing, signing, certificates and PGP/GPG.",
    categories: ["Networking", "Cloud & Infrastructure"],
    technologies: [
      "Packet Tracer",
      "Wireshark",
      "SSH",
      "ACLs",
      "IPsec",
      "TLS",
      "PGP/GPG",
    ],
    challenge:
      "Connect protocol behaviour to practical security controls and verify what changes in packet flow and access.",
    approach:
      "Configured controlled scenarios, inspected protocol data, compared insecure and protected paths and documented outcomes.",
    outcomes: [
      "Connected packet-level observations to secure-access decisions.",
      "Applied standard and extended ACLs and analysed an IPsec VPN path.",
      "Documented cryptographic and certificate-verification exercises.",
    ],
    currentFeatures: [
      "Network services",
      "SSH and ACL analysis",
      "IPsec VPN",
      "Hashing and signing",
      "Certificates",
      "Cloud and IoT controls",
    ],
    links: [{ label: "View evidence", href: "#evidence" }],
    image: {
      src: "/assets/security-labs/ssh-encrypted-packet-analysis.jpg",
      alt: "Controlled lab evidence comparing encrypted SSH packet behaviour",
      width: 1020,
      height: 1320,
    },
    status: "Documented labs",
    evidenceNote: "Controlled university laboratory and simulation exercises.",
  },
  {
    slug: "face-recognition-glasses",
    title: "Face Recognition Glasses for Visually Impaired Users",
    summary:
      "An undergraduate assistive-technology prototype combining face recognition, obstacle sensing and audio feedback.",
    description:
      "The prototype was designed to recognise known people, detect nearby obstacles and provide spoken assistance to improve environmental awareness for visually impaired users.",
    categories: ["Assistive Technology", "AI & Automation"],
    technologies: [
      "Raspberry Pi",
      "Pi Camera",
      "OpenCV",
      "Python",
      "Ultrasonic sensing",
      "Text-to-speech",
    ],
    challenge:
      "Combine computer vision and proximity sensing in a wearable-oriented concept that communicates useful information without relying on a visual display.",
    approach:
      "Used a Raspberry Pi and camera for known-face recognition, an ultrasonic sensor for nearby obstacles and text-to-speech for audio output.",
    outcomes: [
      "Integrated hardware sensing, computer vision and audio feedback in an academic prototype.",
      "Practised Python, OpenCV and embedded-system integration.",
      "Explored accessibility-focused design constraints without claiming commercial readiness.",
    ],
    currentFeatures: [
      "Known-person recognition concept",
      "Obstacle detection",
      "Audio assistance",
      "Raspberry Pi prototype",
    ],
    links: [],
    status: "Prototype",
    featured: true,
    evidenceNote:
      "Academic prototype; no unsupported accuracy, reliability or commercial-readiness claims are made.",
  },
];
