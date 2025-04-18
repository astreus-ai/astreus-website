import Card from './Card';
import { ReactNode } from 'react';
import { FiLayers } from 'react-icons/fi';

interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
  iconColor?: string;
  actionText?: string;
  actionLink?: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

/**
 * Modern feature section with green accent
 */
export default function FeatureSection({ title, subtitle, features }: FeatureSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-50/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-36 transform opacity-20">
          <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
        </div>
        <div className="absolute left-2/3 top-1/4 transform opacity-20">
          <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
        </div>
        <div className="absolute left-1/3 bottom-1/3 transform opacity-20">
          <div className="w-5 h-5 bg-teal-400 rounded-full"></div>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-lg mb-5">
            <FiLayers className="text-emerald-600 h-5 w-5" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-20 h-1.5 bg-emerald-500 rounded-full mb-6 mx-auto"></div>
          {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              iconColor={feature.iconColor}
              actionText={feature.actionText}
              actionLink={feature.actionLink}
            />
          ))}
        </div>
        
        {/* Testimonial or highlight box */}
        <div className="mt-16 mx-auto max-w-3xl bg-emerald-50 rounded-2xl p-8 border border-emerald-100/60">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Ready to Build Your AI Agent?</h3>
              <p className="text-gray-600 text-sm">Get started with our comprehensive documentation and examples.</p>
            </div>
            <div>
              <a 
                href="/docs/getting-started" 
                className="inline-block bg-white text-emerald-700 hover:text-emerald-800 border border-emerald-200 shadow-sm hover:shadow px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
              >
                Explore Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 