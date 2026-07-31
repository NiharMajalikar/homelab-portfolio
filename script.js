const galleryItems = [
  {
    category: "proxmox",
    label: "Physical infrastructure",
    title: "Physical Homelab Setup",
    src: "./assets/images/01_physical_homelab_setup.png",
    alt: "Acer Nitro 5 homelab server connected by Ethernet to a Netgear RAX10 router",
    caption: "Acer Nitro 5 repurposed as a Proxmox server and connected by Ethernet to a Netgear RAX10 router.",
  },
  {
    category: "proxmox",
    label: "Proxmox",
    title: "Proxmox MFA",
    src: "./assets/images/02_proxmox_mfa.png",
    alt: "Proxmox authentication screen configured with time-based one-time-password multi-factor authentication",
    caption: "Administrative access protected with time-based one-time-password multi-factor authentication.",
  },
  {
    category: "proxmox",
    label: "Proxmox",
    title: "Datacenter Dashboard",
    src: "./assets/images/03_proxmox_datacenter_dashboard.png",
    alt: "Proxmox datacenter dashboard showing the standalone host and online Ubuntu Docker virtual machine",
    caption: "Standalone Proxmox node with the Ubuntu Docker VM online and host utilisation, storage and uptime visible.",
  },
  {
    category: "proxmox",
    label: "Proxmox",
    title: "Storage Configuration",
    src: "./assets/images/04_proxmox_storage_configuration.png",
    alt: "Proxmox storage view showing separate directory and LVM-backed storage pools",
    caption: "Separate directory and LVM-backed storage pools, including HDD1TB for VM disks, ISO images, backups and container content.",
  },
  {
    category: "proxmox",
    label: "Proxmox",
    title: "HDD Storage Summary",
    src: "./assets/images/05_proxmox_hdd_storage.png",
    alt: "Proxmox HDD storage summary showing approximately 983 gigabytes of capacity",
    caption: "HDD-backed Proxmox storage providing approximately 983 GB of capacity.",
  },
  {
    category: "proxmox",
    label: "Proxmox",
    title: "Ubuntu VM Summary",
    src: "./assets/images/06_ubuntu_vm_summary.png",
    alt: "Proxmox Ubuntu virtual machine summary showing two virtual CPUs, four gigabytes of RAM and a forty gigabyte boot disk",
    caption: "Ubuntu VM running with two virtual CPUs, 4 GB RAM, a 40 GB boot disk and monitored utilisation.",
  },
  {
    category: "docker",
    label: "Ubuntu & Docker",
    title: "Ubuntu Server Details",
    src: "./assets/images/07_ubuntu_server_details.png",
    alt: "Ubuntu system details showing the virtual machine running under KVM and QEMU",
    caption: "Ubuntu virtual machine running under KVM/QEMU and acting as the Docker host.",
  },
  {
    category: "docker",
    label: "Ubuntu & Docker",
    title: "Docker Running Services",
    src: "./assets/images/08_docker_running_services.png",
    alt: "Terminal listing Docker containers for Pi-hole, Uptime Kuma, Portainer, Nextcloud, MariaDB and the status app",
    caption: "Pi-hole, Uptime Kuma, Portainer, Nextcloud, MariaDB and the CI/CD-deployed status app running as containers.",
  },
  {
    category: "docker",
    label: "Ubuntu & Docker",
    title: "Ubuntu Storage Layout",
    src: "./assets/images/09_ubuntu_storage_layout.png",
    alt: "Ubuntu storage layout showing system disks and an additional HDD-backed virtual disk mounted at /mnt/hdd1tb",
    caption: "System and additional HDD-backed virtual disks, including /mnt/hdd1tb.",
  },
  {
    category: "docker",
    label: "Ubuntu & Docker",
    title: "Docker Data Root Migration",
    src: "./assets/images/10_docker_data_root_and_storage.png",
    alt: "Terminal verification of Docker data redirected to /mnt/hdd1tb/docker",
    caption: "Docker data redirected to /mnt/hdd1tb/docker after diagnosing root-disk capacity pressure.",
  },
  {
    category: "services",
    label: "Pi-hole",
    title: "Pi-hole Dashboard",
    src: "./assets/images/11_pihole_dashboard.png",
    alt: "Pi-hole dashboard showing DNS query activity collected from multiple clients",
    caption: "DNS query activity from multiple clients displayed through the Pi-hole dashboard.",
  },
  {
    category: "services",
    label: "Pi-hole",
    title: "DNS Analytics",
    src: "./assets/images/12_pihole_dns_analytics.png",
    alt: "Pi-hole DNS analytics showing query types, cache activity, upstream resolvers and domain statistics",
    caption: "Query types, cache activity, upstream resolvers and domain statistics.",
  },
  {
    category: "services",
    label: "Pi-hole",
    title: "Client Activity",
    src: "./assets/images/13_pihole_client_activity_redacted.png",
    alt: "Redacted Pi-hole client-level DNS activity across LAN, Docker and Tailscale devices",
    caption: "Redacted client-level DNS activity across LAN, Docker and Tailscale-connected devices.",
  },
  {
    category: "services",
    label: "Pi-hole",
    title: "Group Management",
    src: "./assets/images/14_pihole_group_management.png",
    alt: "Pi-hole group management page showing DNS policy groups for device categories",
    caption: "Group-based DNS policy management for different device categories.",
  },
  {
    category: "services",
    label: "Pi-hole",
    title: "Client Configuration",
    src: "./assets/images/15_pihole_clients_redacted.png",
    alt: "Redacted Pi-hole clients page showing device-level configuration and group assignment",
    caption: "Redacted device-level configuration and group assignment.",
  },
  {
    category: "services",
    label: "Uptime Kuma",
    title: "Monitoring Dashboard",
    src: "./assets/images/16_uptime_kuma_dashboard.png",
    alt: "Uptime Kuma dashboard showing eleven active monitors across the homelab",
    caption: "Eleven active monitors covering Proxmox, Ubuntu, Pi-hole, Portainer, Nextcloud, backups, Tailscale and the CI/CD app.",
  },
  {
    category: "services",
    label: "Nextcloud",
    title: "Nextcloud Private Cloud",
    src: "./assets/images/17_nextcloud_dashboard.png",
    alt: "Dashboard of the self-hosted Nextcloud private cloud running in Docker",
    caption: "Self-hosted Nextcloud application running in Docker and accessible through the private network.",
  },
  {
    category: "backup",
    label: "Backup automation",
    title: "Backup Script",
    src: "./assets/images/18_backup_script_redacted.png",
    alt: "Redacted Bash backup script for MariaDB, Nextcloud data, Docker configuration and health status",
    caption: "Redacted Bash workflow for MariaDB export, Nextcloud data archive, Docker configuration backup and health-status update.",
  },
  {
    category: "backup",
    label: "Backup automation",
    title: "Backup History",
    src: "./assets/images/19_backup_history.png",
    alt: "Terminal listing timestamped weekly homelab backup directories",
    caption: "Timestamped weekly backup directories demonstrating repeated scheduled execution.",
  },
  {
    category: "backup",
    label: "Backup automation",
    title: "Weekly Backup Cron",
    src: "./assets/images/20_weekly_backup_cron.png",
    alt: "Cron entry scheduling the homelab backup every Sunday at two in the morning",
    caption: "Backup scheduled every Sunday at 2:00 AM with output redirected to a persistent log.",
  },
  {
    category: "backup",
    label: "Backup automation",
    title: "Backup Health Status",
    src: "./assets/images/21_backup_health_status.png",
    alt: "Backup health status showing the timestamp of the most recent successful backup",
    caption: "Timestamp of the most recent successful backup used by the Uptime Kuma status monitor.",
  },
  {
    category: "diagrams",
    label: "Architecture diagram",
    title: "Current Homelab Architecture",
    src: "./assets/diagrams/22_architecture_diagram.png",
    alt: "Architecture diagram linking remote devices, Tailscale, the home LAN, Proxmox, Ubuntu, Docker services, mounted storage and automation",
    caption: "Secure remote access, self-hosted services, monitoring, storage and CI/CD across the current homelab.",
  },
  {
    category: "diagrams",
    label: "Network diagram",
    title: "Remote Access & DNS",
    src: "./assets/diagrams/23_remote_dns_flow.png",
    alt: "Remote DNS flow from a phone or laptop through Tailscale to the Ubuntu VM, Pi-hole, self-hosted services and upstream DNS",
    caption: "Private Tailscale routing to self-hosted services and Pi-hole DNS filtering.",
  },
  {
    category: "diagrams",
    label: "Automation diagram",
    title: "Backup & Health Check",
    src: "./assets/diagrams/24_backup_flow.png",
    alt: "Backup workflow from cron through the backup script, MariaDB dump, data archive, configuration copy, mounted storage and Uptime Kuma health check",
    caption: "Sunday backup schedule, data collection, mounted storage and monitored health status.",
  },
  {
    category: "diagrams",
    label: "CI/CD diagram",
    title: "CI/CD Deployment",
    src: "./assets/diagrams/25_cicd_flow.png",
    alt: "CI/CD flow from a Git push through GitHub Actions and a temporary Tailscale runner to SSH, Docker Compose, the status app and Uptime Kuma",
    caption: "Every push to main rebuilds and redeploys the containerised status page through the documented private path.",
  },
  {
    category: "thesis",
    label: "Master’s thesis · QGIS",
    title: "Hybrid Communication Map",
    src: "./assets/thesis/qgis-hybrid-network-map.png",
    alt: "Thesis page showing a technology-coloured QGIS communication-link map for the lagoon-based wastewater treatment plant case study",
    caption: "QGIS-assisted spatial model showing the hybrid technology layout and link distribution across the case-study site.",
  },
  {
    category: "thesis",
    label: "Master’s thesis · Packet Tracer",
    title: "Segmented OT Topology",
    src: "./assets/thesis/packet-tracer-ot-topology.png",
    alt: "Thesis page showing a Packet Tracer topology with field, core, vendor and SCADA security zones",
    caption: "Packet Tracer topology used to verify VLAN zoning, routing, gateway-to-firewall transit and controlled SCADA access paths.",
  },
  {
    category: "thesis",
    label: "Master’s thesis · ns-3",
    title: "Baseline Performance Results",
    src: "./assets/thesis/baseline-performance-results.png",
    alt: "Thesis results page comparing packet delivery ratio, delay, throughput and loss across communication technologies",
    caption: "Baseline ns-3 results comparing LPWAN, Wi-Fi HaLow, 5G or fibre and fibre communication tiers.",
  },
  {
    category: "thesis",
    label: "Master’s thesis · OT security",
    title: "Segmentation Security Results",
    src: "./assets/thesis/segmentation-security-results.png",
    alt: "Thesis results page comparing attack packets reaching SCADA in a flat network with packets blocked by segmented policy",
    caption: "All nine unauthorised candidate flows were blocked by the segmented policy in the simulation model.",
  },
  {
    category: "lte",
    label: "ELE5001 · CelPlanner simulation",
    title: "Service-area Morphology",
    src: "./assets/lte-network-planning/service-area-morphology.png",
    alt: "CelPlanner morphology view of the simulated service area with 18 tri-sector eNodeB sites distributed across the map",
    caption: "Land-use context and the 18-site layout used for the LTE-Advanced radio-planning model.",
    width: 930,
    height: 593,
  },
  {
    category: "lte",
    label: "ELE5001 · CelPlanner simulation",
    title: "Channel Allocation",
    src: "./assets/lte-network-planning/channel-allocation-pattern.png",
    alt: "Annotated CelPlanner map showing the three-sector channel allocation groups across 18 eNodeB sites",
    caption: "Hand-checked channel groups supporting a three-sector reuse plan across the simulated sites.",
    width: 920,
    height: 1240,
  },
  {
    category: "lte",
    label: "ELE5001 · CelPlanner simulation",
    title: "Downlink Coverage",
    src: "./assets/lte-network-planning/downlink-coverage-prediction.png",
    alt: "CelPlanner composite downlink coverage prediction showing most of the simulated service area in the strongest blue coverage band",
    caption: "Composite prediction supporting the report’s greater-than-91-percent area above the −90 dBm target.",
    width: 925,
    height: 590,
  },
  {
    category: "lte",
    label: "ELE5001 · CelPlanner simulation",
    title: "Downlink Interference",
    src: "./assets/lte-network-planning/downlink-interference-prediction.png",
    alt: "CelPlanner downlink carrier-to-interference prediction showing sector-shaped signal regions across the service area",
    caption: "C/I prediction used to assess the frequency-reuse and antenna-tuning decisions.",
    width: 925,
    height: 610,
  },
  {
    category: "lte",
    label: "ELE5001 · CelPlanner simulation",
    title: "Maximum Data Rate",
    src: "./assets/lte-network-planning/maximum-data-rate-prediction.png",
    alt: "CelPlanner maximum downlink data-rate prediction with highest-rate red and green regions concentrated around cell centres",
    caption: "Maximum-rate prediction showing stronger performance near cell centres and lower rates toward sector edges.",
    width: 925,
    height: 565,
  },
  {
    category: "lte",
    label: "ELE5001 · CelPlanner simulation",
    title: "Traffic Capacity",
    src: "./assets/lte-network-planning/traffic-capacity-prediction.png",
    alt: "CelPlanner outdoor traffic simulation showing concentrated rejected-session markers in parts of the service area",
    caption: "Traffic evidence revealing a capacity constraint that coverage and interference results alone did not show.",
    width: 925,
    height: 618,
  },
  {
    category: "routing",
    label: "CSE5INE · Official lab reference",
    title: "Packet Tracer Workspace",
    src: "./assets/network-engineering/packet-tracer-interface.png",
    alt: "Cisco Packet Tracer interface showing logical, physical, real-time and simulation workspace controls",
    caption: "Instruction-PDF reference for the logical, physical, real-time and simulation modes used in the opening lab.",
    width: 804,
    height: 614,
  },
  {
    category: "routing",
    label: "CSE5INE · Official lab reference",
    title: "Basic Router Topology",
    src: "./assets/network-engineering/basic-router-topology.png",
    alt: "Basic lab topology with two computers connected through a switch and router",
    caption: "Instruction-PDF reference for IOS device, interface and end-to-end connectivity configuration.",
    width: 959,
    height: 309,
  },
  {
    category: "routing",
    label: "CSE5INE · Official lab reference",
    title: "Static Routing Topology",
    src: "./assets/network-engineering/static-routing-topology.png",
    alt: "Static-routing lab topology with three routers connected in a triangle and three endpoint networks",
    caption: "Instruction-PDF reference used to frame manual route, routing-table, ping and traceroute checks.",
    width: 994,
    height: 574,
  },
  {
    category: "routing",
    label: "CSE5INE · Official lab reference",
    title: "RIPv2 Topology",
    src: "./assets/network-engineering/ripv2-topology.png",
    alt: "RIPv2 lab topology with three routers, multiple local networks and point-to-point links",
    caption: "Instruction-PDF reference for classless advertisements, summarisation control and learned-route verification.",
    width: 979,
    height: 494,
  },
  {
    category: "routing",
    label: "CSE5INE · Official lab reference",
    title: "OSPF Challenge Topology",
    src: "./assets/network-engineering/ospf-challenge-topology.png",
    alt: "OSPF challenge reference topology with headquarters and two branch routers linked at different bandwidths",
    caption: "Instruction-PDF reference for OSPF area, wildcard, interface-state and route-propagation troubleshooting.",
    width: 919,
    height: 554,
  },
  {
    category: "routing",
    label: "CSE5INE · Official lab reference",
    title: "Multi-area OSPF Topology",
    src: "./assets/network-engineering/multi-area-ospf-topology.png",
    alt: "Multi-area OSPF reference topology showing three routers, endpoint networks and areas zero and one",
    caption: "Instruction-PDF reference for neighbour formation, area boundaries and link-state advertisement analysis.",
    width: 1034,
    height: 784,
  },
  {
    category: "routing",
    label: "CSE5INE · Official lab reference",
    title: "BGP Topology",
    src: "./assets/network-engineering/bgp-topology.png",
    alt: "BGP reference topology with three routers connecting two endpoint networks across two autonomous systems",
    caption: "Instruction-PDF reference for autonomous-system neighbours, network advertisements and learned-path verification.",
    width: 999,
    height: 484,
  },
  {
    category: "security",
    label: "CSE5NSW · Packet Tracer",
    title: "Network Services Topology",
    src: "./assets/security-labs/packet-tracer-network-topology.jpg",
    alt: "Cisco Packet Tracer topology with separate DNS and HTTP server networks connected through a router",
    caption: "Two simulated subnets used to configure DNS and HTTP services and trace routed request and response traffic.",
    width: 1020,
    height: 1320,
  },
  {
    category: "security",
    label: "CSE5NSW · Packet analysis",
    title: "ICMP PDU Analysis",
    src: "./assets/security-labs/packet-sniffer-pdu-analysis.jpg",
    alt: "Cisco Packet Tracer PDU detail showing Ethernet, IP and ICMP fields for an echo request",
    caption: "Inbound PDU evidence used to inspect Ethernet, IP and ICMP layers in a controlled packet-sniffing exercise.",
    width: 1020,
    height: 1320,
  },
  {
    category: "security",
    label: "CSE5NSW · Secure access",
    title: "SSH Encrypted Packet",
    src: "./assets/security-labs/ssh-encrypted-packet-analysis.jpg",
    alt: "Cisco Packet Tracer sniffer view identifying SSH traffic and encrypted variable-length data",
    caption: "SSH traffic appears with encrypted payload data, supporting the comparison with visible Telnet traffic.",
    width: 1020,
    height: 1320,
  },
  {
    category: "security",
    label: "CSE5NSW · IPsec VPN",
    title: "VPN Traffic Baseline",
    src: "./assets/security-labs/ipsec-vpn-traffic-analysis.jpg",
    alt: "Cisco Packet Tracer page comparing packet sniffer views around a simulated remote-access IPsec VPN path",
    caption: "Two sniffer positions establish a traffic baseline before the simulated remote-access VPN is enabled.",
    width: 1020,
    height: 1320,
  },
  {
    category: "security",
    label: "CSE5NSW · Cloud & IoT",
    title: "Secured Cloud IoT Topology",
    src: "./assets/security-labs/secured-cloud-iot-topology.jpg",
    alt: "Cisco Packet Tracer topology connecting a cloud service provider, warehouse IoT network and external test network",
    caption: "Simulated cloud, warehouse IoT and external networks used to test HTTPS-only service access and ACL restrictions.",
    width: 1020,
    height: 1320,
  },
  {
    category: "security",
    label: "CSE5NSW · IoT",
    title: "Intruder Detector Topology",
    src: "./assets/security-labs/iot-intruder-detector-topology.jpg",
    alt: "Cisco Packet Tracer IoT topology with a home gateway, motion detector, siren, webcam and tablet",
    caption: "Starting topology for a simulated IoT intruder detector using motion-triggered siren and webcam conditions.",
    width: 1020,
    height: 1320,
  },
];

