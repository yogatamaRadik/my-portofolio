import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-3xl flex-col-reverse items-center gap-10 px-6 py-20 sm:flex-row sm:py-32"
    >
      <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
          Yogatama Radik
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Always looking to learn something!
        </p>
        <div className="flex gap-4 pt-2">
            <a
            href="#projects"
            className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
            View my projects
          </a>
            <a
            href="#contact"
            className="rounded-full border border-black/[.08] px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-white/[.06]"
            >
            Contact me
          </a>
        </div>
      </div>

      <Image
        src="/me.jpg"
        alt="Yogatama Radik"
        width={192}
        height={192}
        priority
        className="h-48 w-48 shrink-0 rounded-full object-cover sm:h-56 sm:w-56"
      />
    </section>
  );
}