'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Award } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Start', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Detect scroll offset for sticky header blur styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionIds = navItems.map(item => item.href.substring(1));
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Trigger when section occupies the mid-viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-primary-bg/75 border-b border-white/5 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Glowing Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2.5 font-display font-extrabold text-xl tracking-tight text-white group select-none"
          >
            <div className="relative h-9 w-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple p-[1px] shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">
              <div className="h-full w-full bg-primary-bg rounded-[7px] flex items-center justify-center font-mono text-sm font-bold text-accent-blue group-hover:text-white transition-colors">
                HA
              </div>
            </div>
            <span className="bg-gradient-to-r from-white via-white to-text-secondary bg-clip-text text-transparent group-hover:text-white transition-colors">
              Harsh<span className="text-accent-blue font-light">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.02] border border-white/5 px-1.5 py-1 rounded-full backdrop-blur-md">
            {navItems.map((item) => {
              const active = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-full transition-colors ${
                    active ? 'text-white font-semibold' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/5 rounded-full border border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Call To Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-text-secondary hover:text-white transition-colors"
            >
              HIRE ME
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href="/resume"
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold bg-accent-blue hover:bg-accent-blue/90 text-white rounded-lg transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <Award className="h-3.5 w-3.5" />
              VIEW RESUME
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-white transition-all cursor-pointer"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-30 md:hidden bg-primary-bg/95 border-b border-white/5 backdrop-blur-lg py-6 px-6 flex flex-col gap-6 shadow-2xl select-none"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`py-3 px-4 font-mono text-sm tracking-wider uppercase rounded-xl transition-all ${
                      active
                        ? 'bg-accent-blue/10 text-accent-blue font-semibold border-l-2 border-accent-blue pl-3.5'
                        : 'text-text-secondary hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            
            <div className="flex flex-col gap-3.5 pt-4 border-t border-white/5">
              <a
                href="/resume"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent-blue text-white rounded-xl font-mono text-xs font-bold tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              >
                <Award className="h-4 w-4" />
                DOCK RESUME PDF
              </a>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="flex items-center justify-center gap-1.5 w-full py-3.5 bg-white/5 border border-white/5 text-white hover:bg-white/10 rounded-xl font-mono text-xs font-bold tracking-wider"
              >
                HIRE AS A BUILDER
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
