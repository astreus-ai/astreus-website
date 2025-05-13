'use client';

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import BigButton from "@/components/ui/BigButton";
import CodeBlock from "@/components/ui/CodeBlock";
import { motion } from 'framer-motion';
import { 
  RiInstallLine, 
  RiRocketLine, 
  RiPuzzleLine, 
  RiGithubLine,
  RiServerLine,
  RiDatabase2Line,
  RiRobot2Line,
  RiMentalHealthLine,
  RiSearchLine,
  RiTaskLine
} from 'react-icons/ri';

export default function DocsPage() {
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

  const buttonGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
        delay: 0.5
      }
    }
  };

  return (
    <main className="max-w-4xl mx-auto">
      <motion.div 
        className="bg-white p-8 border-2 border-[#1e1e1e] shadow-md overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p 
          className="text-lg mb-8 break-words"
          variants={itemVariants}
        >
          An AI Agent Framework designed to help you easily build, deploy, and manage intelligent 
          conversational agents powered by large language models (LLMs).
        </motion.p>
        
        {/* Large navigation buttons */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12"
          variants={buttonGridVariants}
        >
          <motion.div variants={itemVariants}>
            <BigButton 
              href="/docs/installation"
              title="Installation"
              description="Set up Astreus in your project"
              icon={<RiInstallLine size={24} />}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <BigButton 
              href="/docs/quickstart"
              title="Quick Start"
              description="Learn the basics and build your first agent"
              icon={<RiRocketLine size={24} />}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <BigButton 
              href="/docs/plugins"
              title="Plugins"
              description="Extend your agents with powerful tools"
              icon={<RiPuzzleLine size={24} />}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <BigButton 
              href="https://github.com/astreus-ai/astreus" 
              external
              title="GitHub"
              description="View source code and contribute"
              icon={<RiGithubLine size={24} />}
            />
          </motion.div>
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Core Components
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8"
          variants={buttonGridVariants}
        >
          <motion.div variants={itemVariants}>
            <BigButton 
              href="/docs/provider"
              title="Provider"
              description="Connect to language model services"
              icon={<RiServerLine size={24} />}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <BigButton 
              href="/docs/database"
              title="Database"
              description="Persist data across multiple backends"
              icon={<RiDatabase2Line size={24} />}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <BigButton 
              href="/docs/agent"
              title="Agent"
              description="Create and manage AI assistants"
              icon={<RiRobot2Line size={24} />}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <BigButton 
              href="/docs/memory"
              title="Memory"
              description="Store and retrieve conversation history"
              icon={<RiMentalHealthLine size={24} />}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <BigButton 
              href="/docs/rag"
              title="RAG"
              description="Enhance responses with your data"
              icon={<RiSearchLine size={24} />}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <BigButton 
              href="/docs/tasks"
              title="Tasks"
              description="Orchestrate complex AI workflows"
              icon={<RiTaskLine size={24} />}
            />
          </motion.div>
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Features
        </motion.h2>
        
        <motion.ul 
          className="space-y-2 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li className="flex items-start break-words" variants={itemVariants}>
            <span className="font-bold mr-2 flex-shrink-0">•</span>
            <span><span className="font-medium">Unified Agent API</span>: Create and manage AI agents with a consistent interface</span>
          </motion.li>
          <motion.li className="flex items-start break-words" variants={itemVariants}>
            <span className="font-bold mr-2 flex-shrink-0">•</span>
            <span><span className="font-medium">Multi-Provider Support</span>: Works with OpenAI and Ollama models out of the box</span>
          </motion.li>
          <motion.li className="flex items-start break-words" variants={itemVariants}>
            <span className="font-bold mr-2 flex-shrink-0">•</span>
            <span><span className="font-medium">Memory Management</span>: Built-in conversation history with vector search capabilities</span>
          </motion.li>
          <motion.li className="flex items-start break-words" variants={itemVariants}>
            <span className="font-bold mr-2 flex-shrink-0">•</span>
            <span><span className="font-medium">Task Orchestration</span>: Break complex requests into manageable sub-tasks</span>
          </motion.li>
          <motion.li className="flex items-start break-words" variants={itemVariants}>
            <span className="font-bold mr-2 flex-shrink-0">•</span>
            <span><span className="font-medium">Plugin System</span>: Extend agent capabilities with custom tools</span>
          </motion.li>
          <motion.li className="flex items-start break-words" variants={itemVariants}>
            <span className="font-bold mr-2 flex-shrink-0">•</span>
            <span><span className="font-medium">Persistence Layer</span>: Automatic storage using SQLite or PostgreSQL</span>
          </motion.li>
          <motion.li className="flex items-start break-words" variants={itemVariants}>
            <span className="font-bold mr-2 flex-shrink-0">•</span>
            <span><span className="font-medium">RAG Support</span>: Built-in Retrieval Augmented Generation with PDF parsing</span>
          </motion.li>
          <motion.li className="flex items-start break-words" variants={itemVariants}>
            <span className="font-bold mr-2 flex-shrink-0">•</span>
            <span><span className="font-medium">Embeddings Support</span>: Semantic search across conversations and documents</span>
          </motion.li>
          <motion.li className="flex items-start break-words" variants={itemVariants}>
            <span className="font-bold mr-2 flex-shrink-0">•</span>
            <span><span className="font-medium">Type Safety</span>: Fully typed with TypeScript</span>
          </motion.li>
          <motion.li className="flex items-start break-words" variants={itemVariants}>
            <span className="font-bold mr-2 flex-shrink-0">•</span>
            <span><span className="font-medium">Advanced Logging</span>: Structured logging system for improved debugging and monitoring</span>
          </motion.li>
          <motion.li className="flex items-start break-words" variants={itemVariants}>
            <span className="font-bold mr-2 flex-shrink-0">•</span>
            <span><span className="font-medium">Flexible Configuration</span>: Enhanced parameter validation and smart defaults</span>
          </motion.li>
        </motion.ul>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Basic Example
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Here's a simple example to get started with Astreus:
        </motion.p>
        
        <motion.div
          variants={codeVariants}
        >
          <CodeBlock 
            language="typescript" 
            code={`import { 
  createAgent, 
  createProvider,
  createMemory,
  createDatabase,
  logger
} from '@astreus-ai/astreus';

(async () => {
  // Initialize the database
  const db = await createDatabase();
  
  // Create memory instance
  const memory = await createMemory({
    database: db,
    tableName: "memories",
    maxEntries: 100,
    enableEmbeddings: true
  });

  // Configure your provider
  const provider = createProvider({
    type: 'openai',
    model: 'gpt-4o-mini'  // Simply specify a single model name
  });

  // Create an agent instance
  const agent = await createAgent({
    name: 'MyAssistant',
    description: 'A helpful AI assistant',
    provider: provider,
    memory: memory,
    database: db,
    systemPrompt: "You are a helpful AI assistant."
  });

  // Chat with your agent
  const response = await agent.chat("Tell me about TypeScript");
  logger.info('Agent response:', response);
})();`}
          />
        </motion.div>
      </motion.div>
    </main>
  );
} 