import { Reveal } from "../Reveal";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3">03 · Experience</p>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl mb-12">
            Where I&apos;ve worked
          </h2>
        </Reveal>
        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.company + exp.period} delay={i * 0.08}>
              <article className="group border border-line rounded-2xl p-7 md:p-9 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 bg-surface/40">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-2xl">{exp.role}</h3>
                  <span className="text-sm text-muted font-mono">{exp.period}</span>
                </div>
                <p className="text-muted mb-5">
                  {exp.company} · {exp.location}
                </p>
                <ul className="space-y-2 mb-6">
                  {exp.bullets.map((b) => (
                    <li key={b} className="text-muted leading-relaxed flex gap-3">
                      <span className="text-accent mt-[2px]">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-line text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
