import React, { useState } from 'react';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const PublicationsSection: React.FC = () => {
  const [showBibtex, setShowBibtex] = useState(false);
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  const pub = PROFILE_DATA.undergradResearch;

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-6 space-y-6">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950">
            Publication
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Peer-reviewed conference proceedings.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl">
          <div className="border-l-2 border-stone-800 pl-4 py-1.5 space-y-2.5 text-sm">
            <p className="text-stone-900 leading-relaxed font-serif text-sm sm:text-[15px] bg-stone-50 p-3 rounded border border-stone-200">
              Ahmed, K., Shahidi, T. R., <strong className="font-bold text-stone-950">Alam, S. M. I.</strong>, and Momen, S. (2019). “Rice Leaf Disease Detection Using Machine Learning Techniques.” 2019 International Conference on Sustainable Technologies for Industry 4.0 (STI), IEEE, pp. 1–5.
            </p>

            <div className="text-xs sm:text-sm text-stone-700 space-y-0.5 leading-relaxed">
              <div>
                <strong className="text-stone-900">Venue: </strong>
                IEEE STI 2019
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm pt-0.5">
              <a
                href={pub.scholarUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-stone-700 hover:text-stone-950 hover:underline inline-flex items-center gap-1 font-medium"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
              <span className="text-stone-300">·</span>
              <button
                onClick={() => setShowBibtex(!showBibtex)}
                className="text-stone-700 hover:text-stone-950 hover:underline font-medium"
              >
                {showBibtex ? 'Hide BibTeX' : 'View BibTeX'}
              </button>
              <span className="text-stone-300">·</span>
              <button
                onClick={handleCopyBibtex}
                className="text-stone-700 hover:text-stone-950 hover:underline inline-flex items-center gap-1 font-medium"
              >
                {copiedBibtex ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy BibTeX</span>
                  </>
                )}
              </button>
            </div>

            {showBibtex && (
              <div className="p-3 bg-stone-900 text-stone-100 rounded font-mono text-xs overflow-x-auto mt-2 leading-relaxed">
                <pre>{pub.bibtex}</pre>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
