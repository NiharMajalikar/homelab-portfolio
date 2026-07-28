# Nihar Homelab Portfolio Assets

This package contains:
- `public/`: cropped and redacted portfolio-ready images
- `originals_private/`: untouched originals for private reference only
- `manifest.csv`: source-to-output mapping
- `portfolio_captions.md`: suggested captions and publishing notes

## Important security note
The backup-script screenshot originally exposed a database password. The public version is redacted.
Rotate that database password before publishing the project publicly.

## Known presentation notes
- The Pi-hole dashboard currently shows zero domains on lists and zero blocked queries. It can still be used to demonstrate DNS query collection, but a later screenshot with active trusted blocklists would be stronger.
- The Ubuntu root filesystem screenshots show a 100% full root partition. Present this as a troubleshooting “before” state, not the final-state architecture.
- Add Portainer, Tailscale admin, GitHub Actions success, and homelab status-app screenshots after the infrastructure is rebuilt.
