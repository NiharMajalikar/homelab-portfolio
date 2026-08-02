import type { EducationItem } from "@/types/portfolio";

export const education: EducationItem[] = [
  {
    qualification: "Master of Engineering in Telecommunications and Networking",
    institution: "La Trobe University",
    location: "Melbourne, Australia",
    period: "July 2024 - June 2026",
    summary:
      "Postgraduate engineering study focused on modern networks, telecommunications planning, infrastructure and applied research.",
    focusAreas: [
      "Advanced networking",
      "Routing and switching",
      "Wireless communications",
      "Network security",
      "Cloud and virtualisation",
      "Telecommunications systems",
      "Research methods",
      "Network planning",
      "Master's research thesis",
    ],
    project: {
      label: "View the hybrid communications thesis project",
      href: "#hybrid-communications",
    },
  },
  {
    qualification: "Bachelor of Engineering in Electronics and Communication",
    institution: "N.M.A.M. Institute of Technology",
    location: "Nitte, India",
    period: "Completed June 2023",
    summary:
      "Undergraduate engineering foundation spanning electronics, communications, embedded systems and programming.",
    focusAreas: [
      "Electronics",
      "Communication systems",
      "Embedded systems",
      "Signal processing",
      "Programming fundamentals",
      "Networking fundamentals",
    ],
    project: {
      label: "View the assistive-technology capstone",
      href: "#face-recognition-glasses",
    },
  },
];
