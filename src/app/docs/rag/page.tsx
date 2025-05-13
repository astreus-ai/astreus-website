'use client';

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/ui/CodeBlock";
import { motion } from 'framer-motion';

export default function RAGPage() {
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
          RAG (Retrieval-Augmented Generation)
        </motion.h1>
        
        <motion.p 
          className="text-lg mb-8"
          variants={itemVariants}
        >
          Astreus provides a powerful RAG (Retrieval-Augmented Generation) system that enhances AI responses with relevant information retrieved from your data.
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
          RAG combines the power of retrieval systems with generative AI to produce more accurate, relevant, and contextual responses. Astreus offers two main RAG implementations: Document-based RAG and Vector-based RAG, each optimized for different use cases.
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
            <span><span className="font-medium">Document Processing</span>: Support for PDF documents with automatic text extraction</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Text Chunking</span>: Automatically divide documents into manageable chunks</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Vector Embeddings</span>: Generate embeddings for semantic search</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Similarity Search</span>: Find the most relevant document chunks for a query</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Database Integration</span>: Store and retrieve documents and embeddings</span>
          </motion.li>
        </motion.ul>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Getting Started with RAG
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          To use RAG in your Astreus application, you'll need to create a RAG instance:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createRAG, RAGType, createDatabase, createProvider } from '@astreus-ai/astreus';

// Create a database for storing documents and embeddings
const db = await createDatabase();

// Create a provider for generating embeddings
const provider = createProvider({
  type: 'openai',
  model: 'gpt-4o-mini',
  embeddingModel: 'text-embedding-3-small'
});

// Create a vector-based RAG system
const vectorRAG = await createRAG({
  type: RAGType.VECTOR,
  database: db,
  provider: provider,
  chunkSize: 1000,    // Size of each text chunk
  chunkOverlap: 200   // Overlap between chunks to maintain context
});

// Or create a document-based RAG system
const documentRAG = await createRAG({
  type: RAGType.DOCUMENT,
  database: db,
  provider: provider,
  storeEmbeddings: true  // Store embeddings in the database
});`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Processing Documents
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          You can add documents to your RAG system:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Add a text document
await vectorRAG.addDocument({
  content: "This is a sample document about artificial intelligence...",
  metadata: {
    title: "Introduction to AI",
    author: "John Doe",
    date: "2023-05-15"
  }
});

// Process a PDF file
import { parsePDF } from '@astreus-ai/astreus';

const pdfPath = './documents/research-paper.pdf';
const pdfContent = await parsePDF(pdfPath);

await documentRAG.addDocument({
  content: pdfContent,
  metadata: {
    title: "Research Paper",
    source: pdfPath,
    type: "pdf"
  }
});

// Process multiple PDF files in a directory
import { parseDirectoryOfPDFs } from '@astreus-ai/astreus';

const pdfDirectory = './documents/';
const pdfDocuments = await parseDirectoryOfPDFs(pdfDirectory);

for (const doc of pdfDocuments) {
  await documentRAG.addDocument({
    content: doc.content,
    metadata: {
      title: doc.filename,
      path: doc.path,
      pages: doc.pages
    }
  });
}`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Searching Documents
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Once you've added documents, you can search for relevant information:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Search for relevant documents
const searchResults = await vectorRAG.search("What is artificial intelligence?", {
  limit: 5,  // Return top 5 most relevant chunks
  threshold: 0.7  // Minimum similarity score (0-1)
});

// Process the results
for (const result of searchResults) {
  console.log(\`Relevance: \${result.score}\`);
  console.log(\`Content: \${result.content}\`);
  console.log(\`Metadata: \${JSON.stringify(result.metadata)}\`);
  console.log('---');
}`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Using RAG with Agents
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Integrate RAG with your Astreus agents to enhance their knowledge:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createAgent, createRAG, RAGType, createDatabase, createProvider, createMemory } from '@astreus-ai/astreus';

// Create dependencies
const db = await createDatabase();
const memory = await createMemory({ database: db });
const provider = createProvider({ 
  type: 'openai', 
  model: 'gpt-4o',
  embeddingModel: 'text-embedding-3-small'
});

// Create a RAG system
const rag = await createRAG({
  type: RAGType.VECTOR,
  database: db,
  provider: provider,
  chunkSize: 1000,
  chunkOverlap: 200
});

// Add documents to the RAG system
await rag.addDocument({
  content: "Astreus is an AI agent framework...",
  metadata: { title: "Astreus Documentation" }
});

// Create an agent that uses RAG
const agent = await createAgent({
  name: 'DocumentAgent',
  provider: provider,
  memory: memory,
  database: db,
  systemPrompt: 'You are a helpful assistant that answers questions based on the provided context.'
});

// Function to query the agent with RAG context
async function queryWithRAG(question) {
  // Search for relevant documents
  const searchResults = await rag.search(question, { limit: 3 });
  
  // Extract content from search results
  const context = searchResults.map(result => result.content).join('\\n\\n');
  
  // Prepare a prompt with the context
  const prompt = \`
Based on the following information, please answer the question.

Context:
\${context}

Question: \${question}
\`;

  // Get a response from the agent
  const response = await agent.chat(prompt);
  return response;
}

// Example usage
const answer = await queryWithRAG("What is Astreus?");
console.log(answer);`}
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
          createRAG(config)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Creates a new RAG instance.
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`type RAGFactoryConfig = {
  type: RAGType;
  database: DatabaseInstance;
  provider: ProviderInstance;
  
  // For VECTOR type
  chunkSize?: number;
  chunkOverlap?: number;
  
  // For DOCUMENT type
  storeEmbeddings?: boolean;
};

enum RAGType {
  VECTOR = 'vector',
  DOCUMENT = 'document'
}`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          rag.addDocument(document)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Adds a document to the RAG system.
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`type Document = {
  content: string;
  metadata?: Record<string, any>;
  id?: string;  // Optional, will be generated if not provided
};`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          rag.search(query, options)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Searches for relevant documents.
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`type SearchOptions = {
  limit?: number;  // Maximum number of results to return
  threshold?: number;  // Minimum similarity score (0-1)
};

type SearchResult = {
  id: string;
  content: string;
  metadata: Record<string, any>;
  score: number;  // Similarity score (0-1)
};`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          parsePDF(filePath)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Extracts text from a PDF file.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          parseDirectoryOfPDFs(directoryPath)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Extracts text from all PDF files in a directory.
        </motion.p>
      </motion.div>
    </main>
  );
} 