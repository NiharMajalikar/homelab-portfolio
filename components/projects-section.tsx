import { MotionReveal } from "./motion-reveal";
import { ProjectsGrid } from "./projects-grid";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="page-shell">
        <MotionReveal>
          <SectionHeading
            eyebrow="Selected projects"
            title="Technical work with scope, evidence and limitations."
            description="Each case study separates implemented work from planned improvements and labels academic simulations clearly."
          />
        </MotionReveal>
        <ProjectsGrid />
      </div>
    </section>
  );
}
