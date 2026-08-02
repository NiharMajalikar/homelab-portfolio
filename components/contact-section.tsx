import { Mail, MapPin } from "lucide-react";

import { profile } from "@/data/profile";

import { MotionReveal } from "./motion-reveal";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="page-shell">
        <MotionReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Continue the technical conversation."
            description={profile.availability}
          />
        </MotionReveal>
        <MotionReveal className="contact-details contact-email-card">
          <p>
            For roles, graduate programs, project discussions or portfolio
            feedback, contact me directly by email.
          </p>
          <div className="contact-location">
            <MapPin aria-hidden="true" />
            <span>
              <strong>Location</strong>
              {profile.location}
            </span>
          </div>
          <a
            className="primary-button contact-email-button"
            href={`mailto:${profile.email}`}
          >
            <Mail aria-hidden="true" />
            Email {profile.email}
          </a>
          <p className="privacy-copy">
            Email is the only contact method used on this portfolio. The public
            site does not publish a phone number or street address.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
