import React, { useState } from 'react'
import { skillCategories } from '../data/portfolioData'
import { Layers, Check, Terminal, Cpu, Server, Cloud } from 'lucide-react'

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all')

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Terminal className="w-4 h-4 text-emerald-400" />,
    'AI, ML & Deep Learning': <Cpu className="w-4 h-4 text-teal-400" />,
    'Backend & Distributed Systems': <Server className="w-4 h-4 text-cyan-400" />,
    'Cloud, DevOps & Frontend': <Cloud className="w-4 h-4 text-emerald-400" />
  }

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.name === activeTab)

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>03 // Technical Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Languages, Frameworks &amp; Systems
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-sm">
            Curated toolkit applied in production systems, ML pipelines, and distributed backends.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            All Competencies
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === cat.name
                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.name}
              className="p-6 rounded-2xl bg-[#0D0F16] border border-white/8 hover:border-emerald-500/25 transition-all space-y-5"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold text-white">
                  {categoryIcons[cat.name] || <Layers className="w-4 h-4 text-emerald-400" />}
                  <span>{cat.name}</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {cat.skills.length} TECHNOLOGIES
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {cat.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all flex items-center justify-between"
                  >
                    <div className="space-y-0.5">
                      <span className="font-semibold text-white text-xs font-mono">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <p className="text-[10px] text-slate-400 font-mono">
                          {skill.tag}
                        </p>
                      )}
                    </div>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
