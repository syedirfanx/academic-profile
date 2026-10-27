import React from 'react';

export const ResearchQuestions: React.FC = () => {
  const questions = [
    {
      title: "Learning Better Representations",
      inquiry: "How can models learn representations that remain useful when data is high-dimensional, heterogeneous, or distributed across different modalities?",
    },
    {
      title: "Multimodal Learning",
      inquiry: "How can information from text, images, and other modalities be aligned and combined without losing modality-specific information?",
    },
    {
      title: "Adaptation & Transfer",
      inquiry: "How can learned representations transfer effectively across tasks and domains with limited labeled data?",
    },
    {
      title: "LLM Reliability",
      inquiry: "How can LLM-based systems better use external knowledge, retrieval, memory, and contextual information while remaining reliable when information is incomplete or ambiguous?",
    },
    {
      title: "Optimization for Modern AI",
      inquiry: "How can optimization and feature-selection ideas contribute to more efficient and effective learning in increasingly complex models?",
    }
  ];

  return (
    <section id="questions" className="py-10 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 space-y-6">
        
        <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950">
          Research Questions
        </h2>

        <div className="space-y-5 max-w-3xl">
          {questions.map((q) => (
            <div key={q.title} className="border-l-2 border-stone-800 pl-3.5 py-1 space-y-1">
              <h3 className="text-base font-editorial font-semibold text-stone-950">
                {q.title}
              </h3>
              <p className="text-sm text-stone-800 leading-relaxed italic font-editorial">
                "{q.inquiry}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
