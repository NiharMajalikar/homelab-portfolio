import { BadgeCheck, ExternalLink } from "lucide-react";

import { certifications } from "@/data/certifications";

import { MotionReveal } from "./motion-reveal";
import { SectionHeading } from "./section-heading";

export function CertificationsGrid() {
  return (
    <section
      id="certifications"
      className="section section-muted"
      aria-labelledby="certifications-title"
    >
      <div className="page-shell">
        <MotionReveal>
          <SectionHeading
            id="certifications-title"
            eyebrow="Certifications"
            title="Verified credentials, clearly labelled."
            description="Only confirmed certifications are published. Credential identifiers remain private unless explicitly approved."
          />
        </MotionReveal>
        <div className="certification-grid">
          {certifications.map((certification, index) => (
            <MotionReveal
              className="certification-card"
              delay={index * 0.05}
              key={certification.name}
            >
              <div className="certification-icon">
                <BadgeCheck aria-hidden="true" />
              </div>
              <div>
                <div className="certification-meta">
                  <span>{certification.issuer}</span>
                  <strong>{certification.status}</strong>
                </div>
                <h3>{certification.name}</h3>
                <p>{certification.description}</p>
                <ul className="badge-list" aria-label="Certification skills">
                  {certification.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                {certification.verificationUrl ? (
                  <a
                    href={certification.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verify credential <ExternalLink aria-hidden="true" />
                  </a>
                ) : (
                  <small>Verification details available on request.</small>
                )}
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
