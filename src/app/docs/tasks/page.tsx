'use client';

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/ui/CodeBlock";
import { motion } from 'framer-motion';

export default function TasksPage() {
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
          Tasks
        </motion.h1>
        
        <motion.p 
          className="text-lg mb-8"
          variants={itemVariants}
        >
          Astreus provides a powerful task management system that enables agents to execute complex workflows and automate multi-step processes.
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
          The task system in Astreus allows you to define, manage, and execute discrete units of work. Tasks can be chained together with dependencies, run in parallel, and integrated with agents to create sophisticated AI-powered workflows.
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
            <span><span className="font-medium">Task Management</span>: Create, track, and execute tasks</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Task Dependencies</span>: Define dependencies between tasks</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Persistence</span>: Save and restore tasks from the database</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Cancellation</span>: Cancel tasks at any point</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="font-bold mr-2">•</span>
            <span><span className="font-medium">Parallel Execution</span>: Run multiple tasks concurrently</span>
          </motion.li>
        </motion.ul>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Creating a Task Manager
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          You can create a task manager using the <code>createTaskManager</code> function:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createTaskManager, createDatabase, createMemory } from '@astreus-ai/astreus';

// Create required dependencies
const db = await createDatabase();
const memory = await createMemory({ database: db });

// Create a basic task manager
const taskManager = createTaskManager({
  database: db,
  memory: memory
});

// Or with more configuration options
const advancedTaskManager = createTaskManager({
  database: db,
  memory: memory,
  agentId: 'agent-123',
  sessionId: 'session-456'
});`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Creating Tasks
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          You can create tasks using the <code>createTask</code> function:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createTask, createMemory, createDatabase } from '@astreus-ai/astreus';

// Create dependencies
const db = await createDatabase();
const memory = await createMemory({ database: db });

// Create a simple task
const task = await createTask({
  name: 'Process Data',
  description: 'Process the user-provided data file',
  input: {
    filePath: '/path/to/data.csv',
    options: {
      skipHeader: true,
      delimiter: ','
    }
  },
  execute: async (input, context) => {
    // Task implementation
    console.log('Processing file:', input.filePath);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      processedRows: 100,
      message: 'Data processed successfully'
    };
  }
}, memory);

// Execute the task
const result = await task.execute();
console.log('Task result:', result);`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Task Manager
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          For managing multiple tasks, use the <code>TaskManager</code>:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createTaskManager, createTask, createMemory, createDatabase } from '@astreus-ai/astreus';

// Create dependencies
const db = await createDatabase();
const memory = await createMemory({ database: db });

// Create a task manager
const taskManager = createTaskManager({
  concurrency: 3,  // Run up to 3 tasks in parallel
  memory: memory,
  database: db
});

