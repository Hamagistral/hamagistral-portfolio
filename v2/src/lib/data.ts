export type Key = {
  slug: string;
  label: string;
  color: string;
  href?: string;
};

// 24 keys, laid out 6 x 4. Color = brand color of the tech.
export const KEYS: Key[] = [
  { slug: "python", label: "Python", color: "#3776AB" },
  { slug: "googlecloud", label: "Google Cloud", color: "#4285F4" },
  { slug: "googlebigquery", label: "BigQuery", color: "#669DF6" },
  { slug: "apacheairflow", label: "Airflow", color: "#017CEE" },
  { slug: "dbt", label: "dbt", color: "#FF694B" },
  { slug: "apachespark", label: "Spark", color: "#E25A1C" },
  { slug: "apachekafka", label: "Kafka", color: "#2b2b31" },
  { slug: "docker", label: "Docker", color: "#2496ED" },
  { slug: "terraform", label: "Terraform", color: "#844FBA" },
  { slug: "postgresql", label: "PostgreSQL", color: "#4169E1" },
  { slug: "mongodb", label: "MongoDB", color: "#47A248" },
  { slug: "snowflake", label: "Snowflake", color: "#29B5E8" },
  { slug: "streamlit", label: "Streamlit", color: "#FF4B4B" },
  { slug: "fastapi", label: "FastAPI", color: "#009688" },
  { slug: "react", label: "React", color: "#61DAFB" },
  { slug: "nextdotjs", label: "Next.js", color: "#1a1a1e" },
  { slug: "tailwindcss", label: "Tailwind", color: "#06B6D4" },
  { slug: "scikitlearn", label: "scikit-learn", color: "#F7931E" },
  { slug: "tensorflow", label: "TensorFlow", color: "#FF6F00" },
  { slug: "huggingface", label: "Hugging Face", color: "#FFD21E" },
  { slug: "langchain", label: "LangChain", color: "#5b8dbb" },
  { slug: "pandas", label: "pandas", color: "#150458" },
  { slug: "git", label: "Git", color: "#F03C2E" },
  { slug: "linux", label: "Linux", color: "#FCC624" },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Data & AI Engineer",
    company: "Airbus",
    location: "Toulouse, France",
    period: "Sep 2025 – Aug 2026",
    bullets: [
      "Maintained and evolved a dashboard centralizing QLB customer quality data for the A330 and A350 programs.",
      "Accelerated the identification of recurring quality non-conformities by developing an LLM-based analysis system for QLBs from final cabin presentations.",
      "Reduced quality teams' manual search time by designing a RAG pipeline that classifies QLBs from their description, automatically retrieving the applicable acceptance criteria (reference, page, conditions) and status (acceptable/non-conforming).",
      "Designed an end-to-end ML pipeline using XGBoost to predict customer presentation dates at the A330/A350 FAL, achieving a MAE of 4.1 days and 87% of predictions within ±7 days, improving team planning and resource allocation.",
    ],
    tags: ["Skywise", "Python", "PySpark", "NLP", "Gemini", "Prompt Engineering", "XGBoost"],
  },
  {
    role: "Analytics & AI Engineer",
    company: "Blent.ai",
    location: "Paris, France",
    period: "Feb 2024 – Jul 2025",
    bullets: [
      "Implemented automated ELT pipelines feeding the Customer Data Platform, integrating 5+ sources.",
      "Developed Reverse ETL flows for marketing tools such as HubSpot and CustomerIO, enabling the marketing team to target campaigns on customer segments updated daily instead of manually.",
      "Unified client reporting by building sales and marketing dashboards analyzing customer KPIs for a 5-person team.",
      "Developed an AI chatbot to assist students on the platform and automated the grading of student projects using a RAG system.",
      "Consulted and designed an AI MVP for the DGAC to automate the extraction and monthly structuring of data from 300 French aerodromes using an LLM.",
    ],
    tags: ["Airbyte", "Mage", "Airflow", "BigQuery", "dbt", "Metabase", "Looker", "MongoDB", "HubSpot", "Open Metadata", "Langchain", "HuggingFace", "Groq", "Mistral", "Pinecone", "PDFplumber", "OpenAI API", "ChromaDB", "Streamlit"],
  },
  {
    role: "Machine Learning Engineer",
    company: "3D Smart Factory",
    location: "Mohammedia, Morocco",
    period: "Jun 2023 – Sep 2023",
    bullets: [
      "Reduced infrastructure costs by 98% ($85/month to $1.3 per 1,000 requests) by deploying a deep learning model for 3D tooth segmentation via a serverless architecture.",
      "Delivered an interactive 3D visualization interface for exploring tooth segmentations, integrating 3D libraries.",
    ],
    tags: ["Vite", "React", "Tailwind CSS", "Three.js", "VTK.js", "Firebase", "FastAPI", "Docker", "Vercel", "AWS"],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export const CERTIFICATIONS: Certification[] = [
  { name: "GCP Professional Cloud Architect", issuer: "Google", year: "2026" },
  { name: "GCP Professional Data Engineer", issuer: "Google", year: "2024" },
  { name: "dbt Fundamentals", issuer: "dbt Labs", year: "Nov 2023" },
  { name: "Apache Airflow", issuer: "Astronomer", year: "2023" },
  { name: "Data Scientist", issuer: "DataCamp", year: "2022" },
  { name: "Machine Learning with Python", issuer: "freeCodeCamp", year: "2022" },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  { category: "Programming", items: ["Python", "Java", "C"] },
  {
    category: "AI & ML",
    items: ["PyTorch", "Scikit-learn", "LangChain", "HuggingFace", "RAG", "MLflow", "CrewAI", "n8n", "LangGraph", "Fine-tuning", "MLOps"],
  },
  {
    category: "Databases",
    items: ["BigQuery", "PostgreSQL", "Supabase", "Redis", "pgVector", "MongoDB", "Oracle", "Pinecone", "ChromaDB"],
  },
  {
    category: "Web Development",
    items: ["React", "Next.js", "TypeScript", "REST APIs", "FastAPI", "Django", "Streamlit"],
  },
  { category: "Cloud", items: ["Google Cloud", "AWS", "Skywise"] },
  { category: "Tools", items: ["Linux", "Docker", "Git", "GitHub Actions", "Jira", "ClickUp"] },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  demo?: string;
  github?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "CraftCourse",
    category: "AI-powered learning platform (500+ users)",
    description:
      "AI-powered platform generating personalized learning roadmaps, with a real-time AI tutor and full gamification system.",
    image: "/projects/craftcourse.png",
    tags: ["Next.js", "Supabase", "pgvector", "Gemini API", "Hetzner VPS", "Stripe"],
    demo: "https://craftcourse.app",
    featured: true,
  },
  {
    title: "PixelWallet",
    category: "Web app",
    description:
      "Secure gaming wallet for minors that lets young players manage in-game purchases with parental controls and spending limits.",
    image: "/projects/pixelwallet.webp",
    tags: ["React", "Next.js", "Vercel"],
    demo: "https://pixelwallet-2qqllelj8-hamzas-projects-a8089634.vercel.app/",
  },
  {
    title: "TeethSeg",
    category: "AI / 3D web app",
    description:
      "3D tooth segmentation, deployed serverless on AWS, cutting cost from $85/mo to $1.3/1k requests.",
    image: "/projects/teethseg.png",
    tags: ["React", "Three.js", "FastAPI", "AWS Lambda"],
    demo: "https://teethseg-ai.vercel.app/",
    github: "https://github.com/Hamagistral/TeethSeg",
    featured: true,
  },
  {
    title: "Decathlon Chat",
    category: "AI chatbot",
    description:
      "Customer service chatbot trained on Decathlon Morocco data using RAG architecture for accurate, context-aware responses.",
    image: "/projects/decathlonchat.PNG",
    tags: ["Streamlit", "Langchain", "ChromaDB", "OpenAI API"],
    demo: "https://decathlon-chatbot.streamlit.app/",
    github: "https://github.com/Hamagistral/decathlon-chatbot",
  },
  {
    title: "GPTube",
    category: "AI app",
    description:
      "YouTube video summarizer and Q&A using Whisper transcription, LangChain retrieval, and a Streamlit UI.",
    image: "/projects/gptube.png",
    tags: ["Whisper", "LangChain", "Streamlit"],
    demo: "https://gptube.streamlit.app/",
    github: "https://github.com/Hamagistral/GPTube",
  },
  {
    title: "BrandGenie",
    category: "Web + AI",
    description:
      "AI branding assistant powered by OpenAI GPT-3 that generates brand names, slogans, keywords, and advertising copy for businesses.",
    image: "/projects/brandgenie.png",
    tags: ["React", "OpenAI GPT-3", "Vite", "Vercel"],
    demo: "https://brandgenie.vercel.app",
    github: "https://github.com/Hamagistral/BrandGenie",
  },
  {
    title: "Course Recommender",
    category: "ML system",
    description:
      "Coursera recommendation engine using BERT embeddings, MLflow experiment tracking, served via FastAPI.",
    image: "/projects/mlrecommender.png",
    tags: ["BERT", "MLflow", "FastAPI", "Python"],
    github: "https://github.com/Hamagistral",
  },
  {
    title: "NYC Taxi Analytics",
    category: "Data engineering",
    description:
      "NYC taxi records analysis using Mage ETL, GCP Storage, BigQuery data modeling, and Looker Studio dashboards.",
    image: "/projects/nyctaxi-etl.png",
    tags: ["Mage", "BigQuery", "Looker Studio"],
    demo: "https://bit.ly/nyctaxi-dashboard",
    github: "https://github.com/Hamagistral/NYCTaxi-Analytics-ETL",
  },
  {
    title: "Data Engineering Jobs",
    category: "Data analytics",
    description:
      "Analyzing the Data Engineers job market in the USA and predicting salaries with ML models trained on Glassdoor data.",
    image: "/projects/dataeng.PNG",
    tags: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Plotly"],
    demo: "https://jobsglassdoor-dataengineers.streamlit.app/",
    github: "https://github.com/Hamagistral/DataEngineers-Glassdoor",
  },
];

export const SOCIALS = {
  github: "https://github.com/Hamagistral",
  linkedin: "https://www.linkedin.com/in/hamza-elbelghiti/",
  medium: "https://medium.com/@hamza.lbelghiti",
  youtube: "https://www.youtube.com/channel/UCfO7NQVb2LYHIejfJSmst6Q",
  email: "hamza.lbelghiti@gmail.com",
};

export const RESUME_URL = "/pdf/Resume_Hamza_ELBELGHITI_en.pdf";
