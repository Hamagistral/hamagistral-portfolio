export type SkillIcon = {
  slug: string;
  // simple-icons SVGs ship as flat black shapes (meant for currentColor)
  // so they need inverting to read on our dark surfaces. devicon SVGs
  // already carry real brand colors — inverting those would wreck them.
  invert?: boolean;
};

// Maps a skill label to a downloaded icon slug in /public/icons — only for
// items we actually have an SVG for. Everything else falls back to a plain
// text chip.
export const SKILL_ICONS: Record<string, SkillIcon> = {
  Python: { slug: "python", invert: true },
  Java: { slug: "java" },
  C: { slug: "c" },
  PyTorch: { slug: "pytorch", invert: true },
  "Scikit-learn": { slug: "scikitlearn", invert: true },
  LangChain: { slug: "langchain", invert: true },
  HuggingFace: { slug: "huggingface", invert: true },
  MLflow: { slug: "mlflow", invert: true },
  n8n: { slug: "n8n", invert: true },
  BigQuery: { slug: "googlebigquery", invert: true },
  PostgreSQL: { slug: "postgresql", invert: true },
  Supabase: { slug: "supabase", invert: true },
  Redis: { slug: "redis", invert: true },
  MongoDB: { slug: "mongodb", invert: true },
  Oracle: { slug: "oracle" },
  React: { slug: "react", invert: true },
  "Next.js": { slug: "nextdotjs", invert: true },
  TypeScript: { slug: "typescript", invert: true },
  FastAPI: { slug: "fastapi", invert: true },
  Django: { slug: "django", invert: true },
  Streamlit: { slug: "streamlit", invert: true },
  "Google Cloud": { slug: "googlecloud", invert: true },
  AWS: { slug: "amazonwebservices" },
  Linux: { slug: "linux", invert: true },
  Docker: { slug: "docker", invert: true },
  Git: { slug: "git", invert: true },
  "GitHub Actions": { slug: "githubactions", invert: true },
  Jira: { slug: "jira", invert: true },
  ClickUp: { slug: "clickup", invert: true },
};

export const CERT_ICONS: Record<string, SkillIcon> = {
  Google: { slug: "googlecloud", invert: true },
  Astronomer: { slug: "apacheairflow", invert: true },
  DataCamp: { slug: "datacamp", invert: true },
  freeCodeCamp: { slug: "freecodecamp", invert: true },
  "dbt Labs": { slug: "dbt", invert: true },
};
