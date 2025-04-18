import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  iconColor?: string;
  actionText?: string;
  actionLink?: string;
  className?: string;
}

/**
 * Modern card component with green accent color
 */
export default function Card({
  title,
  description,
  icon,
  iconColor = 'text-emerald-500',
  actionText,
  actionLink = '#',
  className = '',
}: CardProps) {
  return (
    <div className={`group relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${className}`}>
      {/* Card top decoration - subtle linear gradient */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500"></div>
      
      {/* Background pattern - only visible on hover */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
      
      {/* Icon header with gradient background */}
      <div className="p-6 pb-0">
        <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mb-5">
          <div className={`h-6 w-6 ${iconColor}`}>
            {icon}
          </div>
          <div className="absolute w-12 h-12 bg-emerald-200 rounded-lg blur-xl opacity-20 -z-10"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 pt-0">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{description}</p>
        
        {actionText && (
          <Link href={actionLink} className="text-sm font-medium text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 relative">
            <span className="relative z-10">{actionText}</span>
            <FiArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
            {/* Underline effect on hover */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-200 group-hover:w-full transition-all duration-300"></span>
          </Link>
        )}
      </div>
    </div>
  );
} 