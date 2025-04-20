"use client";

import Card from './Card';
import { ReactNode } from 'react';
import { FiLayers } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
  iconColor?: string;
  actionText?: string;
  actionLink?: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

/**
 * Modern feature section with transparent background and framer-motion animations
 */
export default function FeatureSection({ title, subtitle, features }: FeatureSectionProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.4
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-transparent">
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <motion.div 
            className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-lg mb-5"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FiLayers className="text-emerald-600 h-5 w-5" />
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                iconColor={feature.iconColor}
                actionText={feature.actionText}
                actionLink={feature.actionLink}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonial or highlight box */}
        <motion.div 
          className="mt-16 mx-auto max-w-3xl bg-white rounded-2xl p-8 border border-emerald-100/60"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Ready to Build Your AI Agent?</h3>
              <p className="text-gray-600 text-base">Get started with our comprehensive documentation and examples.</p>
            </div>
            <div>
              <motion.a 
                href="/docs/getting-started" 
                className="inline-block bg-white text-black hover:text-gray-800 border border-emerald-200 shadow-sm px-5 py-2.5 rounded-full text-base font-medium transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Documentation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 