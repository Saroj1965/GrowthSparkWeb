import React from 'react';
import { ArrowRight, ChevronRight, Sparkles, MessageCircle } from 'lucide-react';

interface CTASectionProps {
  onContactClick: () => void;
  onServicesClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onContactClick, onServicesClick }) => {
  return (
    <section id="cta-banner" className="py-20 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle ambient light gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ready for Clear, Structured Action</span>
        </div>

        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
        >
          Have Something You Need to Get Done?
        </h2>

        <p
          id="cta-text"
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Tell me what you're working on. We can identify what needs to be built, organized or executed —
          and take it from there.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            id="cta-banner-primary-btn"
            type="button"
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-base transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/35 active:scale-98 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="cta-banner-secondary-btn"
            type="button"
            onClick={onServicesClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 font-semibold text-base transition-colors cursor-pointer"
          >
            <span>View Services</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        <p className="text-xs text-slate-400 pt-2">
          Typically responds within 24 business hours • No high-pressure sales
        </p>

      </div>
    </section>
  );
};
