'use client';

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/ui/CodeBlock";
import { motion } from 'framer-motion';

export default function ProviderPage() {
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
          Provider
        </motion.h1>
        
        <motion.p 
          className="text-lg mb-8"
          variants={itemVariants}
        >
          The Astreus Provider system offers a unified interface to interact with various language model providers, enabling seamless integration with different AI models.
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
          Providers in Astreus are responsible for communicating with language model services such as OpenAI and Ollama. They handle the complexities of API calls, token management, and model-specific configurations, offering a consistent interface for your agents to use different AI models.
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
            <span><span className="font-medium">Multi-Provider Support</span>: Works with OpenAI and Ollama out of the box</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Model Management</span>: Configure and use multiple models within a single provider</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Embedding Support</span>: Generate and manage vector embeddings for semantic search</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Smart Defaults</span>: Sensible default configurations for popular models</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Environment Variable Integration</span>: Easily configure via environment variables</span>
          </motion.li>
        </motion.ul>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Creating a Provider
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          You can create a provider using the <code>createProvider</code> function:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createProvider } from '@astreus-ai/astreus';

// Create a provider with OpenAI
const openaiProvider = createProvider({
  type: 'openai',
  model: 'gpt-4o-mini'  // Specify a single model
});

// Or with multiple models
const multiModelProvider = createProvider({
  type: 'openai',
  models: ['gpt-4o', 'gpt-3.5-turbo']  // Specify multiple models
});

// Create a provider with Ollama (local models)
const ollamaProvider = createProvider({
  type: 'ollama',
  model: 'llama3',  // Specify a single model
  baseUrl: 'http://localhost:11434'  // Optional, defaults to this value
});`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Using Models
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Once you have a provider, you can use its models:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Get a specific model from the provider
const model = provider.getModel('gpt-4o');

// Use the model to generate completions
const messages = [
  { role: 'system', content: 'You are a helpful assistant.' },
  { role: 'user', content: 'Tell me about TypeScript.' }
];

const response = await model.complete(messages);
console.log(response);

// List available models
const availableModels = provider.listModels();
console.log('Available models:', availableModels);

// Get the default model
const defaultModelName = provider.getDefaultModel();
if (defaultModelName) {
  const defaultModel = provider.getModel(defaultModelName);
  console.log(\`Using default model: \${defaultModelName}\`);
}`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Advanced Configuration
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          You can provide detailed configuration for each model:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Advanced OpenAI configuration
const advancedOpenAI = createProvider({
  type: 'openai',
  models: [
    {
      name: 'gpt-4o',
      temperature: 0.7,
      maxTokens: 4096,
      apiKey: process.env.OPENAI_API_KEY,
      baseUrl: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1'
    },
    {
      name: 'gpt-3.5-turbo',
      temperature: 0.5,
      maxTokens: 2048
    }
  ],
  defaultModel: 'gpt-4o',
  embeddingModel: 'text-embedding-3-small'  // For vector embeddings
});

// Advanced Ollama configuration
const advancedOllama = createProvider({
  type: 'ollama',
  models: [
    {
      name: 'llama3',
      temperature: 0.8,
      maxTokens: 4096,
      baseUrl: 'http://localhost:11434'
    },
    {
      name: 'mistral',
      temperature: 0.7,
      maxTokens: 2048
    }
  ],
  defaultModel: 'llama3'
});`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Generating Embeddings
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Providers can also generate embeddings for text:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Generate embeddings using the provider's embedding model
const embedding = await provider.generateEmbedding('This is a text to embed');

// Check if embedding was successful
if (embedding) {
  console.log(\`Generated embedding with \${embedding.length} dimensions\`);
} else {
  console.error('Failed to generate embedding');
}

// Test if the embedding model is working
const isEmbeddingWorking = await provider.testEmbeddingModel();
console.log(\`Embedding model is working: \${isEmbeddingWorking}\`);`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Environment Variables
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Providers can use environment variables for configuration:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code={`# OpenAI configuration
OPENAI_API_KEY=your_api_key_here
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_EMBEDDING_MODEL=text-embedding-3-small

# Ollama configuration
OLLAMA_BASE_URL=http://localhost:11434`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Provider API Reference
        </motion.h2>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          createProvider(config)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Creates a new provider instance.
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`type ProviderConfig = {
  type: 'openai' | 'ollama';
  
  // Either model or models must be specified
  model?: string;
  models?: (string | ProviderModelConfig)[];
  
  // Optional parameters
  defaultModel?: string;
  embeddingModel?: string;
};

type OpenAIModelConfig = {
  name: string;
  temperature?: number;
  maxTokens?: number;
  apiKey?: string;
  baseUrl?: string;
};

type OllamaModelConfig = {
  name: string;
  temperature?: number;
  maxTokens?: number;
  baseUrl?: string;
};`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          provider.getModel(name)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Gets a specific model by name.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          provider.listModels()
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Lists all available models.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          provider.getDefaultModel()
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Gets the default model name.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          provider.generateEmbedding(text)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Generates an embedding vector for the given text.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          provider.testEmbeddingModel(name?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Tests if the embedding model is working.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          model.complete(messages)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Generates a completion for the given messages.
        </motion.p>
      </motion.div>
    </main>
  );
} 