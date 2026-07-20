import Link from "next/link";
import { notFound } from "next/navigation";
import { EXPERIENCE } from "@/lib/data";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = EXPERIENCE.find((entry) => entry.slug === slug);

  if (!item) {
    return { title: "Experience Not Found" };
  }

  return {
    title: item.role,
    description: item.summary,
  };
}

export function generateStaticParams() {
  return EXPERIENCE.map((item) => ({ slug: item.slug }));
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = EXPERIENCE.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="font-display mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/#experience"
        className="text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50"
      >
        ← Back to Experience
      </Link>

      <p className="mt-6 text-sm font-medium text-zinc-500 dark:text-zinc-500">
        {item.period}
      </p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
        {item.role}
      </h1>
      <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-400">
        {item.organization}
      </p>

      {/* Image placeholder — replace with a real photo later */}
      <div className="mt-8 flex h-64 items-center justify-center rounded-2xl border border-dashed border-black/[.08] text-sm text-zinc-400 dark:border-white/[.145]">
        Photo coming soon
      </div>

      <p className="mt-8 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {item.fullDescription}
      </p>

      <h2 className="mt-8 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
        Key contributions
      </h2>
      <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}