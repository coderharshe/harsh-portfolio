'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Server, Database, Brain, Wrench, ShieldCheck } from 'lucide-react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'tools' | 'other';
  level: 'Expert' | 'Advanced';
  vibeCoded?: boolean;
}

const skillsList: Skill[] = [
  // AI & Advanced Python Core (The core intelligence)
  { name: 'Advanced Python Core', category: 'ai', level: 'Expert' },
  { name: 'OpenCV & Computer Vision', category: 'ai', level: 'Expert' },
  { name: 'FastAPI AI backends', category: 'ai', level: 'Expert' },
  { name: 'LLM Fine-Tuning & RAG', category: 'ai', level: 'Advanced' },
  { name: 'Face Recognition Models', category: 'ai', level: 'Expert' },
  { name: 'Prompt Engineering', category: 'ai', level: 'Expert' },
  { name: 'AI-Agentic Engineering', category: 'ai', level: 'Expert' },

  // Frontend (Vibe Coded with strict design system)
  { name: 'React & Next.js 15/16', category: 'frontend', level: 'Expert', vibeCoded: true },
  { name: 'TypeScript', category: 'frontend', level: 'Expert', vibeCoded: true },
  { name: 'Tailwind CSS v3/v4', category: 'frontend', level: 'Expert', vibeCoded: true },
  { name: 'Framer Motion', category: 'frontend', level: 'Advanced', vibeCoded: true },
  { name: 'JavaScript ES6+', category: 'frontend', level: 'Expert', vibeCoded: true },
  { name: 'HTML5 & CSS3', category: 'frontend', level: 'Expert', vibeCoded: true },

  // Backend (Vibe Coded with strict database schemas)
  { name: 'Node.js', category: 'backend', level: 'Expert', vibeCoded: true },
  { name: 'Express.js', category: 'backend', level: 'Expert', vibeCoded: true },
  { name: 'NestJS', category: 'backend', level: 'Advanced', vibeCoded: true },
  { name: 'REST & GraphQL APIs', category: 'backend', level: 'Expert', vibeCoded: true },

  // Database (Vibe Coded)
  { name: 'PostgreSQL', category: 'database', level: 'Expert', vibeCoded: true },
  { name: 'Prisma ORM', category: 'database', level: 'Expert', vibeCoded: true },
  { name: 'MongoDB & Mongoose', category: 'database', level: 'Expert', vibeCoded: true },
  { name: 'Firebase & Firestore', category: 'database', level: 'Expert', vibeCoded: true },

  // Tools
  { name: 'Git & GitHub', category: 'tools', level: 'Expert' },
  { name: 'Vercel Deployment', category: 'tools', level: 'Expert' },
  { name: 'VS Code & AI Tools', category: 'tools', level: 'Expert' },
  { name: 'Postman API Testing', category: 'tools', level: 'Expert' },
  { name: 'Figma Design-to-Code', category: 'tools', level: 'Advanced' },

  // Other Methodologies
  { name: 'SaaS Architecture', category: 'other', level: 'Expert' },
  { name: 'UI/UX Strategic Thinking', category: 'other', level: 'Advanced' },
  { name: 'Business-Led Coding', category: 'other', level: 'Expert' },
  { name: 'Responsive Layouts', category: 'other', level: 'Expert' },
];

type TabId = 'all' | 'frontend' | 'backend' | 'database' | 'ai' | 'tools' | 'other';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<TabId>('all');

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Tech', icon: <Layers className="h-3.5 w-3.5" /> },
    { id: 'frontend', label: 'Frontend', icon: <Layers className="h-3.5 w-3.5" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="h-3.5 w-3.5" /> },
    { id: 'database', label: 'Databases', icon: <Database className="h-3.5 w-3.5" /> },
    { id: 'ai', label: 'AI & Automation', icon: <Brain className="h-3.5 w-3.5" /> },
    { id: 'tools', label: 'Toolsets', icon: <Wrench className="h-3.5 w-3.5" /> },
    { id: 'other', label: 'Engineering', icon: <ShieldCheck className="h-3.5 w-3.5" /> },
  ];

  const filteredSkills =
    activeTab === 'all' ? skillsList : skillsList.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative py-28 overflow-hidden select-none">
      {/* Primary Background */}
      <div className="absolute inset-0 bg-primary-bg" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Glow accents */}
      <div className="absolute w-[600px] h-[600px] rounded-full glow-blur-blue opacity-15 bottom-0 right-0 pointer-events-none animate-pulse-slow" />
      <div className="absolute w-[400px] h-[400px] rounded-full glow-blur-purple opacity-10 top-0 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-14"
        >
          <div className="section-label mb-5">Capabilities</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-white tracking-tight mb-5">
            Optimized Technical{' '}
            <span className="gradient-text-blue">Engine</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-lg leading-relaxed">
            A comprehensive overview of frontend technologies, backend infrastructures, and custom AI
            automations designed for production execution.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12 overflow-x-auto pb-3"
        >
          <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] p-1 rounded-2xl backdrop-blur-xl">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`skill-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-[10px] tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap relative ${
                    isActive
                      ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-[0_0_20px_rgba(79,156,249,0.3)] font-bold'
                      : 'text-text-secondary hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Skill Cards Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25, type: 'spring', stiffness: 150, damping: 20 }}
                className="premium-card p-5 flex flex-col justify-between items-start text-left min-h-[110px] relative group overflow-hidden cursor-default"
              >
                {/* Hover gradient fill */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                    skill.level === 'Expert'
                      ? 'bg-gradient-to-br from-accent-blue/8 via-transparent to-transparent'
                      : 'bg-gradient-to-br from-accent-purple/8 via-transparent to-transparent'
                  }`}
                />

                {/* Skill Name */}
                <div
                  className={`font-display font-bold text-sm sm:text-[15px] text-white tracking-wide leading-snug transition-colors duration-200 ${
                    skill.level === 'Expert' ? 'group-hover:text-accent-blue' : 'group-hover:text-accent-purple'
                  }`}
                >
                  {skill.name}
                </div>

                {/* Bottom row */}
                <div className="flex items-center justify-between w-full mt-3">
                  <span className="font-mono text-[9px] text-text-muted uppercase tracking-widest">
                    {skill.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {skill.vibeCoded && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] font-mono font-black uppercase tracking-wider bg-accent-purple/10 text-accent-purple border border-accent-purple/20 shadow-[0_0_10px_rgba(139,92,246,0.15)]">
                        VIBE CODED
                      </span>
                    )}
                    <span className={skill.level === 'Expert' ? 'badge-expert' : 'badge-advanced'}>
                      {skill.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
