import { About } from "@/components/about";
import { CertificationsGrid } from "@/components/certifications-grid";
import { ContactSection } from "@/components/contact-section";
import { EducationGrid } from "@/components/education-grid";
import { EvidenceGallery } from "@/components/evidence-gallery";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HomelabRecovery } from "@/components/homelab-recovery";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsGrid } from "@/components/skills-grid";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        url: siteUrl,
        homeLocation: { "@type": "Place", name: profile.location },
        jobTitle: "Telecommunications and Networking Engineer",
        sameAs: [
          "https://github.com/NiharMajalikar",
          "https://www.linkedin.com/in/nihar-ravi-majalikar-1bb75b199/",
        ],
        knowsAbout: [
          "Network engineering",
          "IT support",
          "Telecommunications",
          "Cloud infrastructure",
          "Endpoint management",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Nihar Majalikar Portfolio",
        description: profile.summary,
        author: { "@id": `${siteUrl}/#person` },
      },
      ...projects.map((project) => ({
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        creator: { "@id": `${siteUrl}/#person` },
        keywords: project.technologies.join(", "),
      })),
    ],
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <SkillsGrid />
        <ProjectsSection />
        <HomelabRecovery />
        <CertificationsGrid />
        <EducationGrid />
        <EvidenceGallery />
        <ContactSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
