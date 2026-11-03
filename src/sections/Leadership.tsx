import React from 'react'
import { leadershipRoles } from '../data/portfolioData'
import { Radio, Users, CheckCircle2 } from 'lucide-react'

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
            <Radio className="w-3.5 h-3.5" />
            <span>04 // Community &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Leadership &amp; Contributions
          </h2>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-xl">
            Directing student technical branches, coordinating industry-facing workshops, and cultivating competitive programming engagement.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadershipRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0D0F16] border border-white/8 hover:border-emerald-500/25 transition-all space-y-6 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="space-y-2 border-b border-white/5 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>{role.period}</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded">
                      IIIT BHOPAL
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {role.role}
                  </h3>
                  <p className="text-sm font-mono text-slate-300">
                    {role.organization}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5">
                  {role.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competencies Badges */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  Core Emphases:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {role.competencies.map((comp) => (
                    <span
                      key={comp}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
