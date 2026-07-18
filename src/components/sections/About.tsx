import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section id="about" className="border-t border-black/[.10] bg-zinc-50 dark:border-white/[.250] dark:bg-zinc-900/40">
    <FadeIn>
    <Container className="py-20">
     <div className="mx-auto max-w-3xl px-6 py-20"> 
      <SectionHeading eyebrow="01" title="About" />
        <p className="mt-6 max-w-2xl text-lg leading-7 text-zinc-600 dark:text-zinc-400">
          Final-Year Mechatronics Engineering Student (D3) at Politeknik ATMI
          Surakarta, with hands-on experience across CNC Machining, Industrial
          Automation, and PLC Programming. My work has spanned real engineering
          problems, from wiring and testing devices, configuring CNC
          Controllers, to designing a full CNC Machine as my Final Years
          Project (Capstone Project). Alongside my mechatronics background,
          I'm expanding into modern software development, building this
          very website as part of that journey. Excited about solving real,
          and hands-on problems. Always looking for the next thing to learn!
        </p>

        <Link
          href="/about"
          className="mt-4 inline-block text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
        >
          View more about me
        </Link>

        <div className="mt-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            View Resume
          </a>
        </div>
      </div>
      </Container>
      </FadeIn>
    </section>
  );
}