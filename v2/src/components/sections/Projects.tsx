"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Reveal } from "../Reveal";
import { GithubIcon } from "../icons/BrandIcons";
import { PROJECTS } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3">04 · Projects</p>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl mb-12">
            My work
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 0.08}
              className={p.featured ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group h-full border border-line rounded-2xl overflow-hidden bg-surface/40 hover:border-accent/50 transition-colors duration-300 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-line/30">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-[1.05] transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/25 via-surface to-background">
                      <span className="font-display font-bold text-3xl tracking-tight">
                        {p.title}
                      </span>
                    </div>
                  )}
                  {p.featured && (
                    <span className="absolute top-3 left-3 text-[11px] font-medium px-3 py-1 rounded-full bg-accent text-[#0a0e17]">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-muted font-mono uppercase tracking-widest mb-1">
                    {p.category}
                  </p>
                  <h3 className="font-display font-bold text-xl mb-2">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 rounded-full border border-line text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-5 text-sm">
                    {p.demo && (
                      <motion.a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 3 }}
                        className="inline-flex items-center gap-1.5 text-accent hover:underline underline-offset-4"
                      >
                        Live
                        <ExternalLink size={13} strokeWidth={2.25} />
                      </motion.a>
                    )}
                    {p.github && (
                      <motion.a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 3 }}
                        className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
                      >
                        <GithubIcon size={14} />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
