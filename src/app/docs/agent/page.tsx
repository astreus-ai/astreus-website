'use client';

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/ui/CodeBlock";
import { motion } from 'framer-motion';

export default function AgentPage() {
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
          Agent
        </motion.h1>
        
        <motion.p 
          className="text-lg mb-8"
          variants={itemVariants}
        >
          Agents are the core building blocks of the Astreus framework, providing a unified interface for creating and managing AI assistants powered by large language models.
        </motion.p>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Overview
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          An Astreus agent combines a language model provider, memory system, and optional components like tools and plugins to create a cohesive AI assistant. Agents handle conversations, maintain context, and can be customized for specific use cases. The task system allows agents to break down complex requests into manageable tasks.
        </motion.p>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Features
        </motion.h2>
        
        <motion.ul 
          className="space-y-2 mb-8"
          variants={listVariants}
        >
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Conversation Management</span>: Handle multi-turn conversations with context</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Memory Integration</span>: Store and retrieve conversation history</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Tool Usage</span>: Use plugins to extend capabilities</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Structured Response Handling</span>: Process structured tool calls from LLMs</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Task System</span>: Break down complex requests into manageable tasks</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Session Management</span>: Handle multiple user sessions</span>
          </motion.li>
        </motion.ul>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Creating an Agent
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          You can create an agent using the <code>createAgent</code> function:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { 
  createAgent, 
  createProvider, 
  createDatabase, 
  createMemory 
} from '@astreus-ai/astreus';

// Create required dependencies
const db = await createDatabase();
const memory = await createMemory({ database: db });
const provider = createProvider({ 
  type: 'openai', 
  model: 'gpt-4o-mini' 
});

// Create a basic agent
const agent = await createAgent({
  name: 'MyAssistant',  // optional, defaults to "Assistant" if not provided
  provider: provider,   // either provider or model is required
  memory: memory,       // required
  database: db          // optional
});

// Or with more configuration options
const advancedAgent = await createAgent({
  name: 'AdvancedAssistant',
  description: 'An advanced AI assistant with specialized knowledge',
  provider: provider,
  memory: memory,
  database: db,
  systemPrompt: 'You are a helpful AI assistant specialized in technical support for software developers.'
});`}
          />
        </motion.div>
        
        <motion.p 
          className="mt-4 mb-4"
          variants={itemVariants}
        >
          <span className="font-medium">New in v0.1.3:</span> Many parameters are now optional with sensible defaults. You only need to provide a memory instance and either a provider or model.
        </motion.p>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Chatting with an Agent
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Once you have an agent, you can start a conversation:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Simple chat with default session
const response = await agent.chat("Hello, how are you today?");
console.log(response);

// Chat with a specific session ID
const sessionId = "user-123";
const response2 = await agent.chat(
  "What were we talking about earlier?", 
  sessionId
);

// Chat with user ID and options
const response3 = await agent.chat(
  "Can you explain quantum computing?",
  sessionId,
  "user-456",
  {
    metadata: { topic: "quantum-computing" },  // Add metadata to this message
    useTaskSystem: true,                       // Enable task system for complex requests
    temperature: 0.7,                          // Control response randomness (default: 0.7)
    maxTokens: 2048                            // Limit response length (default: 2048)
  }
);`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Agent with RAG
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Integrate RAG (Retrieval-Augmented Generation) with your agent:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { 
  createAgent, 
  createProvider, 
  createDatabase, 
  createMemory,
  createRAG,
  RAGType,
  parsePDF
} from '@astreus-ai/astreus';

// Create dependencies
const db = await createDatabase();
const memory = await createMemory({ database: db });
const provider = createProvider({ 
  type: 'openai', 
  model: 'gpt-4o-mini'
});

// Create a RAG system with documents
const rag = await createRAG({
  type: RAGType.VECTOR,
  database: db,
  documents: ['path/to/document.pdf']
});

// Create an agent with RAG
const ragAgent = await createAgent({
  name: 'KnowledgeAgent',
  provider: provider,
  memory: memory,
  database: db,
  rag: rag,  // Attach the RAG system
  systemPrompt: 'You are a helpful assistant. Use the retrieved context to answer questions accurately.'
});

// The agent will now use RAG to enhance its responses
const response = await ragAgent.chat("What information is in the document?");
console.log(response);`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Agent with Plugins
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Extend your agent's capabilities with plugins:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { 
  createAgent, 
  createProvider, 
  createDatabase, 
  createMemory,
  PluginManager
} from '@astreus-ai/astreus';

// Create dependencies
const db = await createDatabase();
const memory = await createMemory({ database: db });
const provider = createProvider({ type: 'openai', model: 'gpt-4o-mini' });

// Create a simple weather plugin
const weatherPlugin = {
  name: 'get_weather',
  description: 'Get the current weather for a location',
  parameters: {
    location: {
      type: 'string',
      description: 'The city name'
    }
  },
  execute: async ({ location }) => {
    // In a real implementation, call a weather API
    return { temperature: 22, condition: 'sunny', location };
  }
};

// Create an agent with the plugin
const pluginAgent = await createAgent({
  name: 'WeatherAssistant',
  provider: provider,
  memory: memory,
  database: db,
  tools: [weatherPlugin],  // Add tools directly
  systemPrompt: 'You are a helpful assistant that can provide weather information. Use the weather tool when appropriate.'
});

// The agent can now use weather tools
const response = await pluginAgent.chat("What's the weather like in New York today?");
console.log(response);`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Managing Agent History
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Handle conversation history:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Create an agent
const agent = await createAgent({
  name: 'SessionAgent',
  provider: provider,
  memory: memory,
  database: db
});

// Chat with different users using session IDs
const user1Response = await agent.chat(
  "Hi, I'm Alice", 
  "user-alice"
);

const user2Response = await agent.chat(
  "Hello, I'm Bob", 
  "user-bob"
);

// Continue conversations with context
const aliceFollowUp = await agent.chat(
  "What's my name?", 
  "user-alice"
);
console.log(aliceFollowUp);  // The agent remembers Alice

// Get conversation history
const history = await agent.getHistory("user-alice");
console.log(\`\${history.length} messages in Alice's conversation\`);

// Clear history for a session
await agent.clearHistory("user-alice");`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Working with Tasks
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Use the task system with agents:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Create a task
const task = agent.createTask({
  name: 'Analyze Data',
  description: 'Analyze the provided data and extract insights',
  input: {
    data: [1, 2, 3, 4, 5],
    metrics: ['mean', 'median', 'mode']
  }
}, "user-session-123");

// Run the task
const taskResults = await agent.runTasks([task.id]);
const result = taskResults.get(task.id);

if (result?.success) {
  console.log("Task completed successfully!");
  console.log(result.output);
} else {
  console.log("Task failed:", result?.error);
}

// Get all tasks for this agent
const tasks = agent.getTasks();

// Get tasks for a specific session
const sessionTasks = agent.getSessionTasks("user-123");`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Working with Structured Tool Responses
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          <span className="font-medium">New in v0.1.3:</span> Agents can now work with structured tool responses from language models:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createAgent, createProvider, createMemory, PluginManager } from '@astreus-ai/astreus';

// Create a calculator plugin
const calculatorPlugin = {
  name: 'calculator',
  description: 'Perform mathematical calculations',
  parameters: {
    properties: {
      expression: {
        type: 'string',
        description: 'The mathematical expression to evaluate'
      }
    },
    required: ['expression']
  },
  execute: async ({ expression }) => {
    try {
      // Simple eval for demonstration purposes only
      // In production, use a secure math evaluation library
      return { result: eval(expression) };
    } catch (error) {
      return { error: 'Invalid expression' };
    }
  }
};

// Register the plugin
PluginManager.register(calculatorPlugin);

// Create an agent with the plugin
const memory = await createMemory();
const provider = createProvider({ type: 'openai', model: 'gpt-4-turbo' });
const agent = await createAgent({
  name: 'MathBot',
  provider,
  memory,
  systemPrompt: 'You are a helpful math assistant.',
  tools: [calculatorPlugin]  // Attach the tool to the agent
});

// Now when a user asks a math question, the agent can use the calculator tool
const response = await agent.chat("What is 135 * 27.5?");
console.log(response); // The agent will use the calculator tool and respond with the result
`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Agent API Reference
        </motion.h2>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          createAgent(config)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Creates a new agent instance.
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`type AgentConfig = {
  // Required parameters
  name: string;
  memory: MemoryInstance;
  
  // Either model or provider must be specified
  model?: ProviderModel;
  provider?: ProviderInstance;
  
  // Optional parameters
  id?: string;
  description?: string;
  database?: DatabaseInstance;
  systemPrompt?: string;
  tools?: Plugin[];
  plugins?: (Plugin | PluginWithTools)[];
};`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          agent.chat(message, sessionId?, userId?, options?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Sends a message to the agent and returns the response.
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`type ChatOptions = {
  metadata?: Record<string, unknown>;
  embedding?: number[];
  useTaskSystem?: boolean;
};`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          agent.createTask(config, sessionId?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Creates a new task for the agent.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          agent.runTasks(taskIds?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Runs the specified tasks or all pending tasks if no IDs are provided.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          agent.getTasks()
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Gets all tasks for this agent.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          agent.getAgentTasks()
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Gets all tasks associated with this agent across all sessions.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          agent.getSessionTasks(sessionId)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Gets all tasks for a specific session.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          agent.getHistory(sessionId?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Gets conversation history for a specific session or the default session.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          agent.clearHistory(sessionId?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Clears conversation history for a specific session or the default session.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          agent.addTool(tool)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Adds a new tool to the agent.
        </motion.p>
      </motion.div>
    </main>
  );
} 