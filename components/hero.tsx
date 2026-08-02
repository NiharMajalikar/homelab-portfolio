import { ArrowDownRight, Download, Mail, MapPin, Network } from "lucide-react";

import { profile } from "@/data/profile";
import { assetPath } from "@/lib/site";

import { MotionReveal } from "./motion-reveal";
import { NetworkBackdrop } from "./network-backdrop";
import { SocialLinks } from "./social-links";

export function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <NetworkBackdrop />
      <div className="page-shell hero-grid">
        <MotionReveal className="hero-copy">
          <p className="eyebrow">
            <Network aria-hidden="true" /> CCNA-certified · Melbourne, Australia
          </p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-introduction">{profile.introduction}</p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View projects <ArrowDownRight aria-hidden="true" />
            </a>
            <a
              className="secondary-button"
              href={assetPath(profile.resumePath)}
              download
            >
              <Download aria-hidden="true" /> Download resume
            </a>
            <a className="secondary-button" href="#contact">
              <Mail aria-hidden="true" /> Contact me
            </a>
          </div>

          <SocialLinks />
        </MotionReveal>

        <MotionReveal className="hero-panel" delay={0.12}>
          <div className="signal-card">
            <div className="signal-card-header">
              <span>Current focus</span>
              <span className="status-pill">
                <i /> Open to opportunities
              </span>
            </div>
            <ul className="focus-list">
              <li>
                <span>01</span>
                <strong>Network engineering</strong>
                <small>Routing, switching and troubleshooting</small>
              </li>
              <li>
                <span>02</span>
                <strong>Infrastructure operations</strong>
                <small>Virtualisation, containers and monitoring</small>
              </li>
              <li>
                <span>03</span>
                <strong>Endpoint and cloud</strong>
                <small>Intune, Entra ID and Azure fundamentals</small>
              </li>
              <li>
                <span>04</span>
                <strong>Automation</strong>
                <small>Service status and agent-assisted workflows</small>
              </li>
            </ul>
            <div className="signal-card-footer">
              <MapPin aria-hidden="true" /> {profile.location}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
