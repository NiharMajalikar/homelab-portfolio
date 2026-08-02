import { Camera } from "lucide-react";
import Image from "next/image";

import { evidence, plannedCaptures } from "@/data/evidence";
import { assetPath } from "@/lib/site";

import { MotionReveal } from "./motion-reveal";
import { SectionHeading } from "./section-heading";

export function EvidenceGallery() {
  return (
    <section
      id="evidence"
      className="section section-muted"
      aria-labelledby="evidence-title"
    >
      <div className="page-shell">
        <MotionReveal>
          <SectionHeading
            eyebrow="Evidence gallery"
            title="Reviewed visuals behind the project summaries."
            description="Screenshots and diagrams are sanitised, captioned and presented without credentials, private addressing or student identifiers."
          />
        </MotionReveal>
        <div className="evidence-grid">
          {evidence.map((item, index) => (
            <MotionReveal delay={index * 0.04} key={item.src}>
              <figure className="evidence-card">
                <Image
                  src={assetPath(item.src)}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <figcaption>{item.caption}</figcaption>
              </figure>
            </MotionReveal>
          ))}
        </div>
        <div
          className="planned-captures"
          aria-labelledby="planned-captures-title"
        >
          <div>
            <p className="eyebrow">Planned evidence</p>
            <h3 id="planned-captures-title">
              Screenshots still to be captured and reviewed.
            </h3>
            <p>
              These labels are placeholders only. No unavailable screenshot or
              unverified result is presented as evidence.
            </p>
          </div>
          <ul>
            {plannedCaptures.map((title) => (
              <li key={title}>
                <Camera aria-hidden="true" />
                <span>{title}</span>
                <small>Planned capture</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
