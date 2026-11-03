import type { Project, SkillCategory, LeadershipRole, EducationItem, CreativeWorkItem } from '../types/portfolio'

export const personalInfo = {
  name: 'Vivek Jha',
  tagline: 'AI/ML Engineer | Software Developer | Backend & Intelligent Systems',
  headline: 'Engineering robust ML systems, temporal fraud architectures, and intelligent software platforms.',
  location: 'Bhopal & Mumbai, India',
  email: 'vivek.jha1766@gmail.com',
  phone: '+91-9082060502',
  github: 'https://github.com/vivekjha1766',
  linkedin: 'https://www.linkedin.com/in/vivek-jha-7b9788276/',
  targetUrl: 'https://vivekjha1766.github.io/',
  resumeUrl: 'https://drive.google.com/file/d/18wX4zkSvywQL8c7jtlxT_MJvpuZmanec/view?usp=drive_link',
  status: 'Open for AI/ML & Engineering Roles',
  college: 'IIIT Bhopal (B.Tech IT, 2024–2028)',
  cgpa: '8.48 CGPA',
  bio: [
    'I am an undergraduate in Information Technology at the Indian Institute of Information Technology, Bhopal, focused on building dependable machine learning pipelines, graph-based intelligence systems, and scalable backend infrastructure.',
    'As Chairperson of the IEEE Student Branch at IIIT Bhopal, I lead technical teams, organize campus-wide technical events and workshops, and bridge academic inquiry with hands-on systems development.',
    'My work spans point-in-time safe fraud analytics, deep audio representation learning with transfer learning & SHAP interpretability, and low-latency retrieval-augmented generation systems.'
  ]
}

