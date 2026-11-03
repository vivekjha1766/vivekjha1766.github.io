import React from 'react'
import { Terminal, Shield, Zap, Brain, Code2, Cpu } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // Technical Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering at the convergence of ML research and systems production.
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am an undergraduate student in Information Technology at the{' '}
              <strong className="text-white">Indian Institute of Information Technology, Bhopal</strong>{' '}
              (CGPA: 8.48). My engineering drive centers on constructing resilient machine learning systems that withstand 
              the messiness of real-world data distributions.
            </p>
            <p>
              Rather than treating ML as isolated notebook code, I prioritize end-to-end reliability: enforce{' '}
              <span className="text-emerald-300 font-medium">point-in-time safe temporal feature pipelines</span> that avoid target leakage, 
              leverage <span className="text-teal-300 font-medium">deep transfer representations (PANNs, YAMNet, VGGish)</span> with explainable SHAP attributions, 
              and build <span className="text-cyan-300 font-medium">grounded vector search engines</span> backed by high-throughput FastAPI services.
            </p>
            <p>
              In parallel with individual systems engineering, I serve as the{' '}
              <strong className="text-white">Chairperson of the IEEE Student Branch at IIIT Bhopal</strong>, where I oversee technical initiatives, 
              coordinate student workshops, and bridge academia with industry practices.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Data Leakage Prevention</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Temporal Feature Stores</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Graph Abuse Detection</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">SHAP Explainability</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Vector Search (FAISS)</span>
            </div>
          </div>

          {/* Telemetry / Core Principles Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-[#0D0F16] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Engineering Tenets</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="space-y-1">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Temporal Data Integrity</span>
                  </div>
                  <p className="text-slate-400 text-[11px] pl-5.5 leading-relaxed">
                    Zero tolerance for future leakage. Enforcing strict chronological boundaries and automated leakage assertion test suites across all validation partitions.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <Brain className="w-3.5 h-3.5 text-teal-400" />
                    <span>Explainable AI &amp; Embeddings</span>
                  </div>
                  <p className="text-slate-400 text-[11px] pl-5.5 leading-relaxed">
                    Moving beyond black-box scores. Utilizing SHAP Shapley values and pretrained acoustic latent spaces to validate what neural models actually learn.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Grounded Retrieval Over Hallucination</span>
                  </div>
                  <p className="text-slate-400 text-[11px] pl-5.5 leading-relaxed">
                    Strict context anchoring. Structuring semantic chunking and FAISS indexing with citation guardrails that prevent LLM hallucinations.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Full-Stack Automation Readiness</span>
                  </div>
                  <p className="text-slate-400 text-[11px] pl-5.5 leading-relaxed">
                    Shipping robust services from FastAPI endpoints to responsive React/TypeScript user interfaces and automated delivery pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
