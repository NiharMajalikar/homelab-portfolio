import { ContactRound, MapPin } from "lucide-react";

import { profile } from "@/data/profile";
import { linkedInUrl } from "@/data/socials";

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
            feedback, contact me through LinkedIn.
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
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer"
          >
            <ContactRound aria-hidden="true" />
            Message me on LinkedIn
          </a>
          <p className="privacy-copy">
            LinkedIn is the public contact method used on this portfolio. The
            site does not publish an email address, phone number or street
            address.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
