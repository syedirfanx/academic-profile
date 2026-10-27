import React, { useState } from 'react';
import { Mail, Check, Copy, ExternalLink, Globe, Github, Linkedin, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-10">
      <div className="max-w-5xl mx-auto px-6 space-y-5">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950">
            Contact
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            I welcome correspondence from prospective PhD advisors, admissions committees, and research collaborators.
          </p>
        </div>

        <div className="space-y-3.5 max-w-2xl text-sm">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-semibold text-stone-900">Email:</span>
            <a 
              href={`mailto:${PROFILE_DATA.email}?subject=Prospective%20PhD%20Inquiry%20-%20Syed%20Irfan`}
              className="text-stone-900 font-mono underline hover:text-stone-700"
            >
              {PROFILE_DATA.email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 text-xs text-stone-600 hover:text-stone-950 border border-stone-300 px-2 py-0.5 rounded bg-white hover:bg-stone-50 transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3 h-3 text-emerald-700" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 text-stone-700 text-xs sm:text-sm">
            <MapPin className="w-3.5 h-3.5 text-stone-400" />
            <span>Based in <strong>{PROFILE_DATA.location}</strong> (GMT+6) · Available for virtual meetings.</span>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-stone-700 pt-2 border-t border-stone-100">
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 hover:text-stone-950 hover:underline"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-2.5 h-2.5 text-stone-400" />
            </a>

            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 hover:text-stone-950 hover:underline"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5 text-stone-400" />
            </a>

            <a
              href={PROFILE_DATA.personalDomain}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 hover:text-stone-950 hover:underline"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>syedirfan.co.uk</span>
              <ExternalLink className="w-2.5 h-2.5 text-stone-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
