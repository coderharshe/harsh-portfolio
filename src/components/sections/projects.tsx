'use client';

import { useState } from 'react';
import { ExternalLink, Award, CircleDot, Info, X } from 'lucide-react';
import { projectsData, Project } from '../../features/projects/data';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'fintech' | 'ai' | 'ecommerce' | 'other'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'Fintech & SaaS' },
    { id: 'ai', label: 'AI Solutions' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'other', label: 'Web Applications' },
  ] as const;

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'fintech') return project.category.includes('Fintech') || project.category.includes('SaaS');
    if (filter === 'ai') return project.category.includes('AI') || project.category.includes('Computer Vision');
    if (filter === 'ecommerce') return project.category.includes('E-commerce');
    return !project.category.includes('Fintech') && !project.category.includes('SaaS') && !project.category.includes('AI') && !project.category.includes('E-commerce');
  });

  return (
    <section id="projects" className="relative py-24 bg-primary-bg overflow-hidden">
      {/* Dynamic Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full glow-blur-blue opacity-10 top-1/3 left-0 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-accent-blue" />
            <span className="font-mono text-xs tracking-[0.2em] text-accent-blue uppercase font-bold">
              Engineering Catalog
            </span>
            <span className="h-[1px] w-8 bg-accent-blue" />
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-white tracking-tight mb-4">
            Real-World <span className="text-accent-blue">Deployments</span>
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary max-w-lg leading-relaxed">
            A curated showcase of stable production-like products, commercial SaaS platforms, and AI engines fetched directly from my GitHub profile.
          </p>
        </div>

        {/* Categories Navigation Tab Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 max-w-full">
          <div className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 p-1 rounded-2xl backdrop-blur-md">
            {categories.map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-[10px] tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-accent-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.25)] font-bold'
                      : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="premium-card p-6 flex flex-col justify-between h-[360px] relative group border-white/[0.04]"
              >
                {/* Visual hover mesh overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Status Badge & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] text-[#64748B] uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[8px] font-mono font-black uppercase tracking-wider ${
                      project.status === 'production-ready'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : project.status === 'stable'
                        ? 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20'
                        : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                    }`}>
                      <CircleDot className="h-2 w-2 animate-pulse" />
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-display font-extrabold text-lg text-white mb-2 group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-text-secondary leading-relaxed mb-4 line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills list */}
                  <div className="flex flex-wrap gap-1.5 mb-6 select-none">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-[9px] font-mono text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-[9px] font-mono text-[#64748B]">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Source on GitHub"
                        className="p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent-blue/30 hover:text-white text-text-secondary transition-all"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </a>
                      
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View Live Website"
                          className="p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent-blue/30 hover:text-white text-text-secondary transition-all"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 font-mono text-[9px] font-black tracking-widest text-[#94A3B8] hover:text-white bg-white/5 hover:bg-accent-blue/10 border border-white/5 hover:border-accent-blue/20 rounded-lg transition-all cursor-pointer"
                    >
                      <Info className="h-3 w-3" />
                      CASE STUDY
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dedicated Case Study Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Modal Blur Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-primary-bg/80 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Inner Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative z-10 w-full max-w-3xl bg-[#090e19] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto select-text"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#64748B] hover:text-white transition-all cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Heading details */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-accent-blue uppercase tracking-widest font-semibold">
                      {selectedProject.category}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                    <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider">
                      Status: {selectedProject.status}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Project Metrics (if exists) */}
                {selectedProject.metrics && (
                  <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6 select-none">
                    {selectedProject.metrics.map((metric, idx) => (
                      <div key={idx} className="text-left">
                        <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">{metric.label}</div>
                        <div className="font-display font-extrabold text-sm sm:text-base text-accent-blue mt-0.5">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Project Narrative */}
                <div className="space-y-6 text-left">
                  <div>
                    <h4 className="font-mono text-xs font-bold tracking-widest text-[#94A3B8] uppercase mb-2">OVERVIEW</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs font-bold tracking-widest text-[#94A3B8] uppercase mb-2">KEY DEVELOPMENTS</h4>
                    <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-text-secondary leading-relaxed pl-1">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Full Case Study sections (Problem, challenges, solution, result) */}
                  {selectedProject.caseStudy && (
                    <div className="border-t border-white/5 pt-6 space-y-5">
                      <div>
                        <h4 className="font-mono text-xs font-bold tracking-widest text-accent-blue uppercase mb-1.5">1. THE PROBLEM</h4>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{selectedProject.caseStudy.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-mono text-xs font-bold tracking-widest text-accent-purple uppercase mb-1.5">2. TECHNICAL CHALLENGES</h4>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{selectedProject.caseStudy.challenges}</p>
                      </div>
                      <div>
                        <h4 className="font-mono text-xs font-bold tracking-widest text-accent-blue uppercase mb-1.5">3. SYSTEM ARCHITECTURE & SOLUTION</h4>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{selectedProject.caseStudy.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-mono text-xs font-bold tracking-widest text-green-400 uppercase mb-1.5">4. BUSINESS RESULT</h4>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{selectedProject.caseStudy.result}</p>
                      </div>
                    </div>
                  )}

                  {/* Modal bottom action row */}
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6 select-none">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/5 hover:bg-white/10 rounded-xl text-xs font-mono font-bold tracking-wider text-white transition-all"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      VIEW CODEBASE
                    </a>

                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 bg-accent-blue hover:bg-accent-blue/90 rounded-xl text-xs font-mono font-bold tracking-wider text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                      >
                        <ExternalLink className="h-4 w-4" />
                        LAUNCH APPLICATION
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
