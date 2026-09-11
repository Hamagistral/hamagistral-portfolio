"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import KeyboardHero from "../KeyboardHero";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { SkillIcon } from "../SkillIcon";
import { SKILLS, CERTIFICATIONS } from "@/lib/data";
import { SKILL_ICONS, CERT_ICONS } from "@/lib/skillIcons";

export function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3 text-center">02 · Skills</p>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl mb-8 text-center">
            Tools I reach for
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <KeyboardHero className="h-[420px] sm:h-[520px] md:h-[620px] w-full mb-14" />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {SKILLS.map((group, i) => (
            <Reveal key={group.category} delay={(i % 2) * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="border border-line rounded-2xl p-7 h-full hover:border-accent/50 transition-colors"
              >
                <h3 className="font-display font-bold text-xl mb-5">{group.category}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => {
                    const icon = SKILL_ICONS[item];
                    return (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.08, y: -1 }}
                        className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-full border border-line text-muted hover:text-foreground hover:border-accent/50 transition-colors"
                      >
                        {icon && <SkillIcon icon={icon} size={16} />}
                        {item}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="font-mono text-sm text-muted tracking-widest uppercase mb-4">Certifications</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((c) => {
              const icon = CERT_ICONS[c.issuer];
              return (
                <TiltCard key={c.name} className="px-5 py-4">
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-background/60 border border-line/70 flex items-center justify-center shrink-0">
                      {icon ? (
                        <SkillIcon icon={icon} size={22} />
                      ) : (
                        <BadgeCheck size={20} className="text-accent" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-snug">{c.name}</p>
                      <p className="text-xs text-muted mt-0.5">
                        {c.issuer} · {c.year}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
