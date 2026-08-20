import { Bot, CloudCog, Network, ServerCog } from "lucide-react";

import { skillCategories } from "@/data/skills";

import { MotionReveal } from "./motion-reveal";
import { SectionHeading } from "./section-heading";

const categoryIcons = [Network, ServerCog, CloudCog, Bot];

export function SkillsGrid() {
  return (
    <section
      id="skills"
      className="section section-muted"
      aria-labelledby="skills-title"
    >
      <div className="page-shell">
        <MotionReveal>
          <SectionHeading
            id="skills-title"
            eyebrow="Technical skills"
            title="A practical toolkit for connected systems."
            description="Grouped by working area without invented proficiency scores or unsupported years of experience."
          />
        </MotionReveal>
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index];
            return (
              <MotionReveal
                className="skill-card"
                key={category.title}
                delay={index * 0.05}
              >
                <div className="card-icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <ul
                  className="badge-list"
                  aria-label={`${category.title} skills`}
                >
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
