import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { transitions } from '../../lib/motionTokens';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/918127015970?text=Hi%20Privish%20Innovations%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, ...transitions.base }}
      className="fixed bottom-6 right-6 z-40"
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow duration-200 cursor-pointer min-h-[48px]"
        aria-label="Chat with Privish Innovations on WhatsApp"
      >
        {/* Soft pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-40" />

        <MessageCircle className="w-5 h-5 fill-white text-white shrink-0" />
        <span className="hidden sm:inline text-sm font-semibold tracking-wide font-['Plus_Jakarta_Sans']">
          Chat on WhatsApp
        </span>
      </motion.a>
    </motion.div>
  );
}
