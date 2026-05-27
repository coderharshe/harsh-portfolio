'use client';

import { Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#05080e] py-12 overflow-hidden select-none">
      {/* Decorative Glow Layer */}
      <div className="absolute w-[300px] h-[300px] rounded-full glow-blur-blue opacity-5 bottom-0 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Information */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2.5 font-display font-black text-lg tracking-tight text-white group"
          >
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-accent-blue to-accent-purple p-[1px] overflow-hidden">
              <img
                src="/logo.jpg"
                alt="HA Logo"
                className="h-full w-full object-cover rounded-[5px] transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span>
              Harsh<span className="text-accent-blue font-light">.dev</span>
            </span>
          </a>
          <p className="text-xs text-text-secondary max-w-xs leading-relaxed">
            Architecting modern business SaaS platforms and intelligent AI-powered web solutions.
          </p>
        </div>

        {/* Navigation Shortcut Lists */}
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3.5 text-xs font-mono tracking-widest text-[#94A3B8]">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors">ABOUT</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-white transition-colors">SKILLS</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors">SERVICES</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-white transition-colors">PROJECTS</a>
          <a href="#workflow" onClick={(e) => handleNavClick(e, 'workflow')} className="hover:text-white transition-colors">WORKFLOW</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors">CONTACT</a>
        </div>

        {/* Social Channels Link Grid */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/coderharshe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-text-secondary hover:text-white transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-aggarwal-122405322"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-text-secondary hover:text-white transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" rx="1" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="mailto:harshuthecoder@gmail.com"
            aria-label="Email Harsh"
            className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-text-secondary hover:text-white transition-all"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="tel:+919354292511"
            aria-label="Call Harsh"
            className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-text-secondary hover:text-white transition-all"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#64748B]">
        <div>
          © {currentYear} Harsh Aggarwal. All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          Crafted with <Heart className="h-3 w-3 text-accent-blue fill-accent-blue animate-pulse" /> using Next.js 15 & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
