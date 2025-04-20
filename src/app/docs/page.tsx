import Link from 'next/link';
import { FiArrowRight, FiBookOpen, FiCode, FiTerminal, FiPackage, FiHome } from 'react-icons/fi';
import { CodeBlock } from '../components/CodeBlock';
import { docSections, sidebarLinks, docCodeExamples } from '../constants';

export default function DocsPage() {
  // Function to render the correct icon based on iconType
  const renderIcon = (iconType: string, className: string) => {
    switch (iconType) {
      case 'FiBookOpen':
        return <FiBookOpen className={className} />;
      case 'FiCode':
        return <FiCode className={className} />;
      case 'FiTerminal':
        return <FiTerminal className={className} />;
      case 'FiPackage':
        return <FiPackage className={className} />;
      case 'FiHome':
        return <FiHome className={className} />;
      default:
        return null;
    }
  };

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
                  {renderIcon(link.iconType, "mr-2 h-4 w-4")}
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
                className="block bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-emerald-100 transition-all duration-200"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {renderIcon(section.iconType, "h-6 w-6 text-emerald-500")}
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
                code={docCodeExamples.install}
                language="bash"
                isDark={false}
                className="mb-6"
              />

              <div className="bg-white rounded-lg p-5 border border-gray-200 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Create your first agent</h3>
                <CodeBlock 
                  code={docCodeExamples.agent}
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