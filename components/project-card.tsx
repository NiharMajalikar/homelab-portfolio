"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  Code2,
  FileText,
  ImageIcon,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

import { assetPath } from "@/lib/site";
import type { Project } from "@/types/portfolio";

const linkIcons = {
  Repository: Code2,
  "Private repository": Code2,
  "Request thesis access": FileText,
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.slug}
      className={project.featured ? "project-card featured" : "project-card"}
    >
      <div className="project-visual">
        {project.image ? (
          <Image
            src={assetPath(project.image.src)}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
          />
        ) : (
          <div
            className="project-placeholder"
            role="img"
            aria-label={`${project.title} project visual placeholder`}
          >
            <ImageIcon aria-hidden="true" />
            <span>Architecture visual to be added</span>
          </div>
        )}
        <div className="project-status-row">
          <span className="project-status">
            <CircleDot aria-hidden="true" />
            {project.status}
          </span>
          {project.featured ? (
            <span className="featured-label">
              <Sparkles aria-hidden="true" />
              Featured
            </span>
          ) : null}
        </div>
      </div>

      <div className="project-content">
        <div className="project-categories" aria-label="Project categories">
          {project.categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <p>{project.description}</p>

        <ul className="technology-list" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <details className="project-details">
          <summary>Read project details</summary>
          <div className="detail-grid">
            <div>
              <h4>Challenge</h4>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h4>Approach</h4>
              <p>{project.approach}</p>
            </div>
          </div>
          <h4>Current scope</h4>
          <ul className="check-list">
            {project.currentFeatures.map((feature) => (
              <li key={feature}>
                <CheckCircle2 aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <h4>Results and learning</h4>
          <ul className="check-list">
            {project.outcomes.map((outcome) => (
              <li key={outcome}>
                <CheckCircle2 aria-hidden="true" />
                {outcome}
              </li>
            ))}
          </ul>
          {project.plannedFeatures?.length ? (
            <>
              <h4>Planned or conceptual next steps</h4>
              <ul className="planned-list">
                {project.plannedFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </>
          ) : null}
          {project.evidenceNote ? (
            <p className="evidence-note">{project.evidenceNote}</p>
          ) : null}
        </details>

        {project.links.length ? (
          <div className="project-links">
            {project.links.map((link) => {
              const Icon =
                linkIcons[link.label as keyof typeof linkIcons] ?? ArrowUpRight;
              const href = link.href.startsWith("/")
                ? assetPath(link.href)
                : link.href;
              return (
                <div key={`${project.slug}-${link.label}`}>
                  <a
                    href={href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                  >
                    <Icon aria-hidden="true" />
                    {link.label}
                  </a>
                  {link.note ? <small>{link.note}</small> : null}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="evidence-note">
            Project documentation link pending review.
          </p>
        )}
      </div>
    </article>
  );
}
