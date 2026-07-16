"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[.08] bg-white/80 backdrop-blur-sm dark:border-white/[.145] dark:bg-black/80">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold text-zinc-950 dark:text-zinc-50">
          Yogatama Radik
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-6 text-sm font-medium sm:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href}
                className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="sm:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile links */}
      {isMenuOpen && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-4 border-t border-black/[.08] px-6 py-4 text-sm font-medium dark:border-white/[.145] sm:hidden"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}