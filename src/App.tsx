import React, { useState, useEffect, useRef } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Leadership } from './sections/Leadership'
import { Education } from './sections/Education'
import { CreativeWork } from './sections/CreativeWork'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'
import { ResumeModal } from './components/ResumeModal'
import { ProjectModal } from './components/ProjectModal'
import type { Project } from './types/portfolio'
import gsap from 'gsap'

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const appRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Subtle entrance animation using standard official gsap
    const ctx = gsap.context(() => {
      gsap.from('#hero h1', {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.1
      })

      gsap.from('#hero p', {
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.25
      })

      gsap.from('#hero .grid > div', {
        opacity: 0,
        y: 15,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.4
      })
    }, appRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={appRef} className="min-h-screen bg-[#07080B] text-slate-200 selection:bg-emerald-500/25 selection:text-white">
      <Navbar />

      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <Leadership />
        <Education />
        <CreativeWork />
        <Contact />
      </main>

      <Footer />

      {/* Modals */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

export default App
