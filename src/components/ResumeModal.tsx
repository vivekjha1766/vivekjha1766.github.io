import React from 'react'
import { personalInfo, educationList, leadershipRoles, skillCategories, projects, creativeWorks } from '../data/portfolioData'
import { X, Printer, ExternalLink, Mail, Phone, MapPin, Award, BookOpen } from 'lucide-react'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0C0E14] border border-white/10 rounded-2xl shadow-2xl text-slate-300 p-6 sm:p-10">
        {/* Modal Actions */}
        <div className="sticky top-0 z-10 -mt-2 -mr-2 mb-6 flex justify-between items-center bg-[#0C0E14]/95 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
              Curriculum Vitae // Vivek Jha
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div id="printable-resume" className="space-y-8 text-sm">
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{personalInfo.name}</h1>
            <p className="text-emerald-400 font-mono text-xs sm:text-sm mt-1">{personalInfo.tagline}</p>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-emerald-300">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                {personalInfo.email}
              </a>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {personalInfo.phone}
              </span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
                github.com/vivekjha1766
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
                linkedin.com/in/vivek-jha-7b9788276
              </a>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" /> Education
            </h2>
            <div className="space-y-3">
              {educationList.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-start text-xs border-l-2 border-emerald-500/30 pl-3 py-0.5">
                  <div>
                    <h3 className="font-semibold text-white text-sm">{edu.institution}</h3>
                    <p className="text-slate-400">{edu.degree}</p>
                  </div>
                  <div className="text-left sm:text-right mt-1 sm:mt-0">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono font-medium">
                      {edu.score}
                    </span>
                    <p className="text-slate-500 text-[11px] font-mono mt-0.5">{edu.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Core Projects */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <Award className="w-3.5 h-3.5" /> Technical Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <div>
                      <h3 className="font-semibold text-white text-sm flex items-center gap-2">
                        {proj.name}
                        <span className="text-[10px] font-mono text-emerald-400 px-1.5 py-0.2 bg-emerald-500/10 rounded">
                          {proj.badge}
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">{proj.title}</p>
                    </div>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-emerald-400 hover:underline flex items-center gap-1 self-start"
                    >
                      Repository <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.stack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-3 bg-white/[0.02] border border-white/5 rounded-lg space-y-1.5">
                  <h4 className="font-semibold text-slate-200">{cat.name}</h4>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono text-[11px]">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Leadership &amp; Contributions
            </h2>
            <div className="space-y-3 text-xs">
              {leadershipRoles.map((lead, idx) => (
                <div key={idx} className="space-y-1 border-l-2 border-emerald-500/30 pl-3 py-0.5">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-white">{lead.role} — <span className="text-slate-400">{lead.organization}</span></h3>
                    <span className="text-[11px] font-mono text-slate-500">{lead.period}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{lead.highlights[0]}</p>
                </div>
              ))}
              {creativeWorks.map((work, idx) => (
                <div key={idx} className="space-y-1 border-l-2 border-cyan-500/30 pl-3 py-0.5">
                  <h3 className="font-semibold text-white">{work.title} — <span className="text-slate-400">{work.publication}</span></h3>
                  <p className="text-slate-300 leading-relaxed">{work.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
