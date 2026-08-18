import { Braces, MessagesSquare, ShieldCheck } from "lucide-react";

import { profile } from "@/data/profile";

import { MotionReveal } from "./motion-reveal";
import { SectionHeading } from "./section-heading";

const principles = [
  {
    title: "Structured troubleshooting",
    description:
      "Observe the system, isolate the layer, test the assumption and document the fix.",
    icon: Braces,
  },
  {
    title: "Clear communication",
    description:
      "Translate technical detail into practical next steps for users and collaborators.",
    icon: MessagesSquare,
  },
  {
    title: "Reliable by design",
    description:
      "Prioritise maintainability, secure access, monitoring, recovery planning and honest evidence.",
    icon: ShieldCheck,
  },
];

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="page-shell">
        <MotionReveal>
          <SectionHeading
            eyebrow="About"
            title="Engineering judgement grounded in evidence."
            description={profile.summary}
          />
        </MotionReveal>
        <div className="about-grid">
          <MotionReveal className="about-copy">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </MotionReveal>
          <div className="principle-grid">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <MotionReveal
                  className="principle-card"
                  delay={index * 0.06}
                  key={principle.title}
                >
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
