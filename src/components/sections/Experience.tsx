import Link from "next/link";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Experience
      </h2>

      <ol className="mt-10 space-y-10">
        {EXPERIENCE.map((item, index) => (
          <li key={item.slug} className="relative pl-8">
            <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-950 dark:bg-zinc-50" />

            {index < EXPERIENCE.length - 1 && (
              <span className="absolute left-[4.5px] top-4 h-full w-px bg-black/[.08] dark:bg-white/[.145]" />
            )}

            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              {item.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
              {item.role}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {item.organization}
            </p>
            <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {item.summary}
            </p>
            <Link
              href={`/experience/${item.slug}`}
              className="mt-2 inline-block text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
            >
              View more
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}