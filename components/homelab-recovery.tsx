import { CheckCircle2, ShieldAlert } from "lucide-react";

import { homelabStack, recoverySteps } from "@/data/homelab-recovery";

import { MotionReveal } from "./motion-reveal";
import { SectionHeading } from "./section-heading";

export function HomelabRecovery() {
  return (
    <section
      id="migration-recovery"
      className="section recovery-section"
      aria-labelledby="migration-recovery-title"
    >
      <div className="page-shell">
        <MotionReveal>
          <SectionHeading
            eyebrow="August 2026 case study"
            title="Network Migration & Recovery"
            description="A documented personal-homelab recovery sequence covering LAN migration, storage remediation, service configuration repair, DNS filtering and monitoring validation."
          />
        </MotionReveal>

        <div className="recovery-layout">
          <MotionReveal className="recovery-stack">
            <h3>Current service stack</h3>
            <ul>
              {homelabStack.map((service) => (
                <li key={service}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <div className="recovery-boundary">
              <ShieldAlert aria-hidden="true" />
              <div>
                <h3>Evidence boundary</h3>
                <p>
                  The mobile Pi-hole capture does not establish a Tailscale
                  path. Automated and off-site backup are planned next steps,
                  not implemented capabilities.
                </p>
              </div>
            </div>
          </MotionReveal>

          <ol className="recovery-timeline">
            {recoverySteps.map((step, index) => (
              <MotionReveal delay={index * 0.04} key={step.title}>
                <li>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              </MotionReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
