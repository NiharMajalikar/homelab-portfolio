import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";

import { education } from "@/data/education";

import { MotionReveal } from "./motion-reveal";
import { SectionHeading } from "./section-heading";

export function EducationGrid() {
  return (
    <section
      id="education"
      className="section"
      aria-labelledby="education-title"
    >
      <div className="page-shell">
        <MotionReveal>
          <SectionHeading
            id="education-title"
            eyebrow="Education"
            title="Engineering foundations across networks and communications."
            description="Relevant study areas and capstone work are summarised without publishing private records or student identifiers."
          />
        </MotionReveal>
        <div className="education-grid">
          {education.map((item, index) => (
            <MotionReveal
              className="education-card"
              delay={index * 0.06}
              key={item.qualification}
            >
              <div className="education-number">0{index + 1}</div>
              <div className="education-content">
                <GraduationCap aria-hidden="true" />
                <p className="education-period">{item.period}</p>
                <h3>{item.qualification}</h3>
                <p className="institution">
                  <strong>{item.institution}</strong>
                  <span>
                    <MapPin aria-hidden="true" />
                    {item.location}
                  </span>
                </p>
                <p>{item.summary}</p>
                <ul
                  className="badge-list"
                  aria-label={`${item.qualification} focus areas`}
                >
                  {item.focusAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
                {item.project ? (
                  <a className="text-link" href={item.project.href}>
                    {item.project.label}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
