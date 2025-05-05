"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiSearchLine } from 'react-icons/ri';
import Input from '@/components/ui/Input';

interface PluginSearchProps {
  search: string;
  setSearch: (search: string) => void;
}

const PluginSearch: React.FC<PluginSearchProps> = ({ search, setSearch }) => {
  const [focused, setFocused] = useState(false);
  
  const searchVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  return (
    <div className="w-full">
      <Input
        type="text"
        placeholder="Search plugins, tags, or authors..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        fullWidth
        className="py-1"
        icon={<RiSearchLine size={24} />}
        aria-label="Search plugins"
      />
    </div>
  );
};

export default PluginSearch; 