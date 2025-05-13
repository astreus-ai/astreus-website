'use client';

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/ui/CodeBlock";
import { motion } from 'framer-motion';

export default function XPluginPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  const codeVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.4
      }
    }
  };

  const tableVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    }
  };

  return (
    <main className="max-w-4xl mx-auto">
      <motion.div 
        className="bg-white p-8 border-2 border-[#1e1e1e] shadow-md"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="font-press-start-2p text-2xl md:text-3xl mb-6 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          X Plugin
        </motion.h1>
        
        <motion.p 
          className="text-lg mb-8"
          variants={itemVariants}
        >
          An X (formerly Twitter) integration plugin for the Astreus AI agent framework, allowing agents to interact with X.
        </motion.p>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Features
        </motion.h2>
        
        <motion.ul 
          className="space-y-2 mb-8"
          variants={containerVariants}
        >
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Official X API Integration</span>: Uses the official X API v2</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Comprehensive X Integration</span>: Access profiles, tweets, search, post tweets, and more</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Poll Support</span>: Create polls on X</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Rich Media Support</span>: Post tweets with images and videos</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Enhanced Logging</span>: Detailed logging of API requests and responses for improved debugging</span>
          </motion.li>
        </motion.ul>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Installation
        </motion.h2>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code="npm install @astreus-ai/x-plugin"
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Configuration
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Create a <code>.env</code> file with your X API credentials:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code={`# X API v2 credentials
X_API_KEY=your_api_key
X_API_SECRET_KEY=your_api_secret
X_ACCESS_TOKEN=your_access_token
X_ACCESS_TOKEN_SECRET=your_access_token_secret

# Configuration options
CACHE_TWEET_SECONDS=300  # Cache tweets for 5 minutes
CACHE_PROFILE_SECONDS=3600  # Cache profiles for 1 hour

# Logging options
LOG_LEVEL=info  # Options: error, warn, info, debug`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Usage
        </motion.h2>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Basic Usage
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createAgent } from 'astreus';
import XPlugin from '@astreus-ai/x-plugin';

// Create an X plugin instance
const xPlugin = new XPlugin();

// Initialize the plugin
await xPlugin.init();

// Create an agent with the X plugin
const agent = await createAgent({
  name: 'Social Media Agent',
  description: 'An agent that can interact with X',
  plugins: [xPlugin]
});

// Now the agent can use X functionality
const response = await agent.chat(\`Find the latest tweets from Elon Musk and summarize them.\`);`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Custom Configuration
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createAgent } from 'astreus';
import XPlugin from '@astreus-ai/x-plugin';

// Create a plugin with custom configuration
const xPlugin = new XPlugin({
  apiKey: 'your_api_key',
  apiSecret: 'your_api_secret',
  accessToken: 'your_access_token',
  accessSecret: 'your_access_token_secret',
  cacheTweetSeconds: 600,
  logLevel: 'debug'  // Set logging verbosity
});

// Initialize the plugin
await xPlugin.init();

// Create an agent with the plugin
const agent = await createAgent({
  name: 'Social Media Agent',
  description: 'An agent that can interact with X',
  plugins: [xPlugin]
});`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Available Tools
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          The X plugin provides the following tools to Astreus agents:
        </motion.p>
        
        <motion.div 
          className="overflow-x-auto my-8"
          variants={tableVariants}
        >
          <table className="w-full border-2 border-[#1e1e1e]">
            <thead className="bg-[#d7e1e1]">
              <tr>
                <th className="py-3 px-4 text-left font-press-start-2p text-sm text-[#1e1e1e] border-b-2 border-[#1e1e1e] font-bold">Tool Name</th>
                <th className="py-3 px-4 text-left font-press-start-2p text-sm text-[#1e1e1e] border-b-2 border-[#1e1e1e] font-bold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e1e1e]">
                <td className="py-3 px-4 font-mono text-sm">x_get_profile</td>
                <td className="py-3 px-4">Get an X user profile by username</td>
              </tr>
              <tr className="border-b border-[#1e1e1e]">
                <td className="py-3 px-4 font-mono text-sm">x_get_tweets</td>
                <td className="py-3 px-4">Get recent tweets from an X user</td>
              </tr>
              <tr className="border-b border-[#1e1e1e]">
                <td className="py-3 px-4 font-mono text-sm">x_get_tweet</td>
                <td className="py-3 px-4">Get a specific tweet by ID</td>
              </tr>
              <tr className="border-b border-[#1e1e1e]">
                <td className="py-3 px-4 font-mono text-sm">x_search_tweets</td>
                <td className="py-3 px-4">Search for tweets using a query</td>
              </tr>
              <tr className="border-b border-[#1e1e1e]">
                <td className="py-3 px-4 font-mono text-sm">x_send_tweet</td>
                <td className="py-3 px-4">Send a new tweet</td>
              </tr>
              <tr className="border-b border-[#1e1e1e]">
                <td className="py-3 px-4 font-mono text-sm">x_send_tweet_with_poll</td>
                <td className="py-3 px-4">Send a tweet with a poll</td>
              </tr>
              <tr className="border-b border-[#1e1e1e]">
                <td className="py-3 px-4 font-mono text-sm">x_retweet</td>
                <td className="py-3 px-4">Retweet a tweet</td>
              </tr>
              <tr className="border-b border-[#1e1e1e]">
                <td className="py-3 px-4 font-mono text-sm">x_like_tweet</td>
                <td className="py-3 px-4">Like a tweet</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-sm">x_get_trends</td>
                <td className="py-3 px-4">Get current X trends</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Example: Analyzing Tweet Engagement
        </motion.h2>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createAgent } from 'astreus';
import XPlugin from '@astreus-ai/x-plugin';

// Create and initialize plugin
const xPlugin = new XPlugin();
await xPlugin.init();

// Create agent with the plugin
const agent = await createAgent({
  name: 'Tweet Analyzer',
  description: 'An agent that analyzes tweet engagement',
  plugins: [xPlugin],
  systemPrompt: \`You are an expert in social media analytics.
You help users analyze tweet engagement and provide insights.\`
});

// Use the agent to analyze tweets
const response = await agent.chat(\`
  Analyze the engagement of the last 5 tweets from @OpenAI.
  Compare likes, retweets, and replies.
  What patterns do you see?
\`);

console.log(response);`}
          />
        </motion.div>
      </motion.div>
    </main>
  );
} 