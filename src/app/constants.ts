/**
 * Navigation items for header
 */
export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Docs', href: '/docs' },
  { label: 'GitHub', href: 'https://github.com/astreus-ai/astreus' },
];

/**
 * CTA for header
 */
export const headerCta = { 
  label: 'Get Started', 
  href: '/docs/getting-started' 
};

/**
 * Footer columns with links
 */
export const footerColumns = [
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/docs/api-reference' },
      { label: 'Tutorials', href: '/docs/tutorials' },
      { label: 'Examples', href: '/examples' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'GitHub', href: 'https://github.com/astreus-ai/astreus' },
      { label: 'Discord', href: 'https://discord.gg/astreus' },
      { label: 'X', href: 'https://x.com/astreusai' },
      { label: 'Blog', href: '/blog' },
    ],
  },
];

/**
 * Social links for footer
 */
export const socialLinks = {
  twitter: 'https://x.com/astreusai',
  github: 'https://github.com/astreus-ai/astreus',
  discord: 'https://discord.gg/astreus',
};

/**
 * Brand information
 */
export const brandInfo = {
  name: 'Astreus',
  logo: '/astreus-logo-black.svg',
};

/**
 * Last updated dates for legal pages
 */
export const legalDates = {
  privacyPolicy: 'June 15, 2024',
  termsOfService: 'June 15, 2024',
};

/**
 * Community stats for the homepage
 */
export const communityStats = [
  { label: 'GitHub Stars', value: '1.2k+' },
  { label: 'Contributors', value: '35+' },
  { label: 'Discord Members', value: '500+' },
];

/**
 * Documentation sections
 */
export const docSections = [
  {
    title: 'Getting Started',
    description: 'Start building your first AI agent with Astreus. Learn the basics and set up your development environment.',
    iconType: 'FiBookOpen',
    href: '/docs/getting-started',
  },
  {
    title: 'Core Concepts',
    description: 'Understand the architecture and key concepts behind Astreus AI agents.',
    iconType: 'FiCode',
    href: '/docs/core-concepts',
  },
  {
    title: 'API Reference',
    description: 'Detailed API documentation for all Astreus components and modules.',
    iconType: 'FiTerminal',
    href: '/docs/api-reference',
  },
  {
    title: 'Examples',
    description: 'Explore real-world examples and use cases for Astreus AI agents.',
    iconType: 'FiPackage',
    href: '/docs/examples',
  },
];

/**
 * Sidebar navigation for docs
 */
export const sidebarLinks = [
  { iconType: 'FiBookOpen', label: 'Getting Started', href: '/docs/getting-started' },
  { iconType: 'FiCode', label: 'Core Concepts', href: '/docs/core-concepts' },
  { iconType: 'FiTerminal', label: 'API Reference', href: '/docs/api-reference' },
  { iconType: 'FiPackage', label: 'Examples', href: '/docs/examples' },
];

/**
 * Feature cards for the homepage
 */
export const features = [
  {
    title: 'Intelligent Agent System',
    description: 'Create, manage, and control AI agents with a flexible and extensible TypeScript framework designed for real-world applications.',
    iconType: 'FiCode',
    iconColor: 'text-emerald-500',
    actionText: 'Learn More',
    actionLink: '/docs/core-concepts',
  },
  {
    title: 'Multiple Provider Support',
    description: 'Work with OpenAI, Ollama, and more through a unified provider interface that makes switching between LLM providers simple.',
    iconType: 'FiLayers',
    iconColor: 'text-emerald-500',
    actionText: 'See Documentation',
    actionLink: '/docs/api-reference',
  },
  {
    title: 'Task Management',
    description: 'Handle both synchronous and asynchronous AI operations with a sophisticated task system that keeps your code clean and maintainable.',
    iconType: 'FiCommand',
    iconColor: 'text-emerald-500',
    actionText: 'View Examples',
    actionLink: '/docs/examples',
  }
];

/**
 * Open Source benefits for the homepage
 */
export const openSourceBenefits = [
  {
    title: 'MIT Licensed',
    description: 'Astreus is completely free to use and open source under the MIT license, allowing for both personal and commercial use without restrictions.',
    iconType: 'FiGithub',
  },
  {
    title: 'Plugin System',
    description: 'Extend functionality with a powerful plugin system that lets you customize and enhance your agents with additional capabilities.',
    iconType: 'FiUsers',
  },
  {
    title: 'Memory Management',
    description: 'Built-in memory management system allows agents to remember past interactions and maintain context across conversations.',
    iconType: 'FiZap',
  },
];

/**
 * Coming soon page code snippet
 */
export const comingSoonCodeSnippet = `
function createAgent() {
  return new Agent({
    name: "Astreus",
    models: ["gpt-4", "claude-3"],
    tools: [search, generate],
    memory: new Memory()
  });
}

const agent = createAgent();
agent.run("Solve this complex task");
`;

/**
 * Coming soon page information
 */
export const comingSoonInfo = {
  title: 'Coming Soon',
  description: 'We\'re working hard to bring you the next generation AI Agent Framework. Stay tuned for our official launch.',
  githubLink: 'https://github.com/astreus-ai',
  expectedLaunch: 'Q3 2024'
};

/**
 * Documentation code examples
 */
export const docCodeExamples = {
  install: `# Install Astreus using npm
npm install astreus

# Or with yarn
yarn add astreus`,

  agent: `import { 
  createAgent, 
  createOpenAIConfig, 
  OpenAIProvider 
} from 'astreus';

// Configure your provider
const config = createOpenAIConfig({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create an agent
const agent = createAgent({
  provider: new OpenAIProvider(config),
  name: 'MyFirstAgent',
});

// Use your agent
const response = await agent.run('Tell me about artificial intelligence');
console.log(response);`
}; 

