import Link from 'next/link';
import { FiArrowLeft, FiBookOpen, FiCode, FiTerminal, FiPackage, FiHome, FiMessageCircle, FiSearch, FiServer, FiGlobe } from 'react-icons/fi';
import { CodeBlock } from '../../components/CodeBlock';

export default function ExamplesPage() {
  // Table of contents links
  const tocLinks = [
    { label: 'Chatbot Example', href: '#chatbot' },
    { label: 'Search Agent', href: '#search-agent' },
    { label: 'API Integration', href: '#api-integration' },
    { label: 'Web Interaction', href: '#web-interaction' },
  ];

  // Sidebar navigation
  const sidebarLinks = [
    { icon: <FiBookOpen className="h-4 w-4" />, label: 'Getting Started', href: '/docs/getting-started' },
    { icon: <FiCode className="h-4 w-4" />, label: 'Core Concepts', href: '/docs/core-concepts' },
    { icon: <FiTerminal className="h-4 w-4" />, label: 'API Reference', href: '/docs/api-reference' },
    { icon: <FiPackage className="h-4 w-4" />, label: 'Examples', href: '/docs/examples' },
  ];

  // Example code block for chatbot
  const chatbotCode = `const { Agent } = require('@astreus/core');

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

main();`;

  return (
    <div className="container-custom max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="flex items-center text-sm">
          <Link href="/docs" className="text-gray-500 hover:text-emerald-600 transition-colors">
            Documentation
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Examples</span>
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
                    link.href === '/docs/examples' 
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Examples</h1>
          <p className="text-xl text-gray-600 mb-8">
            Practical examples demonstrating how to build different types of AI agents with Astreus.
          </p>

          {/* Chatbot Example */}
          <section id="chatbot" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiMessageCircle className="mr-3 h-5 w-5 text-emerald-500" />
              Chatbot Example
            </h2>
            <p className="text-gray-600 mb-4">
              Build a conversational AI agent that can maintain context and respond naturally to user inputs.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Simple Chatbot</h3>
              <CodeBlock 
                code={chatbotCode}
                language="javascript"
                isDark={false}
                className="mb-4"
              />
            </div>
          </section>

          {/* Search Agent */}
          <section id="search-agent" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiSearch className="mr-3 h-5 w-5 text-emerald-500" />
              Search Agent
            </h2>
            <p className="text-gray-600 mb-6">
              Create an agent that can search for information and summarize the results.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
              <p className="text-gray-600 text-sm italic">
                Search agent example code and details coming soon.
              </p>
            </div>
          </section>

          {/* API Integration */}
          <section id="api-integration" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiServer className="mr-3 h-5 w-5 text-emerald-500" />
              API Integration
            </h2>
            <p className="text-gray-600 mb-6">
              Build an agent that can interact with external APIs to fetch and process data.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
              <p className="text-gray-600 text-sm italic">
                API integration example code and details coming soon.
              </p>
            </div>
          </section>

          {/* Web Interaction */}
          <section id="web-interaction" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FiGlobe className="mr-3 h-5 w-5 text-emerald-500" />
              Web Interaction
            </h2>
            <p className="text-gray-600 mb-6">
              Create an agent that can browse the web and extract information from websites.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
              <p className="text-gray-600 text-sm italic">
                Web interaction example code and details coming soon.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="border-t border-gray-200 pt-6 mt-12 flex justify-between">
            <Link 
              href="/docs/api-reference" 
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
            >
              <FiArrowLeft className="mr-2 h-4 w-4" />
              API Reference
            </Link>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
} 