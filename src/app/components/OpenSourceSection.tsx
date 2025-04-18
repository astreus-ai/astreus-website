import { ReactNode } from 'react';
import { FiGithub, FiCode, FiStar } from 'react-icons/fi';

interface Benefit {
  title: string;
  description: string;
  icon: ReactNode;
}

interface OpenSourceSectionProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
  githubLink: string;
}

export default function OpenSourceSection({ 
  title, 
  subtitle, 
  benefits,
  githubLink
}: OpenSourceSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-50 pointer-events-none"></div>
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full opacity-80 blur-3xl"></div>
      <div className="absolute -left-24 bottom-0 w-72 h-72 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full opacity-80 blur-3xl"></div>
      
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
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-lg mb-4">
            <FiCode className="text-emerald-600 h-5 w-5" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
              {/* Card background accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="relative">
                <div className="text-emerald-500 mb-5 flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex-1 text-left md:pr-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg mr-3">
                <FiGithub className="text-white h-5 w-5" />
              </div>
              <div className="font-semibold text-lg">GitHub Project</div>
            </div>
            <h3 className="text-2xl font-bold mb-3">Contribute to Astreus</h3>
            <p className="text-gray-600 mb-4">Join our community of developers building the future of AI agents. Star the repo, report issues, or make a pull request.</p>
            <div className="flex items-center gap-4">
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white text-sm py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
              >
                <FiGithub className="mr-2" />
                View on GitHub
              </a>
              <a 
                href={`${githubLink}/stargazers`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white border border-gray-300 hover:border-gray-400 text-gray-700 text-sm py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <FiStar className="mr-2 text-amber-400" />
                Star
              </a>
            </div>
          </div>
          <div className="hidden md:block h-32 border-l border-gray-200"></div>
          <div className="flex-1">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 font-mono text-xs">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1 text-right text-gray-500">install.sh</div>
              </div>
              <div className="text-gray-600 leading-relaxed">
                <span className="text-emerald-600">$</span> npm install astreus<br/>
                <span className="text-gray-500">Installing packages...</span><br/>
                <span className="text-emerald-600">$</span> npx astreus init<br/>
                <span className="text-green-600">✓</span> <span className="text-gray-500">Project initialized!</span><br/>
                <span className="text-emerald-600">$</span> npm run dev<br/>
                <span className="text-gray-500">Server started at http://localhost:3000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 