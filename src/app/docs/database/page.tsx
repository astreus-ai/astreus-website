'use client';

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/ui/CodeBlock";
import { motion } from 'framer-motion';

export default function DatabasePage() {
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
          Database
        </motion.h1>
        
        <motion.p 
          className="text-lg mb-8"
          variants={itemVariants}
        >
          The Astreus database system provides a unified interface for data persistence across multiple database backends.
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
          Astreus includes a robust database abstraction layer that supports multiple database backends, including SQLite and PostgreSQL. The database system is used for storing agent memories, conversation history, user data, and other persistent information.
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
            <span><span className="font-medium">Multiple Database Support</span>: Works with SQLite (default) and PostgreSQL</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Automatic Schema Management</span>: Creates and maintains required tables automatically</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Table Operations</span>: Simple insert, find, update, and delete operations</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Connection Management</span>: Handles connections and disconnections automatically</span>
          </motion.li>
        </motion.ul>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Creating a Database
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          You can create a database instance using the <code>createDatabase</code> function:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createDatabase } from '@astreus-ai/astreus';

// Create a database with default settings (SQLite)
const db = await createDatabase();

// Or with explicit configuration for SQLite
const db = await createDatabase({
  type: 'sqlite',
  connection: './my-database.db'
});

// Using PostgreSQL
const db = await createDatabase({
  type: 'postgresql',
  connection: 'postgresql://username:password@localhost:5432/mydatabase'
});`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Database Configuration
        </motion.h2>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          SQLite Configuration
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createDatabase } from '@astreus-ai/astreus';

// Create database with SQLite configuration
const db = await createDatabase({
  type: 'sqlite',
  connection: './data/astreus.db'  // Path to SQLite database file
});`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          PostgreSQL Configuration
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createDatabase } from '@astreus-ai/astreus';

// Create database with PostgreSQL configuration
const db = await createDatabase({
  type: 'postgresql',
  connection: 'postgresql://username:password@localhost:5432/mydatabase'
});

// Or with connection object
const db = await createDatabase({
  type: 'postgresql',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'username',
    password: 'password',
    database: 'mydatabase'
  }
});`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Using Environment Variables
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          You can configure the database using environment variables:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="bash"
            code={`# SQLite Configuration
DATABASE_TYPE=sqlite
DATABASE_PATH=./data/astreus.db

# PostgreSQL Configuration
DATABASE_TYPE=postgresql
DATABASE_URL=postgresql://username:password@localhost:5432/mydatabase`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Basic Database Operations
        </motion.h2>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Getting a Table
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Access a table in the database:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Get a table to work with
const usersTable = db.getTable('users');`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Inserting Data
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Insert a single row
const userId = 'user-123';
await db.getTable('users').insert({
  id: userId,
  username: 'john_doe',
  createdAt: new Date()
});`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Querying Data
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Find rows with a filter
const users = await db.getTable('users').find({
  username: 'john_doe'
});
console.log(\`Found \${users.length} users\`);

// Find a single record
const user = await db.getTable('users').findOne({
  id: userId
});

if (user) {
  console.log(user.username);
}`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Updating Data
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Update records with a filter
const updatedCount = await db.getTable('users').update(
  { id: userId },  // Filter
  { username: 'john_smith' }  // Update
);

console.log(\`Updated \${updatedCount} records\`);`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Deleting Data
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Delete records with a filter
const deletedCount = await db.getTable('users').delete({
  id: userId
});

console.log(\`Deleted \${deletedCount} records\`);`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Raw Queries
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Execute a raw SQL query
const results = await db.executeQuery('SELECT * FROM users WHERE username LIKE ?', ['john%']);
console.log(results);`}
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
          createDatabase(config?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Creates a new database instance.
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`type DatabaseConfig = {
  type: 'sqlite' | 'postgresql';
  connection: string | {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
};`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          db.getTable(tableName)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Gets an interface for operating on a specific table.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          table.insert(data)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Inserts a row into the specified table.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          table.find(filter?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Finds rows in the specified table that match the filter.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          table.findOne(filter)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Finds a single row in the specified table that matches the filter.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          table.update(filter, data)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Updates rows in the specified table that match the filter.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          table.delete(filter)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Deletes rows from the specified table that match the filter.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          db.executeQuery(query, params?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Executes a raw SQL query against the database.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          db.connect()
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Connects to the database.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          db.disconnect()
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Disconnects from the database.
        </motion.p>
      </motion.div>
    </main>
  );
} 