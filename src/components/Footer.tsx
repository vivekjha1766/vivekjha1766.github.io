import React from 'react'
import { personalInfo } from '../data/portfolioData'
import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#050608] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="font-mono text-sm font-bold text-white tracking-wider">
              {personalInfo.name.toUpperCase()}
            </div>
            <p className="text-slate-500 font-mono text-[11px]">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 font-mono text-[11px] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>TOP</span>
            </button>
          </div>
        </div>

        {/* Pipeline & Status Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Automated Deployment via GitHub Actions</span>
            <span>•</span>
            <span className="text-emerald-400">vivekjha1766.github.io</span>
          </div>
          <div>
            © {new Date().getFullYear()} Vivek Jha. Designed &amp; Engineered with React, Vite &amp; Tailwind.
          </div>
        </div>
      </div>
    </footer>
  )
}
