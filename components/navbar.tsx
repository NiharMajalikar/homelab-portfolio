"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { assetPath } from "@/lib/site";

import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const firstMenuLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.slice(1));
    const observers = sectionIds.map((sectionId) => {
      const section = document.getElementById(sectionId);
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(sectionId);
        },
        { rootMargin: "-28% 0px -60%", threshold: 0 },
      );
      observer.observe(section);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  useEffect(() => {
    if (menuOpen) {
      firstMenuLink.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="site-nav page-shell" aria-label="Primary navigation">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Nihar Majalikar, home"
        >
          <span aria-hidden="true">NM</span>
          <strong>Nihar Majalikar</strong>
        </a>

        <div className="desktop-nav">
          {navigation.map((item) => {
            const sectionId = item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={
                  activeSection === sectionId ? "nav-link active" : "nav-link"
                }
                aria-current={
                  activeSection === sectionId ? "location" : undefined
                }
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <a
            className="resume-button desktop-resume"
            href={assetPath(profile.resumePath)}
            download
          >
            <Download aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            className="icon-button mobile-menu-button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={menuOpen ? "mobile-menu open" : "mobile-menu"}
        hidden={!menuOpen}
      >
        <div className="page-shell mobile-menu-inner">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              ref={index === 0 ? firstMenuLink : undefined}
              href={item.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            className="resume-button"
            href={assetPath(profile.resumePath)}
            download
            onClick={closeMenu}
          >
            <Download aria-hidden="true" />
            Download resume
          </a>
        </div>
      </div>
    </header>
  );
}
