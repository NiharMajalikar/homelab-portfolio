# Homelab Network Migration & Recovery — August 2026

This document is the factual source for the portfolio case study. It describes a personal homelab recovery exercise, not a production deployment. Public content must not include private addresses, usernames, hardware identifiers, credentials, internal paths, query logs or raw configuration.

## Current architecture

- Proxmox virtualisation host
- Ubuntu Docker virtual machine
- Pi-hole DNS filtering
- Uptime Kuma monitoring
- Nextcloud with MariaDB
- Portainer container management
- Homelab Status App
- Tailscale installed on the Ubuntu Docker VM

Tailscale external-access validation is pending. The mobile Pi-hole capture shows a mobile-data connection, but the available evidence does not establish that traffic traversed Tailscale.

## Migration and recovery record

1. Completed the private-LAN migration and created a DHCP reservation for the Ubuntu Docker VM.
2. Diagnosed root-storage exhaustion that disrupted MariaDB and Nextcloud.
3. Expanded the LVM root volume from 19 GB to 38 GB, restoring available capacity and service health.
4. Updated Nextcloud's trusted-domain configuration for the new private LAN.
5. Restored the Pi-hole web interface by backing up and regenerating an invalid TLS certificate bundle.
6. Added the StevenBlack blocklist and rebuilt Gravity, restoring DNS filtering with 98,950 blocking domains.
7. Refreshed Uptime Kuma monitor targets and verified all core service monitors healthy.

Automated and off-site backup are not implemented. They remain the next planned resilience improvement.

## Screenshot review record

| Capture                    | Public use               | Decision                                                                                                                            |
| -------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Uptime Kuma dashboard      | Cropped quick statistics | Excludes monitor names and historical incident details; shows eight up and zero current down states.                                |
| Pi-hole desktop list views | Not published            | Mobile dashboard is clearer evidence and avoids publishing unnecessary administration details.                                      |
| Pi-hole mobile dashboard   | Cropped metric cards     | Shows 2,866 queries, 435 blocked queries, 15.2% blocked and 98,950 domains; excludes phone status and navigation bars.              |
| Nextcloud dashboard        | Cropped dashboard        | Demonstrates a working private-cloud interface without private files; does not claim that sample files are visible.                 |
| Portainer overview         | Cropped and redacted     | Shows a connected environment and healthy container totals; removes the administrator label and Docker socket path.                 |
| Proxmox summary            | Cropped                  | Shows the virtualisation host online, one Ubuntu Docker VM running and aggregate resource information; excludes the account header. |

All published captions describe only visible, reviewed evidence. Source screenshots remain outside `public/`.
