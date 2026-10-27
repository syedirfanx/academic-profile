import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ResearchEvolution: React.FC = () => {
  const steps = [
    "High-dimensional data",
    "Feature selection & optimization",
    "Machine learning",
    "Deep learning",
    "Representation learning",
    "Generative AI / LLMs",
    "Multimodal and trustworthy intelligent systems"
  ];

  return (
    <section id="evolution" className="py-10">
      <div className="max-w-5xl mx-auto px-6 space-y-6">
        
        <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950">
          Research Evolution
        </h2>

        {/* Linear progression chain */}
        <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm text-stone-800 font-medium bg-stone-50 border border-stone-200 p-3 rounded leading-relaxed">
          {steps.map((step, idx) => (
            <React.Fragment key={step}>
              <span className="text-stone-950">{step}</span>
              {idx < steps.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 mx-2 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Narrative answering "Why LLMs and multimodal AI?" */}
        <div className="space-y-3 text-sm text-stone-700 leading-relaxed max-w-3xl">
          <p>
            My MSc research in swarm intelligence focused on eliminating uninformative attributes from high-dimensional spaces (up to 2,400 features), reducing dimensionality by up to 86%. This revealed the limitation of discrete feature selection: it filters existing features rather than learning rich latent abstractions.
          </p>
          <p>
            This prompted my transition toward deep learning and representation learning—learning continuous, invariant representations directly from data. Foundation models and LLMs represent a continuation of this trajectory: mapping diverse semantic distributions into unified latent spaces.
          </p>
          <p>
            My current direction connects optimization, representation learning, and multimodal AI to investigate how systems can learn sample-efficiently and reliably from heterogeneous data.
          </p>
        </div>

      </div>
    </section>
  );
};
