'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1200; // Total loading time in ms
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 400); // Wait for exit animation to complete
          }, 300);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070B14] select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
          {/* Futuristic Particle Glow Background */}
          <div className="absolute inset-0 bg-dot-pattern opacity-10" />
          <div className="absolute w-[400px] h-[400px] rounded-full glow-blur-blue opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Logo Drawing Animation */}
            <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="filter drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              >
                {/* Hexagonal Outer Frame */}
                <motion.polygon
                  points="50,5 90,28 90,72 50,95 10,72 10,28"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0.1 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
                
                {/* Embedded Inner Core Glimmer */}
                <motion.polygon
                  points="50,15 82,34 82,66 50,85 18,66 18,34"
                  stroke="#8B5CF6"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ rotate: 0, opacity: 0.2 }}
                  animate={{ rotate: 360, opacity: 0.5 }}
                  transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                  style={{ transformOrigin: '50px 50px' }}
                />

                {/* Styled Letter 'H' */}
                <motion.path
                  d="M32 35V65M68 35V65M32 50H68"
                  stroke="#F8FAFC"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                />
              </svg>
            </div>

            {/* Glowing System Logs Text */}
            <motion.div
              className="text-center font-mono text-xs tracking-[0.2em] text-[#94A3B8]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-pulse" />
                <span>INITIATING CORE PROTOCOLS</span>
              </div>
              <div className="h-[2px] w-48 bg-white/5 rounded-full overflow-hidden relative">
                <motion.div 
                  className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-2 text-[10px] text-accent-blue/80 font-bold">
                {Math.round(progress)}% CONNECTED
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
