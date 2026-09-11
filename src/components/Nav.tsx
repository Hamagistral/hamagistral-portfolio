"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { RESUME_URL } from "@/lib/data";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-4xl mx-auto flex items-center justify-between gap-6 px-5 py-2.5 rounded-full border border-line/60 bg-background/55 backdrop-blur-xl shadow-lg shadow-black/10"
      >
        <a href="#" className="font-display font-bold tracking-tight text-lg shrink-0">
          hamza<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-5 lg:gap-6 text-sm text-muted">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="relative group hover:text-foreground transition-colors">
              {l.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <motion.a
            href={RESUME_URL}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-accent text-[#0a0e17] font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={14} strokeWidth={2.25} />
            Resume
          </motion.a>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-9 h-9 rounded-lg border border-line flex items-center justify-center"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-4xl mx-auto mt-2 rounded-2xl border border-line/60 bg-background/90 backdrop-blur-xl px-6 py-4 flex flex-col gap-4 text-sm text-muted shadow-lg shadow-black/10"
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href={RESUME_URL} download className="text-accent flex items-center gap-1.5">
              <Download size={14} strokeWidth={2.25} />
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
