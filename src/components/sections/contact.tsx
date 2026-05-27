'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertTriangle, CheckCircle, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budgetRange: number; // Single value for simplicity and beautiful UI
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: 'Business Platform',
    budgetRange: 5000,
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Business Platform',
    'Custom SaaS App',
    'AI Integration',
    'Dashboard Console',
    'Creative Site',
  ] as const;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'budgetRange' ? Number(value) : value,
    }));
  };

  const handleSelectType = (type: string) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validations
    if (!formData.name.trim()) {
      setErrorMessage('Please provide your name.');
      setStatus('error');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      setStatus('error');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        
        // Trigger a gorgeous confetti explosion to surprise & delight!
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#3B82F6', '#8B5CF6', '#F8FAFC'],
        });

        // Reset form data after successful lead submission
        setFormData({
          name: '',
          email: '',
          projectType: 'Business Platform',
          budgetRange: 5000,
          message: '',
        });
      } else {
        setErrorMessage(result.error || 'Server error. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network transmission failed. Check connection.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-primary-bg overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full glow-blur-blue opacity-10 top-1/4 right-0 pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-accent-blue" />
            <span className="font-mono text-xs tracking-[0.2em] text-accent-blue uppercase font-bold">
              Collaboration
            </span>
            <span className="h-[1px] w-8 bg-accent-blue" />
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-white tracking-tight mb-4">
            Initiate a <span className="text-accent-blue">Project</span>
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary max-w-lg leading-relaxed">
            Let’s build something production-ready, beautiful, and strategically aligned with your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Direct Telemetry Contacts details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="premium-card p-8 flex flex-col items-start text-left border-white/[0.04] h-full justify-between">
              <div>
                <h3 className="font-display font-extrabold text-xl text-white mb-3">
                  Let’s build together
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-8">
                  Whether you need a full SaaS system, an automated AI lead sorting engine, or a next-generation corporate platform, my inbox is always online.
                </p>
              </div>

              {/* Direct links grids */}
              <div className="space-y-6 w-full">
                <a
                  href="mailto:harshuthecoder@gmail.com"
                  className="flex items-center gap-4 group p-3.5 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all"
                >
                  <div className="p-3 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-mono text-[9px] text-[#64748B] uppercase tracking-widest leading-none mb-1">Direct Mail</div>
                    <div className="font-display font-bold text-sm text-white group-hover:text-accent-blue transition-colors">harshuthecoder@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+919354292511"
                  className="flex items-center gap-4 group p-3.5 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all"
                >
                  <div className="p-3 rounded-lg bg-accent-purple/10 border border-accent-purple/20 text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-colors duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-mono text-[9px] text-[#64748B] uppercase tracking-widest leading-none mb-1">Call/WhatsApp</div>
                    <div className="font-display font-bold text-sm text-white group-hover:text-accent-purple transition-colors">+91 9354292511</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl border border-transparent select-none">
                  <div className="p-3 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-mono text-[9px] text-[#64748B] uppercase tracking-widest leading-none mb-1">Location</div>
                    <div className="font-display font-bold text-sm text-white">New Delhi, India</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 mt-8 w-full text-left select-none">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#64748B]">
                  <Award className="h-4 w-4 text-accent-blue animate-pulse" />
                  <span>SECURED DEPLOYMENT PORTAL ONLINE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-fidelity contact form */}
          <div className="lg:col-span-7 premium-card p-6 sm:p-8 border-white/[0.04]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col items-start text-left">
                  <label htmlFor="name" className="font-mono text-[9px] font-black tracking-widest text-[#94A3B8] uppercase mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g. Elon Musk"
                    required
                    className="w-full bg-white/[0.02] border border-white/5 focus:border-accent-blue/50 focus:bg-white/[0.04] rounded-xl px-4 py-3.5 text-xs text-white placeholder-text-secondary focus:outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col items-start text-left">
                  <label htmlFor="email" className="font-mono text-[9px] font-black tracking-widest text-[#94A3B8] uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E.g. elon@spacex.com"
                    required
                    className="w-full bg-white/[0.02] border border-white/5 focus:border-accent-blue/50 focus:bg-white/[0.04] rounded-xl px-4 py-3.5 text-xs text-white placeholder-text-secondary focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Project Type Buttons Selection */}
              <div className="flex flex-col items-start text-left">
                <label className="font-mono text-[9px] font-black tracking-widest text-[#94A3B8] uppercase mb-3">Target Project Category</label>
                <div className="flex flex-wrap gap-2 w-full">
                  {projectTypes.map((type) => {
                    const isSelected = formData.projectType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleSelectType(type)}
                        className={`px-3 py-2 border rounded-xl font-mono text-[9px] tracking-wider uppercase transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-accent-blue/10 text-white border-accent-blue font-bold shadow-[0_0_10px_rgba(59,130,246,0.15)]'
                            : 'bg-white/[0.02] text-text-secondary border-white/5 hover:text-white hover:border-white/10'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget slider */}
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center justify-between w-full mb-2">
                  <label htmlFor="budgetRange" className="font-mono text-[9px] font-black tracking-widest text-[#94A3B8] uppercase">Target Project Budget</label>
                  <span className="font-mono text-[10px] font-bold text-accent-blue">
                    ${formData.budgetRange.toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  id="budgetRange"
                  name="budgetRange"
                  min="1000"
                  max="25000"
                  step="500"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full h-1 bg-white/5 rounded-full appearance-none cursor-pointer accent-accent-blue focus:outline-none"
                />
                <div className="flex justify-between w-full text-[8px] font-mono text-[#64748B] mt-1.5 select-none">
                  <span>$1,000</span>
                  <span>$12,500</span>
                  <span>$25,000+</span>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col items-start text-left">
                <label htmlFor="message" className="font-mono text-[9px] font-black tracking-widest text-[#94A3B8] uppercase mb-2">Detailed Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your goals, deadlines, or tech stacks..."
                  required
                  className="w-full bg-white/[0.02] border border-white/5 focus:border-accent-blue/50 focus:bg-white/[0.04] rounded-xl px-4 py-3.5 text-xs text-white placeholder-text-secondary focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Form Messages alerts */}
              <AnimatePresence mode="wait">
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs text-left"
                  >
                    <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2.5 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-xs text-left"
                  >
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span>Securely dispatched! Harsh will contact you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex items-center justify-center gap-2.5 w-full py-4 bg-accent-blue hover:bg-accent-blue/90 text-white font-mono text-xs font-black tracking-widest rounded-xl transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] disabled:opacity-50 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <span>TRANSMITTING LEAD...</span>
                ) : (
                  <>
                    <span>SECURELY SUBMIT PROTOCOL</span>
                    <Send className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
