import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { transitions } from '../../lib/motionTokens';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium font-['Plus_Jakarta_Sans'] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 rounded-lg gap-1.5 min-h-[36px]',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2 min-h-[44px]',
    lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5 min-h-[48px]',
  };

  const variantStyles = {
    primary: 'bg-gradient-brand text-white shadow-md shadow-brand-flame/20 hover:shadow-lg hover:shadow-brand-flame/30 font-semibold',
    secondary: 'bg-transparent border-2 border-brand-orange text-ink hover:bg-brand-orange/10 font-semibold',
    ghost: 'bg-transparent text-ink hover:text-brand-orange hover:bg-brand-orange/5',
    dark: 'bg-ink text-white hover:bg-black shadow-md shadow-ink/20 font-semibold',
    white: 'bg-white text-ink hover:bg-cream shadow-md font-semibold border border-ink/10',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: transitions.fast,
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={combinedClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
}