export const projects: Project[] = [
  {
    id: 'abuse-ring-sentinel',
    name: 'Abuse-Ring Sentinel',
    title: 'Graph-Based Fraud Intelligence & Response Platform',
    tagline: 'Fraud intelligence platform with point-in-time safe temporal features and graph-based investigation of collusive abuse rings.',
    stack: ['Python', 'FastAPI', 'SQL', 'Graph Analysis'],
    githubUrl: 'https://github.com/vivekjha1766/Abuse-ring-sentinell',
    category: 'Intelligent Systems & Graph Analysis',
    featured: true,
    badge: 'Flagship System',
    accentColor: '#10B981',
    description:
      'Built a fraud-intelligence platform using point-in-time-safe temporal features and strict time-based train/validation/held-out splits. Added leakage-prevention tests and graph-based investigation to surface suspicious entities and potential abuse rings.',
    keyHighlights: [
      'Temporal Data Integrity: Implemented point-in-time calculation rules preventing data snooping and future feature leakage.',
      'Strict Chronological Splits: Enforced deterministic time-based train, validation, and held-out validation partitions.',
      'Leakage-Prevention Tests: Integrated automated test suites verifying that no lookahead information bleeds into inference features.',
      'Graph-Based Entity Investigation: Traced multi-hop relationship graphs between entities, accounts, and identifiers to detect organized abuse rings.',
      'FastAPI Inference Engine: Engineered production-grade API contracts delivering low-latency anomaly scores and graph topology data.'
    ],
    architecture: {
      'Data Ingestion': 'Temporal stream & transaction ledger processing with strict timestamps',
      'Feature Engineering': 'Point-in-time rolling aggregates and behavioral velocity metrics',
      'Split Verification': 'Chronological boundary enforcement with automated leakage regression tests',
      'Graph Engine': 'Network analysis mapping entity edges, clusters, and cyclic collusion subgraphs',
      'Inference API': 'FastAPI endpoints serving risk vectors and interactive graph inspection payload'
    }
  },
  {
    id: 'certimail',
    name: 'CertiMail',
    title: 'Certificate Distribution & Personalized Email Automation',
    tagline: 'Full-stack automation platform for spreadsheet-driven certificate reconciliation, mismatch approval, and audited batch delivery.',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLite', 'SMTP'],
    githubUrl: 'https://github.com/vivekjha1766/CertiMail',
    category: 'Full-Stack & Workflow Automation',
    featured: true,
    badge: 'Automation Product',
    accentColor: '#06B6D4',
    description:
      'Built a full-stack tool for spreadsheet-driven certificate matching and personalized email campaigns, with mismatch review and approval, template previews, test sends, CC/BCC, delivery logs, and recipient-level tracking.',
    keyHighlights: [
      'Spreadsheet Certificate Reconciliation: Automated matching engine aligning participant spreadsheets with PDF certificate assets.',
      'Human-in-the-Loop Mismatch Review: Intuitive triage interface allowing manual overrides and review before campaign dispatch.',
      'Live Preview & Test Sends: Dynamic template rendering with sample payload previews and single-recipient test verifications.',
      'Configurable Delivery Orchestration: Support for custom CC/BCC headers, rate-limiting, and resilient SMTP transport handling.',
      'Recipient-Level Tracking & Audit Logs: Complete relational logging in SQLite tracking dispatch timestamp, success status, and error traces.'
    ],
    architecture: {
      'Frontend Workspace': 'React + TypeScript interactive dashboard with modal review workflows',
      'API Backend': 'FastAPI microservice executing asynchronous batch dispatch workers',
      'Matching Algorithm': 'Fuzzy string normalization & filename-to-record reconciliation pipeline',
      'Persistence Layer': 'SQLite store maintaining campaigns, recipient states, and audit trails',
      'Mail Delivery': 'Standard SMTP client with connection pooling, retry logic, and test mode'
    }
  },
  {
    id: 'acoustic-classifier',
    name: 'Acoustic Environment Classifier',
    title: 'Acoustic Environment Classification of YouTube Audio using Deep Neural Networks',
    tagline: 'Deep learning pipeline classifying 13,000+ Google AudioSet clips using pretrained audio embeddings, PCA, and SHAP interpretability.',
    stack: [
      'Python',
      'TensorFlow',
      'Keras',
      'Librosa',
      'Scikit-Learn',
      'PCA',
      'SHAP',
      'AudioSet',
      'PANNs',
      'YAMNet',
      'VGGish'
    ],
    githubUrl: 'https://github.com/vivekjha1766/Acoustic-Environment',
    category: 'Deep Learning & Audio Intelligence',
    featured: true,
    badge: 'Deep Learning',
    accentColor: '#14B8A6',
    metrics: [
      { label: 'Classification Accuracy', value: '90.1%', desc: 'Validated on complex real-world YouTube audio soundscapes' },
      { label: 'Test AUC Score', value: '0.766', desc: 'Robust discrimination between Urban and Natural acoustic environments' },
      { label: 'Dataset Size', value: '13,000+', desc: 'Real-world audio clips extracted and processed from Google AudioSet' }
    ],
    description:
      'Developed a deep learning model to classify audio as Urban or Natural using 13,000+ clips from Google AudioSet. Built an end-to-end audio processing pipeline with feature extraction and transfer learning using PANNs, YAMNet and VGGish embeddings. Applied PCA and trained an MLP in TensorFlow/Keras, achieving 90.1% accuracy and 0.766 test AUC. Used SHAP to interpret model predictions and identify key acoustic features influencing classification.',
    keyHighlights: [
      'Large-Scale Data Pipeline: Ingested and preprocessed 13,000+ diverse YouTube audio clips sourced from Google AudioSet.',
      'Multi-Model Transfer Learning: Leveraged pretrained embeddings from state-of-the-art PANNs, YAMNet, and VGGish architectures.',
      'Dimensionality Reduction: Applied PCA on high-dimensional latent vectors to isolate discriminative acoustic variance.',
      'TensorFlow/Keras Classification: Designed and tuned an MLP classifier with regularization, reaching 90.1% accuracy and 0.766 AUC.',
      'SHAP Model Interpretability: Calculated Shapley values across latent features to explain key acoustic dimensions driving classification decisions.'
    ],
    architecture: {
      'Audio Ingestion': 'Librosa-based raw waveform resampling, trimming, and spectrogram conversion',
      'Embedding Extractor': 'Pretrained PANNs, YAMNet, and VGGish feature extraction pipeline',
      'Feature Compression': 'Scikit-learn PCA dimensionality reduction retaining maximum variance',
      'Classifier': 'TensorFlow / Keras multi-layer perceptron with dropout & early stopping',
      'Explainability': 'SHAP (SHapley Additive exPlanations) summary & attribution analysis'
    }
  },
  {
    id: 'traffic-rag',
    name: 'Tamil Nadu Traffic Rules Assistant',
    title: 'AI-Powered Traffic Rules Assistant using Retrieval-Augmented Generation (RAG)',
    tagline: 'Statutory traffic regulation assistant providing hallucination-resistant answers with FAISS vector retrieval and Groq LLMs.',
    stack: [
      'Python',
      'LangChain',
      'FAISS',
      'Sentence Transformers',
      'FastAPI',
      'Groq LLM',
      'NLP',
      'RAG',
      'Vector Search'
    ],
    githubUrl: 'https://github.com/vivekjha1766/Traffic-management_assistant',
    category: 'Generative AI & Semantic Retrieval',
    featured: true,
    badge: 'GenAI & RAG',
    accentColor: '#38BDF8',
    description:
      'Built a RAG-based chatbot to answer queries on Tamil Nadu traffic regulations using government documents. Implemented PDF processing, semantic chunking, embeddings and FAISS vector search for accurate document retrieval. Integrated LangChain with Groq LLMs to generate context-aware, grounded responses with reduced hallucinations. Developed REST APIs using FastAPI and optimized retrieval for low-latency, explainable responses.',
    keyHighlights: [
      'Official Regulatory Corpus: Ingested and structured complex Tamil Nadu traffic rules and government gazette publications.',
      'Semantic Chunking & Embedding: Deployed semantic text splitters and Sentence Transformers to preserve legal clause context.',
      'Vector Retrieval with FAISS: Built an in-memory FAISS similarity index enabling millisecond nearest-neighbor clause lookups.',
      'Ultra-Fast Groq LLM Generation: Harnessed Groq LPU inference for real-time contextual response synthesis.',
      'Hallucination Reduction & Citations: Formulated system constraints forcing the model to cite retrieved clauses and refuse conjecture.'
    ],
    architecture: {
      'Document Parsing': 'PDF ingestion with structural layout preservation & text cleanup',
      'Chunking Strategy': 'Semantic chunking keeping statutory rules and penal clauses intact',
      'Vector Store': 'FAISS index populated with dense Sentence Transformer embeddings',
      'Orchestration': 'LangChain RAG pipeline with relevance ranking and prompt shielding',
      'Serving Layer': 'FastAPI REST endpoint delivering instant grounded answers with sources'
    }
  }
]

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    description: 'Core languages utilized for algorithmic problem solving, systems, and machine learning pipelines.',
    skills: [
      { name: 'Python', tag: 'Primary / Advanced' },
      { name: 'JavaScript', tag: 'Web & Applications' },
      { name: 'C++', tag: 'Algorithms & Systems' },
      { name: 'SQL', tag: 'Relational Queries' },
      { name: 'Java', tag: 'Object-Oriented Programming' }
    ]
  },
  {
    name: 'AI, ML & Deep Learning',
    description: 'Frameworks and tooling used across neural network training, embeddings, transfer learning, and RAG.',
    skills: [
      { name: 'TensorFlow', tag: 'Deep Learning' },
      { name: 'PyTorch', tag: 'Deep Learning' },
      { name: 'Keras', tag: 'Neural Networks' },
      { name: 'Scikit-learn', tag: 'Classical ML & PCA' },
      { name: 'LangChain', tag: 'RAG & LLM Chains' }
    ]
  },
  {
    name: 'Backend & Distributed Systems',
    description: 'Frameworks and protocols used for building high-concurrency APIs, microservices, and message queues.',
    skills: [
      { name: 'FastAPI', tag: 'High-Perf REST APIs' },
      { name: 'Django', tag: 'Full-Stack Backend' },
      { name: 'Flask', tag: 'Lightweight Services' },
      { name: 'Kafka', tag: 'Event Streaming' }
    ]
  },
  {
    name: 'Cloud, DevOps & Frontend',
    description: 'Infrastructure, version control, containerization, and modern interface development.',
    skills: [
      { name: 'AWS', tag: 'Cloud Infrastructure' },
      { name: 'Docker', tag: 'Containerization' },
      { name: 'GitHub', tag: 'CI/CD & Git' },
      { name: 'React', tag: 'UI Engineering' }
    ]
  }
]

