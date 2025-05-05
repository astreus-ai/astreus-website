"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary';
type ButtonSize = 'sm' | 'md' | 'lg';

// Omitting props that conflict with Framer Motion's props
type ButtonBaseProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  keyof HTMLMotionProps<"button">
>;

interface ButtonProps extends ButtonBaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  isLoading = false,
  fullWidth = false,
  className = '',
  disabled,
  href,
  target = '_blank',
  onClick,
  ...props
}) => {
  // Button style variants
  const variantStyles = {
    primary: 'bg-white border-2 border-[#1e1e1e] text-[#1e1e1e] hover:bg-gray-50',
  };

  // Button size variants
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  // Animation variants
  const buttonVariants = {
    initial: {},
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 },
    disabled: { opacity: 0.6 }
  };

  // If href is provided, render an anchor tag
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={`
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? 'w-full' : 'w-fit'}
          flex items-center justify-center gap-2 
          font-medium shadow-md 
          transition-colors cursor-pointer
          disabled:opacity-60 disabled:cursor-not-allowed
          ${className}
        `}
        initial="initial"
        whileHover={!disabled ? "hover" : "disabled"}
        whileTap={!disabled ? "tap" : "disabled"}
        variants={buttonVariants}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        flex items-center justify-center gap-2 
        font-medium shadow-md 
        transition-colors cursor-pointer
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
      initial="initial"
      whileHover={!disabled ? "hover" : "disabled"}
      whileTap={!disabled ? "tap" : "disabled"}
      variants={buttonVariants}
      disabled={isLoading || disabled}
      onClick={onClick}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{children}</span>
        </>
      ) : (
        <>
          {icon && <span className="flex-shrink-0">{icon}</span>}
          <span>{children}</span>
        </>
      )}
    </motion.button>
  );
};

export default Button; 