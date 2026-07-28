# Suggested Portfolio Captions

1. **Physical Homelab Setup**  
   Acer Nitro 5 repurposed as a Proxmox server and connected by Ethernet to a Netgear RAX10 router.

2. **Proxmox MFA**  
   Administrative access protected with time-based one-time-password multi-factor authentication.

3. **Proxmox Datacenter Dashboard**  
   Standalone Proxmox node with the Ubuntu Docker VM online and host CPU, memory, storage, and uptime visible.

4. **Proxmox Storage Configuration**  
   Separate directory and LVM-backed storage pools, including HDD1TB for VM disks, ISO images, backups, and container content.

5. **HDD Storage Summary**  
   HDD-backed Proxmox storage providing approximately 983 GB of capacity.

6. **Ubuntu Docker VM Summary**  
   Ubuntu VM running with two virtual CPUs, 4 GB RAM, a 40 GB boot disk, and monitored utilisation.

7. **Ubuntu Server Details**  
   Ubuntu virtual machine running under KVM/QEMU and acting as the Docker host.

8. **Docker Running Services**  
   Pi-hole, Uptime Kuma, Portainer, Nextcloud, MariaDB, and the CI/CD-deployed status app running as containers.

9. **Ubuntu Storage Layout**  
   System and additional HDD-backed virtual disks, including `/mnt/hdd1tb`.

10. **Docker Data Root Migration**  
    Docker data redirected to `/mnt/hdd1tb/docker` after diagnosing root-disk capacity pressure.

11. **Pi-hole Dashboard**  
    DNS query activity from multiple clients displayed through the Pi-hole dashboard.

12. **Pi-hole DNS Analytics**  
    Query types, cache activity, upstream resolvers, and domain statistics.

13. **Pi-hole Client Activity**  
    Redacted client-level DNS activity across LAN, Docker, and Tailscale-connected devices.

14. **Pi-hole Group Management**  
    Group-based DNS policy management for different device categories.

15. **Pi-hole Clients**  
    Redacted device-level configuration and group assignment.

16. **Uptime Kuma Dashboard**  
    Eleven active monitors covering Proxmox, Ubuntu, Pi-hole, Portainer, Nextcloud, backups, Tailscale, and the CI/CD app.

17. **Nextcloud Private Cloud**  
    Self-hosted Nextcloud application running in Docker and accessible through the private network.

18. **Backup Automation Script**  
    Redacted Bash workflow for MariaDB export, Nextcloud data archive, Docker configuration backup, and health-status update.

19. **Backup History**  
    Timestamped weekly backup directories demonstrating repeated scheduled execution.

20. **Weekly Backup Cron**  
    Backup scheduled every Sunday at 2:00 AM with output redirected to a persistent log.

21. **Backup Health Status**  
    Timestamp of the most recent successful backup used by the Uptime Kuma status monitor.
