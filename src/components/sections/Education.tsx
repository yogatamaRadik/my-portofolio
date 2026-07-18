import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  detail: string;
  logo: string;
};

const EDUCATION: EducationItem[] = [
  {
    institution: "Politeknik ATMI Surakarta",
    degree: "Polytechnic University — Diploma in Applied Mechatronics (D3)",
    period: "2023–Present",
    detail:
      "• GPA: 3.82 (2024–2025, 4th Semester) \n Organizations : \n • ATMICUP 2025 Commitee (2024-2025) \n • HMPS Mechatronics Treasurer (2024-2025)",
    logo: "/logos/atmi.png",
  },
  {
    institution: "SMK Katolik St. Mikael Surakarta",
    degree: "Vocational High School — Mechanical Engineering",
    period: "2020–2023",
    detail: "Overall Grade: 86.32",
    logo: "/logos/mikael.png",
  },
];

export function Education() {
  return (
      <section
        id="education"
        className="border-t border-black/[.08] bg-zinc-50 dark:border-white/[.145] dark:bg-zinc-900/40"
      >
        <FadeIn>
        <Container size="narrow" className="py-32">
          <SectionHeading eyebrow="03" title="Education" />

          <ol className="mt-10 space-y-10">
            {EDUCATION.map((item, index) => (
              <li key={item.institution} className="relative pl-8">
                <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-950 dark:bg-zinc-50" />

                {index < EDUCATION.length - 1 && (
                  <span className="absolute left-[4.5px] top-4 h-full w-px bg-black/[.08] dark:bg-white/[.145]" />
                )}

                <div className="flex items-start gap-4">
                  <Image
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    width={48}
                    height={48}
                    className="mt-1 h-12 w-12 shrink-0 rounded-md object-contain"
                  />

                  <div>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                      {item.period}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                      {item.institution}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {item.degree}
                    </p>
                    <p className="mt-2 whitespace-pre-line text-base text-zinc-600 dark:text-zinc-400">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
        </FadeIn>
      </section>
  );
}