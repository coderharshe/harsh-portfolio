'use client';

import { motion, Variants } from 'framer-motion';
import { Globe, Shield, Cpu, LayoutDashboard, MonitorPlay, Zap } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: 'blue' | 'purple' | 'cyan' | 'pink' | 'green';
  tag: string;
}

const servicesList: Service[] = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Business Platforms',
    desc: 'High-availability corporate websites and landing funnels built with modern SEO architectures, optimized core vitals, and WCAG accessibility standards to drive sales.',
    color: 'blue',
    tag: 'Web & SEO',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Vibe-Coded SaaS Platforms',
    desc: 'Production-ready SaaS platforms developed at hyper-velocity using AI-agentic orchestration. Features secure auth, multi-tenant databases, payment checkouts, and transactional APIs.',
    color: 'purple',
    tag: 'Vibe-Coded',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Advanced Python & AI/ML Systems',
    desc: 'Building deep computational backends, custom facial recognition algorithms, FastAPI architectures, OpenCV vision pipelines, and intelligent Gemini AI agent systems.',
    color: 'cyan',
    tag: 'Python & AI',
  },
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: 'Dashboard Systems',
    desc: 'B2B distributor consoles, mutual fund assets managers, and store analytics dashboards representing massive structured operations via clean data charts.',
    color: 'pink',
    tag: 'Analytics',
  },
  {
    icon: <MonitorPlay className="h-6 w-6" />,
    title: 'Premium Portfolios',
    desc: 'High-fidelity, animated 3D immersive developer or creative portfolios with state-of-the-art cinematic transitions designed to attract clients and establish authority.',
    color: 'blue',
    tag: 'Design',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Business Automation',
    desc: 'Replacing manual data pipelines with background cron jobs, local database backups, automated email receipt engines, and custom telemetry alerts.',
    color: 'green',
    tag: 'Automation',
  },
];

const colorStyles = {
  blue: {
    icon: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20 group-hover:bg-accent-blue/15 group-hover:border-accent-blue/40',
    glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(79,156,249,0.3)]',
    tag: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
    gradient: 'from-accent-blue/10 via-transparent to-transparent',
  },
  purple: {
    icon: 'text-accent-purple bg-accent-purple/10 border-accent-purple/20 group-hover:bg-accent-purple/15 group-hover:border-accent-purple/40',
    glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(155,109,255,0.3)]',
    tag: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20',
    gradient: 'from-accent-purple/10 via-transparent to-transparent',
  },
  cyan: {
    icon: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20 group-hover:bg-accent-cyan/15 group-hover:border-accent-cyan/40',
    glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.25)]',
    tag: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20',
    gradient: 'from-accent-cyan/10 via-transparent to-transparent',
  },
  pink: {
    icon: 'text-accent-pink bg-accent-pink/10 border-accent-pink/20 group-hover:bg-accent-pink/15 group-hover:border-accent-pink/40',
    glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(244,114,182,0.25)]',
    tag: 'bg-accent-pink/10 text-accent-pink border-accent-pink/20',
    gradient: 'from-accent-pink/10 via-transparent to-transparent',
  },
  green: {
    icon: 'text-accent-green bg-accent-green/10 border-accent-green/20 group-hover:bg-accent-green/15 group-hover:border-accent-green/40',
    glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.25)]',
    tag: 'bg-accent-green/10 text-accent-green border-accent-green/20',
    gradient: 'from-accent-green/10 via-transparent to-transparent',
  },
};

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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

  return (
    <section id="services" className="relative py-28 overflow-hidden select-none">
      {/* Alternating section background */}
      <div className="absolute inset-0 bg-[#0A1020]" />
      <div className="absolute inset-0 bg-hex-pattern opacity-30 pointer-events-none" />

      {/* Glow accents */}
      <div className="absolute w-[500px] h-[500px] rounded-full glow-blur-cyan opacity-10 top-0 right-1/4 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full glow-blur-purple opacity-10 bottom-0 left-0 pointer-events-none" />

      {/* Section divider top */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="section-label mb-5">Offerings</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-white tracking-tight mb-5">
            High-Performance{' '}
            <span className="gradient-text-blue">Solutions</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-lg leading-relaxed">
            I craft digital assets built specifically to enhance conversions, automate manual
            pipelines, and establish authority.
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service, idx) => {
            const styles = colorStyles[service.color];
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`premium-card p-8 flex flex-col items-start text-left relative group overflow-hidden transition-shadow duration-300 ${styles.glow}`}
              >
                {/* Corner tag */}
                <div
                  className={`absolute top-5 right-5 px-2 py-1 rounded-lg border text-[9px] font-mono font-bold uppercase tracking-wider ${styles.tag}`}
                >
                  {service.tag}
                </div>

                {/* Gradient hover fill */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Service Icon */}
                <div
                  className={`p-4 rounded-2xl border mb-6 transition-all duration-300 ${styles.icon}`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-extrabold text-lg text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] sm:text-sm text-text-secondary leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Section divider bottom */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