export const leadershipRoles: LeadershipRole[] = [
  {
    role: 'Chairperson',
    organization: 'IEEE Student Branch, IIIT Bhopal',
    period: 'Active Leadership',
    highlights: [
      'Lead the student branch by coordinating technical events, workshops, industry collaborations, sponsorships and a cross-functional executive team to foster professional and technical development among students.',
      'Coordinate technical events, hands-on coding sessions, and skill-building bootcamps for student cohorts.',
      'Establish technical collaborations with external speakers, researchers, and industry professionals.',
      'Lead a multi-disciplinary executive council across technical operations, event logistics, and design.'
    ],
    competencies: [
      'Technical Community Leadership',
      'Event Coordination',
      'Industry Collaborations',
      'Sponsorship & Team Management'
    ]
  },
  {
    role: 'Outreach Executive',
    organization: 'CODAME, Competitive Programming Club, IIIT Bhopal',
    period: 'Active Contribution',
    highlights: [
      'Managed outreach and promotional activities, coordinated with partner organizations and student communities, and contributed to increasing participation and engagement in competitive programming contests and coding events.',
      'Formulated communication strategies that elevated campus turnout for algorithm sprint contests.',
      'Collaborated with peer student clubs and external competitive programming platforms to organize joint coding challenges.'
    ],
    competencies: [
      'Community Outreach',
      'Technical Communication',
      'Cross-Club Collaboration',
      'Competitive Programming Ecosystem'
    ]
  }
]

export const educationList: EducationItem[] = [
  {
    institution: 'Indian Institute of Information Technology, Bhopal',
    degree: 'Bachelor of Technology in Information Technology',
    score: 'CGPA: 8.48',
    duration: 'August 2024 – April 2028',
    location: 'Bhopal, Madhya Pradesh',
    status: 'Undergraduate'
  },
  {
    institution: 'Alpha Junior College of Science and Commerce, Mumbai',
    degree: 'Higher Secondary Certificate (Class XII)',
    score: '90.33%',
    duration: 'August 2022 – April 2024',
    location: 'Mumbai, Maharashtra'
  },
  {
    institution: 'Shree Chandulal Nanavati Vinaymandir School, Mumbai',
    degree: 'Secondary School Certificate (Class X)',
    score: '95.8%',
    duration: 'June 2021 – April 2022',
    location: 'Mumbai, Maharashtra'
  }
]

export const creativeWorks: CreativeWorkItem[] = [
  {
    title: 'Published Poet',
    publication: 'Shankh College Magazine, IIIT Bhopal',
    description:
      "Authored and published original poetry in the college's annual magazine, showcasing creativity, effective written communication and literary expression.",
    quote: 'Exploring cadence, human curiosity, and the harmony between structured logic and imaginative verse.'
  }
]
