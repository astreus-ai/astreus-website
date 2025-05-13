'use client';

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/ui/CodeBlock";
import { motion } from 'framer-motion';

export default function QuickStartPage() {
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
        staggerChildren: 0.1,
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
          Quick Start
        </motion.h1>
        
        <motion.p 
          className="text-lg mb-8"
          variants={itemVariants}
        >
          Get up and running with Astreus in minutes by following this quick start guide.
        </motion.p>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Creating Your First Agent
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Let's create a simple agent that can answer questions. First, create a new file called <code>agent.ts</code> (or <code>agent.js</code> if you're not using TypeScript) with the following code:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { 
  createAgent, 
  createProvider,
  createMemory,
  createDatabase,
  logger
} from '@astreus-ai/astreus';

async function main() {
  // Initialize the database (SQLite by default)
  const db = await createDatabase();
  
  // Create memory instance for conversation history
  const memory = await createMemory({
    database: db,
    tableName: "memories"
  });

  // Configure your provider (OpenAI in this example)
  const provider = createProvider({
    type: 'openai',
    model: 'gpt-4o-mini'  // You can use other models like 'gpt-4o' or 'gpt-3.5-turbo'
  });

  // Create an agent instance
  const agent = await createAgent({
    name: 'MyAssistant',
    description: 'A helpful AI assistant',
    provider: provider,
    memory: memory,
    database: db,
    systemPrompt: "You are a helpful AI assistant that provides accurate and concise information."
  });

  // Chat with your agent
  const response = await agent.chat("Tell me about TypeScript");
  logger.info('Agent response:', response);
  
  // You can continue the conversation - the agent will remember context
  const followUp = await agent.chat("What are some advantages compared to JavaScript?");
  logger.info('Agent response:', followUp);
}

main().catch(error => {
  logger.error('Error:', error);
});`}
          />
        </motion.div>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Run the file with:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code="npx tsx agent.ts"
          />
        </motion.div>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Or if you're using JavaScript:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code="node agent.js"
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Using Different Providers
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Astreus supports multiple LLM providers. Here's how to use different ones:
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          OpenAI
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`const openaiProvider = createProvider({
  type: 'openai',
  model: 'gpt-4o-mini',  // Or 'gpt-4o', 'gpt-3.5-turbo', etc.
  apiKey: process.env.OPENAI_API_KEY, // Optional, defaults to OPENAI_API_KEY env var
  baseUrl: 'https://api.openai.com/v1' // Optional custom endpoint
});`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Ollama (Local Models)
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`const ollamaProvider = createProvider({
  type: 'ollama',
  model: "llama3",  // Or any other model you've pulled with Ollama
  baseUrl: "http://localhost:11434"
});`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Creating a Conversational Web Interface
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Let's create a simple Express server with a chat endpoint:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import express from 'express';
import { 
  createAgent, 
  createProvider, 
  createMemory, 
  createDatabase 
} from '@astreus-ai/astreus';

const app = express();
app.use(express.json());

// Initialize agent (outside request handler for persistence)
let agent;

async function initAgent() {
  const db = await createDatabase();
  const memory = await createMemory({ database: db });
  const provider = createProvider({ type: 'openai', model: 'gpt-4o-mini' });
  
  agent = await createAgent({
    name: 'WebAssistant',
    provider: provider,
    memory: memory,
    database: db,
    systemPrompt: "You are a helpful AI assistant responding to web requests."
  });
  
  return agent;
}

// Initialize agent on startup
initAgent().catch(console.error);

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    // Ensure agent is initialized
    if (!agent) {
      await initAgent();
    }
    
    // Get response from agent
    const response = await agent.chat(message);
    
    res.json({ response });
  } catch (error) {
    console.error('Error handling chat request:', error);
    res.status(500).json({ error: 'Failed to process your request' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Adding Tools to Your Agent
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          You can enhance your agent with custom tools:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createAgent, createProvider, createMemory, createDatabase } from '@astreus-ai/astreus';

// Create a simple calculator tool
const calculatorTool = {
  name: 'calculate',
  description: 'Perform a mathematical calculation',
  parameters: [
    {
      name: 'expression',
      type: 'string',
      description: 'The mathematical expression to evaluate',
      required: true
    }
  ],
  execute: async ({ expression }) => {
    try {
      // WARNING: In a real application, you would need to sanitize the input
      // to prevent code injection. This is just a simple example.
      const result = eval(expression);
      return { result };
    } catch (error) {
      return { error: 'Invalid expression' };
    }
  }
};

// Create an agent with the tool
const agent = await createAgent({
  name: 'CalculatorAssistant',
  provider: provider,
  memory: memory,
  database: db,
  tools: [calculatorTool],
  systemPrompt: 'You are a helpful assistant that can perform calculations. Use the calculate tool when appropriate.'
});

// The agent can now use the calculator tool
const response = await agent.chat("What is 42 * 17?");
console.log(response);`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Next Steps
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Now that you've created your first agent, you can explore more advanced features:
        </motion.p>
        
        <motion.ul 
          className="space-y-2 mb-8"
          variants={listVariants}
        >
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><Link href="/docs/agent" className="text-blue-600 underline">Agent Configuration</Link>: Customize your agent's behavior</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><Link href="/docs/memory" className="text-blue-600 underline">Memory Systems</Link>: Store and retrieve conversation history</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><Link href="/docs/plugins" className="text-blue-600 underline">Plugins</Link>: Extend your agent with additional capabilities</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><Link href="/docs/rag" className="text-blue-600 underline">RAG</Link>: Add knowledge retrieval to your agent</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><Link href="/docs/tasks" className="text-blue-600 underline">Task System</Link>: Create complex workflows</span>
          </motion.li>
        </motion.ul>
      </motion.div>
    </main>
  );
} 