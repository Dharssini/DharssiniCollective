export const resumeData = {
    personalInfo: {
        name: "Dharssini Karthikeyan",
        title: "AI/ML Engineer",
        location: "Coimbatore, Tamil Nadu, India",
        phone: "+91 7695890560",
        email: "dharssinikarthikeyan@gmail.com",
        github: "Dharssini",
        linkedin: "dharssini-karthikeyan",
        quote: "Building production-grade AI systems that bridge research innovation and real-world impact."
    },
    summary: "Minimal. Structured. Intentional. Ruthlessly clean. No decorative spacing tricks. No duplicate sections. One clear narrative. AI/ML Engineer with 2+ years architecting production-grade AI systems across healthcare and enterprise domains. Expertise in multi-agent conversational AI, RAG pipelines, LLM fine-tuning, and scalable microservices.",
    skills: [
        { category: "AI & LLM Ecosystems", items: ["LLMs (GPT-4, LLaMA-3, QLoRA)", "RAG Systems (LangChain, LlamaIndex)", "Multi-Agent Orchestration (LangGraph)", "Vector Search (Qdrant, FAISS, Milvus)", "Transformers (HuggingFace)", "PyTorch", "TensorFlow", "Prompt Engineering"] },
        { category: "Backend & Systems", items: ["FastAPI (High Performance)", "Microservices Architecture", "RESTful APIs", "System Design", "Event-Driven Architecture", "Docker", "Redis Caching"] },
        { category: "Cloud & MLOps", items: ["Azure (AKS, Container Apps)", "GCP (Vertex AI)", "Kubernetes", "CI/CD Pipelines (GitHub Actions)", "MLflow", "Triton Inference Server", "DVC", "Model Serving"] },
        { category: "Programming Languages", items: ["Python (Expert)", "C++ (Intermediate)", "SQL (Advanced)", "TypeScript", "Bash/Shell Scripting"] },
        { category: "Databases & Storage", items: ["PostgreSQL", "MongoDB", "SQLite", "Redis", "Vector Databases (HNSW Indexing)", "Apache Solr"] },
        { category: "Data Science & CV", items: ["Pandas", "NumPy", "Scikit-learn", "Computer Vision (OpenCV, YOLO, OCR)", "LayoutLM", "Time-Series Forecasting", "Data Visualization"] }
    ],
    researchEngineering: {
        title: "Research Engineering & Technical Innovation",
        highlights: [
            { label: "Algorithm Design", description: "Confidence-threshold routing (3-tier: 70%/50%/30%) · Metadata-aware cascade retrieval (6-tier fallback) · Hybrid fusion search (RRF, weighted, cascade)" },
            { label: "Safety & Security", description: "5-tier crisis detection system (40+ keywords) · Rule-based + semantic safety filters · Grounded generation with RAG evidence checking" },
            { label: "Architecture", description: "Designed 7-microservice mental health AI platform · Async worker architecture for parallel RAG calls · Latitude-aware caching reducing latency 80%" }
        ]
    },
    experience: [
        {
            company: "Improva",
            role: "AI/ML Engineer",
            location: "Dover, Delaware, USA (Remote)",
            period: "Apr. 2025 - Present",
            bullets: [
                "**Enterprise Multi-Agent RAG System:** Architected and deployed an end-to-end multi-agent RAG system integrating Google Gemini for classification and generation with Qdrant vector database utilizing HNSW-optimized hybrid search across 500+ knowledge documents and 50+ curated FAQs.",
                "**Performance Optimization:** Achieved 70%+ high-confidence intent detection, 99.5% uptime SLA, and p95 latency < 5s through vector indexing optimization, reducing ambiguous queries by 50% and cloud costs to <$300/mo via serverless auto-scaling.",
                "**Healthcare Data Quality Pipeline:** Architected a production-grade Association Rule Mining (ARM) system to resolve 1.15M+ provider-system mappings, optimizing healthcare data integrity across 394K+ domain combinations.",
                "**Automatic Provider Extraction:** Architected production-grade Intelligent Document Processing (IDP) system leveraging multi-stage LLM pipelines, Retrieval-Augmented Generation (RAG), and adaptive routing to automate complex healthcare provider roster extraction at scale."
            ],
            isAnchor: true
        },
        {
            company: "CyberTranscend",
            role: "AI/ML Engineer (Freelance)",
            location: "Remote, Sweden",
            period: "Jan. 2025 - Present",
            bullets: [
                "**Clinical AI Voice Assistant:** Engineered a local-first, privacy-preserving Edge AI system for autonomous psychological support, leveraging Small Language Models (SLMs) to achieve <2s latency and 100% data sovereignty.",
                "**Scalable Last-Mile Logistics Engine:** Architected a high-throughput route optimization engine for last-mile logistics, solving Vehicle Routing Problems (VRP) with time-window, capacity, and priority constraints.",
                "**Semantic Search Architecture:** Investigated high-performance information retrieval architectures for large-scale e-commerce discovery. Designed and simulated a distributed search framework using Apache Solr."
            ]
        },
        {
            company: "RNDsoftech",
            role: "AI Engineer Intern",
            location: "On-site, Coimbatore",
            period: "Dec. 2023 - Mar. 2024",
            bullets: [
                "Automated OCR processing using **OCDRNet (NVIDIA TAO toolkit)** on Triton Inference Server, improving accuracy with advanced image preprocessing.",
                "Optimized document classification with **LayoutLM**, enhancing 512-token handling and fine-tuning transformers.",
                "Developed an **LLM-powered retrieval system**, leveraging prompt engineering, domain adaptation, and QLoRA finetuning, reducing manual effort by **70%**."
            ]
        },
        {
            company: "Samsung PRISM",
            role: "R&D Intern",
            location: "Remote",
            period: "Aug. 2023 - Apr. 2024",
            bullets: [
                "Developed Python based GUI tool using **Tkinter**, enhancing user experience by processing log files to calculate and display time KPIs, resulting in a **50% reduction** in manual analysis time.",
                "Implemented a robust data extraction and reporting system generating detailed Excel reports and improving data processing efficiency by **40%**."
            ]
        },
        {
            company: "Buckman",
            role: "Data Science Intern",
            location: "Chennai, India",
            period: "Jun. 2023 - Oct. 2023",
            bullets: [
                "Predicted future sales volumes for various products in order to optimize inventory management and reduce costs using **9 different Time-Series Models**.",
                "MAPE improved by **20-30%** by implementing CLV analysis, and **10%** improvement from Matrix Profiling.",
                "Algorithms: BetaGeofitter, SCRIMP algorithm, SAGE logic for handling intermittent demand patterns."
            ]
        },
        {
            company: "Amazon",
            role: "ML Summer School Mentee",
            location: "Remote",
            period: "Jul. 2024 - Aug. 2024",
            bullets: [
                "Guided by industrial experts, honed my skills in data analysis and model development through workshops and hands-on projects, enhancing my understanding of **machine learning techniques**."
            ]
        }
    ],
    education: [
        {
            degree: "M.Sc., Decision & Computing Science",
            institution: "Coimbatore Institute of Technology",
            location: "Coimbatore",
            period: "2020 - 2025",
            details: "CGPA: 9.59/10.0 (Five-Year Integrated)"
        }
    ],
    achievements: [
        { label: "$4.5k+ Savings", company: "RNDsoftech" },
        { label: "80% Faster", company: "CyberTranscend" },
        { label: "45% Better UX", company: "Improva" },
        { label: "32% Accuracy", company: "Improva" }
    ],
    projects: [
        { name: "Google Photos Clone", link: "https://github.com/Dharssini/GooglePhotosClone", desc: "Facial recognition (>90% acc) w/ InsightFace" },
        { name: "Smart Poultry Health", link: "https://github.com/Dharssini/chicken-disease-classification", desc: "CNN Disease Classification w/ MLflow/DVC" },
        { name: "Virtual Try-On", link: "https://github.com/Dharssini/VirtualTryOn", desc: "2D Clothing Visualization framework" }
    ],
    systemProjects: [
        {
            id: "improva-rag",
            title: "Enterprise Multi-Agent RAG System",
            client: "Improva",
            role: "AI Architect",
            period: "2025",
            problem: "High latency and low accuracy in retrieving answers from 500+ complex healthcare documents and 50+ curated FAQs, with legacy search failing on ambiguous queries and requiring manual support escalation.",
            solution: "Architected end-to-end multi-agent RAG system integrating Google Gemini for classification and generation with Qdrant vector database utilizing HNSW-optimized hybrid search. Implemented multi-tier classification across 5 dimensions with confidence-based routing, prompt templates for 8 specialized agents, and automated knowledge base pipeline with MLOps infrastructure.",
            impact: [
                "**70%+ High-Confidence** intent detection",
                "**99.5% Uptime SLA** handling 1000+ daily conversations",
                "**p95 Latency < 5s** via HNSW optimization (m=24, ef=128)",
                "**50% Reduction** in ambiguous queries",
                "**<$300/mo** cloud costs via serverless auto-scaling",
                "**30% Reduction** in support ticket volume (L1 automation)"
            ],
            techStack: ["Python", "Gemini 1.5 Pro", "LangChain", "Langflow", "Qdrant", "Azure SQL", "PostgreSQL", "Docker", "Azure Container Apps", "Langfuse", "Azure Monitor"],
            architectureDiagram: "User → Intent Classifier (5D) → Confidence Router → [FAQ/KB Search] → Qdrant Hybrid → Reranker → Agent (8 types) → Response"
        },
        {
            id: "improva-arm",
            title: "Healthcare Data Quality & Anomaly Detection Pipeline",
            client: "Improva",
            role: "Data Scientist",
            period: "2025",
            problem: "Resolving 1.15M+ provider-system mappings across 394K+ domain combinations with low confidence (58% auto-approval) and high manual review load, requiring explainable AI outcomes in resource-constrained environments.",
            solution: "Architected production-grade Association Rule Mining system with adaptive algorithm selection (HMine/Apriori/FP-Growth) and sparse matrix optimization. Developed deterministic Triple-Frequency Validation Framework combining domain patterns, geo-spatial clustering, and facility embeddings validated by Fisher's Exact Test. Integrated LLM-Web Search Agent for autonomous long-tail resolution and confidence-based routing with automated Cartesian validation.",
            impact: [
                "**75-85% Auto-Approval** (up from 58%)",
                "**50-60% Workload Reduction** for manual reviews",
                "**1.15M+ Providers** processed at scale",
                "**98% Confidence** for high-tier rules",
                "**20-40% Accuracy Improvement** via LLM agents",
                "**50-70% Memory Reduction** enabling standard hardware",
                "**99.9% Uptime** with 3-day MVP delivery"
            ],
            techStack: ["Python", "Pandas", "MLxtend", "SciPy", "Scikit-learn", "PyTorch", "LLMs", "FastAPI", "PostgreSQL", "Docker", "Pytest"],
            architectureDiagram: "Raw Data → ARM (Adaptive) → Triple Validation → Statistical Test → [High: Auto-Approve / Low: LLM Agent] → Audit"
        },
        {
            id: "improva-idp",
            title: "Automatic Provider Extraction (IDP)",
            client: "Improva",
            role: "ML Engineer",
            period: "2025",
            problem: "Manual extraction of healthcare provider rosters from complex documents was slow (40+ hrs/week), error-prone, and costly, with inconsistent data quality across diverse document formats.",
            solution: "Architected production-grade Intelligent Document Processing system leveraging multi-stage LLM pipelines with adaptive difficulty classification (table density analysis, row/column heuristics) and Retrieval-Augmented Generation for long-context documents. Implemented zero-shot Prompt Engineering with Gemini 2.5 Pro using thinking budgets and robust post-processing validation (NPI APIs, USPS standardization).",
            impact: [
                "**95%+ F1 Score** across 8 structured fields",
                "**85% Reduction** in manual effort (40+ hrs/week saved)",
                "**60% Cost Reduction** ($0.003/document)",
                "**2,500+ documents** processed monthly",
                "**99.8% Service Availability** with <3s latency",
                "**75% Reduction** in downstream data quality issues"
            ],
            techStack: ["Gemini 2.5 Pro", "GPT-4", "Claude", "RAG", "LangChain", "Unstract", "LLM Whisperer", "Azure", "Kubernetes", "FastAPI", "Pydantic", "Pandas"],
            architectureDiagram: "Upload → Difficulty Classification → [Rule-based/RAG/Zero-shot LLM] → Validation (NPI/USPS) → JSON Output"
        },
        {
            id: "cyber-voice",
            title: "Clinical AI Voice Assistant (Mental Health Support)",
            client: "CyberTranscend",
            role: "AI Engineer",
            period: "2025",
            problem: "Need for privacy-preserving, low-latency mental health support agent without cloud dependency, maintaining clinical safety compliance and therapeutic continuity on consumer hardware.",
            solution: "Engineered local-first Edge AI system leveraging Small Language Models (Llama-3/Qwen-3/Mistral) with multi-agent orchestration and dynamic Prompt Engineering chains. Architected real-time Voice-to-Voice pipeline combining Faster Whisper ASR with streaming TTS and custom Voice Activity Detection. Implemented deterministic three-tier risk classification with privacy-preserving local RAG for clinical protocol grounding (CBT/DBT).",
            impact: [
                "**<2s End-to-End Latency** for seamless turn-taking",
                "**100% Data Sovereignty** (zero cloud dependency)",
                "**90% Inference Cost Reduction** (<$0.01/session)",
                "**95%+ Safety Compliance** in crisis simulations",
                "**70% Context Compression** for long-term continuity"
            ],
            techStack: ["Python", "PyTorch", "Faster Whisper", "Llama-3", "Qwen-3", "Mistral", "LangChain", "RAG", "Docker", "WebSocket", "FastAPI", "VAD"],
            architectureDiagram: "Audio Stream → VAD → Whisper ASR → Intent → Risk Classification → SLM + RAG → TTS → Audio Out"
        },
        {
            id: "cyber-logistics",
            title: "Scalable Last-Mile Logistics Optimization Engine",
            client: "CyberTranscend",
            role: "Backend Engineer",
            period: "2025",
            problem: "Inefficient routing for high-volume last-mile logistics with time-window, capacity, and priority constraints led to high fuel costs, missed SLAs, and poor driver efficiency.",
            solution: "Architected high-throughput route optimization engine using Google OR-Tools and Guided Local Search metaheuristic for Vehicle Routing Problems. Developed predictive service time model with 5+ features (weight, volume, spatial density, fragility) and engineered distributed geospatial pipeline with multi-provider fallback (OSM, Nominatim, Photon, Mapbox) with localized caching and vectorized NumPy operations.",
            impact: [
                "**15% Cost Reduction** in fleet operations",
                "**85% Latency Drop** (15s → 2s) for distance matrix",
                "**99.9% Geocoding Success** rate",
                "**50+ Stops/Route** optimized with constraints",
                "**15% Improvement** in delivery precision",
                "**20% Fleet Condensation** via aggressive minimization",
                "**12% Travel Distance Reduction** at scale"
            ],
            techStack: ["Python", "Google OR-Tools", "OSRM", "NumPy", "Pandas", "Scikit-learn", "Docker", "Redis", "AWS"],
            architectureDiagram: "Order Batch → Multi-Provider Geocoding → Cache → Distance Matrix → VRP Solver (GLS) → Optimized Routes"
        },
        {
            id: "research-search",
            title: "Scalable Semantic Search & Retrieval Architecture",
            client: "CyberTranscend",
            role: "Researcher",
            period: "2024",
            problem: "Cold-start problem and poor recall in large-scale e-commerce discovery, with high zero-result query rates and inability to handle semantically ambiguous searches.",
            solution: "Designed distributed search architecture with Apache Solr capable of indexing 500K+ documents, formulating novel Hybrid Ranking Algorithm combining BM25 probabilistic retrieval with TF-IDF vector similarity. Modeled real-time data ingestion pipeline integrating PostgreSQL, MongoDB, and Redis, and prototyped Context-Aware Re-ranking Strategy with temporal decay and popularity bias assessment.",
            impact: [
                "**40% Recall Improvement** for ambiguous queries",
                "**<200ms Latency** at 10K+ QPS (simulated)",
                "**30% Reduction** in zero-result queries",
                "**500K+ Items** validated architecture scale",
                "**95% Theoretical Query Accuracy** via modeling",
                "**99.9% Data Consistency** under high throughput",
                "**15% Uplift** in conversion (projected via offline eval)"
            ],
            techStack: ["Apache Solr", "Lucene", "Redis", "PostgreSQL", "MongoDB", "Python", "BM25", "TF-IDF", "LTR", "N-gram"],
            architectureDiagram: "Query → NLP + N-gram → [BM25 Retrieval ∪ TF-IDF Vector] → Hybrid Rank → Context Re-rank → Results"
        }
    ],
    leadership: [
        { role: "Campus Mandri & Treasurer", org: "GeeksforGeeks CIT", period: "2020-21" },
        { role: "AI for Assistive Tech", org: "DeepVision.AI", period: "2021" },
        { role: "Mentorship", org: "Tekie", period: "2021", desc: "Mentored 50+ kids in coding" }
    ],
    openSource: [
        { project: "Project Name", role: "Contributor", desc: "Description of your contribution and impact.", link: "#" }
    ]
};
