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
