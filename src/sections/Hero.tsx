import React from 'react'
import { personalInfo } from '../data/portfolioData'
import { ArrowDown, FileText, ChevronRight, ShieldCheck, Activity, Database, Radio } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'

interface HeroProps {
  onOpenResume: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden tech-grid">
      {/* Background radial gradient spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full space-y-8 text-center sm:text-left">
        {/* Status indicator bar */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-wider backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 beacon-pulse"></span>
          <span>IIIT BHOPAL '28</span>
          <span className="text-white/20">|</span>
          <span className="text-slate-300">AI/ML ENGINEER &amp; SOFTWARE DEVELOPER</span>
        </div>

        {/* Hero Title & Positioning */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">intelligent systems</span> with mathematical rigor.
          </h1>
          <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-slate-300 font-light leading-relaxed">
            I'm <strong className="text-white font-semibold">Vivek Jha</strong> — an AI/ML Engineer and Software Developer specializing in 
            <span className="text-emerald-300 font-medium"> point-in-time safe fraud analytics</span>, 
            <span className="text-teal-300 font-medium"> deep audio representation learning</span>, and 
            <span className="text-cyan-300 font-medium"> hallucination-resistant RAG architectures</span>.
          </p>
        </div>

        {/* Key Signals / Highlights Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-left">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8 hover:border-emerald-500/30 transition-all backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Fraud Intel</span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-white font-mono">Abuse-Ring</div>
            <p className="text-[11px] text-slate-400">Point-in-time safe graphs</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8 hover:border-emerald-500/30 transition-all backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-teal-400 text-xs font-mono mb-1">
              <Activity className="w-3.5 h-3.5" />
              <span>Acoustic ML</span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-white font-mono">90.1% Acc</div>
            <p className="text-[11px] text-slate-400">AudioSet transfer learning</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8 hover:border-emerald-500/30 transition-all backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-mono mb-1">
              <Database className="w-3.5 h-3.5" />
              <span>Academics</span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-white font-mono">8.48 CGPA</div>
            <p className="text-[11px] text-slate-400">IIIT Bhopal (B.Tech IT)</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8 hover:border-emerald-500/30 transition-all backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono mb-1">
              <Radio className="w-3.5 h-3.5" />
              <span>Leadership</span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-white font-mono">IEEE Chair</div>
            <p className="text-[11px] text-slate-400">Student Branch IIIT Bhopal</p>
          </div>
        </div>

        {/* Calls to Action */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-3">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all"
          >
            <span>Explore Selected Projects</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium font-mono text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
          >
            <GithubIcon className="w-4 h-4 text-emerald-400" />
            <span>GitHub Profile</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium font-mono text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
          >
            <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 transition-all"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Scroll anchor */}
        <div className="pt-8 flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-slate-500">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-emerald-400" />
          <span>Scroll to inspect engineering portfolio &amp; architectures</span>
        </div>
      </div>
    </section>
  )
}
