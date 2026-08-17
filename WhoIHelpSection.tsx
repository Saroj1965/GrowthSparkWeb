import React, { useState } from 'react';
import {
  Flame,
  Sparkles,
  Store,
  Zap,
  Briefcase,
  Wrench,
  Users,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { WHO_I_HELP_PERSONAS } from '../data/websiteData';

interface WhoIHelpSectionProps {
  onSelectPersona: (personaTitle: string) => void;
}

export const WhoIHelpSection: React.FC<WhoIHelpSectionProps> = ({ onSelectPersona }) => {
  const [activePersonaId, setActivePersonaId] = useState<string>('founders');

  const iconMap: Record<string, React.ReactNode> = {
    Flame: <Flame className="w-5 h-5 text-amber-500" />,
    Sparkles: <Sparkles className="w-5 h-5 text-sky-500" />,
    Store: <Store className="w-5 h-5 text-emerald-500" />,
    Zap: <Zap className="w-5 h-5 text-indigo-500" />,
    Briefcase: <Briefcase className="w-5 h-5 text-blue-500" />,
    Wrench: <Wrench className="w-5 h-5 text-teal-500" />,
    Users: <Users className="w-5 h-5 text-purple-500" />,
  };

  return (
    <section id="who-i-help" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            Target Audience &amp; Partners
          </div>
          
          <h2
            id="who-i-help-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Built for People Who Have a Lot to Get Done
          </h2>
          
          <p
            id="who-i-help-subtext"
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            If you have a business idea, a growing operation or too many moving pieces,
            GrowthSparkWeb can help bring structure and execution to the work.
          </p>
        </div>

        {/* Persona Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {WHO_I_HELP_PERSONAS.map((persona) => {
            const isSelected = activePersonaId === persona.id;
            return (
              <div
                key={persona.id}
                id={`persona-card-${persona.id}`}
                onClick={() => setActivePersonaId(persona.id)}
                className={`group rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-800 shadow-xl ring-2 ring-sky-400/40'
                    : 'bg-slate-50 hover:bg-white text-slate-900 border-slate-200/90 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-slate-800' : 'bg-white border border-slate-200'
                      }`}
                    >
                      {iconMap[persona.iconName] || <Sparkles className="w-5 h-5 text-sky-500" />}
                    </div>

                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded ${
                        isSelected ? 'bg-slate-800 text-slate-300' : 'bg-slate-200/70 text-slate-600'
                      }`}
                    >
                      Audience
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold tracking-tight mb-3 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {persona.title}
                  </h3>

                  {/* Challenge */}
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-rose-500">
                      <AlertCircle className="w-3 h-3" />
                      <span>The Challenge</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                      {persona.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-1 mb-4">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-500">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>How We Help</span>
                    </div>
                    <p className={`text-xs leading-relaxed font-medium ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                      {persona.solution}
                    </p>
                  </div>
                </div>

                {/* Bottom Trigger */}
                <div className="pt-3 border-t border-slate-200/40 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPersona(persona.title);
                    }}
                    className={`text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer ${
                      isSelected ? 'text-sky-300 hover:text-sky-200' : 'text-slate-700 hover:text-sky-600'
                    }`}
                  >
                    <span>Work With Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Helper Card for unique needs */}
          <div className="bg-gradient-to-br from-sky-50 to-indigo-50/50 rounded-2xl p-6 border border-sky-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-2">
                Have a specialized role?
              </span>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                Custom Operational Needs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you are a solo creator, a non-profit director, or a venture partner, we adapt to
                your exact operational reality.
              </p>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => onSelectPersona('Custom Operational Needs')}
                className="w-full text-center px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Tell Us What You Need
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
