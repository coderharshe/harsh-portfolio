'use client';

import { motion, Variants } from 'framer-motion';
import { Briefcase, TrendingUp, Cpu, Lightbulb } from 'lucide-react';

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 18 },
    },
  };

  const valueProps = [
    {
      icon: <Briefcase className="h-5 w-5 text-accent-blue" />,
      title: 'Business-Led Architecture',
      desc: "With a BBA background, I don't just write code. I design high-ROI digital systems that align directly with customer retention, sales funnels, and business logic.",
      color: 'blue' as const,
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-accent-purple" />,
      title: 'High-Velocity Vibe Coding',
      desc: 'Acting as a Senior Architect, I direct autonomous AI agents to build, style, and code full-stack apps (Next.js, SQL, NestJS) in hours instead of months with pristine standards.',
      color: 'purple' as const,
    },
    {
      icon: <Cpu className="h-5 w-5 text-accent-cyan" />,
      title: 'Advanced Python & AI/ML Core',
      desc: 'Deep engineering core building face-separation CV systems, custom image-processing APIs, and neural models using FastAPI, OpenCV, and Gemini integrations.',
      color: 'cyan' as const,
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-accent-pink" />,
      title: 'Product-First Integrity',
      desc: 'Optimizing mobile touch targets (44px+), ironclad local storage session caching, full WCAG 2.1 AA accessibility, and perfect Lighthouse performance.',
      color: 'pink' as const,
    },
  ];

  const colorMap = {
    blue: {
      icon: 'bg-accent-blue/10 border-accent-blue/20',
      hoverBorder: 'group-hover:border-accent-blue/40',
      hoverGlow: 'group-hover:bg-accent-blue/5',
    },
    purple: {
      icon: 'bg-accent-purple/10 border-accent-purple/20',
      hoverBorder: 'group-hover:border-accent-purple/40',
      hoverGlow: 'group-hover:bg-accent-purple/5',
    },
    cyan: {
      icon: 'bg-accent-cyan/10 border-accent-cyan/20',
      hoverBorder: 'group-hover:border-accent-cyan/40',
      hoverGlow: 'group-hover:bg-accent-cyan/5',
    },
    pink: {
      icon: 'bg-accent-pink/10 border-accent-pink/20',
      hoverBorder: 'group-hover:border-accent-pink/40',
      hoverGlow: 'group-hover:bg-accent-pink/5',
    },
  };

  return (
    <section id="about" className="relative py-28 overflow-hidden select-none">
      {/* Alternating dark BG */}
      <div className="absolute inset-0 bg-[#0A1020]" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      {/* Cinematic Glow Accents */}
      <div className="absolute w-[600px] h-[600px] rounded-full glow-blur-purple opacity-20 top-1/2 -left-40 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full glow-blur-blue opacity-10 bottom-0 right-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Professional Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Section Label */}
            <div className="section-label mb-5">
              Professional Story
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-white tracking-tight mb-8">
              Merging{' '}
              <span className="gradient-text-blue">BBA Strategy</span>{' '}
              with{' '}
              <span className="gradient-text-purple">AI & Python Core</span>
            </h2>

            <div className="space-y-5 text-text-secondary text-[15px] leading-[1.8]">
              <p>
                My background in{' '}
                <strong className="text-white font-semibold">Business Administration (BBA)</strong>{' '}
                taught me to analyze operations, calculate ROI, and study consumer behavior. I realized that to bridge the gap between business goals and functional technology, one must harness the ultimate engineering leverage: **AI-Agentic development**.
              </p>
              <p>
                By mastering{' '}
                <strong className="text-white font-semibold">Advanced Python & AI/ML</strong>, I build high-accuracy computer vision scripts (like my <strong className="text-accent-blue font-semibold">Face Separation System</strong>) and intelligent LLM-driven backends.
              </p>
              <p>
                For the full-stack architecture, database design, and visual frontend, I utilize <strong className="text-accent-purple font-semibold">Vibe Coding</strong>. Acting as a Senior System Architect, I direct autonomous AI agents to construct, style, and integrate modern TypeScript platforms—such as the <strong className="text-accent-blue font-semibold">AADEO Foundation</strong> NGO portal (with its geospatial SVG impact map and compliance vaults), the <strong className="text-accent-blue font-semibold">Grownet Finance</strong> lending platform, and the <strong className="text-accent-purple font-semibold">Shopkeepers App</strong>—delivering them with 10x standard velocity and flawless Lighthouse results.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-white/5 w-full">
              {[
                { value: '8+', label: 'Production Projects' },
                { value: '3+', label: 'Years Building' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-black text-2xl gradient-text-blue">{stat.value}</div>
                  <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Value Pillars */}
          <div className="lg:col-span-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {valueProps.map((prop, idx) => {
                const colors = colorMap[prop.color];
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    className="premium-card p-6 flex flex-col items-start text-left group cursor-default"
                  >
                    <div
                      className={`p-3 rounded-xl border mb-4 transition-all duration-300 ${colors.icon} ${colors.hoverBorder} ${colors.hoverGlow}`}
                    >
                      {prop.icon}
                    </div>
                    <h3 className="font-display font-bold text-base text-white mb-2 leading-snug">
                      {prop.title}
                    </h3>
                    <p className="text-[13px] text-text-secondary leading-relaxed">
                      {prop.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
