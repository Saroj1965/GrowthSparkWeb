import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, MessageSquare, HelpCircle } from 'lucide-react';
import { NEED_SCENARIOS } from '../data/websiteData';

interface InteractiveNeedsSectionProps {
  onSelectNeedForContact: (needQuestion: string, serviceName: string) => void;
}

export const InteractiveNeedsSection: React.FC<InteractiveNeedsSectionProps> = ({
  onSelectNeedForContact,
}) => {
  const [selectedNeedId, setSelectedNeedId] = useState<string>(NEED_SCENARIOS[0].id);

  const activeScenario =
    NEED_SCENARIOS.find((s) => s.id === selectedNeedId) || NEED_SCENARIOS[0];

  return (
    <section
      id="needs-matcher"
      className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            Interactive Solution Matcher
          </div>
          
          <h2
            id="needs-matcher-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            What Are You Trying to Get Done?
          </h2>
          
          <p
            id="needs-matcher-subtext"
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Select your current biggest priority below to see our recommended approach and concrete next step.
          </p>
        </div>

        {/* Interactive Selector Layout */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Selectable Pills */}
          <div className="lg:col-span-6 flex flex-col space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 px-1">
              Select Your Situation:
            </span>
            {NEED_SCENARIOS.map((scenario) => {
              const isSelected = selectedNeedId === scenario.id;
              return (
                <button
                  key={scenario.id}
                  id={`need-option-${scenario.id}`}
                  type="button"
                  onClick={() => setSelectedNeedId(scenario.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md font-bold ring-2 ring-sky-400/30 translate-x-1'
                      : 'bg-slate-50 hover:bg-white text-slate-800 border-slate-200 hover:border-slate-300 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isSelected ? 'bg-sky-400' : 'bg-slate-400'
                      }`}
                    />
                    <span className="text-sm sm:text-base">{scenario.question}</span>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded font-mono ${
                      isSelected ? 'bg-slate-800 text-sky-300' : 'text-slate-400'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'View'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Tailored Response Box */}
          <div className="lg:col-span-6 flex flex-col">
            <div
              id="need-response-card"
              className="h-full bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 border border-slate-700/90 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-sky-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                      Tailored Action Plan
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    Service: {activeScenario.suggestedServiceName}
                  </span>
                </div>

                {/* Direct Quote / Response */}
                <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700">
                  <p className="text-lg sm:text-xl font-bold text-white tracking-tight italic leading-snug">
                    {activeScenario.response}
                  </p>
                </div>

                {/* Concrete Approach */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Recommended Approach:
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {activeScenario.suggestedApproach}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>No lengthy proposal delays — start with a direct 30-minute scoping call.</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Transparent milestones and flexible execution support.</span>
                  </div>
                </div>
              </div>

              {/* Action Button that pre-fills the Contact Form */}
              <div className="pt-8 mt-6 border-t border-slate-700/80">
                <button
                  id="need-scenario-cta-btn"
                  type="button"
                  onClick={() =>
                    onSelectNeedForContact(
                      activeScenario.question,
                      activeScenario.suggestedServiceName
                    )
                  }
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-md shadow-sky-500/20 active:scale-98 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{activeScenario.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
