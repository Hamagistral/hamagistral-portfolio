import Image from "next/image";
import { Reveal } from "../Reveal";

function AvatarPortrait() {
  return (
    <div className="relative aspect-square max-w-sm mx-auto rounded-[2.5rem] overflow-hidden">
      <Image
        src="/3d_hamagistral.png"
        alt="Hamza El Belghiti"
        fill
        sizes="(max-width: 768px) 80vw, 400px"
        className="object-cover"
        style={{
          maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
        }}
      />
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent tracking-widest uppercase mb-8">01 · About</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal delay={0.1}>
            <p className="text-muted text-lg leading-relaxed">
              <span className="text-foreground">Data &amp; AI Engineer</span> at{" "}
              <span className="text-foreground">Airbus</span>, building LLM-based quality
              analysis systems and ML pipelines for the A330/A350 programs. GCP Professional
              Cloud Architect &amp; Data Engineer certified.
              <br />
              <br />
              I work at the intersection of data engineering and AI, from data pipelines to
              fine-tuned LLMs to GenAI products, all in service of one thing: making data useful.
              <br />
              <br />
              Outside of work, I build <span className="text-foreground">CraftCourse</span>, an
              AI-powered learning platform with 500+ users.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <AvatarPortrait />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
