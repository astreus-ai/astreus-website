"use client";

import { ReactNode } from 'react';
import { FiGithub, FiCode, FiArrowRight, FiLayers, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Benefit {
  title: string;
  description: string;
  icon: ReactNode;
}

interface OpenSourceSectionProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
  githubLink: string;
}

export default function OpenSourceSection({ 
  title, 
  subtitle, 
  benefits,
  githubLink
}: OpenSourceSectionProps) {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
    hidden: { y: 50, opacity: 0 },
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
  
  return (
    <section className="relative py-24 overflow-hidden bg-transparent">
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <motion.div 
            className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-lg mb-5"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FiGithub className="text-emerald-600 h-5 w-5" />
          </motion.div>
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</motion.h2>
          <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-100 text-emerald-600 mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex-1 text-left md:pr-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg mr-3">
                <FiGithub className="text-white h-5 w-5" />
              </div>
              <div className="font-semibold text-base">GitHub Project</div>
            </div>
            <h3 className="text-2xl font-bold mb-3">Contribute to Astreus</h3>
            <p className="text-gray-600 mb-4">Join our community of developers building the future of AI agents. Star the repo, report issues, or make a pull request.</p>
            <div className="flex items-center gap-4">
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white text-base py-3 px-6 rounded-full transition-colors duration-200 shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiGithub className="mr-2" />
                View on GitHub
              </motion.a>
              <motion.a
                href="/docs"
                className="inline-flex items-center bg-white border border-gray-300 hover:border-gray-400 text-gray-700 text-base py-3 px-6 rounded-full transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Read the Docs
                <FiArrowRight className="ml-2" />
              </motion.a>
            </div>
          </div>
          <div className="hidden md:block h-32 border-l border-gray-200"></div>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col space-y-4">
              <motion.div 
                className="flex"
                initial={{ x: 20, y: 20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 min-w-10 flex items-center justify-center bg-emerald-100 rounded-lg text-emerald-600 mr-4">
                  <FiCode />
                </div>
                <div>
                  <div className="font-semibold mb-1">TypeScript First</div>
                  <div className="text-gray-600 text-base">Built from the ground up with TypeScript for great developer experience.</div>
                </div>
              </motion.div>
              <motion.div 
                className="flex"
                initial={{ x: 20, y: 20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 min-w-10 flex items-center justify-center bg-emerald-100 rounded-lg text-emerald-600 mr-4">
                  <FiLayers />
                </div>
                <div>
                  <div className="font-semibold mb-1">Modular Design</div>
                  <div className="text-gray-600 text-base">Pick and choose only the components you need for your application.</div>
                </div>
              </motion.div>
              <motion.div 
                className="flex"
                initial={{ x: 20, y: 20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 min-w-10 flex items-center justify-center bg-emerald-100 rounded-lg text-emerald-600 mr-4">
                  <FiZap />
                </div>
                <div>
                  <div className="font-semibold mb-1">Actively Maintained</div>
                  <div className="text-gray-600 text-base">Regular updates and a responsive developer community.</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 