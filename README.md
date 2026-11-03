# Vivek Jha — Personal Engineering Portfolio

> **Production Developer Portfolio & Intelligent Systems Showcase**  
> Live at: [https://vivekjha1766.github.io/](https://vivekjha1766.github.io/)

[![Deploy to GitHub Pages](https://github.com/vivekjha1766/vivekjha1766.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/vivekjha1766/vivekjha1766.github.io/actions/workflows/deploy.yml)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 👨‍💻 About Vivek Jha

- **Positioning**: AI/ML Engineer | Software Developer | Backend & Intelligent Systems
- **Affiliation**: Indian Institute of Information Technology, Bhopal (B.Tech in Information Technology, 2024–2028 | **8.48 CGPA**)
- **Leadership**: Chairperson — IEEE Student Branch, IIIT Bhopal | Outreach Executive — CODAME (Competitive Programming Club)
- **Profiles**: [GitHub](https://github.com/vivekjha1766) • [LinkedIn](https://www.linkedin.com/in/vivek-jha-7b9788276/) • [Email](mailto:vivek.jha1766@gmail.com)

---

## 🚀 Featured Systems & Projects

1. **[Abuse-Ring Sentinel](https://github.com/vivekjha1766/Abuse-ring-sentinell)**  
   *Graph-Based Fraud Intelligence & Response Platform*  
   Temporal data integrity, point-in-time rolling features, automated data leakage prevention tests, and graph topology analysis for collusive abuse ring detection.
   - *Stack*: Python, FastAPI, SQL, Graph Analysis, NetworkX

2. **[CertiMail](https://github.com/vivekjha1766/CertiMail)**  
   *Certificate Distribution & Personalized Email Automation*  
   Full-stack spreadsheet reconciliation engine, interactive mismatch review & approval workflows, template previews, CC/BCC support, and recipient-level SQLite audit logs.
   - *Stack*: Python, FastAPI, React, TypeScript, SQLite, SMTP

3. **[Acoustic Environment Classifier](https://github.com/vivekjha1766/Acoustic-Environment)**  
   *Acoustic Environment Classification of YouTube Audio using Deep Neural Networks*  
   Classified 13,000+ Google AudioSet clips with transfer learning using PANNs, YAMNet, and VGGish embeddings. Evaluated with **90.1% Accuracy** and **0.766 Test AUC**, with SHAP interpretability.
   - *Stack*: Python, TensorFlow, Keras, Librosa, Scikit-Learn, PCA, SHAP, AudioSet

4. **[Tamil Nadu Traffic Rules Assistant](https://github.com/vivekjha1766/Traffic-management_assistant)**  
   *AI-Powered Traffic Rules Assistant using Retrieval-Augmented Generation (RAG)*  
   Context-grounded regulatory query engine using PDF semantic chunking, Sentence Transformers, FAISS vector search, and Groq LLMs with zero-hallucination guardrails.
   - *Stack*: Python, LangChain, FAISS, Sentence Transformers, FastAPI, Groq LLM, NLP, Vector Search

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Lucide Icons
- **Animation**: GSAP (GreenSock) with reduced-motion accessibility
- **Build Tool**: Vite
- **CI/CD Deployment**: Fully automated via GitHub Actions to GitHub Pages (`vivekjha1766.github.io`)

---

## 📦 Local Development

```bash
# Clone the repository
git clone https://github.com/vivekjha1766/vivekjha1766.github.io.git
cd vivekjha1766.github.io

# Install dependencies
npm install

# Start local dev server
npm run dev

# Run production build
npm run build
```

---

## 🚢 Continuous Deployment Pipeline

Every push to the `main` branch triggers `.github/workflows/deploy.yml`:
1. Checks out repository and configures Node.js 22.
2. Runs `npm ci` and builds the static assets via `npm run build`.
3. Uploads the `./dist` artifact to GitHub Pages.
4. Deploys using official `actions/deploy-pages@v4`.
