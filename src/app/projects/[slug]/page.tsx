import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";

export function generateStaticParams() {
  return PROJECTS.map((item) => ({ slug: item.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/#projects"
        className="text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50"
      >
        ← Back to Projects
      </Link>

      <p className="mt-6 text-sm font-medium text-zinc-500 dark:text-zinc-500">
        {project.period}
      </p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
        {project.title}
      </h1>

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

      <div className="mt-8 flex h-64 items-center justify-center rounded-2xl border border-dashed border-black/[.08] text-sm text-zinc-400 dark:border-white/[.145]">
        Photo coming soon
      </div>

      <p className="mt-8 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {project.fullDescription}
      </p>

      <h2 className="mt-8 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
        Key contributions
      </h2>
      <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}