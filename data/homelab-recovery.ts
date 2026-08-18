export const homelabStack = [
  "Proxmox virtualisation host",
  "Ubuntu Docker VM",
  "Pi-hole DNS filtering",
  "Uptime Kuma monitoring",
  "Nextcloud with MariaDB",
  "Portainer",
  "Homelab Status App",
  "Tailscale installed; external validation pending",
] as const;

export const recoverySteps = [
  {
    title: "Stabilised network identity",
    description:
      "Completed the private-LAN migration and created a DHCP reservation for the Ubuntu Docker VM.",
  },
  {
    title: "Diagnosed the service disruption",
    description:
      "Root-storage exhaustion was identified as the cause of MariaDB and Nextcloud disruption.",
  },
  {
    title: "Recovered storage capacity",
    description:
      "Expanded the LVM root volume from 19 GB to 38 GB, restoring available capacity and service health.",
  },
  {
    title: "Re-established Nextcloud access",
    description:
      "Updated the trusted-domain configuration for the new private LAN.",
  },
  {
    title: "Repaired the Pi-hole interface",
    description:
      "Backed up and regenerated an invalid TLS certificate bundle to restore the web interface.",
  },
  {
    title: "Restored DNS filtering",
    description:
      "Added the StevenBlack blocklist and rebuilt Gravity, resulting in 98,950 blocking domains.",
  },
  {
    title: "Revalidated service health",
    description:
      "Refreshed Uptime Kuma monitor targets and verified all core service monitors healthy.",
  },
] as const;
