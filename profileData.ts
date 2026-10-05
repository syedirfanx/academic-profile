export interface ResearchTheme {
  title: string;
  category: string;
  description: string;
  topics: string[];
}

export interface ResearchProject {
  id: string;
  type: 'dissertation' | 'undergrad' | 'coursework' | 'independent';
  title: string;
  institution?: string;
  supervisor?: string;
  period: string;
  shortSummary: string;
  description: string;
  keyMetrics?: { label: string; value: string }[];
  details: {
    question?: string;
    methodology?: string;
    datasets?: string;
    algorithms?: string;
    results?: string[];
    learnings?: string;
  };
  githubUrl?: string;
  publication?: {
    venue: string;
    citation: string;
    role: string;
    citationsCount: string;
    bibtex: string;
  };
}

export interface EvolutionStep {
  stage: string;
  title: string;
  focus: string;
  insight: string;
  period: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  year: string;
  context: string;
  githubUrl: string;
}

export interface ProjectCategory {
  title: string;
  projects: ProjectItem[];
}

export interface ResearchQuestion {
  id: string;
  title: string;
  inquiry: string;
  subQuestions: string[];
  connectionToPastWork: string;
}

export const PROFILE_DATA = {
  name: "Syed Md Irfanul Alam Irfan",
  displayName: "Syed Irfan",
  location: "Dhaka, Bangladesh",
  email: "syedirfaanx@gmail.com",
  linkedin: "https://linkedin.com/in/syedirfanx",
  github: "https://github.com/syedirfanx",
  googleScholar: "https://scholar.google.com/citations?user=MG9ta8wAAAAJ&hl=en&oi=sra",
  personalDomain: "https://syedirfan.co.uk",
  tagline: "Machine Learning & Data Science Research",
  heroDescription: "Exploring machine learning, representation learning, large language models, and multimodal AI for complex and high-dimensional data.",
  
  academicTrajectory: [
    {
      degree: "MSc in Data Science",
      institution: "University of Greenwich, London",
      period: "January 2022 – April 2023",
      dissertationTitle: "Feature Selection using Swarm Intelligence and Dispersive Flies Optimization",
      focus: "High-dimensional learning, metaheuristic swarm optimization (PSO & DFO), dimensionality reduction, applied machine learning.",
      highlights: "Conducted extensive empirical benchmark experiments on high-dimensional feature spaces with up to 2,400 features."
    },
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "North South University, Dhaka",
      period: "January 2015 – April 2020",
      dissertationTitle: "Rice Leaf Disease Detection using Machine Learning Techniques",
      focus: "Foundational computer science, data structures, algorithms, deep learning (GANs & CNNs), applied image classification.",
      highlights: "Co-authored peer-reviewed IEEE STI 2019 conference paper (420+ Google Scholar citations). Charter member of North South University Toastmasters."
    }
  ],

  researchThemes: [
    {
      title: "Learning & Representation",
      category: "Theoretical & Applied ML",
      description: "How representations can capture essential structure, handle high dimensionality, and transfer robustly across domains.",
      topics: ["Machine Learning", "Deep Learning", "Representation Learning", "Transfer Learning"]
    },
    {
      title: "Foundation & Multimodal AI",
      category: "Language & Cross-Modal Systems",
      description: "How diverse modalities (text, visual, structured data) can be synergistically aligned, grounded, and reliably reasoned over.",
      topics: ["Large Language Models", "Multimodal Learning", "Natural Language Processing", "Contextual Grounding"]
    },
    {
      title: "Data & Optimization",
      category: "Algorithms & Search",
      description: "How intelligent search strategies and feature selection can improve sample efficiency and generalization on complex feature spaces.",
      topics: ["High-Dimensional Data", "Feature Selection", "Swarm Intelligence", "Optimization"]
    }
  ],

  mscDissertation: {
    title: "Feature Selection using Swarm Intelligence and Dispersive Flies Optimization",
    institution: "University of Greenwich",
    supervisor: "Dr. Mohammed Majid Al-Rifaie",
    period: "2023",
    githubUrl: "https://github.com/syedirfanx/swarm-intelligence",
    results: [
      "Dimensionality reduced by up to 86% across benchmark datasets",
      "Classification accuracy improved by up to 1.98% compared to full feature sets",
      "Demonstrated swarm search efficiency on feature spaces up to 2,400 dimensions"
    ],
    question: "How do swarm intelligence algorithms—specifically Particle Swarm Optimization (PSO) and Dispersive Flies Optimization (DFO)—perform in eliminating uninformative and redundant dimensions in high-dimensional classification tasks without sacrificing predictive generalization?",
    methodology: "Formulated feature subset evaluation as a binary optimization problem. Compared PSO and DFO search dynamics under uniform fitness evaluation criteria, observing convergence rates, feature sparsity, and classifier accuracy across varied dimensional scales.",
    datasets: "High-dimensional benchmark datasets spanning biological and sensor domains, with feature dimensionalities reaching up to 2,400 attributes.",
    algorithms: "Particle Swarm Optimization (PSO), Dispersive Flies Optimization (DFO), wrapped with standard supervised classifiers (KNN, Random Forest, SVM) for fitness scoring.",
    learnings: "Working directly with 2,400-dimensional spaces illuminated the subtle interplay between search exploration, dimensionality reduction, and inductive bias. It demonstrated why unconstrained high-dimensional data frequently degrades machine learning models, laying the empirical ground for my interest in learned representations."
  },

  undergradResearch: {
    title: "Rice Leaf Disease Detection using Machine Learning Techniques",
    institution: "North South University",
    supervisor: "Dr. Sifat Momen",
    period: "2019",
    venue: "2019 International Conference on Sustainable Technologies for Industry 4.0 (STI), IEEE",
    citationText: 'Ahmed, K., Shahidi, T. R., Alam, S. M. I., and Momen, S. (2019). "Rice Leaf Disease Detection Using Machine Learning Techniques." 2019 International Conference on Sustainable Technologies for Industry 4.0 (STI), IEEE, pp. 1–5.',
    role: "Third of four authors (S. M. I. Alam)",
    citationsCount: "420+ Google Scholar citations",
    paperUrl: "https://doi.org/10.1109/STI47673.2019.9068096",
    scholarUrl: "https://scholar.google.com/scholar?q=Rice+Leaf+Disease+Detection+Using+Machine+Learning+Techniques+Ahmed+Alam",
    contributions: [
      "Data preprocessing and image standardisation pipelines",
      "Data augmentation strategies to address class imbalance across diseased crop leaves",
      "Literature review on agricultural computer vision and feature extraction",
      "Drafting and revision contributions for the technical conference manuscript"
    ],
    bibtex: `@inproceedings{ahmed2019rice,
  title={Rice Leaf Disease Detection Using Machine Learning Techniques},
  author={Ahmed, K. and Shahidi, T. R. and Alam, S. M. I. and Momen, S.},
  booktitle={2019 International Conference on Sustainable Technologies for Industry 4.0 (STI)},
  pages={1--5},
  year={2019},
  organization={IEEE},
  doi={10.1109/STI47673.2019.9068096}
}`
  },

  evolutionSteps: [
    {
      stage: "01",
      title: "High-Dimensional Data",
      focus: "The curse of dimensionality in practical data",
      insight: "Observing empirical degradation in classifiers when features outnumber meaningful signals.",
      period: "2021 – 2022"
    },
    {
      stage: "02",
      title: "Feature Selection & Optimization",
      focus: "Swarm Intelligence & Metaheuristics (MSc Dissertation)",
      insight: "Using PSO and DFO to reduce feature space by 86% while boosting accuracy; discovering the power and limits of discrete search.",
      period: "2022 – 2023"
    },
    {
      stage: "03",
      title: "Machine Learning to Deep Learning",
      focus: "Nonlinear representations & neural architectures",
      insight: "Transitioning from discrete feature filtering to continuous parameter optimization and neural feature extractors.",
      period: "2023"
    },
    {
      stage: "04",
      title: "Representation Learning",
      focus: "Latent spaces & self-supervised embeddings",
      insight: "Recognizing that learning low-dimensional invariant representations directly from raw data outperforms manual heuristic feature selection.",
      period: "2023 – 2024"
    },
    {
      stage: "05",
      title: "Generative AI & Large Language Models",
      focus: "Contextual grounding, retrieval & structured reasoning",
      insight: "Exploring how pre-trained foundation models handle semantic understanding, prompting, and structured task adaptation.",
      period: "2024 – 2025"
    },
    {
      stage: "06",
      title: "Multimodal & Trustworthy Intelligent Systems",
      focus: "Doctoral Research Horizon",
      insight: "Integrating heterogeneous signals (text, vision, structured tables) while preserving calibration, robustness, and factual reliability.",
      period: "Present & Future"
    }
  ],

  selectedProjects: [
    {
      id: "starpals-ai",
      title: "StarPals AI: Revolutionizing Talent Casting with AI",
      description: "Built a multimodal AI casting platform using Genkit for script analysis, character extraction, vision-language lookalike detection, and weighted actor-role compatibility scoring.",
      year: "2026",
      context: "Independent",
      githubUrl: "https://github.com/syedirfanx/StarPalsAI"
    },
    {
      id: "celeba-face-generation",
      title: "CelebA Face Generation using DCGAN",
      description: "Implemented a DCGAN in PyTorch with a custom Generator–Discriminator architecture, trained on 200,000+ CelebA images for 150 epochs to synthesize human face images.",
      year: "2019",
      context: "BSc - CSE 465 Neural Networks and Pattern Recognition",
      githubUrl: "https://github.com/syedirfanx/face-generation"
    },
    {
      id: "network-traffic-prediction",
      title: "AI Network Traffic Prediction and Resource Optimization",
      description: "Used Random Forest regression to forecast network traffic load from packet-level data (R² = 0.78), combined with rule-based resource allocation for proactive congestion management.",
      year: "2026",
      context: "Independent",
      githubUrl: "https://github.com/syedirfanx/ai-network-traffic-optimization"
    },
    {
      id: "bangla-news-summarizer",
      title: "Bangla News Image Summarizer with Cloud Storage",
      description: "Built a Bangla newspaper OCR and summarization pipeline using Tesseract and LexRank to extract, clean, and summarize text from scanned newspaper images.",
      year: "2025",
      context: "Independent",
      githubUrl: "https://github.com/syedirfanx/bangla-news-summarizer"
    },
    {
      id: "revenue-forecasting",
      title: "Customer Revenue Forecasting",
      description: "Benchmarked classification, regression, and clustering approaches on 1,000 customer records, with Random Forest achieving 93% accuracy and an R² of 0.898.",
      year: "2022",
      context: "MSc - COMP 1804 Applied Machine Learning",
      githubUrl: "https://github.com/syedirfanx/revenue-forecasting"
    },
    {
      id: "network-intrusion-detection",
      title: "AI Network Intrusion Detection",
      description: "Developed a Random Forest classifier using the NSL-KDD dataset for network intrusion detection, with feature-importance analysis to identify influential traffic indicators.",
      year: "2026",
      context: "Independent",
      githubUrl: "https://github.com/syedirfanx/ai-network-intrusion-detection"
    },
    {
      id: "venue-visitors-clustering",
      title: "Venue Visitors Data Analysis and Clustering",
      description: "Performed exploratory data analysis, correlation analysis, seasonal trend decomposition, and K-Means clustering to identify patterns across venue visitor segments.",
      year: "2022",
      context: "MSc - COMP 1800 Data Visualization",
      githubUrl: "https://github.com/syedirfanx/chrisco-data-exploration"
    },
    {
      id: "bengali-nid-ocr",
      title: "Bengali NID Card OCR System",
      description: "Built an OCR pipeline using Tesseract to extract Bangla and English text from National ID cards for automated document-processing workflows.",
      year: "2020",
      context: "Codephilics"
    },
    {
      id: "face-mask-detection",
      title: "Face Mask Detection & Warning System",
      description: "Built a real-time CNN-based detection system using TensorFlow/Keras and OpenCV to identify face-mask usage, achieving 95% detection accuracy with automated alerts.",
      year: "2020",
      context: "Codephilics"
    }
  ],

  recentExploration: [
    {
      id: "starpals-ai",
      title: "StarPals AI",
      tagline: "LLM-assisted film casting and character compatibility analysis",
      description: "An experimental system investigating how large language models can perform structured screenplay analysis, character arc decomposition, and multi-factor actor-role semantic compatibility scoring.",
      technologies: ["LLMs", "Prompt Engineering", "TypeScript", "React", "Structured Extraction"],
      githubUrl: "https://github.com/syedirfanx/starpals-ai",
      liveUrl: "https://starpals-ai.vercel.app"
    },
    {
      id: "lifestyle-os",
      title: "Lifestyle OS",
      tagline: "Personal decision-support system with heuristic planning",
      description: "Explores how contextual AI can assist users in organizing long-term financial commitments, scheduling constraints, and multi-variable life planning trade-offs.",
      technologies: ["AI Assistants", "Next.js", "State Architecture", "Decision Support"],
      githubUrl: "https://github.com/syedirfanx/lifestyle-os",
      liveUrl: "https://lifestyle-os-tan.vercel.app"
    },
    {
      id: "bangla-ocr-summarization",
      title: "Bangla News OCR & Summarization",
      tagline: "OCR extraction and extractive document condensation pipeline",
      description: "A two-stage NLP pipeline combining Tesseract OCR with graph-based LexRank extractive summarization to parse low-resource Bangla newsprint scans into concise executive briefs.",
      technologies: ["Tesseract OCR", "LexRank", "NLP", "Low-Resource Language", "Python"]
    }
  ],

  researchQuestions: [
    {
      id: "q1",
      title: "Learning Robust Representations from High-Dimensional Heterogeneity",
      inquiry: "How can models learn compact latent representations that remain informative and invariant when input data is extremely high-dimensional, noisy, or distributed across heterogeneous data sources?",
      subQuestions: [
        "What geometric structures preserve task-relevant semantics while discarding spurious high-dimensional noise?",
        "Can principles from metaheuristic feature selection inform inductive biases in continuous representation learning?"
      ],
      connectionToPastWork: "Rooted in my MSc dissertation, where feature spaces of 2,400 attributes required 86% dimensionality reduction to unlock optimal predictive accuracy."
    },
    {
      id: "q2",
      title: "Multimodal Alignment Without Information Loss",
      inquiry: "How can representations across disparate modalities (natural language, vision, structured tabular data) be aligned effectively without compressing away modality-specific nuances?",
      subQuestions: [
        "How can cross-attention mechanisms maintain asymmetric informativeness across modalities?",
        "How do we prevent dominant modalities from overwhelming subtle, high-signal complementary features?"
      ],
      connectionToPastWork: "Draws from both early computer vision research (rice disease image classification) and recent generative AI text modeling explorations."
    },
    {
      id: "q3",
      title: "Efficient Domain Adaptation & Low-Supervision Transfer",
      inquiry: "How can learned representations transfer effectively to specialized low-resource domains with limited labeled instances, without catastrophic forgetting or overfitting?",
      subQuestions: [
        "What parameter-efficient fine-tuning strategies preserve general semantic priors while adapting to domain-specific syntax?",
        "How can self-supervised objectives be formulated to utilize unlabeled domain data reliably?"
      ],
      connectionToPastWork: "Informed by practical challenges encountered while building Bengali NLP and low-resource OCR summarization pipelines."
    },
    {
      id: "q4",
      title: "Grounded Reliability & Contextual Memory in Foundation Models",
      inquiry: "How can large language models integrate external retrieval, structured memory, and domain constraints so that their reasoning remains verifiable when context is ambiguous or incomplete?",
      subQuestions: [
        "How can uncertainty estimation and calibration be integrated natively into retrieval-augmented architectures?",
        "What verification loops can prevent unfaithful hallucination during multi-step reasoning?"
      ],
      connectionToPastWork: "Evolved directly from prototyping LLM-assisted decision support and structured script analysis systems (StarPals AI)."
    },
    {
      id: "q5",
      title: "Optimization Dynamics in Complex Deep Architectures",
      inquiry: "How can optimization insights and sparsity-inducing objectives contribute to sample-efficient and computationally tractable learning in modern deep neural networks?",
      subQuestions: [
        "Can metaheuristic and swarm search principles provide insights into neural architectural search and sparse parameter allocation?",
        "How do loss landscape geometry and pruning interact in foundation model training?"
      ],
      connectionToPastWork: "Direct bridge between my MSc thesis in swarm metaheuristics (PSO/DFO) and modern deep learning training objectives."
    }
  ],

  futurePhDDirection: {
    title: "Where I Want to Go",
    subtitle: "Doctoral Aspirations & Academic Research Horizon",
    statement: "I am seeking to pursue doctoral research that builds upon my foundational work in machine learning, optimization, high-dimensional data, deep learning, and data science. My objective is to investigate fundamental representation, adaptation, and reliability challenges in modern artificial intelligence, rather than solely developing surface-level applications.",
    interests: [
      "Representation Learning for Complex & High-Dimensional Data",
      "Foundation Models & Large Language Model Reliability",
      "Multimodal Representation & Cross-Modal Alignment",
      "Transfer Learning & Domain Adaptation under Low Supervision",
      "Optimization Dynamics & Parameter Efficiency in Deep Learning"
    ],
    perspective: "I look forward to contributing rigorous empirical experimentation, mathematical curiosity, and sustained dedication to a prospective advisor's laboratory. I am open and adaptable regarding specific problem formulations, eager to align with ongoing departmental grants and collaborative research agendas."
  },

  technicalBackground: {
    programming: ["Python"],
    machineLearning: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Feature Engineering",
      "Model Optimization",
      "Feature Selection (PSO, DFO)"
    ],
    deepLearning: [
      "Convolutional Neural Networks (CNN)",
      "Generative Adversarial Networks (GAN)",
      "PyTorch",
      "TensorFlow"
    ],
    nlpGenAI: [
      "Natural Language Processing (NLP)",
      "Text Processing & Tokenization",
      "Optical Character Recognition (OCR)",
      "Large Language Models (LLMs)",
      "Google Genkit",
      "Prompt Engineering",
      "Hugging Face Transformers"
    ],
    dataAndTools: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PostgreSQL",
      "MySQL",
      "Tableau",
      "Power BI",
      "Excel",
      "Git / GitHub"
    ]
  },

  experience: [
    {
      role: "Independent Machine Learning & AI Projects",
      organization: "",
      location: "Dhaka, Bangladesh",
      period: "May 2023 – Present",
      description: "Developing and experimenting with self-directed research projects involving generative AI, deep learning architectures, low-resource NLP pipelines, and network telemetry analysis.",
      bullets: [
        "Designed and published exploratory AI pipelines including StarPals AI and Lifestyle OS.",
        "Benchmarked feature importance and anomaly detection models on high-dimensional network flow data.",
        "Formulated Bangla news OCR parsing and LexRank extractive summarization pipelines."
      ]
    },
    {
      role: "Software Engineer",
      organization: "Swift71",
      location: "Dhaka, Bangladesh",
      period: "November 2020 – November 2021",
      description: "Engineered scalable client applications using Flutter for e-commerce and retail platforms, collaborating with cross-functional product and backend teams.",
      bullets: [
        "Implemented high-performance mobile UI architectures, state management, and real-time API integrations.",
        "Collaborated with backend engineers to optimize data transmission payloads and client-side caching.",
        "Participated in agile code reviews, sprint planning, and test-driven validation."
      ]
    },
    {
      role: "Machine Learning Engineer",
      organization: "Codephilics",
      location: "Dhaka, Bangladesh",
      period: "March 2020 – October 2020",
      description: "Applied computer vision and machine learning models to practical document recognition and real-time safety inspection challenges.",
      bullets: [
        "Trained and deployed CNN-based face-mask detection models for real-time video streams.",
        "Developed Bengali National Identity (NID) document OCR parsing workflows.",
        "Engineered web scraping and automated news aggregation pipelines for real-time text corpora."
      ]
    }
  ],

  outsideAcademics: [
    {
      title: "North South University Toastmasters Club",
      role: "Charter Member",
      year: "2017",
      theme: "Communication & Collaboration",
      description: "Participated in weekly impromptu and prepared speech evaluations, active listening, and constructive peer critique sessions. Built foundational skills in clear, disciplined oral articulation."
    },
    {
      title: "North South University Problem Solvers",
      role: "Member",
      year: "2016 – 2017",
      theme: "Algorithmic Problem Solving",
      description: "Engaged in competitive programming workshops, algorithmic problem breakdown, data structure implementations, and mathematical problem-solving drills."
    },
    {
      title: "North South University ECE Department Community",
      role: "Volunteer Coordinator",
      year: "2017 – 2018",
      theme: "Community & Planning",
      description: "Coordinated an extensive department-wide Iftar gathering, managing volunteer teams, food distribution logistics, and attendee scheduling across hundreds of university peers and faculty members."
    }
  ],

  curiosities: [
    {
      topic: "Foundational Texts & Reading",
      detail: "Engaged by works exploring information theory, intelligence, and cognitive science—from Shannon's foundational papers to modern literature on representation learning and philosophy of science."
    },
    {
      topic: "Photography & Visual Composition",
      detail: "Appreciating natural geometry, architectural symmetry, and street photography, which parallels an interest in spatial representations and visual pattern perception."
    },
    {
      topic: "Algorithmic Puzzles & Strategy",
      detail: "Enjoys exploring graph puzzles, combinatorial games, and discrete optimization problems outside formal research coursework."
    },
    {
      topic: "Cultural History & Travel",
      detail: "Fascinated by urban histories, regional literature, and observing how different communities adapt technological infrastructure to daily life."
    }
  ]
};
