import Image from 'next/image';

interface Integration {
  name: string;
  icon: string;
  color?: string;
}

interface IntegrationGridProps {
  integrations: Integration[];
  title?: string;
}

/**
 * Component to display a grid of integration logos
 * Matches the Lens site design
 */
export default function IntegrationGrid({ integrations, title }: IntegrationGridProps) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {title && (
          <h2 className="text-2xl font-bold text-center mb-16">{title}</h2>
        )}
        
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-10 justify-items-center max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-2">
                <Image 
                  src={`/icons/${integration.icon}.svg`} 
                  alt={integration.name} 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <span className="text-xs font-medium text-gray-700">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 