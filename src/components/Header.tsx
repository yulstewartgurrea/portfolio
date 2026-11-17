"use client";
// "use client" is needed because this component uses state (mobile menu)
// and listens to the browser's scroll event (to highlight the current section).

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { CloseIcon, GitHubIcon, LinkedInIcon, MenuIcon } from "./Icons";

// Each link scrolls to the section with the matching id (e.g. <section id="about">).
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "professional-experience", label: "Career" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // The id of the section currently on screen, so we can underline its link.
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    function handleScroll() {
      // A section counts as "active" once its top passes this point on the screen.
      const scrollPosition = window.scrollY + 150;

      for (const link of NAV_LINKS) {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(link.id);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-sm font-bold text-white">
            {profile.initials}
          </span>
          <span className="text-xl font-semibold text-ink">{profile.shortName}</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`border-b-2 py-1 font-semibold transition hover:text-primary ${
                activeId === link.id ? "border-primary text-primary" : "border-transparent text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-4 border-l border-line pl-6 text-ink">
            <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary">
              <GitHubIcon />
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary">
              <LinkedInIcon />
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-ink md:hidden"
        >
          {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation (only shown when the menu is open) */}
      {isMenuOpen && (
        <nav className="border-t border-line bg-white px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 font-semibold ${activeId === link.id ? "text-primary" : "text-ink"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
