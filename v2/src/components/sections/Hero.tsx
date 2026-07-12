"use client";

import { motion, type Variants } from "framer-motion";
import { Download, Send } from "lucide-react";
import KeyboardHero from "../KeyboardHero";
import { Typewriter } from "../Typewriter";
import { RESUME_URL } from "@/lib/data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="text-accent mb-3 font-medium tracking-wide">
            Data &amp; AI Engineer
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05] min-h-[1.2em]"
          >
            <Typewriter phrases={["Hi, I'm Hamza", "I build AI systems"]} />
          </motion.h1>
          <motion.p variants={item} className="mt-5 text-muted max-w-xl leading-relaxed">
            I turn raw data into pipelines, models,
            <br />
            and products people use.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href={RESUME_URL}
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-[#0a0e17] font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={16} strokeWidth={2.25} />
              Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2, borderColor: "var(--accent)" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-line hover:text-accent transition-colors"
            >
              <Send size={16} strokeWidth={2.25} />
              Contact me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
        >
          <KeyboardHero className="h-[380px] sm:h-[460px] md:h-[540px] w-full" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-6 h-9 rounded-full border border-line flex justify-center pt-2"
          animate={{ borderColor: ["var(--border)", "var(--accent)", "var(--border)"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.span
            className="w-1 h-1.5 rounded-full bg-accent"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.a>
    </section>
  );
}