const plannedItems = [
  "Portainer dashboard",
  "Tailscale admin dashboard",
  "GitHub Actions successful deployment",
  "Homelab status app",
  "Nextcloud mobile access",
];

const galleryGrid = document.querySelector("#gallery-grid");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxCategory = document.querySelector("#lightbox-category");
const closeLightbox = document.querySelector(".lightbox-close");
let lightboxTrigger = null;

function createGalleryItem(item, index) {
  const article = document.createElement("article");
  article.className = "gallery-item";
  article.dataset.category = item.category;

  const button = document.createElement("button");
  button.className = "gallery-open";
  button.type = "button";
  button.dataset.index = String(index);
  button.setAttribute("aria-label", `Open ${item.title}`);

  const imageWrap = document.createElement("div");
  imageWrap.className = "gallery-image-wrap";

  const image = document.createElement("img");
  image.src = item.src;
  image.alt = item.alt;
  image.loading = "lazy";
  image.decoding = "async";
  if (item.width && item.height) {
    image.width = item.width;
    image.height = item.height;
  }
  imageWrap.append(image);

  const meta = document.createElement("div");
  meta.className = "gallery-meta";

  const category = document.createElement("span");
  category.className = "gallery-category";
  category.textContent = item.label;

  const title = document.createElement("strong");
  title.textContent = item.title;

  const caption = document.createElement("p");
  caption.textContent = item.caption;

  meta.append(category, title, caption);
  button.append(imageWrap, meta);
  article.append(button);
  return article;
}

