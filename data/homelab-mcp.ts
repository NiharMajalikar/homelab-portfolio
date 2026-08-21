export const mcpTools = [
  {
    name: "get_docker_status",
    purpose:
      "Returns the approved service-health summary without container identifiers, images, ports or logs.",
  },
  {
    name: "get_disk_usage",
    purpose:
      "Returns bounded system and data-volume utilisation without device names, mount paths or filenames.",
  },
  {
    name: "get_backup_summary",
    purpose:
      "Reports backup-set and manifest presence without filenames, paths, hashes or database content.",
  },
] as const;

export const mcpSnapshot = [
  { value: "3", label: "read-only tools" },
  { value: "6/6", label: "approved services running" },
  { value: "49%", label: "system volume used" },
  { value: "6%", label: "data volume used" },
] as const;

export const mcpArchitecture = [
  {
    title: "Codex Desktop",
    description: "Requests only approved, parameterless evidence tools.",
  },
  {
    title: "Private SSH stdio route",
    description: "No public listener, callback or reverse proxy.",
  },
  {
    title: "Dedicated MCP utility VM",
    description: "Validates freshness, schema, size and sensitive content.",
  },
  {
    title: "Forced report command",
    description: "Provides bounded, redacted evidence from the production VM.",
  },
] as const;

export const mcpRoadmap = [
  "Schedule report refresh without weakening freshness checks",
  "Verify backup integrity, perform a restore test and add an encrypted off-site copy",
  "Add read-only Proxmox evidence before any narrowly approval-gated development-pool action",
] as const;

export const mcpReferencePanels = [
  {
    src: "/assets/diagrams/homelab-reference/private-homelab-infrastructure-2026-08.webp",
    width: 2800,
    height: 1407,
    title: "Infrastructure boundaries",
    alt: "Detailed private homelab infrastructure diagram showing trusted clients, Tailscale and private LAN access, the Proxmox host, separate Ubuntu Docker and MCP virtual machines, redacted reports, local backup sets and an explicit approval gate",
    caption:
      "Reference view of trusted clients, private access, Proxmox, separate utility and production VMs, redacted reports, local backup sets and the approval gate.",
    layout: "wide",
  },
  {
    src: "/assets/diagrams/homelab-reference/homelab-service-data-flow-2026-08.webp",
    width: 2480,
    height: 2200,
    title: "Service and data flow",
    alt: "Detailed homelab service and data-flow diagram showing home and remote clients, the LAN gateway, Tailscale, Pi-hole, Nextcloud, MariaDB, Uptime Kuma, Portainer, the Homelab Status App, local backups and redacted reports",
    caption:
      "Reference view of DNS, private-cloud, monitoring, container-management, backup and redacted-report flows.",
    layout: "portrait",
  },
  {
    src: "/assets/diagrams/homelab-reference/homelab-read-only-approval-flow-2026-08.webp",
    width: 3200,
    height: 570,
    title: "Read-only and approval workflow",
    alt: "Read-only homelab MCP workflow showing three allowlisted tools, redacted evidence, evidence-based diagnosis, an isolated draft workspace, explicit approval and a future execution branch that is unavailable in the current MCP",
    caption:
      "Current read-only inspection and local drafting lead to an approval decision. The execution branch is future design; version 1.0 cannot apply changes.",
    layout: "wide",
  },
] as const;
