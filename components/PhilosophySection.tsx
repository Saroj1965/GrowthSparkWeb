import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Lightbulb, Compass, Target, ArrowDown } from 'lucide-react';
import { PHILOSOPHY_FLOW } from '../data/websiteData';

export const PhilosophySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="philosophy" className="py-20 md:py-28 bg-white text-slate-900 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            Our Business Philosophy
          </div>

          <h2
            id="philosophy-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]"
          >
            Technology Is Useful. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
              Understanding the Business Is Essential.
            </span>
          </h2>

          <p
            id="philosophy-subtext"
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Every business has different priorities. The goal is not to add more tools or complexity.
            The goal is to understand what needs to happen, create the right solution and help move it forward.
          </p>
        </div>

        {/* Visual Pipeline Bar: Understand → Plan → Build → Organize → Execute → Improve */}
        <div className="mt-14 max-w-5xl mx-auto">
          {/* Horizontal Desktop Flow */}
          <div className="hidden lg:grid grid-cols-6 gap-2 p-2 rounded-2xl bg-slate-100 border border-slate-200/90">
            {PHILOSOPHY_FLOW.map((item, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  id={`philosophy-tab-${idx}`}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-md ring-1 ring-slate-200'
                      : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-xs font-mono font-bold text-sky-600">{item.step}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-sky-500" />}
                  </div>
                  <span className="font-bold text-sm tracking-tight">{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile/Tablet Horizontal Scroll Tabs */}
          <div className="lg:hidden flex overflow-x-auto gap-2 pb-2 scrollbar-none">
            {PHILOSOPHY_FLOW.map((item, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {item.step} {item.title}
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Showcase Card */}
          <div
            id="philosophy-active-card"
            className="mt-6 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl relative overflow-hidden"
          >
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800 text-sky-400 text-xs font-mono font-bold">
                  <span>Phase {PHILOSOPHY_FLOW[activeStepIndex].step}</span>
                  <span>•</span>
                  <span>{PHILOSOPHY_FLOW[activeStepIndex].title}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {PHILOSOPHY_FLOW[activeStepIndex].title}:{' '}
                  <span className="text-slate-300 font-normal">
                    {PHILOSOPHY_FLOW[activeStepIndex].keyAction}
                  </span>
                </h3>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  {PHILOSOPHY_FLOW[activeStepIndex].description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-sky-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Prioritizes real business outcomes over unnecessary technological friction.</span>
                </div>
              </div>

              {/* Navigation controls within card */}
              <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center gap-3">
                <div className="flex items-center gap-2">
                  {PHILOSOPHY_FLOW.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStepIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        activeStepIndex === i ? 'w-8 bg-sky-400' : 'bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStepIndex((prev) =>
                        prev > 0 ? prev - 1 : PHILOSOPHY_FLOW.length - 1
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStepIndex((prev) =>
                        prev < PHILOSOPHY_FLOW.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Next Phase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Philosophical Tenets */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Outcomes Over Tools</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Software is only as good as the revenue, clarity, or time savings it creates. We never recommend a tool simply because it is trendy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Clarity Over Complexity</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A single-page founder dashboard or a 3-page high-converting website often beats a convoluted 50-page enterprise setup.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Complete Accountability</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              We own the outcome from the first sketch to final deployment and ongoing operational maintenance.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
