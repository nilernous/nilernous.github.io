import { Github, Linkedin, Mail } from "lucide-react";

export const EMAIL = "phuctdm.dev@gmail.com";

export const SOCIALS = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    contactLabel: "Email",
    handle: EMAIL,
    href: `mailto:${EMAIL}`,
    iconClass: "text-sky-500",
    copyable: true,
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    contactLabel: "LinkedIn",
    handle: "/in/nilernous",
    href: "https://www.linkedin.com/in/nilernous",
    iconClass: "text-blue-600",
    copyable: false,
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    contactLabel: "GitHub",
    handle: "@nilernous",
    href: "https://github.com/nilernous",
    iconClass: "text-slate-900",
    copyable: false,
  },
];
