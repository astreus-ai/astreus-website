import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiBook } from 'react-icons/fi';
import { Plugin } from '@/constants/plugins';

interface PluginCardProps {
  plugin: Plugin;
  index: number;
}

export default function PluginCard({ plugin, index }: PluginCardProps) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={item}
      className="backdrop-blur-sm w-full md:w-1/2 lg:w-1/3 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">{plugin.title}</h3>
        <p className="text-gray-300 mb-4">{plugin.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {plugin.tags.map(tag => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-3 mt-4">
        <Link 
          href={plugin.githubUrl} 
          target="_blank" 
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
        >
          <FiGithub /> GitHub
        </Link>
        <Link 
          href={plugin.docsUrl} 
          target="_blank" 
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
        >
          <FiBook /> Docs
        </Link>
      </div>
    </motion.div>
  );
} 