import React from 'react'
import type { Project } from '../types/portfolio'
import { X, ExternalLink, ShieldCheck, Cpu, GitBranch, Layers, CheckCircle2 } from 'lucide-react'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0C0E14] border border-white/10 rounded-2xl shadow-2xl text-slate-300 p-6 sm:p-8">
        {/* Top Header */}
        <div className="flex justify-between items-start border-b border-white/10 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-500">{project.category}</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">{project.name}</h2>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">{project.title}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6 pt-5">
          {/* Tagline */}
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            {project.tagline}
          </p>

          {/* Metrics if present */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 bg-emerald-950/20 border border-emerald-500/25 rounded-xl space-y-1">
                  <div className="text-2xl font-bold text-emerald-400 font-mono">{m.value}</div>
                  <div className="text-xs font-semibold text-white">{m.label}</div>
                  <p className="text-[11px] text-slate-400">{m.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4" /> System Overview
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Engineering Highlights &amp; Safeguards
            </h3>
            <div className="space-y-2">
              {project.keyHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-white/[0.015] p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Breakdown */}
          {project.architecture && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Technical Architecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {Object.entries(project.architecture).map(([layer, desc]) => (
                  <div key={layer} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="font-mono text-[11px] text-emerald-400 font-medium">{layer}</span>
                    <p className="text-slate-300 text-xs">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Technologies &amp; Frameworks
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono bg-white/5 text-slate-200 border border-white/10 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link */}
          <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-white/5 rounded-lg border border-white/10 transition-all"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 text-xs font-medium font-mono text-emerald-950 bg-emerald-400 hover:bg-emerald-300 font-semibold rounded-lg shadow-sm transition-all"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Inspect Source Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
