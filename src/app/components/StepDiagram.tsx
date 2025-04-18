import Image from 'next/image';
import { ReactNode } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon?: ReactNode | string;
}

interface StepDiagramProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
}

/**
 * Component for displaying a numbered step diagram
 * Matches the Lens site design
 */
export default function StepDiagram({ steps, title, subtitle }: StepDiagramProps) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {title && (
          <h2 className="text-2xl font-bold text-center mb-3">{title}</h2>
        )}
        {subtitle && <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">{subtitle}</p>}
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 font-bold text-lg">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-full h-0.5 w-full -ml-2 bg-gray-200" />
                )}
              </div>
              
              {step.icon && (
                <div className="mb-4">
                  {typeof step.icon === 'string' ? (
                    <Image 
                      src={`/icons/${step.icon}.svg`} 
                      alt={step.title} 
                      width={24} 
                      height={24} 
                      className="mx-auto"
                    />
                  ) : (
                    <div className="mx-auto w-6 h-6">{step.icon}</div>
                  )}
                </div>
              )}
              
              <h3 className="text-lg font-medium mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 