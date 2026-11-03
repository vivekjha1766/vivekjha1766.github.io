import React from 'react'
import { educationList } from '../data/portfolioData'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05 // Academic Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Academic Background
          </h2>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-xl">
            Sustained academic excellence across undergraduate studies in Information Technology and secondary education.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#0D0F16] border border-white/8 hover:border-emerald-500/25 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                  {edu.status && (
                    <>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px]">
                        {edu.status}
                      </span>
                    </>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {edu.institution}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-medium">
                  {edu.degree}
                </p>
              </div>

              {/* Score / CGPA Highlight */}
              <div className="shrink-0 flex items-center md:flex-col md:items-end justify-between md:justify-center pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider md:text-right">
                  Academic Performance
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  {edu.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
