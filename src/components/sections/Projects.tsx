type Project = {
  title: string;
  period: string;
  description: string;
  tech: string[];
};

const PROJECTS: Project[] = [
  {
    title: "CNC Engraving Machine with GSK980TDa Control System",
    period: "2025–2026 · Final Year Capstone Project",
    description:
      "Designed and built a 2-axis CNC engraving machine with an additional pneumatic Z-axis using a double-acting cylinder. Developed the mechanical, electrical, and pneumatic systems, including assembly, wiring, panel integration, and component installation. Configured the GSK980TDa controller with Mitsubishi MR-J3 servo drives and HF-KP23 servo motors for precise motion control.",
    tech: ["GSK980TDa", "Servo Motion Control", "Pneumatics", "CNC Machining"],
  },
  {
    title: "Safe Coin Treasury and Investment System",
    period: "2024–2025 · Project Protocol",
    description:
      "Designed a coin-based asset lending management system for students, requiring physical coin exchange as collateral for borrowed equipment. Integrated multiple hardware components including an Arduino MEGA 2560, RFID reader, HMI, RTC module, and DHT22 sensor, with a custom 3D-printed PLA enclosure. Developed embedded control logic for user authentication, transaction recording, and environmental monitoring.",
    tech: ["Arduino", "RFID", "Embedded Systems", "3D Printing"],
  },
  {
    title: "Vertical Machining Center (VMC) Control System Integration",
    period: "2024–2025 · Mechatronics Industrial Practice",
    description:
      "Configured and verified CNC machine parameters on a Siemens 808D controller for VMC operation. Developed PLC I/O addressing and signal allocation for machine control, automation, and safety functions, ensuring proper integration between the CNC controller, PLC signals, and machine peripherals.",
    tech: ["Siemens 808D", "PLC", "CNC Integration"],
  },
  {
    title: "Infant Warmer Testing and Wiring",
    period: "2024–2025 · Mechatronics Industrial Practice",
    description:
      "Performed electrical wiring installation, troubleshooting, and wiring revisions for Infant Warmer medical devices based on technical specifications. Conducted functional testing and temperature monitoring at 10-minute intervals to verify system stability, heating performance, and operational safety.",
    tech: ["Electrical Wiring", "Medical Devices", "Systems Testing"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Projects
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]"
          >
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              {project.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/[.08] px-3 py-1 text-xs text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}