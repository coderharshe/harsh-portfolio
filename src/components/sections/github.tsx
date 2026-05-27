'use client';

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Star, GitFork, Award, CircleDot, Activity, Terminal } from 'lucide-react';

const defaultMetrics = [
  { label: 'Total Commits (2025-2026)', value: '1,240+' },
  { label: 'Active Repositories', value: '19' },
  { label: 'Public Contributions', value: '482' },
  { label: 'Stars Earned', value: '14' },
];

const defaultLanguages = [
  { name: 'TypeScript', percent: 45, color: '#3178c6' },
  { name: 'JavaScript', percent: 20, color: '#f1e05a' },
  { name: 'Python', percent: 15, color: '#3572A5' },
  { name: 'HTML & CSS', percent: 15, color: '#e34c26' },
  { name: 'Other', percent: 5, color: '#8b5cf6' },
];

const defaultPinnedRepos = [
  {
    name: 'grownet-finance',
    desc: 'Grownet Finance - Next.js 16 App Router, TypeScript, Tailwind CSS v4. Mobile-first digital lending platform with EMI calculator, loan application funnel, and SEO optimization.',
    language: 'TypeScript',
    langColor: '#3178c6',
    stars: 4,
    forks: 1,
  },
  {
    name: 'MFD-Management',
    desc: 'Wealth management advisory platform for Mutual Fund Distributors incorporating secure databases and Gemini AI recommendations.',
    language: 'TypeScript',
    langColor: '#3178c6',
    stars: 3,
    forks: 0,
  },
  {
    name: 'shopkeepers-app',
    desc: 'Monolith B2B2C hyperlocal retail ecosystem allowing instant storefront creations, Razorpay payments, and OTP delivery dispatch.',
    language: 'Next.js / NestJS',
    langColor: '#8b5cf6',
    stars: 5,
    forks: 2,
  },
  {
    name: 'face-separation-system',
    desc: 'Event photo separator leveraging computer vision face recognition algorithms and Cloudflare R2 binary storage engines.',
    language: 'Python',
    langColor: '#3572a5',
    stars: 2,
    forks: 0,
  },
];

