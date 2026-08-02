"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types/portfolio";

import { ProjectCard } from "./project-card";

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "Networking",
  "Homelab",
  "Cloud & Infrastructure",
  "Telecommunications",
  "AI & Automation",
  "Assistive Technology",
];

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");
  const reduceMotion = useReducedMotion();
  const visibleProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          activeFilter === "All" || project.categories.includes(activeFilter),
      ),
    [activeFilter],
  );

  return (
    <>
      <div className="filter-list" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={
              filter === activeFilter ? "filter-button active" : "filter-button"
            }
            aria-pressed={filter === activeFilter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <motion.div layout={!reduceMotion} className="projects-grid">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.div
              layout={!reduceMotion}
              key={project.slug}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <p className="filter-result" aria-live="polite">
        Showing {visibleProjects.length}{" "}
        {visibleProjects.length === 1 ? "project" : "projects"}.
      </p>
    </>
  );
}
