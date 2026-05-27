'use client';

import { ArrowLeft, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import Link from 'next/link';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-primary-bg text-text-primary py-12 px-6 overflow-x-hidden select-text">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none no-print" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Navigation / Actions row (Hidden during printing) */}
        <div className="flex items-center justify-between mb-10 no-print select-none">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 hover:bg-white/10 text-xs font-mono tracking-wider uppercase rounded-xl text-text-secondary hover:text-white transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            BACK TO PORTFOLIO
          </Link>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue hover:bg-accent-blue/90 text-xs font-mono font-bold tracking-wider uppercase rounded-xl text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)] cursor-pointer"
          >
            <Printer className="h-3.5 w-3.5" />
            DOWNLOAD / PRINT PDF
          </button>
        </div>

        {/* The Resume Document */}
        <div className="premium-card p-8 sm:p-12 border-white/[0.04] bg-[#090e18]/80 backdrop-blur-md shadow-2xl relative print:border-none print:bg-transparent print:p-0 print:shadow-none print:backdrop-none text-left">
          {/* Header section */}
          <div className="border-b border-white/5 print:border-black/10 pb-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div>
              <h1 className="font-display font-black text-3xl sm:text-4xl text-white print:text-black tracking-tight leading-none mb-2">
                Harsh Aggarwal
              </h1>
              <h2 className="font-mono text-xs sm:text-sm font-bold text-accent-blue print:text-black uppercase tracking-wider">
                Full Stack Web Developer & AI Systems Builder
              </h2>
              <p className="text-xs text-text-secondary print:text-black/70 mt-2 max-w-md leading-relaxed">
                Strategic product builder leveraging a Business Administration background to engineer high-conversion full-stack SaaS applications and AI automations.
              </p>
            </div>

            {/* Direct Contact detail hub */}
            <div className="flex flex-col gap-2.5 text-xs font-mono text-text-secondary print:text-black/85 items-center sm:items-end">
              <a href="mailto:harshuthecoder@gmail.com" className="flex items-center gap-2 hover:text-accent-blue print:hover:text-black">
                harshuthecoder@gmail.com
                <Mail className="h-3.5 w-3.5 text-accent-blue print:text-black" />
              </a>
              <a href="tel:+919354292511" className="flex items-center gap-2 hover:text-accent-blue print:hover:text-black">
                +91 9354292511
                <Phone className="h-3.5 w-3.5 text-accent-purple print:text-black" />
              </a>
              <span className="flex items-center gap-2 select-none">
                New Delhi, India
                <MapPin className="h-3.5 w-3.5 text-accent-blue print:text-black" />
              </span>
              <a href="https://github.com/coderharshe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-blue print:hover:text-black">
                github.com/coderharshe
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-[#64748b] print:text-black">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Experience, Education, Pinned Projects */}
            <div className="md:col-span-8 space-y-8">
              {/* Experience */}
              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 print:border-black/10 pb-2">
                  <Briefcase className="h-4.5 w-4.5 text-accent-blue print:text-black" />
                  <h3 className="font-display font-extrabold text-base text-white print:text-black uppercase tracking-wider">
                    Work Experience
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="relative pl-4 border-l border-accent-blue/30 print:border-black/20">
                    <div className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-accent-blue print:bg-black" />
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
                      <h4 className="font-display font-bold text-sm text-white print:text-black">Full Stack & SaaS Developer (Freelance)</h4>
                      <span className="font-mono text-[10px] text-[#64748B] print:text-black">2024 — Present</span>
                    </div>
                    <p className="text-xs text-text-secondary print:text-black/80 leading-relaxed mb-2">
                      Designed and executed custom corporate web portals, online client dashboards, and responsive websites for freelance clients, utilizing Next.js, PostgreSQL, Supabase, and Tailwind.
                    </p>
                    <ul className="list-disc list-inside text-[11px] text-text-secondary print:text-black/70 space-y-1 pl-1 leading-relaxed">
                      <li>Created and launched the live fintech landing console **Grownet Finance**, yielding a 34% lead generation conversion bump.</li>
                      <li>Developed the multi-tenant retail storefront engine **Shopkeepers App**, enabling instant online catalog creation and secure Razorpay payment integrations.</li>
                    </ul>
                  </div>

                  <div className="relative pl-4 border-l border-accent-purple/30 print:border-black/20">
                    <div className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-accent-purple print:bg-black" />
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
                      <h4 className="font-display font-bold text-sm text-white print:text-black">AI Systems Integration Architect</h4>
                      <span className="font-mono text-[10px] text-[#64748B] print:text-black">2024 — Present</span>
                    </div>
                    <p className="text-xs text-text-secondary print:text-black/80 leading-relaxed mb-2">
                      Constructed background pipelines incorporating modern LLMs (Google Gemini) and computer vision frameworks to automate heavy event tasks.
                    </p>
                    <ul className="list-disc list-inside text-[11px] text-text-secondary print:text-black/70 space-y-1 pl-1 leading-relaxed">
                      <li>Designed and integrated the **Face Separation System**, sorting client photos automatically with an accuracy rate of 99.4%.</li>
                      <li>Built an AI distributor Wealth Assistant inside the **MFD App** utilizing Supabase Auth and pg/Prisma query routers.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Featured real-world projects summary */}
              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 print:border-black/10 pb-2">
                  <Code className="h-4.5 w-4.5 text-accent-blue print:text-black" />
                  <h3 className="font-display font-extrabold text-base text-white print:text-black uppercase tracking-wider">
                    Key Project Deployments
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 print:border-black/10 print:bg-transparent">
                    <h4 className="font-display font-bold text-xs text-white print:text-black mb-1">Grownet Finance (Fintech SaaS)</h4>
                    <p className="text-[10px] text-text-secondary print:text-black/70 leading-relaxed mb-2">Digital lending system featuring 4-step eligibility wizards and advanced EMI amortization schedule calculations.</p>
                    <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-accent-blue/10 text-accent-blue print:border">Next.js 15 · Tailwind v4</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 print:border-black/10 print:bg-transparent">
                    <h4 className="font-display font-bold text-xs text-white print:text-black mb-1">MFD advisory Console (AI Fintech)</h4>
                    <p className="text-[10px] text-text-secondary print:text-black/70 leading-relaxed mb-2">Mutual fund management platform integrating Supabase Auth, Prisma PostgreSQL routing, and Google Gemini.</p>
                    <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-accent-purple/10 text-accent-purple print:border">Next.js · Prisma · Gemini</span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 print:border-black/10 pb-2">
                  <GraduationCap className="h-4.5 w-4.5 text-accent-blue print:text-black" />
                  <h3 className="font-display font-extrabold text-base text-white print:text-black uppercase tracking-wider">
                    Education
                  </h3>
                </div>

                <div className="relative pl-4 border-l border-accent-blue/30 print:border-black/20">
                  <div className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-accent-blue print:bg-black" />
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="font-display font-bold text-sm text-white print:text-black">Bachelor of Business Administration (BBA)</h4>
                    <span className="font-mono text-[10px] text-[#64748B] print:text-black">New Delhi, India</span>
                  </div>
                  <p className="text-xs text-text-secondary print:text-black/80 mt-1 leading-relaxed">
                    Extensive training in business operation systems, consumer behavioral models, strategic project management, and budget calculations. Blends strategic analytical thinking directly with tech builds.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Skills list */}
            <div className="md:col-span-4 space-y-8 border-l border-white/5 pl-0 md:pl-6 print:border-l-0 print:pl-0">
              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 print:border-black/10 pb-2">
                  <Code className="h-4.5 w-4.5 text-accent-blue print:text-black" />
                  <h3 className="font-display font-extrabold text-base text-white print:text-black uppercase tracking-wider">
                    Technical Stack
                  </h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <h4 className="font-mono text-[9px] text-[#64748B] print:text-black uppercase tracking-wider mb-2 font-bold">FRONTEND</h4>
                    <div className="flex flex-wrap gap-1.5 select-none print:select-text">
                      {['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'JavaScript ES6+', 'Framer Motion', 'HTML/CSS'].map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 print:border print:text-black print:bg-transparent">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-[9px] text-[#64748B] print:text-black uppercase tracking-wider mb-2 font-bold">BACKEND & DATA</h4>
                    <div className="flex flex-wrap gap-1.5 select-none print:select-text">
                      {['Node.js', 'Express.js', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'MongoDB', 'Firebase', 'Supabase'].map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 print:border print:text-black print:bg-transparent">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-[9px] text-[#64748B] print:text-black uppercase tracking-wider mb-2 font-bold">AI & TELEMETRY</h4>
                    <div className="flex flex-wrap gap-1.5 select-none print:select-text">
                      {['Gemini / OpenAI API', 'Python FastAPI', 'Face Recognition AI', 'Cloudflare R2', 'Razorpay SDK', 'Nodemailer'].map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 print:border print:text-black print:bg-transparent">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 print:border-black/10 pb-2">
                  <Award className="h-4.5 w-4.5 text-accent-blue print:text-black" />
                  <h3 className="font-display font-extrabold text-base text-white print:text-black uppercase tracking-wider">
                    Core Capabilities
                  </h3>
                </div>

                <ul className="list-disc list-inside text-xs text-text-secondary print:text-black/70 space-y-2 pl-1 leading-relaxed">
                  <li>Conversion Rate Optimization (CRO)</li>
                  <li>Responsive Web Engineering</li>
                  <li>Multi-Tenant SaaS Designs</li>
                  <li>Custom AI Workflow Automations</li>
                  <li>Stable Micro-Release MVPs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
