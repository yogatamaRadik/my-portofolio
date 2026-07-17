type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  detail: string;
};

const EDUCATION: EducationItem[] = [
  {
    institution: "Politeknik ATMI Surakarta",
    degree: "Diploma in Applied Mechatronics (D3)",
    period: "2023–Present",
    detail: "GPA: 3.82 (2024–2025)",
  },
  {
    institution: "SMK Katolik St. Mikael Surakarta",
    degree: "Vocational High School — Mechanical Engineering",
    period: "2020–2023",
    detail: "Overall Grade: 86.32",
  },
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Education
      </h2>

      <ol className="mt-10 space-y-10">
        {EDUCATION.map((item, index) => (
          <li key={item.institution} className="relative pl-8">
            <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-950 dark:bg-zinc-50" />

            {index < EDUCATION.length - 1 && (
              <span className="absolute left-[4.5px] top-4 h-full w-px bg-black/[.08] dark:bg-white/[.145]" />
            )}

            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              {item.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
              {item.institution}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {item.degree}
            </p>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}