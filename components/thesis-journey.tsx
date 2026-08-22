import { CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import Image from "next/image";

import {
  thesisDiagramPanels,
  thesisDiagramSource,
} from "@/data/thesis-journey";
import { assetPath } from "@/lib/site";

import { MotionReveal } from "./motion-reveal";
import { SectionHeading } from "./section-heading";

export function ThesisJourney() {
  const sourceUrl = assetPath(thesisDiagramSource.src);

  return (
    <section
      id="thesis-journey"
      className="section thesis-journey-section"
      aria-labelledby="thesis-journey-title"
    >
      <div className="page-shell">
        <MotionReveal>
          <SectionHeading
            id="thesis-journey-title"
            eyebrow="Master's thesis journey"
            title="One research project, three connected engineering views."
            description="These diagrams connect the planning story, technical architecture and validation loop behind the GIS-assisted hybrid communications study. All results describe academic simulation and controlled modelling, not a production deployment."
          />
        </MotionReveal>

        <div className="thesis-diagram-list">
          {thesisDiagramPanels.map((panel, index) => (
            <MotionReveal delay={index * 0.05} key={panel.id}>
              <article className="thesis-diagram-card">
                <header className="thesis-diagram-heading">
                  <div>
                    <p className="eyebrow">{panel.eyebrow}</p>
                    <h3>{panel.title}</h3>
                  </div>
                  <p>{panel.summary}</p>
                </header>

                <figure>
                  <div
                    className="thesis-diagram-scroll"
                    tabIndex={0}
                    aria-label={`${panel.title}. Scroll horizontally on smaller screens to inspect the full diagram.`}
                  >
                    <div className={`thesis-diagram-canvas ${panel.className}`}>
                      <Image
                        src={sourceUrl}
                        alt={panel.alt}
                        width={thesisDiagramSource.width}
                        height={thesisDiagramSource.height}
                        sizes="(max-width: 768px) 52rem, 1180px"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <figcaption>
                    <span>{panel.caption}</span>
                    <a href={sourceUrl} target="_blank" rel="noreferrer">
                      <ExternalLink aria-hidden="true" />
                      Open full-resolution source
                    </a>
                  </figcaption>
                </figure>

                <ul className="thesis-diagram-points">
                  {panel.keyPoints.map((point) => (
                    <li key={point}>
                      <CheckCircle2 aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal>
          <div className="thesis-evidence-boundary">
            <ShieldCheck aria-hidden="true" />
            <p>
              <strong>Evidence boundary:</strong> the diagrams summarise a
              university research model. References to SCADA, segmentation,
              firewall policy and delivery performance are controlled simulation
              or Packet Tracer findings, not claims about a live industrial
              deployment.
            </p>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
