import Image from 'next/image';
import { FiGithub, FiUsers } from 'react-icons/fi';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 to-emerald-100 relative overflow-hidden">
      {/* Code background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none select-none">
        <div className="absolute -right-6 top-20 transform rotate-12 text-5xl text-black font-mono">
          <pre>{`
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
          `}</pre>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full opacity-80 blur-3xl"></div>
      <div className="absolute -left-24 bottom-0 w-72 h-72 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full opacity-80 blur-3xl"></div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center relative z-10">
        <div className="mb-4">
          <Image 
            src="/astreus-logo-black.svg" 
            alt="Astreus Logo" 
            width={80} 
            height={80}
            className="mx-auto"
            priority
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Coming Soon
        </h1>
        
        <div className="w-20 mt-2 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6"></div>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12">
          We&apos;re working hard to bring you the next generation AI Agent Framework. 
          Stay tuned for our official launch.
        </p>
        
        <div className="space-y-6">
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/astreus-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center transition-colors shadow-md"
            >
              <FiGithub className="mr-2" />
              View on GitHub
            </a>
          </div>
          
          <div className="text-gray-500 mt-4 text-sm">
            Expected launch: Q3 2024
          </div>
        </div>
      </div>
    </div>
  );
} 