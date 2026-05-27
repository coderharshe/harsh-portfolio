'use client';

import { motion, Variants } from 'framer-motion';
import { Lightbulb, Search, LayoutTemplate, Code2, ShieldAlert, Rocket } from 'lucide-react';

interface WorkflowStep {
  icon: React.ReactNode;
  title: string;
  desc: string;
  step: string;
  color: 'blue' | 'purple' | 'cyan' | 'pink' | 'green' | 'orange';
}

const workflowSteps: WorkflowStep[] = [
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: 'Discovery',
    desc: 'Analyzing user pain points, aligning strategy with target business metrics, and mapping initial project viability matrices.',
    step: '01',
    color: 'blue',
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: 'Research',
    desc: 'Studying competitive solutions, identifying tech stack dependencies, and establishing strict data models.',
    step: '02',
    color: 'purple',
  },
  {
    icon: <LayoutTemplate className="h-5 w-5" />,
    title: 'Wireframe',
    desc: 'Designing user interfaces with accessibility in mind (WCAG AA), optimizing click funnels, and setting responsive layouts.',
    step: '03',
    color: 'cyan',
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: 'Agentic Vibe Coding',
    desc: 'Orchestrating autonomous AI agents under strict architectural constraints to assemble typed React, Next.js, and API structures at 10x velocity.',
    step: '04',
    color: 'blue',
  },
  {
    icon: <ShieldAlert className="h-5 w-5" />,
    title: 'Testing',
    desc: 'Verifying imports, performing linting audits, analyzing mobile rendering speeds, and testing end-to-end integration.',
    step: '05',
    color: 'purple',
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: 'Deployment',
    desc: 'Configuring edge CDN routes on Vercel, establishing automated CI/CD pipelines, and initiating live analytics telemetry.',
    step: '06',
    color: 'green',
  },
];

const colorMap = {
  blue: {
    icon: 'text-accent-blue bg-accent-blue/10 border-accent-blue/25',
    step: 'text-accent-blue',
    glow: 'group-hover:border-accent-blue/50 group-hover:shadow-[0_0_25px_-5px_rgba(79,156,249,0.4)]',
    line: 'bg-accent-blue/30',
  },
  purple: {
    icon: 'text-accent-purple bg-accent-purple/10 border-accent-purple/25',
    step: 'text-accent-purple',
    glow: 'group-hover:border-accent-purple/50 group-hover:shadow-[0_0_25px_-5px_rgba(155,109,255,0.4)]',
    line: 'bg-accent-purple/30',
  },
  cyan: {
    icon: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/25',
    step: 'text-accent-cyan',
    glow: 'group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_25px_-5px_rgba(34,211,238,0.3)]',
    line: 'bg-accent-cyan/30',
  },
  pink: {
    icon: 'text-accent-pink bg-accent-pink/10 border-accent-pink/25',
    step: 'text-accent-pink',
    glow: 'group-hover:border-accent-pink/50 group-hover:shadow-[0_0_25px_-5px_rgba(244,114,182,0.3)]',
    line: 'bg-accent-pink/30',
  },
  green: {
    icon: 'text-accent-green bg-accent-green/10 border-accent-green/25',
    step: 'text-accent-green',
    glow: 'group-hover:border-accent-green/50 group-hover:shadow-[0_0_25px_-5px_rgba(52,211,153,0.3)]',
    line: 'bg-accent-green/30',
  },
  orange: {
    icon: 'text-orange-400 bg-orange-400/10 border-orange-400/25',
    step: 'text-orange-400',
    glow: 'group-hover:border-orange-400/50 group-hover:shadow-[0_0_25px_-5px_rgba(251,146,60,0.3)]',
    line: 'bg-orange-400/30',
  },
};

export default function Workflow() {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 18 },
    },
  };

  return (
    <section id="workflow" className="relative py-28 overflow-hidden select-none">
      <div className="absolute inset-0 bg-[#0A1020]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Section divider top */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Glow accent */}
      <div className="absolute w-[500px] h-[500px] rounded-full glow-blur-blue opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="section-label mb-5">Engineering Pipeline</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-white tracking-tight mb-5">
            Development{' '}
            <span className="gradient-text-main">Workflow</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-lg leading-relaxed">
            A strategic, structured architecture transforming business concepts into scalable,
            premium software applications.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Stepper */}
        <div className="hidden lg:block relative py-10 mb-12">
          {/* Gradient connector line */}
          <div className="absolute top-[52px] left-[8%] right-[8%] h-px bg-gradient-to-r from-accent-blue/20 via-accent-purple/40 to-accent-green/20 pointer-events-none" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            className="grid grid-cols-6 gap-4 relative z-10"
          >
            {workflowSteps.map((step, idx) => {
              const colors = colorMap[step.color];
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex flex-col items-center group text-center cursor-default"
                >
                  {/* Step Node */}
                  <div
                    className={`relative h-[104px] w-[80px] flex flex-col items-center justify-center gap-2 rounded-2xl bg-white/[0.02] border border-white/[0.07] transition-all duration-300 mb-6 ${colors.glow}`}
                  >
                    {/* Step Number */}
                    <span className={`font-mono text-[9px] font-black tracking-widest ${colors.step}`}>
                      {step.step}
                    </span>
                    {/* Icon */}
                    <div className={`p-2 rounded-xl border ${colors.icon}`}>
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-sm text-white mb-2 group-hover:text-accent-blue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden relative py-4 max-w-md mx-auto text-left">
          <div className="absolute left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-accent-blue/30 via-accent-purple/30 to-accent-green/30 pointer-events-none" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            className="space-y-8 relative z-10"
          >
            {workflowSteps.map((step, idx) => {
              const colors = colorMap[step.color];
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-5 group"
                >
                  <div
                    className={`relative h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-xl border transition-all duration-300 ${colors.icon} ${colors.glow}`}
                  >
                    {step.icon}
                    <span className={`absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-mono font-black bg-[#0A1020] border ${colors.step}`} style={{ borderColor: 'currentColor' }}>
                      {idx + 1}
                    </span>
                  </div>

                  <div className="pt-1.5">
                    <h3 className="font-display font-extrabold text-base text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Section divider bottom */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
