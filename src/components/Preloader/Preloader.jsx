import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { transitions } from '../../lib/motionTokens';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already visited in this session
    const hasVisited = sessionStorage.getItem('privish-visited');
    if (!hasVisited) {
      setIsVisible(true);
      sessionStorage.setItem('privish-visited', 'true');
      
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -30,
            transition: { duration: 0.5, ease: transitions.fluidEase } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink"
        >
          {/* Animated P Ribbon Logo */}
          <div className="relative w-28 h-28 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="preloaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FD7B03" />
                  <stop offset="100%" stop-color="#FD3502" />
                </linearGradient>
              </defs>
              
              {/* Path of flowing P Ribbon */}
              <motion.path
                d="M32 75 V25 H52 C65 25 72 33 72 45 C72 57 65 65 52 65 H42"
                stroke="url(#preloaderGrad)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </div>

          {/* Typography reveal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-4 text-center"
          >
            <h1 className="text-xl font-bold font-['Space_Grotesk'] text-white tracking-widest uppercase">
              PRIVISH
            </h1>
            <span className="text-xs tracking-[0.25em] text-brand-orange font-medium uppercase font-['Plus_Jakarta_Sans']">
              INNOVATIONS
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
