import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

export function Projects() {
  return (
    <section id="projects" className="font-display border-t border-black/[.08] dark:border-white/[.250] bg-zinc-50 dark:bg-zinc-900/40">
      <FadeIn>
        <Container className="py-20">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <SectionHeading eyebrow="05" title="Projects" />

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {PROJECTS.map((project) => (
                <article
                  key={project.slug}
                  className="flex flex-col rounded-2xl border border-black/[.08] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/[.145] dark:hover:shadow-zinc-900/50"
                >
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                    {project.period}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/[.08] px-3 py-1 text-xs text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
                  >
                    View more
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </FadeIn>
    </section>
  );
}