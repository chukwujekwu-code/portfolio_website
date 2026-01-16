import { PersonalInfo, Project, SkillCategory, Experience, Education, Leadership } from "./types";

export const personalInfo: PersonalInfo = {
  name: "Sunday Anah",
  title: "Data Scientist & ML Engineer",
  tagline: "Building production ML systems that solve real problems",
  email: "anahchukwujekwu@gmail.com",
  location: "Lagos, Nigeria",
  bio: [
    "I'm a Data Scientist specializing in production NLP systems, real-time recommendations, and scalable data infrastructure. I build end-to-end ML pipelines, from model development through deployment and monitoring, across healthcare analytics, consumer apps, and enterprise platforms.",
    "My path into data science started unconventionally: I studied Metallurgical Engineering at the University of Lagos, then pivoted during the COVID-19 pandemic when I joined MedBuzz and discovered the power of data to drive real-world health outcomes.",
    "Beyond my technical work, I volunteer at HerTechTrail, where I've trained over 1,000 women in technology skills across multiple bootcamp cohorts. I believe in building systems that scale, whether that's ML pipelines or people."
  ],
  resumeUrl: "/resume.pdf",
  avatarUrl: "/images/my_portrait.png",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/chukwujekwu-code", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sundayanah/", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/mychailblaise", icon: "twitter" },
    { name: "Email", url: "mailto:anahchukwujekwu@gmail.com", icon: "email" }
  ]
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Fraud Detection System",
    description: "End-to-end fraud detection system achieving 82% precision and 79% recall, processing 1,000+ transactions daily with sub-200ms latency.",
    longDescription: "Built a production-grade fraud detection pipeline using ensemble methods (Random Forest + XGBoost). Engineered 25+ behavioral features including rolling window aggregations, merchant risk scores, geolocation anomaly detection, and device fingerprinting. Deployed via FastAPI with async handling, rate limiting, and API key authentication.",
    technologies: ["Python", "FastAPI", "Scikit-learn", "XGBoost", "SQLite", "Pydantic"],
    githubUrl: "https://github.com/chukwujekwu-code/Fraud-Detection",
    featured: true
  },
  {
    id: "2",
    title: "MLOps Monitoring Pipeline",
    description: "End-to-end MLOps pipeline with experiment tracking, real-time serving at 100+ req/sec, and automated drift detection.",
    longDescription: "Demonstrates complete ML workflow from training to deployment. Features MLflow experiment tracking, FastAPI prediction service with Prometheus metrics, and Evidently AI for data drift detection. Containerized with Docker Compose, achieving 99% uptime through automated health checks and restart policies.",
    technologies: ["Python", "FastAPI", "MLflow", "Evidently AI", "Docker", "Prometheus", "Scikit-learn"],
    githubUrl: "https://github.com/chukwujekwu-code/MLOPS-Pipeline",
    featured: true
  },
  {
    id: "3",
    title: "Voice AI Intent Classifier",
    description: "Multilingual intent classification system achieving 97.3% F1 for a Voice AI assistant serving government services in Kinyarwanda, English, and code-switched utterances.",
    longDescription: "Production-ready intent classification API for a Voice AI assistant helping citizens access government services. Built with LaBSE embeddings for cross-lingual generalization across Kinyarwanda, English, and code-switched speech. Features confidence-based routing to human agents, batch prediction endpoints, and ~50ms inference latency. Classifies 13 intent categories including application status checks, appointment booking, and payment help.",
    technologies: ["Python", "FastAPI", "LaBSE", "Scikit-learn", "XGBoost", "Jupyter"],
    githubUrl: "https://github.com/chukwujekwu-code/voice-ai-intent-classifier",
    featured: true
  },
  {
    id: "4",
    title: "Sermon Recommender",
    description: "Semantic search API matching user emotional states to relevant sermons using LLM-powered query expansion and vector search over transcripts.",
    longDescription: "Full-stack sermon discovery platform that ingests YouTube sermons, transcribes them with Whisper, and enables emotional search. Users describe how they're feeling, and an LLM expands the query into sermon topics before performing vector similarity search. Features multi-channel YouTube sync, automatic transcription fallback, mood-based search categories, and a SvelteKit frontend. Deployed with GitHub Actions for weekly automated updates.",
    technologies: ["Python", "FastAPI", "SvelteKit", "Qdrant", "MongoDB", "Groq", "FastEmbed", "Whisper"],
    githubUrl: "https://github.com/chukwujekwu-code/sermon-recommender",
    featured: true
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "Bash" }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "Scikit-learn" },
      { name: "NLP" },
      { name: "Transformers" },
      { name: "SHAP" },
      { name: "XGBoost" },
      { name: "OCR" }
    ]
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Airflow" },
      { name: "ETL/ELT Pipelines" },
      { name: "Data Modeling" }
    ]
  },
  {
    category: "Cloud & MLOps",
    skills: [
      { name: "AWS (Bedrock, Batch, Lambda, S3)" },
      { name: "Docker" },
      { name: "Terraform" },
      { name: "MLflow" },
      { name: "Evidently AI" },
      { name: "CI/CD" }
    ]
  },
  {
    category: "APIs & Services",
    skills: [
      { name: "FastAPI" },
      { name: "Elasticsearch" },
      { name: "Qdrant" },
      { name: "Ollama" }
    ]
  },
  {
    category: "Databases & Visualization",
    skills: [
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "Streamlit" },
      { name: "Looker" }
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Data Scientist",
    company: "Chub",
    location: "Remote",
    startDate: "May 2024",
    endDate: "Present",
    description: [
      "Deployed NLP models for content moderation and sentiment analysis using transformers, improving detection accuracy by 24% and reducing manual review by 35%",
      "Engineered FastAPI microservices with lazy loading, streaming, and caching, reducing P95 latency by 45% under peak loads",
      "Optimized Elasticsearch queries from 1.2s to <250ms through strategic indexing and relevance tuning",
      "Built CI/CD pipelines with GitLab, Docker, and Terraform for automated model deployment on AWS with 99.9% uptime",
      "Designed ETL workflows using Airflow and AWS Batch for engagement analysis and personalized recommendations"
    ],
    technologies: ["Python", "FastAPI", "Transformers", "Elasticsearch", "AWS", "Terraform", "MLflow", "Docker"]
  },
  {
    id: "2",
    role: "Data Scientist",
    company: "TD Africa",
    location: "Lagos, Nigeria",
    startDate: "May 2023",
    endDate: "Apr 2024",
    description: [
      "Automated ERP data extraction from Microsoft Dynamics 365 F&O, reducing reporting latency from 2 days to 1 hour",
      "Designed star-schema data models in Power BI supporting 1,000+ concurrent users and 50+ reports",
      "Developed time-series forecasting models that reduced inventory overstock by 18%",
      "Orchestrated ELT pipelines in Airflow with Docker, reducing pipeline failures by 40%",
      "Trained 100+ staff in SQL, Power BI, and data-driven practices through internal workshops"
    ],
    technologies: ["Python", "Power BI", "Airflow", "Docker", "SQL", "Microsoft Dynamics 365"]
  },
  {
    id: "3",
    role: "Data Analyst",
    company: "MedBuzz",
    location: "Lagos, Nigeria",
    startDate: "Feb 2021",
    endDate: "Mar 2023",
    description: [
      "Led migration from Excel to PostgreSQL (via Supabase), enabling advanced SQL querying for operational analysis",
      "Built Power BI dashboards providing real-time insights on testing volumes and positivity rates during COVID-19",
      "Created automated reports for state health authorities, reducing manual reporting time by 80%",
      "Developed forecasting models to predict test kit demand, reducing stockouts and wastage",
      "Provided ad-hoc analyses for staff allocation, center benchmarking, and customer wait time optimization"
    ],
    technologies: ["Python", "PostgreSQL", "Supabase", "Power BI", "SQL", "Excel"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "B.Sc. Metallurgical and Materials Engineering",
    institution: "University of Lagos",
    location: "Lagos, Nigeria",
    startDate: "2014",
    endDate: "2020",
    description: "Engineering foundation with strong emphasis on analytical thinking and problem-solving. Transitioned to data science during COVID-19, applying quantitative skills to real-world health and business problems."
  },
  {
    id: "2",
    degree: "Microsoft Certified: Fabric Analytics Engineer Associate",
    institution: "Microsoft",
    location: "",
    startDate: "",
    endDate: "2024",
    description: "Professional certification in Microsoft Fabric for enterprise analytics and data engineering."
  },
  {
    id: "3",
    degree: "DataCamp Certified: Data Analyst Associate",
    institution: "DataCamp",
    location: "",
    startDate: "",
    endDate: "2023",
    description: "Certification validating proficiency in data analysis, SQL, and Python for analytics."
  }
];

export const leadership: Leadership[] = [
  {
    id: "1",
    role: "Volunteer",
    organization: "HerTechTrail",
    description: "Volunteered at a technology education initiative that has trained over 1,000 women across multiple bootcamp cohorts in Africa. Curriculum covers data analysis, Python programming, and career development in tech.",
    impact: "1,000+ women trained"
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" }
];