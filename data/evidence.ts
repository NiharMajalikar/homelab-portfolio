export const evidence = [
  {
    src: "/assets/images/03_proxmox_datacenter_dashboard.png",
    alt: "Sanitised Proxmox datacenter dashboard showing the host, storage and Ubuntu virtual machine",
    width: 1924,
    height: 674,
    caption:
      "Proxmox virtualisation overview with the Ubuntu service VM online.",
  },
  {
    src: "/assets/images/16_uptime_kuma_dashboard.png",
    alt: "Uptime Kuma dashboard showing monitored homelab services and availability states",
    width: 1924,
    height: 931,
    caption: "Availability monitoring across the documented homelab services.",
  },
  {
    src: "/assets/images/21_backup_health_status.png",
    alt: "Status display presenting the result of the most recent scheduled homelab backup",
    width: 1119,
    height: 592,
    caption: "A visible health signal for the scheduled backup workflow.",
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
  "Portainer dashboard",
  "Tailscale admin dashboard",
  "GitHub Actions successful deployment",
  "Homelab status application",
  "Nextcloud mobile access",
] as const;
