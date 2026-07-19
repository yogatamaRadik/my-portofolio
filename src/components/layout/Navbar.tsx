"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href.replace("/", ""))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`/#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const linkClasses = (href: string) => {
    const isActive = activeSection === href;
    return `relative text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-zinc-950 after:transition-all after:duration-300 dark:after:bg-zinc-50 ${
      isActive
        ? "font-semibold text-zinc-950 after:w-full dark:text-zinc-50"
        : "text-zinc-600 after:w-0 hover:text-zinc-950 hover:after:w-full dark:text-zinc-400 dark:hover:text-zinc-50"
    }`;
  };

  return (
    <header
      className={`fixed left-1/2 z-50 -translate-x-1/2 border-black/[.08] bg-white/80 backdrop-blur-md transition-all duration-300 dark:border-white/[.145] dark:bg-black/80 ${
       isScrolled
         ? `top-4 w-[calc(100%-2rem)] max-w-4xl border ${
           isMenuOpen ? "rounded-3xl" : "rounded-full"
         }`
       : "top-0 w-full max-w-none rounded-none border-b border-transparent bg-transparent backdrop-blur-none"
      }`}
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="/" className="font-semibold text-zinc-950 dark:text-zinc-50">
          Yogatama Radik
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          <ul className="flex items-center gap-6 font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClasses(link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

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

      {isMenuOpen && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-4 border-t border-black/[.08] px-6 py-4 font-medium dark:border-white/[.145] sm:hidden"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={linkClasses(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <ThemeToggle />
          </li>
        </ul>
      )}
    </header>
  );
}