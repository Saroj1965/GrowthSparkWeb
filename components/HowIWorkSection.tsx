import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Layers, Terminal, Rocket, RefreshCw } from 'lucide-react';
import { HOW_I_WORK_STEPS } from '../data/websiteData';

interface HowIWorkSectionProps {
  onStartProject: () => void;
}

export const HowIWorkSection: React.FC<HowIWorkSectionProps> = ({ onStartProject }) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const stepIcons = [Layers, Terminal, Rocket, CheckCircle2, RefreshCw];

  return (
    <section id="how-i-work" className="py-20 md:py-28 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            Clear, Predictable Workflow
          </div>
          
          <h2
            id="how-i-work-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            How I Work
          </h2>
          
          <p
            id="how-i-work-subtext"
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            A 5-step collaborative process engineered to turn ideas into structured, executed realities without
            delays or miscommunication.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Connecting Track Line */}
            <div className="absolute top-7 left-12 right-12 h-1 bg-slate-200 -z-0" />
            
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {HOW_I_WORK_STEPS.map((step, idx) => {
                const isSelected = selectedStep === idx;
                const IconComponent = stepIcons[idx] || CheckCircle2;
                return (
                  <div
                    key={step.stepNumber}
                    id={`how-i-work-step-${idx}`}
                    onClick={() => setSelectedStep(idx)}
                    className="flex flex-col items-center text-center cursor-pointer group"
                  >
                    {/* Step Node Circle */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-200 mb-4 shadow-sm ${
                        isSelected
                          ? 'bg-slate-900 text-white scale-110 ring-4 ring-sky-400/40 shadow-lg'
                          : 'bg-white text-slate-700 border-2 border-slate-200 group-hover:border-slate-400'
                      }`}
                    >
                      <IconComponent className={`w-6 h-6 ${isSelected ? 'text-sky-400' : 'text-slate-500'}`} />
                    </div>

                    <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider mb-1">
                      Step {step.stepNumber}
                    </span>
                    <h3 className={`text-base font-bold transition-colors ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                      {step.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="mt-12 lg:hidden space-y-4">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
            {HOW_I_WORK_STEPS.map((step, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => setSelectedStep(idx)}
                  className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-700'
                  }`}
                >
                  {step.stepNumber} — {step.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Card */}
        <div
          id="how-i-work-detail-card"
          className="mt-10 max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-sky-700 text-xs font-mono font-bold">
                <span>Phase {HOW_I_WORK_STEPS[selectedStep].stepNumber}</span>
                <span>•</span>
                <span>{HOW_I_WORK_STEPS[selectedStep].title}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {HOW_I_WORK_STEPS[selectedStep].headline}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {HOW_I_WORK_STEPS[selectedStep].description}
              </p>
            </div>

            <div className="shrink-0 bg-slate-50 border border-slate-200/80 p-4 rounded-2xl text-left md:text-right min-w-[200px]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Concrete Deliverable
              </span>
              <span className="text-sm font-bold text-slate-900 block leading-tight">
                {HOW_I_WORK_STEPS[selectedStep].deliverable}
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Activities in this Phase:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {HOW_I_WORK_STEPS[selectedStep].activities.map((act, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                  <span className="leading-snug font-medium">{act}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span>Transparent communication via Slack, Notion, or weekly syncs.</span>
            </div>

            <button
              id="how-i-work-cta-btn"
              type="button"
              onClick={onStartProject}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <span>Start with Step 01</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
