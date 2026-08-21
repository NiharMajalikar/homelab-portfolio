import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ExternalLink,
  LockKeyhole,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

import {
  mcpArchitecture,
  mcpReferencePanels,
  mcpRoadmap,
  mcpSnapshot,
  mcpTools,
} from "@/data/homelab-mcp";
import { assetPath } from "@/lib/site";

import { MotionReveal } from "./motion-reveal";
import { SectionHeading } from "./section-heading";

export function HomelabMcp() {
  return (
    <section
      id="homelab-mcp"
      className="section mcp-section"
      aria-labelledby="homelab-mcp-title"
    >
      <div className="page-shell">
        <MotionReveal>
          <SectionHeading
            id="homelab-mcp-title"
            eyebrow="Validated 20 August 2026"
            title="Private Homelab MCP Control Plane"
            description="A separate, read-only integration lets Codex inspect tightly limited homelab health evidence without exposing private infrastructure details or granting change access."
          />
        </MotionReveal>

        <MotionReveal>
          <ol className="mcp-architecture" aria-label="MCP evidence path">
            {mcpArchitecture.map((stage, index) => (
              <li key={stage.title}>
                <span className="mcp-stage-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
                {index < mcpArchitecture.length - 1 ? (
                  <ArrowRight className="mcp-stage-arrow" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </MotionReveal>

        <MotionReveal className="mcp-reference">
          <div className="mcp-reference-heading">
            <div>
              <p className="eyebrow">Detailed architecture reference</p>
              <h3>Infrastructure, service and approval flows</h3>
            </div>
            <p>
              The supplied architecture has been divided into readable,
              metadata-stripped panels. Open any panel for its full-size view.
            </p>
          </div>

          <div className="mcp-reference-grid">
            {mcpReferencePanels.map((panel) => (
              <figure
                className={`mcp-reference-card ${panel.layout}`}
                key={panel.src}
              >
                <a
                  href={assetPath(panel.src)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open full-size ${panel.title} diagram`}
                >
                  <Image
                    src={assetPath(panel.src)}
                    alt={panel.alt}
                    width={panel.width}
                    height={panel.height}
                    sizes={
                      panel.layout === "portrait"
                        ? "(max-width: 900px) 100vw, 760px"
                        : "(max-width: 1200px) 100vw, 1180px"
                    }
                  />
                  <span>
                    Open full-size panel
                    <ExternalLink aria-hidden="true" />
                  </span>
                </a>
                <figcaption>
                  <strong>{panel.title}</strong>
                  {panel.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mcp-reference-boundary">
            <ShieldAlert aria-hidden="true" />
            <p>
              This is an architecture reference, not proof of every path.
              Tailscale external access and scheduled report collection remain
              pending or planned. Local backup sets exist, but integrity and
              restoreability are unverified; off-site backup and state-changing
              MCP tools are not implemented.
            </p>
          </div>
        </MotionReveal>

        <div className="mcp-content-grid">
          <MotionReveal className="mcp-panel">
            <div className="mcp-panel-heading">
              <LockKeyhole aria-hidden="true" />
              <div>
                <p className="eyebrow">Current tool surface</p>
                <h3>Three parameterless, read-only tools</h3>
              </div>
            </div>
            <ul className="mcp-tool-list">
              {mcpTools.map((tool) => (
                <li key={tool.name}>
                  <code>{tool.name}</code>
                  <p>{tool.purpose}</p>
                </li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal className="mcp-panel">
            <div className="mcp-panel-heading">
              <ShieldCheck aria-hidden="true" />
              <div>
                <p className="eyebrow">Point-in-time evidence</p>
                <h3>Fresh-task validation completed</h3>
              </div>
            </div>
            <dl className="mcp-metrics">
              {mcpSnapshot.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mcp-caveat">
              Two local backup sets and a manifest were also present. Their
              checksums and restoreability have not yet been verified.
            </p>
          </MotionReveal>
        </div>

        <div className="mcp-boundary-grid">
          <MotionReveal className="mcp-boundary-card">
            <CheckCircle2 aria-hidden="true" />
            <div>
              <h3>Fail-closed privacy controls</h3>
              <p>
                Schema and type validation, a 64 KiB output limit, sensitive
                value scanning and a one-hour freshness rule reject evidence
                that is malformed, stale or unsafe to share.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal className="mcp-boundary-card">
            <Clock3 aria-hidden="true" />
            <div>
              <h3>Approval boundary</h3>
              <p>
                Version 1.0 cannot change the homelab. Requested improvements
                remain local drafts until one exact action, impact, rollback
                plan and validation sequence receive explicit human approval.
              </p>
            </div>
          </MotionReveal>
        </div>

        <MotionReveal className="mcp-roadmap">
          <div>
            <p className="eyebrow">Next improvements</p>
            <h3>Planned, not implemented</h3>
          </div>
          <ul>
            {mcpRoadmap.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </MotionReveal>
      </div>
    </section>
  );
}
