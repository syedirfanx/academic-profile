import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const SelectedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-8 md:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950">
            Selected Projects
          </h2>
        </div>

        <div className="space-y-6">
          {PROFILE_DATA.selectedProjects.map((project) => (
            <div
              key={project.id}
              className="border-l-2 border-stone-300 pl-4 py-1.5 space-y-1.5 hover:border-stone-800 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="font-semibold text-stone-950 text-base">
                  {project.title}
                </h3>
                <span className="text-xs sm:text-sm text-stone-500 shrink-0 font-normal">
                  {project.year}
                </span>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-stone-600 pt-0.5">
                <span className="font-medium text-stone-800">{project.context}</span>
                {project.githubUrl && (
                  <>
                    <span className="text-stone-300">·</span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 font-medium text-stone-900 underline hover:text-stone-700"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ExternalLink className="w-2.5 h-2.5 text-stone-400" />
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
