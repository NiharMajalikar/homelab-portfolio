export const evidence = [
  {
    src: "/assets/images/homelab-proxmox-overview-2026-08.webp",
    alt: "Cropped Proxmox datacenter summary showing one online host, one running Ubuntu Docker virtual machine, and aggregate CPU, memory and storage usage",
    width: 1744,
    height: 901,
    caption:
      "Proxmox virtualisation overview with the Ubuntu Docker VM running and host resources visible.",
  },
  {
    src: "/assets/images/homelab-portainer-overview-2026-08.webp",
    alt: "Redacted Portainer environment overview showing a connected local Docker environment with six running containers and no stopped containers",
    width: 2035,
    height: 773,
    caption:
      "Portainer confirms the local Docker environment is connected, with six containers running and none stopped.",
  },
  {
    src: "/assets/images/homelab-nextcloud-dashboard-2026-08.webp",
    alt: "Cropped Nextcloud dashboard showing the private-cloud interface and default dashboard widgets without private files or account details",
    width: 1815,
    height: 867,
    caption:
      "Working Nextcloud private-cloud dashboard with account controls and private content excluded.",
  },
  {
    src: "/assets/images/homelab-pihole-mobile-dashboard-2026-08.webp",
    alt: "Cropped Pi-hole mobile dashboard showing 2,866 total DNS queries, 435 blocked queries, 15.2 percent blocked, and 98,950 domains on blocklists",
    width: 943,
    height: 1668,
    caption:
      "Pi-hole DNS filtering monitored from a mobile device, with 98,950 blocking domains and active query blocking.",
  },
  {
    src: "/assets/images/homelab-uptime-kuma-health-2026-08.webp",
    alt: "Cropped Uptime Kuma quick statistics showing eight monitors up and zero down, in maintenance, unknown or paused",
    width: 2151,
    height: 731,
    caption:
      "Uptime Kuma shows eight monitored endpoints up, with no current down, maintenance, unknown or paused states.",
  },
  {
    src: "/assets/thesis/packet-tracer-ot-topology.png",
    alt: "Sanitised Packet Tracer topology used to evaluate segmented operational technology communications",
    width: 993,
    height: 1404,
    caption:
      "Controlled segmentation and routing model from the Master's research project.",
  },
  {
    src: "/assets/network-engineering/bgp-topology.png",
    alt: "Instruction-derived BGP topology from the supervised intermediate network engineering laboratory sequence",
    width: 999,
    height: 484,
    caption:
      "BGP topology reference from a supervised university practical lab.",
  },
  {
    src: "/assets/lte-network-planning/downlink-interference-prediction.png",
    alt: "CelPlanner downlink interference prediction for the LTE-Advanced university planning study",
    width: 925,
    height: 610,
    caption: "Interference analysis from the LTE-Advanced planning exercise.",
  },
] as const;

export const plannedCaptures = [
  "Tailscale admin dashboard",
  "GitHub Actions successful deployment",
  "Homelab status application",
  "Nextcloud mobile access",
] as const;
