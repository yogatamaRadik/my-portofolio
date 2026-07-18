import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { HatchPattern } from "@/components/ui/HatchPattern";

export function Hero() {
  return (
    <section id="hero" className="flex min-h-[90vh] items-center">
      <HatchPattern />
      <FadeIn>
        <Container>
          <div className="flex flex-col-reverse items-center justify-center gap-16 sm:flex-row">
            <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
              <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
                Hello! I'm
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
                Yogatama Radik
              </h1>
              <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
                Mechatronics Engineering Student
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="#projects"
                  className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
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

            <div className="relative shrink-0">
              <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-[radial-gradient(circle,theme(colors.blue.400/40%),theme(colors.purple.400/30%),transparent_70%)] blur-xl dark:bg-[radial-gradient(circle,theme(colors.blue.500/30%),theme(colors.purple.500/20%),transparent_70%)]" />
              <Image
                src="/me.jpg"
                alt="Yogatama Radik"
                width={192}
                height={192}
                priority
                className="h-48 w-48 rounded-full object-cover sm:h-56 sm:w-56 dark:border-zinc-800"
              />
            </div>
          </div>
        </Container>
      </FadeIn>
    </section>
  );
}