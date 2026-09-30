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
    slug: "internship-pt-formulatrix-process-engineering",
    role: "Process Engineering Intern",
    organization: "PT. Formulatrix Indonesia - Internship",
    period: "Sep 2026-Jan 2027 (On Going)",
    summary: "Supported manufacturing and engineering processes for laboratory automation equipment, with hands-on involvement in assembly, testing, troubleshooting, and process improvement.",
    fullDescription: `During my internship at FORMULATRIX, I was assigned to the MANTIS project as a Process Engineer Intern. My current responsibility focuses on redrawing JIG components used in the MANTIS V4 assembly process.
    
    Right now, my responsibilities involved supporting production activities, understanding mechanical assemblies, performing functional checks, troubleshooting issues found during the process, and assisting in identifying improvements to ensure consistent product quality and reliability.
    
    The work involves studying existing JIG parts, understanding their function and assembly requirements, and recreating their technical drawings and 3D models based on the available references. Through this process, I work with mechanical design principles, dimensional requirements, and manufacturing considerations to ensure the redesigned parts can be properly understood and reproduced.`,
    highlights: [
      "Assigned to the MANTIS project as a Process Engineer Intern",
      "Redrawing JIG components for MANTIS V4",
      "Recreated mechanical parts based on existing references and physical components"
    ],
    images: [

    ]
  },
  {
    slug: "infant-warmer-wiring",
    role: "Mechatronics Industrial Practice",
    organization: "PT Citra Vita Buana — Infant Warmer Testing and Wiring",
    period: "2024–2025",
    summary:
      "Performed electrical wiring installation, troubleshooting, and revisions for Infant Warmer medical devices.",
    fullDescription: `PT Citra Vita Buana manufactures Infant Warmer medical devices designed to maintain a stable body temperature for newborn infants, particularly premature and low-birth-weight babies. As part of the production and quality assurance process, every unit must meet strict electrical, functional, and safety standards before being delivered for medical use.

                      During my industrial internship, I was assigned to support the production and quality assurance team by installing electrical wiring, troubleshooting wiring issues, performing wiring revisions, conducting functional testing, and verifying the temperature stability of Infant Warmer units according to technical specifications.

                      I installed electrical wiring based on engineering drawings and electrical schematics, verified wiring connections, and corrected electrical issues identified during assembly. I performed functional testing to ensure all electrical components operated correctly and monitored the heating system by recording temperature data at 10-minute intervals. In addition, I documented the testing results and verified that each unit complied with technical specifications and quality requirements before final inspection.
                      
                      The Infant Warmer units successfully passed functional verification and temperature stability testing, ensuring reliable operation and compliance with manufacturing quality standards. Through this project, I strengthened my practical skills in electrical wiring, troubleshooting, functional testing, technical documentation, and quality assurance within a medical device manufacturing environment.`,
    highlights: [
      "Installed electrical wiring based on technical drawings and electrical schematics.",
      "Performed electrical troubleshooting and wiring revisions during assembly.",
      "Conducted functional and temperature stability testing on Infant Warmer units.",
      "Documented test results and verified compliance with technical specifications and quality standards."
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
    fullDescription: `The ATMI Vertical Machining Center (VMC) is a CNC milling machine developed by Politeknik ATMI Surakarta as an educational and research platform for advanced manufacturing and industrial automation. The machine integrates the Siemens SINUMERIK 808D CNC control system, PLC-based machine I/O, servo drive systems, electrical control panels, and pneumatic actuators to replicate the operation of modern industrial CNC milling machines. During the machine development process, the electrical control system, PLC logic, and pneumatic subsystems required integration and verification before commissioning.
    
    I was assigned to support the electrical integration and PLC commissioning of the ATMI VMC. My responsibilities included configuring PLC I/O functions, integrating the Siemens SINUMERIK 808D CNC control system, implementing electrical control functions, assembling the pneumatic system, and verifying that the electrical wiring matched the engineering drawings and machine control logic.
    
    I installed and integrated the Siemens SINUMERIK 808D control system with the machine's electrical panel and developed the PLC I/O configuration for machine peripherals, including the tool clamp and unclamp mechanism, CNC indicator lamps, and emergency stop circuit. I verified the consistency between electrical wiring diagrams and PLC logic to ensure correct machine operation. In addition, I assembled and commissioned the pneumatic system by installing the air supply unit, enabling pneumatic operation for the tool clamping mechanism and air coolant system. Throughout the project, I also reviewed wiring documentation and assisted in system verification during machine commissioning.
    
    The integrated electrical control, PLC I/O, and pneumatic systems operated successfully during machine commissioning, enabling reliable operation of the tool clamping mechanism, indicator systems, emergency functions, and pneumatic air coolant. This project strengthened my practical experience in CNC control integration, Siemens PLC I/O development, electrical system commissioning, pneumatic system integration, and technical documentation within an industrial automation environment.`,
    highlights: [
      "Integrated the Siemens SINUMERIK 808D CNC control system with the machine's control panel.",
      "Developed and verified PLC I/O functions for machine peripherals",
      "Installed the pneumatic system for tool clamp/unclamp and air coolant operation.",
      "Verified electrical wiring implementation against engineering drawings and PLC logic.",
      "Supported electrical system commissioning and functional verification of the CNC machine."
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
    fullDescription: `HMPS Mechatronics (Himpunan Mahasiswa Program Studi Mechatronics) is the official student organization of the Mechatronics Engineering program at Politeknik ATMI Surakarta. The organization serves as a platform for academic, professional, and extracurricular development by organizing seminars, workshops, competitions, social activities, and student events. HMPS encourages leadership, teamwork, and organizational skills while fostering collaboration among students and supporting their personal and professional growth.
    
    As the Treasurer of HMPS Mechatronics, I was responsible for managing the organization's financial administration and supporting the execution of various student activities and events. My role included recording income and expenditures, preparing financial reports, monitoring budget allocations, maintaining transaction documentation, and ensuring that all financial activities were accurately recorded and transparently managed in accordance with the organization's procedures.
    `,
    highlights: [
      "Financial reporting and budget tracking",
      "Transparency in student organization finances",
    ],
    images: [
      "/experience/hmps1.jpeg",
      "/experience/hmps2.jpeg",
      "/experience/hmps3.jpeg"
    ]
  },
  {
    slug: "smk-mikael-internship-unit-production",
    role: "Student Intership - CNC (VMC) Operator",
    organization: "SMK Mikael Surakarta - Internship",
    period: "Sep 2022 (1 Month)",
    summary: 
    "Completed a one-month industrial internship in the Unit Production of SMK Katolik St. Mikael Surakarta, where I was directly involved in CNC milling manufacturing operations. Operated CNC Milling Neutron machines to manufacture production components.",
    fullDescription: `During my internship in the Unit Production of SMK Katolik St. Mikael Surakarta, I was directly involved in CNC milling manufacturing operations. I operated CNC milling machines to manufacture production components based on technical drawings and machining requirements.

    The experience provided hands-on exposure to the production workflow, including machine setup, tool selection, machining operations, and dimensional inspection. It also strengthened my understanding of CNC machining processes and how technical drawings are translated into physical components.`,
    highlights: 
    [
      "Operated CNC milling machines for production machining",
      "Manufactured mechanical components based on technical drawings",
      "Gained hands-on experience in a production environment",
      "Performed basic machine setup and machining operations"
    ],
    images: 
    [
      "/experience/up1.jpg",
      "/experience/up2.jpg",
      "/experience/up3.jpg"
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
  images?: string[];
};

export const PROJECTS: ProjectItem[] = [
  {
    slug: "cnc-engraving-capstone",
    title: "CNC Machine with GSK980TDa Control System",
    period: "2025–2026 · Final Year Capstone Project",
    summary:
      "Designed and built a 2-axis CNC machine with a pneumatic Z-axis.",
    fullDescription:
      ` PT ATMI Surakarta needed a way to produce PCB (Printed Circuit Board) traces in-house but lacked a dedicated CNC machine for the job. The company already owned a GSK980TDa CNC control system, originally designed for 2-axis lathe machines, but had no machine built around it for this purpose.
    
    As the final-year capstone project, I was tasked with designing and building a 2-axis CNC engraving machine using the existing GSK980TDa controller, adapting it to control an additional pneumatic Z-axis, without procuring any new control hardware.

    I mapped the controller's native Z-axis to function as a mechanical Y-axis, enabling true two-axis linear interpolation for X-Y motion. I integrated a pneumatic double-acting cylinder, controlled through the GSK980TDa's internal PLC via a 5/3 double-solenoid valve, to handle the vertical (marking) motion instead of a third CNC-controlled axis. I calculated and configured the Electronic Gear Ratio between the GSK980TDa and the Mitsubishi MR-J3-20A servo drivers to ensure the system translated G-code commands into precise physical movement, then validated the setup through repeated point-to-point positioning tests.

    The final system achieved a 1:1 correspondence between commanded and actual linear displacement (e.g., a 1 mm command produced exactly 1 mm of physical movement), with a measured repeatability of 0 mm across repeated trials on both the X and Y axes. The machine successfully executed multi-axis interpolated paths, including diagonal and combined X-Y motion, within a ±0.1 mm tolerance, validating the design as a viable foundation for future PCB-machining development at the company.`,

    tech: ["System Control", "GSK980Tda", "Servo Motion Control", "Pneumatics", "CNC Machining", "Teamworks", "Parametering"],
    highlights: [
      "2-axis CNC motion with pneumatic Z-axis",
      "Full mechanical, electrical, and pneumatic system design",
      "GSK980TDa controller with Mitsubishi servo integration",
    ],
    images: [
      "/projects/tugasakhir1.jpeg",
      "/projects/tugasakhir2.jpeg",
      "/projects/tugasakhir3.jpeg",

    ]
  },
  {
    slug: "safe-coin-treasury",
    title: "Safe Coin Treasury and Investment System",
    period: "2024–2025 · Protocol Project",
    summary:
      "A coin-based asset lending management system built with Arduino and RFID.",
    fullDescription: ` The Safe Coin Treasury & Investment project was developed to address the inefficiencies of the manual borrowing system used in the Microcontroller Laboratory. The conventional process relied on handwritten records, making it difficult to track borrowed items, verify borrowers, and maintain accurate inventory records. To improve security, accountability, and operational efficiency, our team developed a smart storage system integrating an Arduino Mega 2560, Nextion HMI, RFID authentication, an electronic lock, SD card logging, and Bluetooth communication.
    
    As a member of the development team, I was responsible for designing and implementing the embedded software that controlled the user interface and authentication workflow. My responsibilities included developing the Nextion HMI interface, programming the communication between the HMI and Arduino Mega 2560, implementing dual authentication using password and RFID, integrating peripheral devices such as the electronic lock, OLED display, buzzer, RTC, SD card module, and Bluetooth module, and developing the borrowing and returning workflow with automatic activity logging.

    Through the integration of hardware and software components, the system successfully automated user authentication, borrowing, and return management while securely recording transaction data and providing real-time user feedback through the HMI. The completed prototype demonstrated a practical, secure, and efficient alternative to the previous manual process, improving data accuracy, reducing administrative errors, and enhancing the overall management of laboratory equipment.`,

    tech: ["Arduino", "RFID", "Embedded Systems", "3D Printing", "Nextion HMI"],
    highlights: [
      "Developed the Nextion HMI interface and embedded control logic.",
      "Implemented dual authentication using password and RFID.",
      "Integrated Arduino Mega 2560 with OLED, buzzer, RTC, SD card, Bluetooth, and electronic lock modules.",
      "Developed automated borrowing and return workflows with digital activity logging.",
      "Performed hardware integration, functional testing, and system validation before deployment.",
    ],
    images: [
      "/projects/Safecoin1.jpg",
      "/projects/Safecoin2.jpg",
      "/projects/Safecoin3.jpg",
    ]
  },
];