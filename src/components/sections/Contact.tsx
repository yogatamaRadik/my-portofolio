import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const CONTACT_LINKS = [
  {
    label: "Email Me",
    href: "mailto:yogatamaradix55@gmail.com",
    icon: Mail,
  },
  {
    label: " My GitHub",
    href: "https://github.com/yogatamaRadik",
    icon: FaGithub,
  },
  {
    label: " My LinkedIn",
    href: "https://linkedin.com/in/itsyogatamaradik",
    icon: FaLinkedin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Get In Touch with Me!
      </h2>
      <p className="mt-4 max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        I'm always open to new opportunities, collaborations, or just a
        good conversation about engineering and technology or anything else. Feel free to
        reach out!
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={label !== "Email" ? "_blank" : undefined}
            rel={label !== "Email" ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 rounded-full border border-black/[.08] px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-white/[.06]"
          >
            {Icon && <Icon className="h-4 w-4" />}
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}