function createPlaceholder(title) {
  const article = document.createElement("article");
  article.className = "gallery-item placeholder-card";
  article.dataset.category = "planned";

  const visual = document.createElement("div");
  visual.className = "placeholder-visual";
  visual.setAttribute("aria-hidden", "true");
  visual.innerHTML =
    '<div class="placeholder-network"><span></span><span></span><span></span></div>';

  const category = document.createElement("span");
  category.className = "gallery-category";
  category.textContent = "Planned capture";

  const heading = document.createElement("strong");
  heading.textContent = title;

  const note = document.createElement("p");
  note.textContent = "Screenshot placeholder — image will be added after the infrastructure is rebuilt.";

  article.append(visual, category, heading, note);
  return article;
}

const galleryFragment = document.createDocumentFragment();
galleryItems.forEach((item, index) => galleryFragment.append(createGalleryItem(item, index)));
plannedItems.forEach((title) => galleryFragment.append(createPlaceholder(title)));
galleryGrid.append(galleryFragment);

function filterGallery(filter) {
  const items = galleryGrid.querySelectorAll(".gallery-item");
  items.forEach((item) => {
    item.hidden = filter !== "all" && item.dataset.category !== filter;
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((candidate) => {
      candidate.classList.toggle("active", candidate === button);
      candidate.setAttribute("aria-pressed", String(candidate === button));
    });
    filterGallery(button.dataset.filter);
  });
});

galleryGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".gallery-open");
  if (!button) return;

  const item = galleryItems[Number(button.dataset.index)];
  lightboxTrigger = button;
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxTitle.textContent = item.title;
  lightboxCaption.textContent = item.caption;
  lightboxCategory.textContent = item.label;

  if (typeof lightbox.showModal === "function") {
    lightbox.showModal();
  } else {
    lightbox.setAttribute("open", "");
  }
});

closeLightbox.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("cancel", (event) => {
  event.preventDefault();
  lightbox.close();
});
lightbox.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  event.preventDefault();
  lightbox.close();
});
lightbox.addEventListener("close", () => {
  lightboxTrigger?.focus();
  lightboxTrigger = null;
});
lightbox.addEventListener("click", (event) => {
  const bounds = lightbox.getBoundingClientRect();
  const clickedBackdrop =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;
  if (clickedBackdrop) lightbox.close();
});

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector("#primary-nav");

navToggle.addEventListener("click", () => {
  const open = primaryNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});

primaryNav.addEventListener("click", (event) => {
  if (!event.target.matches("a")) return;
  primaryNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    primaryNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
