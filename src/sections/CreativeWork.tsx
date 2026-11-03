import React from 'react'
import { creativeWorks } from '../data/portfolioData'
import { Feather, BookOpen } from 'lucide-react'

export const CreativeWork: React.FC = () => {
  return (
    <section id="writing" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Feather className="w-3.5 h-3.5" />
            <span>06 // Publications &amp; Expression</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Creative Expression &amp; Literary Writing
          </h2>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-lg mx-auto">
            Adding creative dimension, written depth, and perspective alongside technical problem-solving.
          </p>
        </div>

        {/* Publication Cards */}
        {creativeWorks.map((work, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-gradient-to-b from-[#0D1017] to-[#0A0C11] border border-white/8 hover:border-cyan-500/30 transition-all space-y-5 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{work.publication}</span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              {work.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
              {work.description}
            </p>

            {work.quote && (
              <div className="pt-3 border-t border-white/5 max-w-xl mx-auto">
                <p className="text-xs font-mono text-slate-400 italic">
                  "{work.quote}"
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
