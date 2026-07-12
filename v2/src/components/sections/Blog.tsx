"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Reveal } from "../Reveal";

type Post = {
  title: string;
  link: string;
  date: string;
  excerpt: string;
  image?: string;
  tags: string[];
};

// Static fallback — shown immediately and kept if the Medium RSS fetch fails.
const FALLBACK_POSTS: Post[] = [
  {
    title: "Data-Driven Decisions Using the Modern Data Stack",
    link: "https://medium.com/@hamza.lbelghiti/data-driven-decisions-using-the-modern-data-stack-999f901da0f5",
    date: "Jan 15, 2024",
    excerpt: "Discover the Modern Data Stack tools for data-driven success, from ingestion to visualization.",
    tags: ["Modern Data Stack", "Data Engineering", "Cloud"],
  },
  {
    title: "Extracting Information From YouTube Videos Using Whisper & Langchain",
    link: "https://medium.com/@hamza.lbelghiti/how-openai-whisper-and-langchain-can-answer-any-question-you-have-from-a-youtube-video-278d04cc3460",
    date: "Nov 8, 2023",
    excerpt: "Build a YouTube Q&A app using OpenAI Whisper, Langchain, and Streamlit.",
    tags: ["OpenAI", "Whisper", "Langchain"],
  },
  {
    title: "5 Ways to Gain Real-World Project Experience as Data Students",
    link: "https://medium.com/@hamza.lbelghiti/5-ways-to-gain-real-world-project-experience-as-data-students-02260745837e",
    date: "Sep 3, 2023",
    excerpt: "Practical strategies to build a strong data portfolio and gain hands-on experience before your first job.",
    tags: ["Data Science", "Career", "Students"],
  },
];

function extractImage(html: string): string | undefined {
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match?.[1];
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function Blog() {
  const [posts, setPosts] = useState<Post[]>(FALLBACK_POSTS);

  useEffect(() => {
    const rssUrl = encodeURIComponent("https://medium.com/feed/@hamza.lbelghiti");
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}&count=3`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "ok" || !Array.isArray(data.items) || data.items.length === 0) return;
        const fetched: Post[] = data.items.slice(0, 3).map((item: Record<string, string>) => ({
          title: item.title,
          link: item.link,
          date: new Date(item.pubDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          excerpt: stripHtml(item.description).slice(0, 140) + "…",
          image: item.thumbnail || extractImage(item.description || item.content || ""),
          tags: (item.categories || []).slice(0, 3),
        }));
        setPosts(fetched);
      })
      .catch(() => {
        // Keep the static fallback on failure.
      });
  }, []);

  return (
    <section id="blog" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3">05 · Writing</p>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl mb-12">
            Latest articles
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.link} delay={(i % 3) * 0.08}>
              <motion.a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group block h-full border border-line rounded-2xl overflow-hidden bg-surface/40 hover:border-accent/50 transition-colors duration-300"
              >
                {post.image && (
                  <div className="relative aspect-video overflow-hidden bg-line/30">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-muted mb-2">
                    <Calendar size={13} />
                    {post.date}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 rounded-full border border-line text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
