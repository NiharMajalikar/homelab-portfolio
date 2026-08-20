# Private Homelab MCP Progress — August 2026

This document is the factual source for the public portfolio summary of the private homelab MCP project. It records a personal engineering environment, not a production deployment. The source handbook remains private; the public site must not include credentials, private addressing, usernames, host keys, internal paths, raw configurations or unrestricted operational detail.

## Verified implementation

- A dedicated Ubuntu Server utility VM runs separately from the production Ubuntu Docker VM on Proxmox.
- Codex Desktop connects to the MCP server through SSH standard input/output over a private route. The MCP server exposes no public HTTP API, callback, reverse proxy or TCP listener.
- The production VM supplies a fixed, forced report command. The reporting account has no interactive shell, terminal allocation or forwarding capability.
- Three read-only, parameterless tools are available: `get_docker_status`, `get_disk_usage` and `get_backup_summary`.
- Tool results are bounded, redacted JSON. The server validates the schema, enforces a 64 KiB maximum, scans for sensitive values, requires reports to be no more than one hour old and fails closed.
- Redaction excludes private network addresses, MAC addresses, usernames, filesystem paths, container identifiers, images, ports, logs, mount details, filenames, hashes and database content.
- The report collector and store are root controlled; the reporting identity uses a dedicated passphrase-protected SSH key and pinned host key.
- Report collection is manual in version 1.0.

## Validation and observed state

Version 1.0 was validated on 20 August 2026. Automated tests covered acceptance of a fresh report, rejection of a private address and rejection of stale evidence. A fresh Codex task discovered and read all three tools end to end.

The redacted snapshot reported:

- 6 of 6 approved core services running, with zero unhealthy.
- 49% system-volume use and 6% data-volume use.
- Two completed local backup sets and a manifest present.

The snapshot did not verify backup checksums or a restore. These figures are a point-in-time observation, not an availability guarantee.

## Approval and safety boundary

The current MCP integration cannot apply changes. It has no generic shell, arbitrary file access, Docker control, firewall control, Proxmox control or automatic remediation. Development requests produce local drafts only. A future change would require an exact action, scope, impact, rollback plan and post-change checks before explicit human approval. A model request is never treated as authorization.

## Planned work — not implemented

- Scheduled report refresh.
- Hardened backup-integrity verification; the current proposal is drafted locally and awaiting approval.
- Restore testing and an encrypted off-site backup copy.
- Read-only Proxmox evidence.
- Constrained draft validation.
- Approval-gated VM creation limited to a future development pool, after read-only operations are stable.
- Local private-log summarisation only if an offline privacy requirement justifies it.

The production VM remains outside any future delegated development pool. Direct administrative access stays a separate, human-controlled break-glass path.
