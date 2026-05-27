'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Award, Zap, Code, Shield } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the heavy 3D Canvas element with SSR disabled
const Canvas3D = dynamic(() => import('../ui/canvas-3d'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-blue" />
    </div>
  ),
});

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: <Code className="h-4 w-4" />, value: 'Python Core', label: 'Advanced AI & ML', color: 'blue' as const },
    { icon: <Zap className="h-4 w-4" />, value: '99.4% Acc', label: 'Face Sorting AI', color: 'purple' as const },
    { icon: <Award className="h-4 w-4" />, value: '10x Speed', label: 'Agentic Vibe Coding', color: 'cyan' as const },
    { icon: <Shield className="h-4 w-4" />, value: 'BBA Strategic', label: 'ROI & Business Focus', color: 'pink' as const },
  ];

  const colorMap = {
    blue: { bg: 'bg-accent-blue/10 border-accent-blue/25 text-accent-blue' },
    purple: { bg: 'bg-accent-purple/10 border-accent-purple/25 text-accent-purple' },
    cyan: { bg: 'bg-accent-cyan/10 border-accent-cyan/25 text-accent-cyan' },
    pink: { bg: 'bg-accent-pink/10 border-accent-pink/25 text-accent-pink' },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-primary-bg overflow-hidden pt-20"
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060911]/60 to-[#060911] pointer-events-none" />

      {/* Floating Glowing Accents */}
      <div className="absolute w-[700px] h-[700px] rounded-full glow-blur-blue opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow" />
      <div className="absolute w-[400px] h-[400px] rounded-full glow-blur-purple opacity-25 top-1/4 right-0 pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] rounded-full glow-blur-cyan opacity-15 bottom-1/4 left-0 pointer-events-none animate-pulse-slow" />

      {/* R3F torus wireframe canvas backdrop */}
      <Canvas3D />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="status-badge">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
              </span>
              Available for System Architect Roles & Freelance
            </div>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] text-white tracking-tight mb-6 max-w-5xl"
          >
            Orchestrating{' '}
            <span className="relative inline-block">
              <span className="gradient-text-main">AI & Python</span>
            </span>
            {' '}Engines
            <br />
            <span className="text-white/90">via</span>{' '}
            <span className="gradient-text-purple">Vibe Coding</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mb-10"
          >
            Advanced Python & AI/ML Engineer merging a{' '}
            <span className="text-white/80 font-semibold">BBA business strategy</span>{' '}
            with AI-agentic high-velocity development (<span className="text-accent-blue font-semibold">Vibe Coding</span>). I design high-availability SaaS platforms and intelligent algorithms in a fraction of the time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-20"
          >
            <button
              id="hero-explore-work"
              onClick={() => handleScroll('projects')}
              className="btn-primary flex items-center gap-2.5 w-full sm:w-auto"
            >
              Explore Work
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              id="hero-get-in-touch"
              onClick={() => handleScroll('contact')}
              className="btn-ghost flex items-center gap-2.5 w-full sm:w-auto"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Stats / Metrics ticker */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 w-full max-w-4xl"
          >
            {stats.map((stat, idx) => {
              const colors = colorMap[stat.color];
              const isLast = idx === stats.length - 1;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 text-left md:px-8 ${
                    !isLast ? 'md:border-r border-white/[0.07]' : ''
                  } ${idx > 0 ? 'md:first:pl-0' : ''}`}
                >
                  <div className={`p-2 rounded-xl border flex-shrink-0 ${colors.bg}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-display font-black text-xl text-white leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#060911] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono text-[9px] text-text-muted uppercase tracking-widest">Scroll</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-accent-blue/50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
