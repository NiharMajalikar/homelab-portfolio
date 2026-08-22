export const thesisDiagramSource = {
  src: "/assets/thesis/thesis-journey-portfolio-diagrams-2026-08.png",
  width: 22056,
  height: 3144,
};

export const thesisDiagramPanels = [
  {
    id: "overview",
    eyebrow: "01 / End-to-end story",
    title: "Portfolio Project Overview",
    summary:
      "A concise view of how the research moved from a geographically distributed monitoring problem to GIS planning, technology selection, simulation, security comparison and controlled implementation validation.",
    alt: "Thesis project overview showing the wastewater-plant communications problem progressing through hybrid architecture research, QGIS planning, technology assignment, ns-3 evaluation, security comparison and Packet Tracer validation",
    caption:
      "Problem to outcome: QGIS mapped 423 nodes and 395 links; hybrid access and backhaul options were evaluated in ns-3 before VLAN, routing, HSRP and ASA ACL behaviour was checked in Packet Tracer.",
    className: "overview",
    keyPoints: [
      "Problem: reliable, secure communications across dispersed lagoon, pipeline and process assets.",
      "Planning: QGIS spatial modelling and comparison of LPWAN, Wi-Fi HaLow, 5G/fibre and fibre backhaul.",
      "Validation: ns-3 performance scenarios followed by controlled security and Packet Tracer checks.",
    ],
  },
  {
    id: "architecture",
    eyebrow: "02 / System design",
    title: "Portfolio Technical Architecture",
    summary:
      "The proposed path from field devices through low-power or higher-bandwidth access, gateway aggregation and backhaul into a modelled segmented OT core.",
    alt: "Technical architecture showing CCTV, lagoon sensors, RTUs and process sensors connecting through LPWAN or Wi-Fi HaLow, a water-treatment-plant gateway, 5G or fibre backhaul, an ASA firewall, vendor and management zones, SCADA and a DMZ jump server",
    caption:
      "Field-to-core model: device traffic is assigned to LPWAN or Wi-Fi HaLow paths, aggregated through the plant gateway, carried over 5G/fibre or fibre backhaul and restricted by the ASA before reaching modelled SCADA and DMZ services.",
    className: "architecture",
    keyPoints: [
      "Field layer: CCTV or high-bandwidth devices, lagoon sensors, RTUs/controllers and process sensors.",
      "Access and backhaul: LPWAN, Wi-Fi HaLow, gateway aggregation, 5G/fibre and fibre paths.",
      "Security zones: vendor and management access routed through an ASA to the SCADA server and DMZ jump server.",
    ],
  },
  {
    id: "validation",
    eyebrow: "03 / Evidence loop",
    title: "Portfolio Validation Workflow",
    summary:
      "A repeatable evidence chain connecting the spatial dataset to performance simulation, sensitivity testing, security comparison and a troubleshooting loop in Packet Tracer.",
    alt: "Validation workflow from QGIS spatial modelling and node-link data through technology assignment, ns-3 baseline metrics, traffic stress and obstruction sensitivity tests, flat versus segmented security comparison, Packet Tracer and a troubleshooting loop to a validated architecture",
    caption:
      "Validation chain: QGIS data feeds ns-3 performance and sensitivity testing; the security comparison then moves into Packet Tracer, where failed authorised paths or successful unauthorised paths return to routing, gateway, return-path and ACL troubleshooting.",
    className: "validation",
    keyPoints: [
      "Measure: packet-delivery ratio, delay, throughput and packet loss.",
      "Challenge: traffic, stress and obstruction sensitivity scenarios plus flat-versus-segmented comparison.",
      "Close the loop: troubleshoot routing, gateways, return paths and ACLs before accepting the controlled model.",
    ],
  },
] as const;
