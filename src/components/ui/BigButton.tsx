"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';

// Omitting props that conflict with Framer Motion's props
type BigButtonBaseProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof HTMLMotionProps<"a">
>;

interface BigButtonProps extends BigButtonBaseProps {
  title: string;
  description?: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
  external?: boolean;
}

const BigButton: React.FC<BigButtonProps> = ({
  title,
  description,
  href,
  icon,
  className = '',
  external = false,
  ...props
}) => {
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
    tap: { scale: 0.95 }
  };

  const buttonContent = (
    <>
      {icon && <span className="flex-shrink-0 mr-3">{icon}</span>}
      <div className="flex flex-col items-start">
        <span className="font-medium text-lg">{title}</span>
        {description && <span className="text-sm">{description}</span>}
      </div>
    </>
  );

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          bg-white border-2 border-[#1e1e1e] text-[#1e1e1e] hover:bg-gray-50
          px-5 py-3
          w-full
          flex items-center 
          font-medium shadow-md
          transition-colors cursor-pointer
          ${className}
        `}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <Link href={href} passHref>
      <motion.div
        className={`
          bg-white border-2 border-[#1e1e1e] text-[#1e1e1e] hover:bg-gray-50
          px-5 py-3
          w-full
          flex items-center
          font-medium shadow-md
          transition-colors cursor-pointer
          ${className}
        `}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        {buttonContent}
      </motion.div>
    </Link>
  );
};

export default BigButton; 