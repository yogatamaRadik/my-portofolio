export type ExperienceItem = {
  slug: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  fullDescription: string;
  highlights: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    slug: "infant-warmer-wiring",
    role: "Mechatronics Industrial Practice",
    organization: "PT Citra Vita Buana — Infant Warmer Testing and Wiring",
    period: "2024–2025",
    summary:
      "Performed electrical wiring installation, troubleshooting, and revisions for Infant Warmer medical devices.",
    fullDescription:
      "Performed electrical wiring installation, troubleshooting, and wiring revisions for Infant Warmer medical devices based on technical specifications. Conducted functional testing and temperature monitoring at 10-minute intervals to verify system stability, heating performance, and operational safety.",
    highlights: [
      "Electrical wiring installation and troubleshooting",
      "Functional and temperature testing on medical equipment",
      "Verified compliance with technical specifications",
    ],
  },
  {
    slug: "vmc-control-integration",
    role: "Mechatronics Industrial Practice",
    organization: "Vertical Machining Center (VMC) Control System Integration",
    period: "2024–2025",
    summary:
      "Configured CNC machine parameters and integrated PLC control for VMC operation.",
    fullDescription:
      "Configured and verified CNC machine parameters on a Siemens 808D controller for VMC operation. Developed PLC I/O addressing and signal allocation for machine control, automation, and safety functions, ensuring proper integration between the CNC controller, PLC signals, and machine peripherals.",
    highlights: [
      "Siemens 808D controller configuration",
      "PLC I/O addressing and signal allocation",
      "Machine automation and safety function integration",
    ],
  },
  {
    slug: "atmicup-it-team",
    role: "IT Team Member",
    organization: "ATMICUP 2025 Ticketing",
    period: "2024–2025",
    summary:
      "Coordinated ticket distribution monitoring and resolved technical issues for a campus event.",
    fullDescription:
      "Coordinated with team members to monitor ticket distribution and resolve technical issues efficiently during ATMICUP 2025, ensuring smooth event operations from a technical standpoint.",
    highlights: [
      "Event ticketing system monitoring",
      "Technical issue resolution under time pressure",
      "Cross-team coordination",
    ],
  },
  {
    slug: "hmps-treasurer",
    role: "Treasurer",
    organization: "HMPS Mechatronics, Politeknik ATMI Surakarta",
    period: "2024–2025",
    summary:
      "Managed financial reporting for student organization activities and events.",
    fullDescription:
      "Prepared financial reports for student organization activities and events, ensuring accurate and transparent tracking of funds for HMPS Mechatronics initiatives.",
    highlights: [
      "Financial reporting and budget tracking",
      "Transparency in student organization finances",
    ],
  },
];

export type ProjectItem = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  fullDescription: string;
  tech: string[];
  highlights: string[];
};

export const PROJECTS: ProjectItem[] = [
  {
    slug: "cnc-engraving-capstone",
    title: "CNC Engraving Machine with GSK980TDa Control System",
    period: "2025–2026 · Final Year Capstone Project",
    summary:
      "Designed and built a 2-axis CNC engraving machine with a pneumatic Z-axis.",
    fullDescription:
      "Designed and built a 2-axis CNC engraving machine with an additional pneumatic Z-axis using a double-acting cylinder. Developed the mechanical, electrical, and pneumatic systems, including assembly, wiring, panel integration, and component installation. Configured the GSK980TDa controller with Mitsubishi MR-J3 servo drives and HF-KP23 servo motors for precise motion control.",
    tech: ["GSK980TDa", "Servo Motion Control", "Pneumatics", "CNC Machining"],
    highlights: [
      "2-axis CNC motion with pneumatic Z-axis",
      "Full mechanical, electrical, and pneumatic system design",
      "GSK980TDa controller with Mitsubishi servo integration",
    ],
  },
  {
    slug: "safe-coin-treasury",
    title: "Safe Coin Treasury and Investment System",
    period: "2024–2025 · Project Protocol",
    summary:
      "A coin-based asset lending management system built with Arduino and RFID.",
    fullDescription:
      "Designed a coin-based asset lending management system for students, requiring physical coin exchange as collateral for borrowed equipment. Integrated multiple hardware components including an Arduino MEGA 2560, RFID reader, HMI, RTC module, and DHT22 sensor, with a custom 3D-printed PLA enclosure. Developed embedded control logic for user authentication, transaction recording, and environmental monitoring.",
    tech: ["Arduino", "RFID", "Embedded Systems", "3D Printing"],
    highlights: [
      "Arduino MEGA 2560 with RFID-based authentication",
      "Custom 3D-printed enclosure",
      "Real-time environmental monitoring with DHT22",
    ],
  },
  {
    slug: "vmc-control-system",
    title: "Vertical Machining Center (VMC) Control System Integration",
    period: "2024–2025 · Mechatronics Industrial Practice",
    summary:
      "Configured Siemens 808D CNC parameters and PLC integration for VMC operation.",
    fullDescription:
      "Configured and verified CNC machine parameters on a Siemens 808D controller for VMC operation. Developed PLC I/O addressing and signal allocation for machine control, automation, and safety functions, ensuring proper integration between the CNC controller, PLC signals, and machine peripherals.",
    tech: ["Siemens 808D", "PLC", "CNC Integration"],
    highlights: [
      "Siemens 808D CNC controller configuration",
      "PLC I/O addressing for automation and safety",
    ],
  },
  {
    slug: "infant-warmer-project",
    title: "Infant Warmer Testing and Wiring",
    period: "2024–2025 · Mechatronics Industrial Practice",
    summary:
      "Electrical wiring, troubleshooting, and safety testing for medical devices.",
    fullDescription:
      "Performed electrical wiring installation, troubleshooting, and wiring revisions for Infant Warmer medical devices based on technical specifications. Conducted functional testing and temperature monitoring at 10-minute intervals to verify system stability, heating performance, and operational safety.",
    tech: ["Electrical Wiring", "Medical Devices", "Systems Testing"],
    highlights: [
      "Medical device wiring and safety compliance",
      "Systematic temperature and performance testing",
    ],
  },
];