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
npm install @astreus/core

# Using yarn
yarn add @astreus/core

# Using pnpm
pnpm add @astreus/core`;

  const configCode = `// astreus.config.js
module.exports = {
  // Your OpenAI API key (required for using GPT models)
  apiKey: process.env.OPENAI_API_KEY,
  
  // Default model to use
  defaultModel: 'gpt-4',
  
  // Default settings
  defaults: {
    memory: true,
    verbose: false,
    timeout: 60000, // 60 seconds
  },
  
  // Optional: Custom model configurations
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
};`;

  const envCode = `# .env
OPENAI_API_KEY=your_api_key_here`;

  const agentCode = `// my-agent.js
const { Agent } = require('@astreus/core');

async function main() {
  // Create a new agent
  const assistant = new Agent({
    name: 'Helpful Assistant',
    description: 'A helpful AI assistant that answers user questions',
    models: ['gpt-4'],
    memory: true,
  });

  // Define the 'answer' task
  await assistant.defineTask({
    name: 'answer',
    description: 'Provide a helpful answer to the user question',
    action: async (question) => {
      // The agent will use its AI capabilities to generate a response
      const response = await assistant.think(\`
        Question: \${question}
        Provide a helpful, accurate, and concise answer.
      \`);
      
      return response;
    }
  });

  // Test the agent with a question
  const question = "What are the benefits of using AI agents?";
  console.log(\`Question: \${question}\`);
  
  const answer = await assistant.run('answer', question);
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
              This will install the core Astreus package that provides all the functionality needed to create and manage AI agents.
            </p>
          </section>

          {/* Configuration */}
          <section id="configuration" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiSettings className="mr-3 h-5 w-5 text-emerald-500" />
              Configuration
            </h2>
            <p className="text-gray-600 mb-4">
              After installation, you&apos;ll need to configure your environment. Create a new file named <code className="bg-gray-100 px-1 py-0.5 rounded">astreus.config.js</code> in your project root:
            </p>
            <CodeBlock 
              code={configCode} 
              language="javascript" 
              isDark={false} 
              className="mb-6"
            />
            <p className="text-gray-600 mb-2">
              Make sure to securely store your API keys. Create a <code className="bg-gray-100 px-1 py-0.5 rounded">.env</code> file:
            </p>
            <CodeBlock 
              code={envCode} 
              language="bash" 
              isDark={false} 
              showLineNumbers={false} 
              className="mb-4"
            />
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-md mb-6">
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> Never commit your actual API keys to version control. Add <code>.env</code> to your <code>.gitignore</code> file.
              </p>
            </div>
          </section>

          {/* Creating Your First Agent */}
          <section id="first-agent" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiCode className="mr-3 h-5 w-5 text-emerald-500" />
              Creating Your First Agent
            </h2>
            <p className="text-gray-600 mb-4">
              Let&apos;s create a simple agent that can respond to user queries. Create a new file named <code className="bg-gray-100 px-1 py-0.5 rounded">my-agent.js</code>:
            </p>
            <CodeBlock 
              code={agentCode} 
              language="javascript" 
              isDark={false} 
              className="mb-6"
            />
          </section>

          {/* Testing Your Agent */}
          <section id="testing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiPlay className="mr-3 h-5 w-5 text-emerald-500" />
              Testing Your Agent
            </h2>
            <p className="text-gray-600 mb-4">
              Now let&apos;s run your agent to see it in action:
            </p>
            <CodeBlock 
              code={runCode} 
              language="bash" 
              isDark={false} 
              showLineNumbers={false} 
              className="mb-6"
            />
            <p className="text-gray-600 mb-6">
              You should see output similar to:
            </p>
            <CodeBlock 
              code={outputCode} 
              language="text" 
              isDark={false} 
              showLineNumbers={false} 
              className="mb-6"
            />
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiArrowRight className="mr-3 h-5 w-5 text-emerald-500" />
              Next Steps
            </h2>
            <p className="text-gray-600 mb-4">
              Now that you&apos;ve created your first Astreus agent, here are some next steps to explore:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Learn about <Link href="/docs/core-concepts" className="text-emerald-600 hover:underline">Core Concepts</Link> in Astreus</li>
              <li>Explore the <Link href="/docs/api-reference" className="text-emerald-600 hover:underline">API Reference</Link> for detailed documentation</li>
              <li>See <Link href="/docs/examples" className="text-emerald-600 hover:underline">Examples</Link> of different agent types and use cases</li>
              <li>Join our <a href="#" className="text-emerald-600 hover:underline">Discord community</a> to connect with other developers</li>
            </ul>
          </section>

          {/* Navigation */}
          <div className="border-t border-gray-200 pt-6 mt-12 flex justify-between">
            <Link 
              href="/docs" 
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
            >
              <FiArrowLeft className="mr-2 h-4 w-4" />
              Back to Docs
            </Link>
            <Link 
              href="/docs/core-concepts" 
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
            >
              Core Concepts
              <FiArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 