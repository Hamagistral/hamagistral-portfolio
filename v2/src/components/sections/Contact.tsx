"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { Reveal } from "../Reveal";
import { GithubIcon, LinkedinIcon, YoutubeIcon, MediumIcon } from "../icons/BrandIcons";
import { SOCIALS } from "@/lib/data";

const ELSEWHERE = [
  { href: SOCIALS.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: SOCIALS.github, label: "GitHub", Icon: GithubIcon },
  { href: SOCIALS.medium, label: "Medium", Icon: MediumIcon },
  { href: SOCIALS.youtube, label: "YouTube", Icon: YoutubeIcon },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // No backend needed — compose the email in the visitor's mail client.
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nSent by ${name} (${email})`);
    window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full bg-surface/60 border border-line rounded-xl px-4 py-3 text-sm placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors";

  return (
    <section id="contact" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3">06 · Contact</p>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-6xl mb-12">
            Let&apos;s work together
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  aria-label="Name"
                  className={inputClass}
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="Email"
                  className={inputClass}
                />
              </div>
              <textarea
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project…"
                aria-label="Message"
                className={inputClass}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="self-start inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-accent text-[#0a0e17] font-medium hover:opacity-90 transition-opacity"
              >
                Send message
                <Send size={16} strokeWidth={2.25} />
              </motion.button>
            </form>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="text-muted leading-relaxed">
              <p className="mb-6 flex items-center gap-2">
                <Mail size={16} className="text-accent shrink-0" />
                Prefer email? Reach me directly at{" "}
                <a href={`mailto:${SOCIALS.email}`} className="text-accent hover:underline underline-offset-4">
                  {SOCIALS.email}
                </a>
              </p>
              <p className="mb-2 text-sm font-mono uppercase tracking-widest text-muted/70">Elsewhere</p>
              <div className="flex flex-col gap-2">
                {ELSEWHERE.map(({ href, label, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4, color: "var(--foreground)" }}
                    className="inline-flex items-center gap-2 w-fit hover:text-foreground transition-colors"
                  >
                    <Icon size={16} />
                    {label}
                  </motion.a>
                ))}
              </div>
              <p className="mt-8 text-sm flex items-center gap-2">
                <MapPin size={16} className="text-accent shrink-0" />
                Toulouse, France
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
