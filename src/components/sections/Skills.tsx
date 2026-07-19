import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

type SkillGroup = {
  category: string;
  items: string[];
};

const SKILLS: SkillGroup[] = [
  {
    category: "Programming",
    items: ["PHP", "JavaScript", "HTML", "C", "C++", "C#"],
  },
  {
    category: "Control Systems",
    items: ["PLC", "SCADA", "Arduino"],
  },
  {
    category: "Tools",
    items: [
      "RoboDK",
      "LabVIEW",
      "VS Code",
      "FluidSIM",
      "Siemens TIA Portal",
      "CX-Programmer",
      "EcoStruxure",
      "Vijeo Designer",
    ],
  },
  {
    category: "Design",
    items: ["SolidWorks 3D", "SolidWorks Electrical", "AutoCAD", "Autodesk Fusion"],
  },
  {
    category: "Machining",
    items: [
      "CNC Milling & Lathe",
      "Conventional Milling",
      "Conventional Lathe",
      "Drilling Machine",
      "Grinding Machine",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-black/[.08] dark:border-white/[.250]">
      <FadeIn>
        <Container size="narrow" className="py-28">
          <SectionHeading eyebrow="04" title="Skills" />

          <div className="mt-10 space-y-8">
            {SKILLS.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
                  {group.category}
                </h3>
                <div className="mt-1 flex flex-wrap gap-1">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/[.08] px-4 py-1 text-sm text-zinc-700 dark:border-white/[.200] dark:text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </FadeIn>
    </section>
  );
}