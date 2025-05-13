'use client';

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/ui/CodeBlock";
import { motion } from 'framer-motion';

export default function MemoryPage() {
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
          Memory
        </motion.h1>
        
        <motion.p 
          className="text-lg mb-8"
          variants={itemVariants}
        >
          Astreus provides a powerful memory system that enables agents to store, retrieve, and utilize conversation history and contextual information.
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
          The memory system in Astreus allows agents to maintain context across conversations, store important information, and retrieve relevant past interactions. It supports both simple key-value storage and advanced vector-based semantic search capabilities.
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
            <span><span className="font-medium">Conversation History</span>: Store and retrieve past messages and interactions</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Vector Embeddings</span>: Support for semantic search using vector embeddings</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Session Management</span>: Organize memories by session for multi-user applications</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Database Storage</span>: Persistent storage using SQLite or PostgreSQL</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Metadata Support</span>: Add and query custom metadata with memories</span>
          </motion.li>
        </motion.ul>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Creating a Memory System
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          You can create a memory system using the <code>createMemory</code> function:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createMemory, createDatabase } from '@astreus-ai/astreus';

// Create a database first
const db = await createDatabase();

// Create a basic memory system
const memory = await createMemory({
  database: db
});

// Or with more configuration options
const advancedMemory = await createMemory({
  database: db,
  tableName: 'my_memories',
  maxEntries: 200,
  enableEmbeddings: true
});`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Using Memory
        </motion.h2>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Adding Memories
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Store information in the memory system:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Add a memory entry
const memoryId = await memory.add({
  agentId: 'agent-123',
  sessionId: 'user-456',
  role: 'user',
  content: 'Hello, my name is Alice.',
  metadata: {
    topic: 'introduction',
    sentiment: 'positive'
  }
});

// Add a memory with embedding for semantic search
const embeddingArray = [0.1, 0.2, 0.3, /* ... more values ... */];
const memoryWithEmbedding = await memory.add({
  agentId: 'agent-123',
  sessionId: 'user-456',
  role: 'assistant',
  content: 'Nice to meet you, Alice!',
  embedding: embeddingArray
});

// Alternative method to add with embedding
const memoryId2 = await memory.addWithEmbedding(
  {
    agentId: 'agent-123',
    sessionId: 'user-456',
    role: 'user',
    content: 'What can you help me with?'
  },
  embeddingArray
);`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Retrieving Memories
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Fetch memories from the system:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Get memories by session ID
const sessionMemories = await memory.getBySession('user-456');
console.log(\`Found \${sessionMemories.length} memories in this session\`);

// Get memories by agent ID
const agentMemories = await memory.getByAgent('agent-123');

// Get memories by user ID (if implemented)
const userMemories = await memory.getByUser('user-789');

// Get a specific memory by ID
const specificMemory = await memory.getById('memory-123');`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Semantic Search
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Search memories by semantic meaning (if enabled with <code>enableEmbeddings: true</code>):
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Text-based search
const textResults = await memory.searchByText('What is your favorite color?');

// Embedding-based search (requires embeddings to be enabled)
import { Embedding } from '@astreus-ai/astreus';
const embedding = await Embedding.generateEmbedding('What is your favorite color?');
const embeddingResults = await memory.searchByEmbedding(embedding);

// Access search results
for (const result of embeddingResults) {
  console.log(\`Memory: \${result.content}\`);
  console.log(\`Similarity score: \${result.similarity}\`);
}`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Managing Memory
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Delete a specific memory
await memory.delete('memory-123');

// Clear all memories for a session
await memory.clear('user-456');

// Get a simple summary of the conversation
const summary = await memory.summarize('user-456');
console.log(summary);`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Memory with Agents
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Memory is automatically integrated with agents:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createAgent, createMemory, createDatabase } from '@astreus-ai/astreus';

// Create dependencies
const db = await createDatabase();
const memory = await createMemory({ database: db });

// Create an agent with memory
const agent = await createAgent({
  name: 'MemoryAgent',
  provider: provider,
  memory: memory,
  database: db
});

// The agent automatically uses memory when chatting
const response1 = await agent.chat("Hi, my name is Bob", "session-1");
console.log(response1);  // "Hello Bob, nice to meet you!"

const response2 = await agent.chat("What's my name?", "session-1");
console.log(response2);  // "Your name is Bob."

// Access the agent's conversation history
const history = await agent.getHistory("session-1");
console.log(\`This conversation has \${history.length} messages\`);`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          API Reference
        </motion.h2>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          createMemory(config)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Creates a new memory instance.
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`type MemoryConfig = {
  database: DatabaseInstance;
  tableName?: string;
  maxEntries?: number;
  enableEmbeddings?: boolean;
};`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          memory.add(entry)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Adds a memory entry to the system.
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`type MemoryEntry = {
  id: string;
  agentId: string;
  sessionId: string;
  userId?: string;
  role: 'user' | 'assistant' | 'system' | 'task_context';
  content: string;
  timestamp: Date;
  metadata?: Record<string, unknown>;
  embedding?: number[];
};`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          memory.getBySession(sessionId, limit?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Gets memory entries for a specific session.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          memory.getByAgent(agentId, limit?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Gets memory entries for a specific agent.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          memory.getById(id)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Gets a specific memory entry by ID.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          memory.delete(id)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Deletes a specific memory entry.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          memory.clear(sessionId)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Clears all memory entries for a specific session.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          memory.summarize(sessionId)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Generates a simple summary of the conversation in a session.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          memory.searchByText(query, limit?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Searches for memories using text matching.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          memory.searchByEmbedding(embedding, limit?, threshold?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Searches for memories using vector similarity.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          memory.addWithEmbedding(entry, embedding)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Adds a memory entry with an embedding in one step.
        </motion.p>
      </motion.div>
    </main>
  );
} 