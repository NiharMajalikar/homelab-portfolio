import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import {
  mcpArchitecture,
  mcpRoadmap,
  mcpSnapshot,
  mcpTools,
} from "@/data/homelab-mcp";

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
