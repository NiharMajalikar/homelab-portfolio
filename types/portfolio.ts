export type ProjectCategory =
  | "Networking"
  | "Homelab"
  | "Cloud & Infrastructure"
  | "Telecommunications"
  | "AI & Automation"
  | "Assistive Technology";

export type ProjectStatus =
  "Completed" | "Active" | "Prototype" | "Documented labs";

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
  note?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  categories: ProjectCategory[];
  technologies: string[];
  challenge: string;
  approach: string;
  outcomes: string[];
  currentFeatures: string[];
  plannedFeatures?: string[];
  links: ProjectLink[];
  image?: ProjectImage;
  status: ProjectStatus;
  featured?: boolean;
  evidenceNote?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export type CertificationStatus = "Completed" | "In progress" | "Planned";

export interface Certification {
  name: string;
  issuer: string;
  status: CertificationStatus;
  issueDate?: string;
  expiryDate?: string;
  verificationUrl?: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  qualification: string;
  institution: string;
  location: string;
  period: string;
  summary: string;
  focusAreas: string[];
  project?: {
    label: string;
    href: string;
  };
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  href: `#${string}`;
}
