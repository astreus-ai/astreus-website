import Link from 'next/link';
import { FiArrowRight, FiArrowLeft, FiDownload, FiPlay, FiSettings, FiCode, FiBookOpen, FiTerminal, FiPackage, FiHome } from 'react-icons/fi';
import { CodeBlock } from '../../components/CodeBlock';
import { sidebarLinks, gettingStartedToc, gettingStartedExamples } from '../../constants';

export default function GettingStartedPage() {
  // Table of contents links
  const tocLinks = gettingStartedToc;

  // Sidebar navigation is now imported from constants.ts

  // Example code blocks are now imported from constants.ts
  const installCode = gettingStartedExamples.install;
  const configCode = gettingStartedExamples.config;
  const envCode = gettingStartedExamples.env;
  const agentCode = gettingStartedExamples.agent;
  const runCode = gettingStartedExamples.run;
  const outputCode = gettingStartedExamples.output;

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
              {sidebarLinks.map((link, index) => {
                // Function to render the correct icon based on iconType
                const renderIcon = (iconType: string) => {
                  switch (iconType) {
                    case 'FiBookOpen':
                      return <FiBookOpen className="h-4 w-4" />;
                    case 'FiCode':
                      return <FiCode className="h-4 w-4" />;
                    case 'FiTerminal':
                      return <FiTerminal className="h-4 w-4" />;
                    case 'FiPackage':
                      return <FiPackage className="h-4 w-4" />;
                    case 'FiHome':
                      return <FiHome className="h-4 w-4" />;
                    default:
                      return null;
                  }
                };

                return (
                  <Link 
                    key={index} 
                    href={link.href}
                    className={`flex items-center px-3 py-2 rounded-md ${
                      link.href === '/docs/getting-started' 
                        ? 'text-emerald-600 font-medium bg-emerald-50' 
                        : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                    }`}
                  >
                    {renderIcon(link.iconType)}
                    <span className="ml-2">{link.label}</span>
                  </Link>
                );
              })}
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

            <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
              <h3 className="font-medium text-amber-800 mb-1">API Key Security</h3>
              <p className="text-amber-700 text-sm">
                Never hardcode your API keys directly in your code. Use environment variables or a secure configuration management system. 
                Create a <code>.env</code> file in your project root:
              </p>
              <CodeBlock 
                code={envCode}
                language="bash"
                isDark={false}
                className="mt-3"
              />
            </div>
          </section>

          {/* Creating Your First Agent */}
          <section id="first-agent" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiCode className="mr-3 h-5 w-5 text-emerald-500" />
              Creating Your First Agent
            </h2>
            <p className="text-gray-600 mb-4">
              Now let&apos;s create a basic agent that can answer questions. Create a new file called <code>my-agent.js</code>:
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
              Run your agent to see it in action:
            </p>
            
            <CodeBlock 
              code={runCode}
              language="bash"
              isDark={false}
              className="mb-4"
            />

            <p className="text-gray-600 mb-4">
              You should see output similar to this:
            </p>
            
            <CodeBlock 
              code={outputCode}
              language="bash"
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
              Now that you have your first agent up and running, you can explore more advanced features:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center bg-emerald-100 rounded-full">
                  <span className="text-sm text-emerald-600">1</span>
                </div>
                <p className="ml-3 text-gray-600">
                  Learn about <Link href="/docs/core-concepts" className="text-emerald-600 hover:underline">Core Concepts</Link> of the Astreus framework
                </p>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center bg-emerald-100 rounded-full">
                  <span className="text-sm text-emerald-600">2</span>
                </div>
                <p className="ml-3 text-gray-600">
                  Explore the <Link href="/docs/api-reference" className="text-emerald-600 hover:underline">API Reference</Link> for detailed documentation
                </p>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center bg-emerald-100 rounded-full">
                  <span className="text-sm text-emerald-600">3</span>
                </div>
                <p className="ml-3 text-gray-600">
                  Check out practical <Link href="/docs/examples" className="text-emerald-600 hover:underline">Examples</Link> to see Astreus in action
                </p>
              </li>
            </ul>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <Link href="/docs" className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
                <FiArrowLeft className="mr-2 h-4 w-4" />
                Documentation Overview
              </Link>
              <Link href="/docs/core-concepts" className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
                Core Concepts
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 