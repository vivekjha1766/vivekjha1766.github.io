import React, { useState } from 'react'
import { personalInfo } from '../data/portfolioData'
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Terminal,
  MapPin,
  ArrowUpRight
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [sentStatus, setSentStatus] = useState<string | null>(null)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject || 'Inquiry regarding AI/ML & Engineering Roles'
    )}&body=${encodeURIComponent(
      `Hi Vivek,\n\n${message}\n\nFrom: ${name || 'A visitor'}\nEmail: ${senderEmail || 'Not provided'}`
    )}`
    window.location.href = mailtoUrl
    setSentStatus('Message launcher initialized in your default email client.')
    setTimeout(() => setSentStatus(null), 5000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>07 // Direct Transmission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Contact &amp; Collaboration
          </h2>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-xl">
            Open for AI/ML engineering internships, research collaborations, backend systems development, and technical discussions.
          </p>
        </div>

        {/* 2-Column Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Tile */}
            <div className="p-5 rounded-2xl bg-[#0D0F16] border border-white/8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>EMAIL ADDRESS</span>
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-base sm:text-lg font-mono font-semibold text-white hover:text-emerald-300 break-all transition-colors"
              >
                {personalInfo.email}
              </a>
              <p className="text-[11px] text-slate-400">
                Primary channel for professional correspondence and project inquiries.
              </p>
            </div>

            {/* Phone Tile */}
            <div className="p-5 rounded-2xl bg-[#0D0F16] border border-white/8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>DIRECT LINE</span>
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`tel:${personalInfo.phone}`}
                className="block text-base sm:text-lg font-mono font-semibold text-white hover:text-emerald-300 transition-colors"
              >
                {personalInfo.phone}
              </a>
              <p className="text-[11px] text-slate-400">
                Available for scheduled technical interviews and discussions.
              </p>
            </div>

            {/* Location & Institution */}
            <div className="p-5 rounded-2xl bg-[#0D0F16] border border-white/8 space-y-2">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>LOCATION &amp; AFFILIATION</span>
              </span>
              <p className="text-sm font-semibold text-white">
                IIIT Bhopal / Mumbai, India
              </p>
              <p className="text-xs text-slate-400">
                Indian Institute of Information Technology, Bhopal (B.Tech IT, 2024–2028)
              </p>
            </div>

            {/* Profiles Links */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8 hover:border-emerald-500/30 flex items-center justify-between text-xs font-mono text-slate-200 hover:text-white transition-all"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-emerald-400" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8 hover:border-cyan-500/30 flex items-center justify-between text-xs font-mono text-slate-200 hover:text-white transition-all"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Interactive Message Dispatcher Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendMessage}
              className="p-6 sm:p-8 rounded-2xl bg-[#0D0F16] border border-white/8 space-y-4 shadow-xl"
            >
              <div className="border-b border-white/5 pb-3">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Direct Dispatch Console
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  Sends directly to <span className="text-emerald-400">{personalInfo.email}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Alex Vance"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="e.g. name@company.org"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">SUBJECT / PURPOSE</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. AI/ML Engineering Opportunity at ..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">MESSAGE</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe your team, project requirements, or opportunity..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                />
              </div>

              {sentStatus && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-mono">
                  {sentStatus}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-sm font-mono font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Launch Message Client</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
