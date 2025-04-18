import { FiGithub, FiMessageCircle, FiUsers, FiStar } from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';

interface CommunityStats {
  label: string;
  value: string;
}

interface CommunitySectionProps {
  title: string;
  subtitle: string;
  stats: CommunityStats[];
  discordLink: string;
  githubLink: string;
}

export default function CommunitySection({
  title,
  subtitle,
  stats,
  discordLink,
  githubLink
}: CommunitySectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background designs */}
      <div className="absolute -left-64 bottom-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 md:max-w-md">
            <div className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-lg mb-6">
              <FiUsers className="text-emerald-600 h-5 w-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">{title}</h2>
            <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg mb-8">{subtitle}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href={discordLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white text-sm py-3 px-6 rounded-lg transition-all duration-200 shadow-sm"
              >
                <FiMessageCircle className="mr-2" />
                Join Discord Community
              </a>
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 text-sm py-3 px-6 rounded-lg transition-all duration-200 shadow-sm"
              >
                <FiGithub className="mr-2" />
                Star on GitHub
              </a>
            </div>
            
            <div className="hidden md:block">
              <p className="text-gray-500 mb-4 italic text-sm">Connect with us on social media:</p>
              <div className="flex items-center gap-4">
                <a href="https://x.com/astreusai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all">
                  <RiTwitterXFill />
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all">
                  <FiGithub />
                </a>
                <a href={discordLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all">
                  <FiMessageCircle />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="relative bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-emerald-50/30 rounded-tr-3xl"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6">Community Stats</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col items-center text-center">
                      <div className="text-3xl font-bold text-emerald-600 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                      <img 
                        src="https://api.dicebear.com/7.x/lorelei/svg?seed=50&backgroundColor=0fa573" 
                        alt="Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Join 500+ developers</div>
                      <div className="text-xs text-gray-500">Last contribution 2 hours ago</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 flex-wrap mb-3">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        <img 
                          src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${i + 100}&backgroundColor=0fa573`} 
                          alt={`Community avatar ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500">+</div>
                  </div>
                  
                  <div className="bg-emerald-50 p-3 rounded-lg text-center">
                    <div className="flex items-center justify-center gap-1 text-sm font-medium text-emerald-700">
                      <FiStar className="text-amber-400" />
                      Star the repository to stay updated with new releases!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 