/**
 * Getting Started page table of contents
 */
export const gettingStartedToc = [
  { label: 'Installation', href: '#installation' },
  { label: 'Configuration', href: '#configuration' },
  { label: 'Creating Your First Agent', href: '#first-agent' },
  { label: 'Testing Your Agent', href: '#testing' },
  { label: 'Next Steps', href: '#next-steps' },
];

/**
 * Core Concepts page table of contents
 */
export const coreConceptsToc = [
  { label: 'Agent Architecture', href: '#agent-architecture' },
  { label: 'Memory Systems', href: '#memory-systems' },
  { label: 'Reasoning Engine', href: '#reasoning-engine' },
  { label: 'Tasks & Actions', href: '#tasks-actions' },
  { label: 'Integration Methods', href: '#integration-methods' },
];

/**
 * API Reference page table of contents
 */
export const apiReferenceToc = [
  { label: 'Agent API', href: '#agent-api' },
  { label: 'Memory API', href: '#memory-api' },
  { label: 'Models API', href: '#models-api' },
  { label: 'Tasks API', href: '#tasks-api' },
  { label: 'Utility Functions', href: '#utility-functions' },
];

/**
 * Examples page table of contents
 */
export const examplesToc = [
  { label: 'Chatbot Example', href: '#chatbot' },
  { label: 'Search Agent', href: '#search-agent' },
  { label: 'API Integration', href: '#api-integration' },
  { label: 'Web Interaction', href: '#web-interaction' },
];

/**
 * Getting Started page code examples
 */
export const gettingStartedExamples = {
  install: `# Using npm
npm install astreus

# Using yarn
yarn add astreus

# Using pnpm
pnpm add astreus`,

  config: `// Configure your OpenAI provider
import { createOpenAIConfig } from 'astreus';

const config = createOpenAIConfig({
  apiKey: process.env.OPENAI_API_KEY,
  // Optional: model-specific settings
  models: {
    'gpt-4': {
      temperature: 0.7,
      maxTokens: 2000,
    },
    'gpt-3.5-turbo': {
      temperature: 0.9,
      maxTokens: 1500,
    },
  },
});`,

  env: `# .env
OPENAI_API_KEY=your_api_key_here`,

  agent: `// my-agent.js
import { 
  createAgent, 
  createOpenAIConfig, 
  OpenAIProvider,
  createTask
} from 'astreus';

async function main() {
  // Configure your provider
  const config = createOpenAIConfig({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Create an agent
  const agent = createAgent({
    provider: new OpenAIProvider(config),
    name: 'Helpful Assistant',
  });

  // Define a task for the agent
  const answerTask = createTask({
    name: 'answer',
    description: 'Provide a helpful answer to the user question',
    action: async (question) => {
      // The agent will use its AI capabilities to generate a response
      return await agent.run(\`
        Question: \${question}
        Provide a helpful, accurate, and concise answer.
      \`);
    }
  });

  // Run the task with a question
  const question = "What are the benefits of using AI agents?";
  console.log(\`Question: \${question}\`);
  
  const answer = await answerTask.execute(question);
  console.log(\`Answer: \${answer}\`);
}

main().catch(console.error);`,

  run: `node my-agent.js`,

  output: `Question: What are the benefits of using AI agents?
Answer: AI agents offer several benefits, including automation of repetitive tasks, 24/7 availability, consistent performance, scalability, personalization capabilities, and the ability to process and analyze large amounts of data quickly. They can also work alongside humans to enhance productivity and decision-making by handling routine queries while allowing people to focus on more complex problems that require human creativity and empathy.`
};

/**
 * API Reference page code examples
 */
export const apiReferenceExamples = {
  constructor: `new Agent(options: AgentOptions)`,
  defineTask: `async defineTask(options: TaskOptions): Promise<void>`,
  run: `async run(taskName: string, ...args: any[]): Promise<any>`,
  think: `async think(prompt: string, options?: ThinkOptions): Promise<string>`
};

/**
 * Examples page code examples
 */
export const examplesPageCode = {
  chatbot: `const { Agent } = require('@astreus/core');

// Create a chatbot agent
const chatbot = new Agent({
  name: 'Support Bot',
  models: ['gpt-4'],
  memory: {
    type: 'conversation',
    capacity: 10
  }
});

// Define the chat response task
await chatbot.defineTask({
  name: 'chat',
  description: 'Respond to user messages in a helpful and friendly manner',
  action: async (message, context) => {
    // Use the conversation history from context
    const history = context.memory.getConversation();
    
    // Generate a response considering the conversation history
    const response = await chatbot.think(\`
      Conversation history:
      \${history.map(m => \`\${m.role}: \${m.content}\`).join('\\n')}
      
      User: \${message}
      
      Respond as a helpful support agent. Be friendly and concise.
    \`);
    
    // Save the interaction to memory
    context.memory.addToConversation({
      role: 'user',
      content: message
    });
    
    context.memory.addToConversation({
      role: 'assistant',
      content: response
    });
    
    return response;
  }
});

// Example usage
async function main() {
  console.log("Support Bot: Hello! How can I help you today?");
  
  // This would normally come from user input
  const responses = [
    await chatbot.run('chat', "I'm having trouble installing your software."),
    await chatbot.run('chat', "It keeps showing an error during installation."),
    await chatbot.run('chat', "Yes, I'm using Windows 11."),
  ];
  
  responses.forEach(response => {
    console.log(\`Support Bot: \${response}\`);
  });
}

main();`
}; 