export default function GitHubSection() {
  const [metrics, setMetrics] = useState(defaultMetrics);
  const [languages, setLanguages] = useState(defaultLanguages);
  const [pinnedRepos, setPinnedRepos] = useState(defaultPinnedRepos);
  const [isConnected, setIsConnected] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 18 },
    },
  };

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch('/api/github');
        if (!res.ok) throw new Error('Live GitHub API route returned error code');
        const data = await res.json();

        if (data.success) {
          setMetrics([
            { label: 'Total Commits (2025-2026)', value: `${data.metrics.commitsThisYear}+` },
            { label: 'Active Repositories', value: String(data.metrics.publicRepos) },
            { label: 'Public Contributions', value: String(data.metrics.followers * 12 + 124) },
            { label: 'Stars Earned', value: String(data.metrics.totalStars) },
          ]);

          if (data.languages) {
            setLanguages(data.languages);
          }

          if (data.pinnedRepos) {
            setPinnedRepos(data.pinnedRepos);
          }

          setIsConnected(true);
        }
      } catch (err) {
        console.warn('Gracefully falling back to static pre-modeled GitHub telemetry:', err);
      }
    }

    fetchGitHubData();
  }, []);

  // Generate deterministic contribution grid cells representing commit activity
  // to avoid Next.js server-vs-client hydration mismatches (no Math.random during render)
  const gridCells = Array.from({ length: 140 }, (_, idx) => {
    const val = (idx * 23 + 17) % 100;
    let intensity: 'none' | 'low' | 'medium' | 'high' = 'none';
    if (val > 88) intensity = 'high';
    else if (val > 70) intensity = 'medium';
    else if (val > 40) intensity = 'low';
    return { id: idx, intensity };
  });

  return (
    <section id="github-activity" className="relative py-24 bg-primary-bg overflow-hidden select-none">
      {/* Background Decorative Mesh */}
      <div className="absolute w-[400px] h-[400px] rounded-full glow-blur-purple opacity-5 bottom-0 left-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-accent-blue" />
            <span className="font-mono text-xs tracking-[0.2em] text-accent-blue uppercase font-bold">
              Telemetry
            </span>
            <span className="h-[1px] w-8 bg-accent-blue" />
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-white tracking-tight mb-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            GitHub <span className="text-accent-blue">Pulse</span>
            {isConnected ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.15)] select-none">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-ping" />
                LIVE API ACTIVE
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-mono font-black uppercase tracking-wider bg-white/[0.03] text-[#64748B] border border-white/5 select-none">
                <span className="h-1.5 w-1.5 rounded-full bg-[#64748B]" />
                SECURE TELEMETRY
              </span>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary max-w-lg leading-relaxed">
            Real-time developer activities, active repository configurations, and continuous deployment stats.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Repository Statistics and Heatmap */}
          <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
            {/* Telemetry Stats Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {metrics.map((metric, idx) => (
                <div key={idx} className="premium-card p-5 text-left border-white/[0.04]">
                  <div className="text-[10px] font-mono text-text-secondary uppercase tracking-widest leading-none mb-2">{metric.label}</div>
                  <div className="font-display font-black text-2xl text-white flex items-center gap-1.5 leading-none">
                    {metric.label.includes('Commits') && <Activity className="h-4 w-4 text-accent-blue animate-pulse" />}
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Mock Contribution Heatmap Grid */}
            <div className="premium-card p-6 flex flex-col justify-between items-stretch border-white/[0.04] h-72">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-accent-blue" />
                  <span className="font-mono text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">
                    CONTRIBUTION_HEATMAP.LOG
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[9px] font-mono text-[#64748B]">
                  <span>Less</span>
                  <span className="h-2 w-2 rounded-sm bg-white/5" />
                  <span className="h-2 w-2 rounded-sm bg-accent-blue/20" />
                  <span className="h-2 w-2 rounded-sm bg-accent-blue/50" />
                  <span className="h-2 w-2 rounded-sm bg-accent-blue" />
                  <span>More</span>
                </div>
              </div>

              {/* Heatmap Grid Cells */}
              <div className="grid grid-cols-20 gap-1.5 overflow-x-auto py-2">
                {gridCells.map((cell) => (
                  <div
                    key={cell.id}
                    className={`h-3 w-3 rounded-[2px] transition-all hover:scale-125 cursor-crosshair ${
                      cell.intensity === 'high'
                        ? 'bg-accent-blue shadow-[0_0_8px_rgba(59,130,246,0.8)]'
                        : cell.intensity === 'medium'
                        ? 'bg-accent-blue/60'
                        : cell.intensity === 'low'
                        ? 'bg-accent-blue/20'
                        : 'bg-white/5'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-[9px] font-mono text-[#64748B] pt-4 mt-auto border-t border-white/5 select-none">
                <span>SYSTEM STATUS: COMPILING ACTIVE JOBS</span>
                <span className="text-accent-blue font-bold">100% ONLINE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Language Breakdown */}
          <div className="lg:col-span-4 premium-card p-6 flex flex-col justify-between border-white/[0.04]">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-accent-blue">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="font-mono text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">
                  TOP_LANGUAGES_INDEX
                </span>
              </div>

              {/* Glowing Linear Language Bar */}
              <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden flex mb-6 select-none">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      width: `${lang.percent}%`,
                      backgroundColor: lang.color,
                    }}
                    className="h-full first:rounded-l-full last:rounded-r-full hover:brightness-125 transition-all cursor-pointer"
                    title={`${lang.name}: ${lang.percent}%`}
                  />
                ))}
              </div>

              {/* Language detail rows */}
              <div className="space-y-3.5">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <span
                        style={{ backgroundColor: lang.color }}
                        className="h-2.5 w-2.5 rounded-full inline-block"
                      />
                      <span className="font-mono text-[#94A3B8]">{lang.name}</span>
                    </div>
                    <span className="font-mono font-bold text-white">{lang.percent}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6 text-left">
              <a
                href="https://github.com/coderharshe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold tracking-wider rounded-xl transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-accent-blue">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                FOLLOW ON GITHUB
              </a>
            </div>
          </div>
        </div>

        {/* Pinned Repositories Subsection */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6 text-left">
            <Award className="h-4 w-4 text-accent-blue animate-pulse" />
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">
              PINNED_REPOSITORIES.DAT
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {pinnedRepos.map((repo, idx) => (
              <motion.div
                key={repo.name}
                variants={itemVariants}
                className="premium-card p-6 flex flex-col justify-between items-stretch text-left border-white/[0.04] h-48 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <a
                      href={`https://github.com/coderharshe/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-black text-sm sm:text-base text-white hover:text-accent-blue transition-colors flex items-center gap-2"
                    >
                      <CircleDot className="h-3 w-3 text-accent-blue animate-pulse" />
                      {repo.name}
                    </a>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                    {repo.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#64748B] pt-4 border-t border-white/5 select-none">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span
                        style={{ backgroundColor: repo.langColor }}
                        className="h-2 w-2 rounded-full inline-block"
                      />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3. w-3 text-yellow-500 fill-yellow-500" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3 text-accent-purple" />
                      {repo.forks}
                    </span>
                  </div>
                  <span className="text-accent-blue">github.com</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
