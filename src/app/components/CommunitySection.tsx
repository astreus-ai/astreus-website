"use client";

import { FiGithub, FiMessageCircle, FiUsers, FiStar } from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.4
      }
    }
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const statsItemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.4
      }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-transparent">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="flex-1 md:max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div 
              className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-lg mb-6"
              variants={itemVariants}
            >
              <FiUsers className="text-emerald-600 h-5 w-5" />
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-5"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.div 
              className="w-16 h-1 bg-emerald-500 rounded-full mb-6"
              variants={itemVariants}
            ></motion.div>
            <motion.p 
              className="text-gray-600 text-lg mb-8"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={itemVariants}
            >
              <motion.a 
                href={discordLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white text-base py-3 px-6 rounded-full transition-all duration-200 shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiMessageCircle className="mr-2" />
                Join Community
              </motion.a>
              <motion.a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 text-base py-3 px-6 rounded-full transition-all duration-200 shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiGithub className="mr-2" />
                Star on GitHub
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="hidden md:block"
              variants={itemVariants}
            >
              <p className="text-gray-500 mb-4 italic text-base">Connect with us on social media:</p>
              <div className="flex items-center gap-4">
                <motion.a 
                  href="https://x.com/astreusai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
                  whileHover={{ scale: 1.1, backgroundColor: "#f1f1f1" }}
                >
                  <RiTwitterXFill />
                </motion.a>
                <motion.a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
                  whileHover={{ scale: 1.1, backgroundColor: "#f1f1f1" }}
                >
                  <FiGithub />
                </motion.a>
                <motion.a 
                  href={discordLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
                  whileHover={{ scale: 1.1, backgroundColor: "#f1f1f1" }}
                >
                  <FiMessageCircle />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative bg-white shadow-sm rounded-2xl p-8 border border-gray-100">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100/10 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gray-50/30 rounded-tr-3xl"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6">Community Stats</h3>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                  variants={statsContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center"
                      variants={statsItemVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                      <div className="text-base text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                      <Image 
                        src="https://api.dicebear.com/7.x/lorelei/png?seed=50&backgroundColor=0fa573" 
                        alt="Developer"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Join 500+ developers</div>
                      <div className="text-base text-gray-500">Last contribution 2 hours ago</div>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="flex gap-2 flex-wrap mb-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05 }
                      }
                    }}
                  >
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div 
                        key={i} 
                        className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden"
                        variants={{
                          hidden: { scale: 0, opacity: 0 },
                          visible: {
                            scale: 1,
                            opacity: 1,
                            transition: { 
                              type: "spring",
                              stiffness: 260,
                              damping: 20
                            }
                          }
                        }}
                      >
                        <Image 
                          src={`https://api.dicebear.com/7.x/lorelei/png?seed=${i + 100}&backgroundColor=0fa573`} 
                          alt={`Community avatar ${i + 1}`}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-base font-medium text-gray-500"
                      variants={{
                        hidden: { scale: 0, opacity: 0 },
                        visible: {
                          scale: 1,
                          opacity: 1,
                          transition: { 
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.4
                          }
                        }
                      }}
                    >+</motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gray-50 p-3 rounded-full text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center gap-1 text-base font-medium text-gray-700">
                      <FiStar className="w-4 h-4 min-w-4 text-amber-400" />
                      Star the repository to stay updated with new releases!
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 