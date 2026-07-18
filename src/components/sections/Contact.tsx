import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

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
    <section id="contact" className="border-t border-black/[.08] dark:border-white/[.250]">
      <FadeIn>
      <Container size="narrow" className="py-20">
        <SectionHeading eyebrow="06" title="Get In Touch with Me!" />

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
      </Container>
      </FadeIn>
    </section>
  );
}