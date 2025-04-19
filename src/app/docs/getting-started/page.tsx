import Link from 'next/link';
import { FiArrowRight, FiArrowLeft, FiDownload, FiPlay, FiSettings, FiCode, FiBookOpen, FiTerminal, FiPackage, FiHome } from 'react-icons/fi';
import { CodeBlock } from '../../components/CodeBlock';

export default function GettingStartedPage() {
  // Table of contents links
  const tocLinks = [
    { label: 'Installation', href: '#installation' },
    { label: 'Configuration', href: '#configuration' },
    { label: 'Creating Your First Agent', href: '#first-agent' },
    { label: 'Testing Your Agent', href: '#testing' },
    { label: 'Next Steps', href: '#next-steps' },
  ];

  // Sidebar navigation
  const sidebarLinks = [
    { icon: <FiBookOpen className="h-4 w-4" />, label: 'Getting Started', href: '/docs/getting-started' },
    { icon: <FiCode className="h-4 w-4" />, label: 'Core Concepts', href: '/docs/core-concepts' },
    { icon: <FiTerminal className="h-4 w-4" />, label: 'API Reference', href: '/docs/api-reference' },
    { icon: <FiPackage className="h-4 w-4" />, label: 'Examples', href: '/docs/examples' },
  ];

  // Example code blocks
  const installCode = `# Using npm
npm install astreus

# Using yarn
yarn add astreus

# Using pnpm
pnpm add astreus`;

  const configCode = `// Configure your OpenAI provider
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
});`;

  const envCode = `# .env
OPENAI_API_KEY=your_api_key_here`;

  const agentCode = `// my-agent.js
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

main().catch(console.error);`;

  const runCode = `node my-agent.js`;

  const outputCode = `Question: What are the benefits of using AI agents?
Answer: AI agents offer several benefits, including automation of repetitive tasks, 24/7 availability, consistent performance, scalability, personalization capabilities, and the ability to process and analyze large amounts of data quickly. They can also work alongside humans to enhance productivity and decision-making by handling routine queries while allowing people to focus on more complex problems that require human creativity and empathy.`;

  return (
    <div className="container-custom max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="flex items-center text-sm">
          <Link href="/docs" className="text-gray-500 hover:text-emerald-600 transition-colors">
            Documentation
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Getting Started</span>
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Documentation
            </h3>
            <nav className="flex flex-col space-y-2 mb-8">
              <Link 
                href="/docs" 
                className="text-gray-600 hover:text-emerald-600 flex items-center px-3 py-2 rounded-md hover:bg-gray-50"
              >
                <FiHome className="mr-2 h-4 w-4" />
                Overview
              </Link>
              {sidebarLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  className={`flex items-center px-3 py-2 rounded-md ${
                    link.href === '/docs/getting-started' 
                      ? 'text-emerald-600 font-medium bg-emerald-50' 
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </Link>
              ))}
            </nav>

            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              On This Page
            </h3>
            <nav className="space-y-1">
              {tocLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-600 hover:text-emerald-600 py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Getting Started with Astreus</h1>
          <p className="text-xl text-gray-600 mb-8">
            This guide will help you set up your development environment and create your first AI agent using Astreus.
          </p>

          {/* Installation */}
          <section id="installation" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiDownload className="mr-3 h-5 w-5 text-emerald-500" />
              Installation
            </h2>
            <p className="text-gray-600 mb-4">
              Astreus can be installed via npm, yarn, or pnpm. Choose your preferred package manager:
            </p>
            <CodeBlock 
              code={installCode} 
              language="bash" 
              isDark={false} 
              className="mb-6"
            />
            <p className="text-gray-600">
              This will install the Astreus framework that provides all the functionality needed to create and manage AI agents.
            </p>
          </section>

          {/* Configuration */}
          <section id="configuration" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiSettings className="mr-3 h-5 w-5 text-emerald-500" />
              Configuration
            </h2>
            <p className="text-gray-600 mb-4">
              Astreus supports multiple LLM providers, with OpenAI and Ollama available out of the box. To get started, you&apos;ll need to configure your provider:
            </p>
            
            <CodeBlock 
              code={configCode} 
              language="javascript" 
              isDark={false} 
              className="mb-6"
            />
            
            <p className="text-gray-600 mb-4">
              For security, it&apos;s recommended to use environment variables for your API keys. Create a <code className="bg-gray-100 rounded px-1 py-0.5">.env</code> file in your project root:
            </p>
            
            <CodeBlock 
              code={envCode} 
              language="bash" 
              isDark={false} 
              className="mb-6"
            />
            
            <p className="text-gray-600">
              Make sure to install the <code className="bg-gray-100 rounded px-1 py-0.5">dotenv</code> package and add <code className="bg-gray-100 rounded px-1 py-0.5">require(&apos;dotenv&apos;).config()</code> at the top of your main file to load these environment variables.
            </p>
          </section>

          {/* Create Your First Agent */}
          <section id="first-agent" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiCode className="mr-3 h-5 w-5 text-emerald-500" />
              Creating Your First Agent
            </h2>
            <p className="text-gray-600 mb-4">
              Now let&apos;s create a simple agent that can answer questions. Create a file called <code className="bg-gray-100 rounded px-1 py-0.5">my-agent.js</code> (or <code className="bg-gray-100 rounded px-1 py-0.5">my-agent.ts</code> if you&apos;re using TypeScript):
            </p>
            
            <CodeBlock 
              code={agentCode} 
              language="javascript" 
              isDark={false} 
              className="mb-6"
            />
            
            <p className="text-gray-600">
              This code creates a new agent with a configured provider, defines a task for it, and then runs that task with a question.
            </p>
          </section>

          {/* Testing Your Agent */}
          <section id="testing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiPlay className="mr-3 h-5 w-5 text-emerald-500" />
              Testing Your Agent
            </h2>
            <p className="text-gray-600 mb-4">
              Run your agent with the following command:
            </p>
            
            <CodeBlock 
              code={runCode} 
              language="bash" 
              isDark={false} 
              className="mb-4"
            />
            
            <p className="text-gray-600 mb-4">
              You should see output similar to:
            </p>
            
            <CodeBlock 
              code={outputCode} 
              language="text" 
              isDark={false} 
              className="mb-6"
            />
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiArrowRight className="mr-3 h-5 w-5 text-emerald-500" />
              Next Steps
            </h2>
            <p className="text-gray-600 mb-4">
              Now that you&apos;ve created your first agent, there&apos;s much more you can explore:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Learn about <Link href="/docs/core-concepts" className="text-emerald-600 hover:underline">Core Concepts</Link> to understand the architecture</li>
              <li>Set up a database for agent memory using SQLite or PostgreSQL</li>
              <li>Create more complex tasks and workflows</li>
              <li>Try different AI models and providers</li>
              <li>Explore advanced features like plugin system</li>
            </ul>

            <div className="flex space-x-4 mt-8">
              <Link href="/docs" className="text-emerald-600 hover:text-emerald-700 flex items-center">
                <FiArrowLeft className="mr-2 h-4 w-4" />
                Back to Documentation
              </Link>
              <Link href="/docs/core-concepts" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md flex items-center transition-colors">
                Next: Core Concepts
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 