import React from 'react';
import { motion } from 'motion/react';
import { variants } from '../../lib/motionTokens';

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  className = '',
}) {
  const alignClasses = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <motion.div
      variants={variants.fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-orange/10 text-brand-orange mb-3 border border-brand-orange/20">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          {eyebrow}
        </span>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-4 font-['Space_Grotesk'] leading-[1.15]">
        {title} {highlight && <span className="text-gradient-brand">{highlight}</span>}
      </h2>

      {description && (
        <p className="text-base md:text-lg text-body-text leading-relaxed font-['Plus_Jakarta_Sans'] font-normal">
          {description}
        </p>
      )}
    </motion.div>
  );
}
