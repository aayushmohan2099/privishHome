import React from 'react';
import { motion } from 'motion/react';
import { transitions } from '../../lib/motionTokens';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  ...props
}) {
  const motionProps = hoverEffect
    ? {
        whileHover: { 
          y: -6, 
          transition: transitions.fast 
        },
      }
    : {};

  return (
    <motion.div
      {...motionProps}
      onClick={onClick}
      className={`bg-white rounded-2xl border border-ink/5 p-6 md:p-8 shadow-sm transition-colors duration-200 hover:border-brand-orange/30 hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
