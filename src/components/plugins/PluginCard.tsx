"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { RiGithubFill, RiFileList2Line } from 'react-icons/ri';
import Button from '../ui/Button';
import Image from 'next/image';

interface PluginCardProps {
  plugin: {
    id: string;
    name: string;
    description: string;
    author: string;
    githubUrl: string;
    docsUrl?: string | null;
    imageData?: string | null;
  };
}

const PluginCard: React.FC<PluginCardProps> = ({ plugin }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    hover: { 
      y: -5,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className="bg-white overflow-hidden border-2 border-[#1e1e1e] shadow-md h-full flex flex-col mx-auto w-full max-w-sm"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="p-5 flex-grow">
        <div className="flex items-center gap-3 mb-4">
          {plugin.imageData ? (
            <div className="w-10 h-10 flex-shrink-0 overflow-hidden">
              <img 
                src={plugin.imageData} 
                alt={plugin.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-10 h-10 flex-shrink-0 bg-[#d7e1e1] flex items-center justify-center">
              <span className="text-[#1e1e1e] font-semibold">{plugin.name.substring(0, 2).toUpperCase()}</span>
            </div>
          )}
          <div>
            <h3 className="font-semibold text-lg text-[#1e1e1e]">{plugin.name}</h3>
            <p className="text-sm text-gray-600">by {plugin.author}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-6 line-clamp-3">{plugin.description}</p>
      </div>
      <div className="p-4 bg-[#f7f7f7] border-t border-gray-100 flex items-center justify-end gap-3">
        <Button 
          size="sm" 
          icon={<RiGithubFill size={18} />}
          href={plugin.githubUrl}
        >
          GitHub
        </Button>
        
        {plugin.docsUrl && (
          <Button 
            size="sm" 
            icon={<RiFileList2Line size={18} />}
            href={plugin.docsUrl}
          >
            Docs
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default PluginCard; 