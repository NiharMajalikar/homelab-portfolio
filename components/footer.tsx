import { ArrowUp } from "lucide-react";

import { profile } from "@/data/profile";

import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div>
          <strong>{profile.name}</strong>
          <p>
            Reliable networks. Observable infrastructure. Clear documentation.
          </p>
        </div>
        <SocialLinks compact />
        <p>
          © {new Date().getFullYear()} {profile.shortName}
        </p>
        <a className="back-to-top" href="#home">
          Back to top <ArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
