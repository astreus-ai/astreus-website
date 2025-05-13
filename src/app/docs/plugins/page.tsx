'use client';

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import BigButton from "@/components/ui/BigButton";
import CodeBlock from "@/components/ui/CodeBlock";
import { motion } from 'framer-motion';

export default function PluginsPage() {
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
          Astreus Plugin System
        </motion.h1>
        
        <motion.p 
          className="text-lg mb-8"
          variants={itemVariants}
        >
          Extend your agents' capabilities with plugins that add new tools and functionality.
        </motion.p>

        {/* Large navigation buttons */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12"
          variants={buttonGridVariants}
        >
          <motion.div variants={itemVariants}>
            <BigButton 
              href="/docs/plugins/x-plugin"
              title="X Plugin"
              description="Interact with X (formerly Twitter)"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="bg-white border-2 border-[#1e1e1e] text-[#1e1e1e] opacity-70 px-5 py-3 w-full flex items-center font-medium shadow-md cursor-not-allowed">
              <div className="flex flex-col items-start">
                <span className="font-medium text-lg">Web Search Plugin (Coming Soon)</span>
                <span className="text-sm">Search the web for current information</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="bg-white border-2 border-[#1e1e1e] text-[#1e1e1e] opacity-70 px-5 py-3 w-full flex items-center font-medium shadow-md cursor-not-allowed">
              <div className="flex flex-col items-start">
                <span className="font-medium text-lg">Email Plugin (Coming Soon)</span>
                <span className="text-sm">Send and analyze emails</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="bg-white border-2 border-[#1e1e1e] text-[#1e1e1e] opacity-70 px-5 py-3 w-full flex items-center font-medium shadow-md cursor-not-allowed">
              <div className="flex flex-col items-start">
                <span className="font-medium text-lg">WhatsApp Plugin (Coming Soon)</span>
                <span className="text-sm">Send and receive WhatsApp messages</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
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
          The Astreus Plugin System allows you to enhance your agents with additional capabilities 
          beyond the core framework. Plugins can add new tools, integrate with external services,
          and provide specialized functionality for specific domains.
        </motion.p>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          How Plugins Work
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Plugins in Astreus follow a simple architecture:
        </motion.p>
        
        <motion.ol 
          className="list-decimal pl-6 mb-8 space-y-2"
          variants={containerVariants}
        >
          <motion.li variants={itemVariants}>
            <strong>Plugin Creation</strong>: A plugin is created as a class that implements the 
            Plugin interface, providing metadata and a set of tools.
          </motion.li>
          <motion.li variants={itemVariants}>
            <strong>Initialization</strong>: Plugins are initialized before being attached to an agent,
            allowing them to set up connections, load resources, or perform other setup tasks.
          </motion.li>
          <motion.li variants={itemVariants}>
            <strong>Registration</strong>: When an agent is created, plugins are registered with the agent,
            making their tools available for use.
          </motion.li>
          <motion.li variants={itemVariants}>
            <strong>Tool Usage</strong>: The agent can then use the tools provided by the plugin when
            responding to user queries or performing tasks.
          </motion.li>
        </motion.ol>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Creating a Plugin
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          To create a custom plugin for Astreus, you'll need to implement the Plugin interface:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { Plugin } from '@astreus-ai/astreus';

// Define a simple weather plugin tool
const weatherTool: Plugin = {
  // Tool metadata
  name: 'get_weather',
  description: 'Get the current weather for a location',
  parameters: [
    {
      name: 'location',
      type: 'string',
      description: 'The city name and optional country code, e.g., "London,UK"',
      required: true
    },
    {
      name: 'units',
      type: 'string',
      description: 'The units to use for temperature (metric or imperial)',
      required: false
    }
  ],
  execute: async (params) => {
    const { location, units = 'metric' } = params;
    
    try {
      // In a real implementation, call a weather API here
      const response = await fetch(
        \`https://api.example.com/weather?q=\${location}&units=\${units}&appid=YOUR_API_KEY\`
      );
      
      if (!response.ok) {
        throw new Error(\`Weather API error: \${response.status}\`);
      }
      
      const data = await response.json();
      return {
        temperature: data.main.temp,
        condition: data.weather[0].main,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        location: data.name
      };
    } catch (error) {
      console.error('Error fetching weather:', error);
      throw new Error('Failed to get weather information');
    }
  }
};`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Using Plugins with Agents
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          Once you've created a plugin, you can use it with an agent:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { createAgent, createProvider, createMemory, createDatabase } from '@astreus-ai/astreus';

// Create dependencies
const db = await createDatabase();
const memory = await createMemory({ database: db });
const provider = createProvider({ type: 'openai', model: 'gpt-4o-mini' });

// Create an agent with the weather tool
const agent = await createAgent({
  name: 'WeatherAssistant',
  provider: provider,
  memory: memory,
  database: db,
  tools: [weatherTool],  // Add the tool directly
  systemPrompt: 'You are a helpful assistant that can provide weather information. Use the weather tool when appropriate.'
});

// The agent can now use the weather tool
const response = await agent.chat("What's the weather like in London today?");
console.log(response);`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Creating a Plugin Manager
        </motion.h2>
        
        <motion.p 
          className="mb-4"
          variants={itemVariants}
        >
          For more complex scenarios, you can use the PluginManager to manage multiple tools:
        </motion.p>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`import { PluginManager } from '@astreus-ai/astreus';

// Create multiple tools
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

const timezoneTool = {
  name: 'get_timezone',
  description: 'Get the current time in a specific timezone',
  parameters: [
    {
      name: 'location',
      type: 'string',
      description: 'The location to get the timezone for',
      required: true
    }
  ],
  execute: async ({ location }) => {
    try {
      // In a real implementation, use a timezone API
      return { 
        location,
        time: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
        timezone: 'UTC'
      };
    } catch (error) {
      return { error: 'Could not determine timezone' };
    }
  }
};

// Create a plugin manager with multiple tools
const pluginManager = PluginManager.create({
  name: 'utility-tools',
  description: 'Utility tools for calculations and timezones',
  tools: [calculatorTool, timezoneTool]
});

// Create an agent with the plugin manager
const agent = await createAgent({
  name: 'UtilityAssistant',
  provider: provider,
  memory: memory,
  database: db,
  tools: pluginManager.getTools(),  // Get all tools from the manager
  systemPrompt: 'You are a helpful assistant with calculator and timezone capabilities.'
});`}
          />
        </motion.div>
        
        <motion.h2 
          className="font-press-start-2p text-xl mt-8 mb-4 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Plugin API Reference
        </motion.h2>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          Plugin Interface
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`interface Plugin {
  name: string;
  description: string;
  parameters: ToolParameterSchema[];
  execute: (params: Record<string, any>) => Promise<any>;
}

interface ToolParameterSchema {
  name: string;
  type: "string" | "number" | "boolean" | "array" | "object";
  description: string;
  required?: boolean;
  default?: any;
}`}
          />
        </motion.div>
        
        <motion.h3 
          className="font-press-start-2p text-lg mb-2 text-[#1e1e1e] font-bold"
          variants={itemVariants}
        >
          PluginManager Methods
        </motion.h3>
        
        <motion.div variants={codeVariants}>
          <CodeBlock 
            language="typescript"
            code={`// Create a plugin manager
const pluginManager = PluginManager.create({
  name: 'my-plugin-manager',
  tools: [tool1, tool2]
});

// Get all tools
const allTools = pluginManager.getTools();

// Get a specific tool
const tool = pluginManager.getTool('tool-name');

// Register a new tool
pluginManager.registerTool(newTool);

// Remove a tool
pluginManager.removeTool('tool-name');

// Static methods for global registry
PluginManager.register(tool);
PluginManager.get('tool-name');
PluginManager.getAll();
PluginManager.unregister('tool-name');`}
          />
        </motion.div>
      </motion.div>
    </main>
  );
} 