"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon, YoutubeIcon } from "../icons/BrandIcons";
import { SOCIALS } from "@/lib/data";

const LINKS = [
  { href: SOCIALS.linkedin, label: "LinkedIn", Icon: LinkedinIcon, external: true },
  { href: SOCIALS.github, label: "GitHub", Icon: GithubIcon, external: true },
  { href: SOCIALS.medium, label: "Medium", Icon: MediumIcon, external: true },
  { href: SOCIALS.youtube, label: "YouTube", Icon: YoutubeIcon, external: true },
  { href: `mailto:${SOCIALS.email}`, label: "Email", Icon: Mail, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-line/60 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>Built with passion by Hamza</p>
        <div className="flex gap-5">
          {LINKS.map(({ href, label, Icon, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2, color: "var(--foreground)" }}
              className="hover:text-foreground transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
