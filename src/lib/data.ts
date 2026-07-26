import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaThreads,
  FaTiktok,
} from "react-icons/fa6";

export type SocialLink = {
  label: string;
  href: string;
  icon: typeof FaGithub;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/yogatamaRadik",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/itsyogatamaradik",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/radixixixixi_?utm_source=qr",
    icon: FaInstagram,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@radixixixixi_?igshid=NTc4MTIwNjQ2YQ==",
    icon: FaThreads,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@radixixixixi_?_r=1&_t=ZS-98BfN60XIYB",
    icon: FaTiktok,
  },
];

export type ExperienceItem = {
  slug: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  fullDescription?: string;
  highlights: string[];
  images?: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    slug: "infant-warmer-wiring",
    role: "Mechatronics Industrial Practice",
    organization: "PT Citra Vita Buana — Infant Warmer Testing and Wiring",
    period: "2024–2025",
    summary:
      "Performed electrical wiring installation, troubleshooting, and revisions for Infant Warmer medical devices.",
    fullDescription: `An Infant Warmer is a neonatal medical device designed to maintain a stable body temperature for newborn infants, particularly premature or low-birth-weight babies who are unable to regulate their body temperature effectively.

                      PT Citra Vita Buana is an Indonesian medical device manufacturer specializing in the design, production, and quality assurance of healthcare equipment. The company is committed to developing reliable medical devices that comply with national and international quality standards.

                      During my industrial internship at PT Citra Vita Buana, I was involved in the production and quality assurance process of Infant Warmer medical devices. My responsibilities included installing electrical wiring according to technical drawings, troubleshooting electrical issues, performing wiring revisions, and conducting functional testing to verify proper system operation. I also monitored temperature stability at 10-minute intervals and documented test results to ensure each unit complied with technical specifications, operational requirements, and quality standards before final inspection and delivery.`,
    highlights: [
      "Electrical wiring installation and troubleshooting",
      "Functional and temperature testing on medical equipment",
      "Verified compliance with technical specifications",
    ],
    images: [
      "/experience/infantwarmer1.jpg",
      "/experience/infantwarmer2.jpg",
      "/experience/infantwarmer3.jpg",
    ]
  },
  {
    slug: "vmc-control-integration",
    role: "Mechatronics Industrial Practice",
    organization: "Vertical Machining Center (VMC) Control System Integration",
    period: "2024–2025",
    summary:
      "Configured CNC machine parameters and integrated PLC control for VMC operation.",
    fullDescription: `The ATMI Vertical Machining Center (VMC) is a CNC milling machine developed by Politeknik ATMI Surakarta as part of its commitment to advancing manufacturing technology, engineering education, and industrial automation. Designed as a learning and research platform, the machine integrates Siemens SINUMERIK 808D CNC control, servo drive systems, electrical control panels, and pneumatic actuators to simulate the operation of modern industrial CNC milling machines.
    
    During this project, I contributed to the electrical integration and commissioning of the ATMI Vertical Machining Center (VMC). My primary responsibility was developing the PLC I/O configuration for the Siemens SINUMERIK 808D CNC control system, beginning with the installation and integration of the machine's electrical control system. I implemented and verified I/O functions for the tool clamp and unclamp mechanism, CNC indicator lamps, emergency stop circuit, and other machine peripherals while ensuring consistency between electrical wiring diagrams and PLC logic. In addition, I assisted in assembling and commissioning the pneumatic system, including the installation of the air supply unit, enabling pneumatic operation for the tool clamping mechanism and air coolant system. I also reviewed and verified electrical wiring documentation to ensure proper implementation and reliable machine operation during system commissioning.`,
    highlights: [
      "Siemens 808D controller configuration",
      "PLC I/O addressing and signal allocation",
      "Machine automation and safety function integration",
    ],
    images: [
      "/experience/vmc1.jpeg",
      "/experience/vmc2.jpeg",
      "/experience/vmc3.jpeg",
      "/experience/vmc4.jpeg",
    ]
  },
  {
    slug: "atmicup-it-team",
    role: "IT Team Member",
    organization: "ATMICUP 2025 Ticketing",
    period: "2024–2025",
    summary:
      "Coordinated ticket distribution monitoring and resolved technical issues for a campus event.",
    fullDescription: `ATMICUP 2025 is an annual inter-school sports tournament organized by Politeknik ATMI Surakarta. The event brings together students from various vocational and senior high schools to compete in multiple sports while promoting teamwork, sportsmanship, and collaboration. Due to the large number of participants and spectators, the event requires an integrated ticketing system and reliable technical support to ensure an efficient registration and entry process.
    
    As an IT Team Member in the Ticketing Division for ATMICUP 2025, I was responsible for supporting the operation of the event's digital ticketing system. My responsibilities included monitoring ticket distribution, verifying participant and visitor registrations, assisting users with ticket-related issues, and resolving technical problems during the event. I worked closely with other IT team members to ensure the ticketing system operated reliably, minimizing service interruptions and maintaining a smooth check-in process throughout the competition.
    `,
    highlights: [
      "Event ticketing system monitoring",
      "Technical issue resolution under time pressure",
      "Cross-team coordination",
    ],
    images: [
      "/experience/atmicup1.jpeg",
      "/experience/atmicup2.jpeg",
      "/experience/atmicup3.jpeg"
    ]
  },
  {
    slug: "hmps-treasurer",
    role: "Treasurer",
    organization: "HMPS Mechatronics, Politeknik ATMI Surakarta",
    period: "2024–2025",
    summary:
      "Managed financial reporting for student organization activities and events.",
    fullDescription:` HMPS Mechatronics (Himpunan Mahasiswa Program Studi Mechatronics) is the official student organization of the Mechatronics Engineering program at Politeknik ATMI Surakarta. The organization serves as a platform for academic, professional, and extracurricular development by organizing seminars, workshops, competitions, social activities, and student events. HMPS encourages leadership, teamwork, and organizational skills while fostering collaboration among students and supporting their personal and professional growth.
    
    As the Treasurer of HMPS Mechatronics, I was responsible for managing the organization's financial administration and supporting the execution of various student activities and events. My role included recording income and expenditures, preparing financial reports, monitoring budget allocations, maintaining transaction documentation, and ensuring that all financial activities were accurately recorded and transparently managed in accordance with the organization's procedures.
    `,
    highlights: [
      "Financial reporting and budget tracking",
      "Transparency in student organization finances",
    ],
    images:[
      "/experience/hmps1.jpeg",
      "/experience/hmps2.jpeg",
      "/experience/hmps3.jpeg"
    ]
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
];