import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const RecentExploration: React.FC = () => {
  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-6 space-y-6">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950">
            Recent AI Exploration
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Independent software exploration and technical prototyping (distinct from formal peer-reviewed research).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROFILE_DATA.recentExploration.map((item) => (
            <div
              key={item.id}
              className="border border-stone-200 bg-stone-50/50 rounded p-5 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-base font-editorial font-semibold text-stone-950">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-xs text-stone-500 font-mono">
                  {item.technologies.join(' · ')}
                </div>
              </div>

              <div className="pt-2.5 border-t border-stone-200 flex items-center justify-between text-xs sm:text-sm">
                {item.githubUrl ? (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-stone-800 hover:text-stone-950 hover:underline font-medium"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                ) : <span />}

                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 font-medium text-stone-900 hover:underline"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
