import Link from "next/link";
import type { Metadata } from "next";

type Certification = {
  name: string;
  issuer: string;
  period: string;
  credentialId?: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    name: "Competency Certification – Machining (LSP)",
    issuer: "BNSP",
    period: "2023–2026",
  },
  {
    name: "SolidWorks 3D Design Associate",
    issuer: "SolidWorks",
    period: "2023–2026",
    credentialId: "C-4ESMLHRVT6",
  },
  {
    name: "SolidWorks Electrical – Electrical Wiring Design",
    issuer: "SolidWorks",
    period: "2023–2026",
    credentialId: "C-EUCL5FWPM4",
  },
];

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Yogatama Radik's background, certifications, and interests.",
};

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

      <h2 className="mt-12 text-xl font-semibold text-zinc-950 dark:text-zinc-50">
        Certifications
      </h2>

      <ul className="mt-6 space-y-6">
        {CERTIFICATIONS.map((cert) => (
          <li
            key={cert.name}
            className="rounded-2xl border border-black/[.08] p-5 dark:border-white/[.145]"
          >
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              {cert.period}
            </p>
            <h3 className="mt-1 font-semibold text-zinc-950 dark:text-zinc-50">
              {cert.name}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {cert.issuer}
            </p>
            {cert.credentialId && (
              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                Credential ID: {cert.credentialId}
              </p>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}