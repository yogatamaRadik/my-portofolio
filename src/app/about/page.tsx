import Link from "next/link";

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/#about"
        className="text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50"
      >
        ← Back to Home
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
        About Me
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        I&apos;m a final-year Mechatronics Engineering student at Politeknik
        ATMI Surakarta, with hands-on experience across CNC machining,
        industrial automation, and PLC programming. Alongside my engineering
        background, I&apos;m expanding into modern software development,
        building this very website as part of that journey.
      </p>

      {/* TODO: Replace this paragraph with your real hobbies/interests */}
      <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Outside of engineering, [add a paragraph here about your hobbies,
        interests, what you enjoy doing in your free time — whatever feels
        true to you].
      </p>
    </article>
  );
}