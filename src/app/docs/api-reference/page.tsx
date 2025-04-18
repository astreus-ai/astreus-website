import Link from 'next/link';
import { FiArrowRight, FiArrowLeft, FiBookOpen, FiCode, FiTerminal, FiPackage, FiHome, FiSettings, FiDatabase, FiLayers } from 'react-icons/fi';
import { CodeBlock } from '../../components/CodeBlock';

export default function ApiReferencePage() {
  // Table of contents links
  const tocLinks = [
    { label: 'Agent API', href: '#agent-api' },
    { label: 'Memory API', href: '#memory-api' },
    { label: 'Models API', href: '#models-api' },
    { label: 'Tasks API', href: '#tasks-api' },
    { label: 'Utility Functions', href: '#utility-functions' },
  ];

  // Sidebar navigation
  const sidebarLinks = [
    { icon: <FiBookOpen className="h-4 w-4" />, label: 'Getting Started', href: '/docs/getting-started' },
    { icon: <FiCode className="h-4 w-4" />, label: 'Core Concepts', href: '/docs/core-concepts' },
    { icon: <FiTerminal className="h-4 w-4" />, label: 'API Reference', href: '/docs/api-reference' },
    { icon: <FiPackage className="h-4 w-4" />, label: 'Examples', href: '/docs/examples' },
  ];

  // API code examples
  const constructorExample = `new Agent(options: AgentOptions)`;
  
  const defineTaskExample = `async defineTask(options: TaskOptions): Promise<void>`;
  
  const runExample = `async run(taskName: string, ...args: any[]): Promise<any>`;
  
  const thinkExample = `async think(prompt: string, options?: ThinkOptions): Promise<string>`;

  return (
    <div className="container-custom max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="flex items-center text-sm">
          <Link href="/docs" className="text-gray-500 hover:text-emerald-600 transition-colors">
            Documentation
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">API Reference</span>
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
                    link.href === '/docs/api-reference' 
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">API Reference</h1>
          <p className="text-xl text-gray-600 mb-8">
            Complete reference documentation for all classes and functions in the Astreus framework.
          </p>

          {/* Agent API */}
          <section id="agent-api" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiSettings className="mr-3 h-5 w-5 text-emerald-500" />
              Agent API
            </h2>
            <p className="text-gray-600 mb-4">
              The Agent class is the core of Astreus. It provides methods for creating and managing intelligent agents.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Constructor</h3>
              <CodeBlock 
                code={constructorExample}
                language="typescript"
                isDark={false}
                showLineNumbers={false}
                className="mb-3"
              />
              <p className="text-gray-600 text-sm">
                Creates a new agent with the specified options.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Methods</h3>
              <ul className="space-y-4">
                <li>
                  <CodeBlock 
                    code={defineTaskExample}
                    language="typescript"
                    isDark={false}
                    showLineNumbers={false}
                    className="mb-2"
                  />
                  <p className="text-gray-600 text-sm">
                    Defines a new task that the agent can perform.
                  </p>
                </li>
                <li>
                  <CodeBlock 
                    code={runExample}
                    language="typescript"
                    isDark={false}
                    showLineNumbers={false}
                    className="mb-2"
                  />
                  <p className="text-gray-600 text-sm">
                    Runs a previously defined task with the provided arguments.
                  </p>
                </li>
                <li>
                  <CodeBlock 
                    code={thinkExample}
                    language="typescript"
                    isDark={false}
                    showLineNumbers={false}
                    className="mb-2"
                  />
                  <p className="text-gray-600 text-sm">
                    Generates a response to the given prompt using the agent&apos;s reasoning capabilities.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Memory API */}
          <section id="memory-api" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiDatabase className="mr-3 h-5 w-5 text-emerald-500" />
              Memory API
            </h2>
            <p className="text-gray-600 mb-6">
              Memory classes provide storage and retrieval of information for agents.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
              <p className="text-gray-600 text-sm italic">
                API documentation for memory systems is coming soon.
              </p>
            </div>
          </section>

          {/* Models API */}
          <section id="models-api" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiLayers className="mr-3 h-5 w-5 text-emerald-500" />
              Models API
            </h2>
            <p className="text-gray-600 mb-6">
              Model interfaces for connecting to various AI providers.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
              <p className="text-gray-600 text-sm italic">
                API documentation for model interfaces is coming soon.
              </p>
            </div>
          </section>

          {/* Tasks API */}
          <section id="tasks-api" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiCode className="mr-3 h-5 w-5 text-emerald-500" />
              Tasks API
            </h2>
            <p className="text-gray-600 mb-6">
              Tasks are units of work that agents can perform.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
              <p className="text-gray-600 text-sm italic">
                API documentation for tasks is coming soon.
              </p>
            </div>
          </section>

          {/* Utility Functions */}
          <section id="utility-functions" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiTerminal className="mr-3 h-5 w-5 text-emerald-500" />
              Utility Functions
            </h2>
            <p className="text-gray-600 mb-6">
              Helper functions for common tasks.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
              <p className="text-gray-600 text-sm italic">
                API documentation for utility functions is coming soon.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="border-t border-gray-200 pt-6 mt-12 flex justify-between">
            <Link 
              href="/docs/core-concepts" 
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
            >
              <FiArrowLeft className="mr-2 h-4 w-4" />
              Core Concepts
            </Link>
            <Link 
              href="/docs/examples" 
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
            >
              Examples
              <FiArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 