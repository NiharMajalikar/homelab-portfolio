# Thesis Portfolio Diagram Notes

## Scope and evidence boundary

The three public diagrams summarise the Master's thesis as academic research, simulation and controlled implementation validation. They do not describe a production deployment. The shared source image is stored at `public/assets/thesis/thesis-journey-portfolio-diagrams-2026-08.png`; it contains no student identifier, credential, private address or raw configuration.

## Portfolio Project Overview

The project starts with the communications problem across a large lagoon-based wastewater treatment plant. A QGIS model maps 423 infrastructure nodes and 395 communication links. LPWAN, Wi-Fi HaLow, 5G/fibre and fibre-backhaul assignments feed ns-3 baseline and sensitivity scenarios. A flat-network model is compared with segmented OT zones, then VLANs, routing, HSRP and ASA ACL behaviour are checked in Cisco Packet Tracer. The diagram reports high delivery performance and blocked unauthorised SCADA access within the controlled model.

## Portfolio Technical Architecture

The field layer contains CCTV or other high-bandwidth devices, lagoon sensors, RTUs/controllers and process sensors. LPWAN and Wi-Fi HaLow provide access or aggregation paths through combined nodes and a water-treatment-plant gateway. Backhaul uses modelled 5G/fibre or fibre paths. The segmented OT core places vendor and management zones behind an ASA firewall, with restricted paths to the SCADA server and DMZ jump server.

## Portfolio Validation Workflow

QGIS produces the spatial model and node/link dataset. Technology assignment feeds an ns-3 baseline simulation measuring packet-delivery ratio, delay, throughput and packet loss. Sensitivity testing covers traffic, stress and obstruction scenarios before comparing stability and flat-versus-segmented security models. Packet Tracer checks authorised and unauthorised paths; failed paths return through a routing, gateway, return-path and ACL troubleshooting loop before the architecture is treated as validated.
