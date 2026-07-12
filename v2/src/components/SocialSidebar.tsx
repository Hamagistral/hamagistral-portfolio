"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon, YoutubeIcon } from "./icons/BrandIcons";
import { SOCIALS } from "@/lib/data";

const LINKS = [
  { href: SOCIALS.linkedin, label: "LinkedIn", Icon: LinkedinIcon, external: true },
  { href: SOCIALS.github, label: "GitHub", Icon: GithubIcon, external: true },
  { href: SOCIALS.medium, label: "Medium", Icon: MediumIcon, external: true },
  { href: SOCIALS.youtube, label: "YouTube", Icon: YoutubeIcon, external: true },
  { href: `mailto:${SOCIALS.email}`, label: "Email", Icon: Mail, external: false },
];

export function SocialSidebar() {
  return (
    <div className="fixed bottom-0 left-6 z-40 hidden md:flex flex-col items-center gap-5 pb-6">
      {LINKS.map(({ href, label, Icon, external }) => (
        <motion.a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          aria-label={label}
          whileHover={{ scale: 1.15, y: -3, color: "var(--accent)" }}
          className="text-muted transition-colors"
        >
          <Icon size={18} />
        </motion.a>
      ))}
      <span className="w-px h-16 bg-line" aria-hidden="true" />
    </div>
  );
}
