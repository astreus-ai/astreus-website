'use client';

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/ui/CodeBlock";
import { motion } from 'framer-motion';

export default function InstallationPage() {
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

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
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
          Installation
        </motion.h1>
        
        <motion.p 
          className="text-lg mb-8"
          variants={itemVariants}
        >
          Get started with Astreus by installing the package and setting up your environment.
        </motion.p>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Prerequisites
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Before installing Astreus, make sure you have the following:
        </motion.p>
        
        <motion.ul 
          className="space-y-2 mb-8"
          variants={listVariants}
        >
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><strong>Node.js 16 or higher</strong> - Astreus requires Node.js version 16 or higher. You can download it from <a href="https://nodejs.org/" className="text-blue-600 underline">nodejs.org</a>.</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><strong>Package Manager</strong> - Either npm (comes with Node.js), yarn, or pnpm.</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><strong>OpenAI API key</strong> - If you plan to use OpenAI's models, you'll need an API key. Alternatively, you can use Ollama for local models.</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><strong>TypeScript</strong> - While not strictly required, Astreus is designed to work best with TypeScript.</span>
          </motion.li>
        </motion.ul>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Installation
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          You can install Astreus directly from npm:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code="npm install @astreus-ai/astreus"
          />
        </motion.div>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Using yarn:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code="yarn add @astreus-ai/astreus"
          />
        </motion.div>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Or using pnpm:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code="pnpm add @astreus-ai/astreus"
          />
        </motion.div>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          If you're using TypeScript (recommended), you may want to install the types:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code="npm install typescript @types/node --save-dev"
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Environment Setup
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Astreus requires certain environment variables to be set for proper operation.
          Create a <code>.env</code> file in your project root with the following variables:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code={`# OpenAI API configuration
OPENAI_API_KEY=your_openai_api_key
OPENAI_BASE_URL=https://api.openai.com/v1  # Optional, for custom endpoints

# Embedding model (if different from your main provider's embedding model)
OPENAI_EMBEDDING_API_KEY=your_embedding_api_key  # Optional, defaults to OPENAI_API_KEY

# Database configuration (choose one)
DATABASE_TYPE=sqlite  # or postgresql
DATABASE_PATH=./data/astreus.db  # for SQLite
# DATABASE_URL=postgresql://user:password@localhost:5432/astreus  # for PostgreSQL

# Ollama configuration (if using local models)
# OLLAMA_BASE_URL=http://localhost:11434

# Logging
LOG_LEVEL=info  # Options: error, warn, info, debug`}
          />
        </motion.div>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          For TypeScript projects, you might want to load these environment variables using 
          a package like <code>dotenv</code>:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code="npm install dotenv --save"
          />
        </motion.div>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Then at the top of your main file:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import * as dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          OpenAI API Key
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          If you're using OpenAI models, you'll need an API key. Here's how to get one:
        </motion.p>
        
        <motion.ol 
          className="list-decimal pl-6 mb-8 space-y-2"
          variants={listVariants}
        >
          <motion.li variants={itemVariants}>
            Go to <a href="https://platform.openai.com/account/api-keys" className="text-blue-600 underline">OpenAI's API key page</a>
          </motion.li>
          <motion.li variants={itemVariants}>
            Create an account or log in to your existing account
          </motion.li>
          <motion.li variants={itemVariants}>
            Click on "Create new secret key"
          </motion.li>
          <motion.li variants={itemVariants}>
            Copy the key (it will only be shown once) and add it to your <code>.env</code> file as <code>OPENAI_API_KEY</code>
          </motion.li>
          <motion.li variants={itemVariants}>
            Optional: Set up billing for higher rate limits, especially if you plan to use in production
          </motion.li>
        </motion.ol>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Ollama Setup (Optional)
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          If you want to use local models with Ollama instead of or alongside OpenAI:
        </motion.p>
        
        <motion.ol 
          className="list-decimal pl-6 mb-8 space-y-2"
          variants={listVariants}
        >
          <motion.li variants={itemVariants}>
            <a href="https://ollama.ai/download" className="text-blue-600 underline">Download and install Ollama</a> for your operating system
          </motion.li>
          <motion.li variants={itemVariants}>
            Open a terminal and pull a model (e.g., <code>ollama pull llama3</code> or <code>ollama pull mistral</code>)
          </motion.li>
          <motion.li variants={itemVariants}>
            Start the Ollama server by simply running <code>ollama serve</code> in your terminal
          </motion.li>
          <motion.li variants={itemVariants}>
            Set the <code>OLLAMA_BASE_URL</code> in your <code>.env</code> file to <code>http://localhost:11434</code>
          </motion.li>
          <motion.li variants={itemVariants}>
            In your code, specify <code>ollama</code> as the provider type and the model name you pulled
          </motion.li>
        </motion.ol>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`const ollamaProvider = createProvider({
  type: 'ollama',
  baseUrl: "http://localhost:11434", // Default Ollama server URL
  model: "llama3"                    // The model you pulled with Ollama
});`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Database Setup
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Astreus supports two database types:
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          SQLite (Default)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          SQLite is the simplest option and requires no additional setup. It's great for development and small applications. Just set:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code={`DATABASE_TYPE=sqlite
DATABASE_PATH=./data/astreus.db  # Path where the SQLite file will be created`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          PostgreSQL
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          For production use or larger applications, PostgreSQL is recommended:
        </motion.p>
        
        <motion.ol 
          className="list-decimal pl-6 mb-4 space-y-2"
          variants={listVariants}
        >
          <motion.li variants={itemVariants}>Install PostgreSQL on your server or use a cloud provider like AWS RDS, Google Cloud SQL, or Digital Ocean Managed Database</motion.li>
          <motion.li variants={itemVariants}>Create a database for Astreus</motion.li>
          <motion.li variants={itemVariants}>The pg package is already included with Astreus</motion.li>
          <motion.li variants={itemVariants}>Set the following environment variables:</motion.li>
        </motion.ol>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code={`DATABASE_TYPE=postgresql
DATABASE_URL=postgresql://username:password@hostname:5432/database_name`}
          />
        </motion.div>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          The database will be automatically initialized on first use, with all required tables created for you.
        </motion.p>
      </motion.div>
    </main>
  );
} 