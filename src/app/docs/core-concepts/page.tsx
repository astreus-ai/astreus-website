import Link from 'next/link';
import { FiArrowRight, FiArrowLeft, FiActivity, FiDatabase, FiCpu, FiMessageCircle, FiBookOpen, FiCode, FiTerminal, FiPackage, FiHome } from 'react-icons/fi';

export default function CoreConceptsPage() {
  // Table of contents links
  const tocLinks = [
    { label: 'Agent Architecture', href: '#agent-architecture' },
    { label: 'Memory Systems', href: '#memory-systems' },
    { label: 'Reasoning Engine', href: '#reasoning-engine' },
    { label: 'Tasks & Actions', href: '#tasks-actions' },
    { label: 'Integration Methods', href: '#integration-methods' },
  ];

  // Sidebar navigation
  const sidebarLinks = [
    { icon: <FiBookOpen className="h-4 w-4" />, label: 'Getting Started', href: '/docs/getting-started' },
    { icon: <FiCode className="h-4 w-4" />, label: 'Core Concepts', href: '/docs/core-concepts' },
    { icon: <FiTerminal className="h-4 w-4" />, label: 'API Reference', href: '/docs/api-reference' },
    { icon: <FiPackage className="h-4 w-4" />, label: 'Examples', href: '/docs/examples' },
  ];

  return (
    <div className="container-custom max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="flex items-center text-sm">
          <Link href="/docs" className="text-gray-500 hover:text-emerald-600 transition-colors">
            Documentation
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Core Concepts</span>
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
                    link.href === '/docs/core-concepts' 
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Core Concepts</h1>
          <p className="text-xl text-gray-600 mb-8">
            Understanding the fundamental concepts and architecture of the Astreus framework.
          </p>

          {/* Agent Architecture */}
          <section id="agent-architecture" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiActivity className="mr-3 h-5 w-5 text-emerald-500" />
              Agent Architecture
            </h2>
            <p className="text-gray-600 mb-4">
              Astreus agents are built on a modular architecture designed for flexibility and extensibility. 
              Each agent consists of several core components that work together seamlessly.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Components</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-medium">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-gray-900">Model Interface</h4>
                    <p className="text-gray-600 mt-1">Connects to AI models like GPT-4, Claude, or any custom model implementation.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-medium">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-gray-900">Memory System</h4>
                    <p className="text-gray-600 mt-1">Stores and retrieves information from past interactions and external sources.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-medium">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-gray-900">Reasoning Engine</h4>
                    <p className="text-gray-600 mt-1">Processes information and makes decisions based on goals and context.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-medium">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-gray-900">Action Framework</h4>
                    <p className="text-gray-600 mt-1">Defines and executes actions in response to inputs or goals.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-600">
              This modular design allows components to be replaced or extended without affecting the rest of the system. 
              You can use the default implementations or create custom ones tailored to your specific needs.
            </p>
          </section>

          {/* Memory Systems */}
          <section id="memory-systems" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiDatabase className="mr-3 h-5 w-5 text-emerald-500" />
              Memory Systems
            </h2>
            <p className="text-gray-600 mb-4">
              Memory is a critical component that allows agents to maintain context, learn from past interactions, 
              and access stored knowledge. Astreus provides several memory types that can be used individually or in combination.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Short-Term Memory</h3>
                <p className="text-gray-600">
                  Maintains conversation context and recent interactions, typically limited to the current session.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Long-Term Memory</h3>
                <p className="text-gray-600">
                  Stores persistent information across sessions using vector databases for efficient retrieval.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Episodic Memory</h3>
                <p className="text-gray-600">
                  Records sequences of events and interactions as coherent episodes for contextual recall.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Base</h3>
                <p className="text-gray-600">
                  Structured storage for facts, rules, and domain-specific information the agent can query.
                </p>
              </div>
            </div>
          </section>

          {/* Reasoning Engine */}
          <section id="reasoning-engine" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiCpu className="mr-3 h-5 w-5 text-emerald-500" />
              Reasoning Engine
            </h2>
            <p className="text-gray-600 mb-4">
              The reasoning engine is the cognitive core of an Astreus agent. It processes inputs, applies relevant knowledge, 
              and generates outputs based on goals and context. Astreus supports multiple reasoning strategies.
            </p>
            
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Reasoning Strategies</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-emerald-500 mr-3"></span>
                  <div>
                    <strong className="font-medium">Direct Reasoning:</strong>
                    <p className="text-gray-600 mt-1">
                      The simplest form where the agent processes input and generates output in a single step.
                      Ideal for simple question-answering or classification tasks.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-emerald-500 mr-3"></span>
                  <div>
                    <strong className="font-medium">Chain-of-Thought:</strong>
                    <p className="text-gray-600 mt-1">
                      The agent breaks down complex problems into intermediate steps, reasoning through each
                      step sequentially before arriving at the final answer.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-emerald-500 mr-3"></span>
                  <div>
                    <strong className="font-medium">Tree-of-Thoughts:</strong>
                    <p className="text-gray-600 mt-1">
                      Explores multiple reasoning paths in parallel, evaluating each branch and selecting
                      the most promising solution path.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-emerald-500 mr-3"></span>
                  <div>
                    <strong className="font-medium">Recursive Reasoning:</strong>
                    <p className="text-gray-600 mt-1">
                      Able to reflect on its own reasoning process, identify errors or gaps, and refine
                      its approach recursively until a satisfactory solution is reached.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Tasks & Actions */}
          <section id="tasks-actions" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiMessageCircle className="mr-3 h-5 w-5 text-emerald-500" />
              Tasks & Actions
            </h2>
            <p className="text-gray-600 mb-4">
              In Astreus, agents perform work through clearly defined tasks and actions. This structured approach
              makes agent behavior predictable, testable, and composable.
            </p>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Concepts</h3>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-900">Tasks</h4>
                <p className="text-gray-600 mt-1">
                  Named units of work that an agent can perform. Tasks have a clear purpose, inputs, and outputs.
                  They can be composed of multiple actions and/or other tasks.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-900">Actions</h4>
                <p className="text-gray-600 mt-1">
                  The smallest units of work that interact with the external world. Actions can call APIs,
                  manipulate data, or interact with users.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900">Workflows</h4>
                <p className="text-gray-600 mt-1">
                  Sequences of tasks organized to achieve complex goals. Workflows can include branches,
                  loops, and error handling logic.
                </p>
              </div>
            </div>
          </section>

          {/* Integration Methods */}
          <section id="integration-methods" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiArrowRight className="mr-3 h-5 w-5 text-emerald-500" />
              Integration Methods
            </h2>
            <p className="text-gray-600 mb-4">
              Astreus agents can be integrated into applications through multiple interfaces, making them
              versatile for various deployment scenarios.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">API Integration</h3>
                <p className="text-gray-600">
                  Expose agent capabilities through REST or GraphQL APIs for integration with web or mobile apps.
                  Create endpoints that receive requests, execute agent tasks, and return results.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SDK Integration</h3>
                <p className="text-gray-600">
                  Use client libraries for Node.js, Python, or other languages to integrate directly into your codebase.
                  Import the Astreus library, initialize an agent, and call methods directly.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Event-Driven</h3>
                <p className="text-gray-600">
                  Connect agents to message queues or event streams to process data asynchronously.
                  Agents can subscribe to events, process them when they arrive, and publish results back to the queue.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CLI Tools</h3>
                <p className="text-gray-600">
                  Build command-line interfaces powered by Astreus agents for automation scripts and tools.
                  Create commands to run tasks, specify inputs via arguments, and display results in the terminal.
                </p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="border-t border-gray-200 pt-6 mt-12 flex justify-between">
            <Link 
              href="/docs/getting-started" 
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
            >
              <FiArrowLeft className="mr-2 h-4 w-4" />
              Getting Started
            </Link>
            <Link 
              href="/docs/api-reference" 
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
            >
              API Reference
              <FiArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 