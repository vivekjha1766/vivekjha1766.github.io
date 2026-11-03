import React, { useState } from 'react'
import { projects } from '../data/portfolioData'
import type { Project } from '../types/portfolio'
import {
  GitBranch,
  ShieldAlert,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  MailCheck,
  SearchCode,
  Layers,
  ArrowUpRight
} from 'lucide-react'
import { WaveformIcon } from '../components/Icons'

interface ProjectsProps {
  onSelectProject: (project: Project) => void
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [expandedId, setExpandedId] = useState<string | null>('abuse-ring-sentinel')

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5" />
              <span>02 // Systems &amp; Engineering Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Technical Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md">
            Production systems, temporal ML frameworks, and RAG architectures with complete source verification.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isExpanded = expandedId === project.id
            const isAbuseRing = project.id === 'abuse-ring-sentinel'
            const isCertiMail = project.id === 'certimail'
            const isAcoustic = project.id === 'acoustic-classifier'
            const isTraffic = project.id === 'traffic-rag'

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-[#0B0D13] border border-white/8 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden shadow-2xl"
              >
                {/* Accent top hairline */}
                <div
                  className="h-1 w-full bg-gradient-to-r from-emerald-500/80 via-teal-400/50 to-transparent"
                />

                <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                  {/* Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-emerald-400/80">
                          PROJ_0{index + 1}
                        </span>
                        <span className="text-white/20">•</span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          {project.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm sm:text-base font-mono text-slate-400">
                        {project.title}
                      </p>
                    </div>

                    {/* Repository and Quick Links */}
                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-emerald-500/40 transition-all"
                      >
                        <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 border border-emerald-500/30 transition-all"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Inspect Architecture</span>
                      </button>
                    </div>
                  </div>

                  {/* Core Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Project Specific Dedicated Visual Treatment */}
                  {isAbuseRing && (
                    <div className="p-5 rounded-xl bg-[#07080D] border border-emerald-500/20 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                          <ShieldAlert className="w-4 h-4 text-emerald-400" />
                          <span className="font-semibold">FRAUD INTELLIGENCE &amp; TEMPORAL SAFETY PIPELINE</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          Time-Split Isolation: ENFORCED
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                          <span className="text-[11px] font-mono text-emerald-400">Point-in-Time Features</span>
                          <p className="text-slate-300 text-[11px] leading-relaxed">
                            Strict chronological windows preventing data snooping and future feature leakage.
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                          <span className="text-[11px] font-mono text-teal-400">Graph Abuse Detection</span>
                          <p className="text-slate-300 text-[11px] leading-relaxed">
                            Graph network analysis uncovering dense, multi-hop collusive account subgraphs.
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                          <span className="text-[11px] font-mono text-cyan-400">Leakage-Prevention Tests</span>
                          <p className="text-slate-300 text-[11px] leading-relaxed">
                            Automated test suites validating chronological boundaries across training splits.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {isCertiMail && (
                    <div className="p-5 rounded-xl bg-[#07080D] border border-cyan-500/20 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                          <MailCheck className="w-4 h-4 text-cyan-400" />
                          <span className="font-semibold">FULL-STACK AUTOMATION &amp; VERIFICATION WORKFLOW</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          Roster Alignment: AUTOMATED
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs">
                        <div className="p-2.5 rounded bg-white/[0.02] border border-white/5">
                          <div className="font-mono text-cyan-400 font-semibold">1. Roster Import</div>
                          <div className="text-[10px] text-slate-400 mt-1">Spreadsheet Parsing</div>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.02] border border-white/5">
                          <div className="font-mono text-cyan-400 font-semibold">2. PDF Matching</div>
                          <div className="text-[10px] text-slate-400 mt-1">Fuzzy &amp; Exact Tokens</div>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.02] border border-white/5">
                          <div className="font-mono text-cyan-400 font-semibold">3. Mismatch Review</div>
                          <div className="text-[10px] text-slate-400 mt-1">Manual Approval Gate</div>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.02] border border-white/5">
                          <div className="font-mono text-cyan-400 font-semibold">4. Audited Dispatch</div>
                          <div className="text-[10px] text-slate-400 mt-1">SQLite Delivery Logs</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {isAcoustic && (
                    <div className="p-5 rounded-xl bg-[#07080D] border border-teal-500/20 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
                          <WaveformIcon className="w-4 h-4 text-teal-400" />
                          <span className="font-semibold">AUDIO INTELLIGENCE &amp; EXPLAINABLE DEEP LEARNING</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          Dataset: 13,000+ AudioSet Clips
                        </span>
                      </div>

                      {/* Prominent Metric Callouts */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/30 text-center sm:text-left">
                          <div className="text-3xl font-extrabold text-teal-300 font-mono">90.1%</div>
                          <div className="text-xs font-semibold text-white mt-1">Classification Accuracy</div>
                          <p className="text-[11px] text-slate-400 mt-0.5">Urban vs. Natural Soundscapes</p>
                        </div>
                        <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/30 text-center sm:text-left">
                          <div className="text-3xl font-extrabold text-teal-300 font-mono">0.766</div>
                          <div className="text-xs font-semibold text-white mt-1">Test AUC Score</div>
                          <p className="text-[11px] text-slate-400 mt-0.5">High Discriminative Precision</p>
                        </div>
                        <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/30 text-center sm:text-left">
                          <div className="text-3xl font-extrabold text-teal-300 font-mono">SHAP</div>
                          <div className="text-xs font-semibold text-white mt-1">Explainable Attribution</div>
                          <p className="text-[11px] text-slate-400 mt-0.5">Feature Attribution on Latent Space</p>
                        </div>
                      </div>

                      <div className="text-xs text-slate-400 bg-white/[0.02] p-3 rounded-lg border border-white/5 font-mono">
                        <span className="text-teal-400 font-semibold">Transfer Learning Pipeline:</span> AudioSet Raw Waves → PANNs / YAMNet / VGGish Embeddings → PCA Dimensionality Reduction → Keras MLP Classifier → SHAP Feature Explanations.
                      </div>
                    </div>
                  )}

                  {isTraffic && (
                    <div className="p-5 rounded-xl bg-[#07080D] border border-sky-500/20 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                          <SearchCode className="w-4 h-4 text-sky-400" />
                          <span className="font-semibold">DOCUMENT INTELLIGENCE &amp; GROUNDED RAG ARCHITECTURE</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          Zero-Hallucination Guardrails
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-xs">
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                          <span className="text-sky-300 font-mono font-medium">1. Corpus Parsing</span>
                          <p className="text-[11px] text-slate-400">PDF ingestion preserving statutory hierarchy.</p>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                          <span className="text-sky-300 font-mono font-medium">2. Semantic Chunking</span>
                          <p className="text-[11px] text-slate-400">Contextual chunking keeping penal rules intact.</p>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                          <span className="text-sky-300 font-mono font-medium">3. FAISS Retrieval</span>
                          <p className="text-[11px] text-slate-400">Dense vector similarity search for exact clauses.</p>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                          <span className="text-sky-300 font-mono font-medium">4. Groq Synthesis</span>
                          <p className="text-[11px] text-slate-400">Low-latency grounded response generation.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Expandable Key Highlights Toggle */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Key Highlights' : 'View Key Engineering Highlights'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                        {project.keyHighlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-slate-300 bg-white/[0.015] p-3 rounded-lg border border-white/5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-white/5">
                    <span className="text-xs font-mono text-slate-500 mr-2">STACK:</span>
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-white/5 text-slate-300 border border-white/5 hover:border-white/10 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
