import Image from "next/image";
import Link from "next/link";

type Certification = {
  name: string;
  issuer: string;
  period: string;
  credentialId?: string;
  verifyUrl?: string;
  imageUrl?: string;
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
    verifyUrl: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-4ESMLHRVT6",
    imageUrl: "/certificates/CSWA.png",
  },
  {
    name: "SolidWorks Electrical – Electrical Wiring Design",
    issuer: "SolidWorks",
    period: "2023–2026",
    credentialId: "C-EUCL5FWPM4",
    verifyUrl: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-EUCL5FWPM4",
    imageUrl: "/certificates/CSWA-Electrical.png",
  },
  {
    name: "MasterCAM Milling 1 Training | Belajar MasterCAM",
    issuer: "MasterCAM",
    period: "Issued Mar 2023",
    imageUrl: "/certificates/BelajarMasterCAM.png",
  },
  {
    name: "ATMICUP 2025 Ticketing Certificate | IT Team Member",
    issuer: "ATMI Surakarta",
    period: "Issued Feb 2025",
    credentialId: "186/1/ATMICUP",
    imageUrl: "/certificates/IT-TicketingCertificate.png",
  },
];

export default function AboutPage() {
  return (
    <article className="font-display mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/#about"
        className="text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50"
      >
        ← Back to Home
      </Link>

      <div className="mt-10 flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-2xl" />
          <Image
            src="/me.jpg"
            alt="Yogatama Radik"
            width={180}
            height={180}
            className="h-44 w-44 rounded-full border-4 border-zinc-200 object-cover shadow-xl dark:border-zinc-700"
          />
        </div>
        <h1 className="animate-text-shimmer font-display mt-8 text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Yogatama Radik Hanindyaputra
        </h1>
        <p className="animate-text-glow font-display mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Mechatronics Engineering Student
        </p>
        <p className="font-display text-sm text-zinc-500 dark:text-zinc-500">
          Politeknik ATMI Surakarta • Surakarta, Indonesia
        </p>
      </div>

      <section className="mt-16">

        <h2 className="font-display text-3xl font-bold text-zinc-950 dark:text-zinc-50">
          About Me
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Hello! My name is Yogatama Radik Hanindyaputra, you can call me
          Radik. I'm a final-year Mechatronics Engineering student at
          Politeknik ATMI Surakarta, with hands-on experience across CNC
          machining, industrial automation, and PLC programming.
        </p>

      </section>

      <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Outside of engineering, I enjoy spending my free time reading,
        watching movies, and exploring new stories. I regularly read personal
        growth books to broaden my perspective and improve myself, while
        novels allow me to appreciate different styles of storytelling.
        I&apos;m particularly interested in horror, thriller, and action
        films, as well as mystery and puzzle-driven plots that challenge my
        curiosity and analytical thinking. I also enjoy watching anime for
        its creativity and unique storytelling. In my free time, I like
        playing billiards and bowling. More recently, strength training at
        the gym has become an important part of my routine, helping me
        develop discipline, maintain a healthy lifestyle, and stay mentally
        focused.
      </p>

      <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        I enjoy learning new technologies beyond my primary field of study.
        Recently, I&apos;ve been exploring modern web development with
        Next.js and React by building this portfolio from scratch. I enjoy
        the process of continuously learning, solving problems, and turning
        ideas into practical projects!
      </p>

      <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Here are some of the certifications I&apos;ve earned.
      </p>

      <h2 className="font-display mt-12 text-xl font-semibold text-zinc-950 dark:text-zinc-50">
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
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{cert.issuer}</p>
            {cert.credentialId && (
              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                Credential ID: {cert.credentialId}
              </p>
            )}

            {cert.imageUrl ? (
              <a
                href={cert.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block overflow-hidden rounded-xl border border-black/[.08] dark:border-white/[.145]"
              >
                <Image
                  src={cert.imageUrl}
                  alt={`${cert.name} certificate`}
                  width={400}
                  height={280}
                  className="h-40 w-full object-cover transition-opacity hover:opacity-80"
                />
              </a>
            ) : (
              <div className="mt-4 flex h-40 items-center justify-center rounded-xl border border-dashed border-black/[.08] text-sm text-zinc-400 dark:border-white/[.145]">
                Certificate image coming soon
              </div>
            )}

            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full border border-black/[.08] px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-white/[.06]"
              >
                See my credential
              </a>
            )}
          </li>
        ))
        }
      </ul >
    </article >
  );
}