import Link from 'next/link';
import { FiArrowRight, FiBookOpen, FiCode, FiTerminal, FiPackage, FiHome } from 'react-icons/fi';
import { CodeBlock } from '../components/CodeBlock';

export default function DocsPage() {
  // Documentation sections
  const docSections = [
    {
      title: 'Getting Started',
      description: 'Start building your first AI agent with Astreus. Learn the basics and set up your development environment.',
      icon: <FiBookOpen className="h-6 w-6 text-emerald-500" />,
      href: '/docs/getting-started',
    },
    {
      title: 'Core Concepts',
      description: 'Understand the architecture and key concepts behind Astreus AI agents.',
      icon: <FiCode className="h-6 w-6 text-emerald-500" />,
      href: '/docs/core-concepts',
    },
    {
      title: 'API Reference',
      description: 'Detailed API documentation for all Astreus components and modules.',
      icon: <FiTerminal className="h-6 w-6 text-emerald-500" />,
      href: '/docs/api-reference',
    },
    {
      title: 'Examples',
      description: 'Explore real-world examples and use cases for Astreus AI agents.',
      icon: <FiPackage className="h-6 w-6 text-emerald-500" />,
      href: '/docs/examples',
    },
  ];

  // Sidebar navigation
  const sidebarLinks = [
    { icon: <FiBookOpen className="h-4 w-4" />, label: 'Getting Started', href: '/docs/getting-started' },
    { icon: <FiCode className="h-4 w-4" />, label: 'Core Concepts', href: '/docs/core-concepts' },
    { icon: <FiTerminal className="h-4 w-4" />, label: 'API Reference', href: '/docs/api-reference' },
    { icon: <FiPackage className="h-4 w-4" />, label: 'Examples', href: '/docs/examples' },
  ];

  // Example code blocks
  const installCode = `# Install Astreus using npm
npm install @astreus/core

# Or with yarn
yarn add @astreus/core`;

  const agentCode = `import { Agent } from '@astreus/core';

// Create a new agent
const myAgent = new Agent({
  name: 'MyFirstAgent',
  models: ['gpt-4'],
  memory: true,
});

// Define agent tasks
await myAgent.defineTask({
  name: 'greet',
  description: 'Greet the user by name',
  action: async (name) => {
    return \`Hello, \${name}! I'm \${myAgent.name}.\`;
  }
});

// Run the agent
const result = await myAgent.run('greet', 'World');
console.log(result); // "Hello, World! I'm MyFirstAgent."`;

  return (
    <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Documentation
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/docs" 
                className="text-emerald-600 font-medium flex items-center px-3 py-2 rounded-md bg-emerald-50"
              >
                <FiHome className="mr-2 h-4 w-4" />
                Overview
              </Link>
              {sidebarLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  className="text-gray-600 hover:text-emerald-600 flex items-center px-3 py-2 rounded-md hover:bg-gray-50"
                >
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Everything you need to know about building intelligent AI agents with Astreus.
            </p>
          </div>

          {/* Documentation grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {docSections.map((section, index) => (
              <Link 
                key={index} 
                href={section.href}
                className="block bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-100 transition-all duration-200"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {section.icon}
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    <div className="flex items-center text-emerald-600 font-medium">
                      Read more <FiArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Start */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start Guide</h2>
              <p className="text-gray-700 mb-6">
                Get up and running with Astreus in just a few minutes. Install the package, configure your environment, and build your first AI agent.
              </p>

              <CodeBlock 
                code={installCode}
                language="bash"
                isDark={false}
                className="mb-6"
              />

              <div className="bg-white rounded-lg p-5 border border-gray-200 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Create your first agent</h3>
                <CodeBlock 
                  code={agentCode}
                  language="javascript"
                  isDark={false}
                  className="mb-0"
                />
              </div>

              <Link 
                href="/docs/getting-started" 
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition duration-150"
              >
                Read the full guide <FiArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 