// Create tasks
const task1 = await createTask({
  name: 'Fetch Data',
  description: 'Fetch data from API',
  execute: async () => {
    console.log('Fetching data...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: [1, 2, 3, 4, 5] };
  }
});

const task2 = await createTask({
  name: 'Process Data',
  description: 'Process the fetched data',
  dependencies: [task1.id],  // This task depends on task1
  execute: async (input, context) => {
    // Get the result from the dependency
    const task1Result = context.getDependencyResult(task1.id);
    const data = task1Result.data;
    
    console.log('Processing data:', data);
    const processedData = data.map(item => item * 2);
    
    return { processedData };
  }
});

// Add tasks to the manager
taskManager.addExistingTask(task1);
taskManager.addExistingTask(task2);

// Run all tasks
const results = await taskManager.run();

// Get results
console.log('Task 1 result:', results.get(task1.id));
console.log('Task 2 result:', results.get(task2.id));`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Using Tasks with Agents
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          You can use tasks with agents to break down complex operations:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { 
  createAgent, 
  createProvider, 
  createMemory, 
  createDatabase, 
  createTaskManager, 
  createTask 
} from '@astreus-ai/astreus';

// Create dependencies
const db = await createDatabase();
const memory = await createMemory({ database: db });
const provider = createProvider({ type: 'openai', model: 'gpt-4o-mini' });

// Create an agent
const agent = await createAgent({
  name: 'TaskAgent',
  provider: provider,
  memory: memory,
  database: db,
  systemPrompt: 'You are an AI assistant that can perform tasks.'
});

// Create a task manager
const taskManager = createTaskManager({
  concurrency: 2,
  memory: memory,
  database: db,
  agentId: agent.id
});

// Create a data processing task
const processDataTask = await createTask({
  name: 'Process User Data',
  description: 'Process user-provided data and generate a summary',
  input: {
    userData: {
      name: 'John Doe',
      age: 30,
      interests: ['AI', 'Programming', 'Music']
    }
  },
  execute: async (input, context) => {
    // Use the agent to process the data
    const prompt = \`
      Please analyze the following user data and provide a summary:
      Name: \${input.userData.name}
      Age: \${input.userData.age}
      Interests: \${input.userData.interests.join(', ')}
    \`;
    
    const response = await agent.chat(prompt);
    
    return {
      summary: response,
      processedAt: new Date().toISOString()
    };
  }
});

// Add the task to the manager
taskManager.addExistingTask(processDataTask);

// Execute the task
const results = await taskManager.run();
console.log('Task result:', results.get(processDataTask.id));`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Task Dependencies
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Tasks can depend on other tasks, creating a workflow:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Create tasks with dependencies
const fetchDataTask = await createTask({
  name: 'Fetch Data',
  description: 'Fetch data from API',
  execute: async () => {
    return { data: [1, 2, 3, 4, 5] };
  }
});

const processDataTask = await createTask({
  name: 'Process Data',
  description: 'Process the fetched data',
  dependencies: [fetchDataTask.id],
  execute: async (input, context) => {
    const fetchResult = context.getDependencyResult(fetchDataTask.id);
    return { processedData: fetchResult.data.map(item => item * 2) };
  }
});

const summarizeDataTask = await createTask({
  name: 'Summarize Data',
  description: 'Create a summary of the processed data',
  dependencies: [processDataTask.id],
  execute: async (input, context) => {
    const processResult = context.getDependencyResult(processDataTask.id);
    const sum = processResult.processedData.reduce((a, b) => a + b, 0);
    return { 
      summary: \`Sum: \${sum}, Average: \${sum / processResult.processedData.length}\` 
    };
  }
});

// Add tasks to the manager
taskManager.addExistingTask(fetchDataTask);
taskManager.addExistingTask(processDataTask);
taskManager.addExistingTask(summarizeDataTask);

// Run all tasks in dependency order
const results = await taskManager.run();`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Task Persistence
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Tasks are automatically persisted to the database:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Create a task
const task = await createTask({
  name: 'Long-Running Task',
  description: 'A task that takes a long time to complete',
  execute: async () => {
    // Task implementation
    return { result: 'success' };
  }
}, memory);

// The task is automatically saved to the database
console.log('Task ID:', task.id);

// Later, you can load tasks from the database
const taskManager = createTaskManager({
  database: db,
  memory: memory
});

// Wait for tasks to be loaded from the database
await taskManager.waitForTasksLoaded();

// Get the task by ID
const loadedTask = taskManager.getTask(task.id);
if (loadedTask) {
  console.log('Loaded task:', loadedTask.config.name);
  
  // Continue execution if needed
  if (!loadedTask.isCompleted()) {
    const result = await loadedTask.execute();
    console.log('Task result:', result);
  } else {
    console.log('Task already completed with result:', loadedTask.getResult());
  }
}`}
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
          createTask(config, memory?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Creates a new task asynchronously.
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`type TaskConfig = {
  name: string;
  description?: string;
  id?: string;  // Optional, will be generated if not provided
  dependencies?: string[];  // IDs of tasks this task depends on
  input?: any;  // Input data for the task
  plugins?: string[];  // Plugin names to use with this task
  agentId?: string;  // ID of the agent associated with this task
  sessionId?: string;  // ID of the session associated with this task
  execute: (input: any, context: TaskContext) => Promise<any>;
};`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          createTaskManager(config?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Creates a new task manager.
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`type TaskManagerConfig = {
  concurrency?: number;  // Maximum number of tasks to run in parallel
  memory?: MemoryInstance;  // Memory instance for task context
  database?: DatabaseInstance;  // Database for task persistence
  agentId?: string;  // ID of the agent associated with this manager
  sessionId?: string;  // ID of the session associated with this manager
};`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          task.execute(input?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Executes a task with optional input.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          task.cancel()
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Cancels a running task.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          taskManager.addExistingTask(task)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Adds an existing task to the manager.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          taskManager.createTask(config)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Creates a new task and adds it to the manager.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          taskManager.run(taskIds?)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Runs tasks in dependency order. If taskIds is provided, only those tasks and their dependencies will be run.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          taskManager.getTask(id)
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Gets a task by ID.
        </motion.p>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          taskManager.getAllTasks()
        </motion.h3>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Gets all tasks managed by this manager.
        </motion.p>
      </motion.div>
    </main>
  );
} 