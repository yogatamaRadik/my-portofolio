type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Mechatronics Industrial Practice",
    organization: "PT Citra Vita Buana — Infant Warmer Testing and Wiring",
    period: "2024–2025",
    description:
      "Performed electrical wiring installation, troubleshooting, and revisions for Infant Warmer medical devices, and conducted functional testing and temperature monitoring to verify system stability and safety.",
  },
  {
    role: "Mechatronics Industrial Practice",
    organization: "Vertical Machining Center (VMC) Control System Integration",
    period: "2024–2025",
    description:
      "Configured and verified CNC machine parameters on a Siemens 808D controller, developed PLC I/O addressing for machine automation, and ensured integration between the CNC controller, PLC signals, and machine peripherals.",
  },
  {
    role: "IT Team Member",
    organization: "ATMICUP 2025 Ticketing",
    period: "2024–2025",
    description:
      "Coordinated with team members to monitor ticket distribution and resolve technical issues efficiently.",
  },
  {
    role: "Treasurer",
    organization: "HMPS Mechatronics, Politeknik ATMI Surakarta",
    period: "2024–2025",
    description:
      "Prepared financial reports for student organization activities and events.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Experience
      </h2>

      <ol className="mt-10 space-y-10">
        {EXPERIENCE.map((item, index) => (
          <li key={`${item.role}-${item.organization}`} className="relative pl-8">
            {/* Timeline dot */}
            <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-950 dark:bg-zinc-50" />

            {/* Timeline connecting line (skip after the last item) */}
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
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}