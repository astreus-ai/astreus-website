"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Animation variants
  const inputVariants = {
    initial: {},
    focus: { 
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label 
          htmlFor={props.id} 
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      
      <motion.div
        className="relative"
        initial="initial"
        animate={isFocused ? "focus" : "initial"}
        variants={inputVariants}
      >
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none z-10">
            {icon}
          </div>
        )}
        
        <input
          {...props}
          className={`
            w-full px-4 py-3
            ${icon ? 'pl-10' : ''}
            border-2 border-[#1e1e1e] 
            ${error ? 'border-red-500' : isFocused ? 'border-[#1e1e1e]' : 'border-[#1e1e1e]'}
            bg-white 
            text-[#1e1e1e] placeholder-gray-400
            focus:outline-none
            disabled:opacity-60 disabled:cursor-not-allowed
            relative z-0
          `}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
        />
      </motion.div>
      
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input; 