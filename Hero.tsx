import React, { useState } from 'react';
import { ArrowRight, Globe, LayoutDashboard, Video, Cpu, CheckCircle2, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';
import { HERO_DATA } from '../data/websiteData';

interface HeroProps {
  onNavigateToContact: () => void;
  onExploreServices: () => void;
  onSelectServiceNode?: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateToContact,
  onExploreServices,
  onSelectServiceNode,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-5 h-5 text-sky-600" />,
    LayoutDashboard: <LayoutDashboard className="w-5 h-5 text-indigo-600" />,
    Video: <Video className="w-5 h-5 text-cyan-600" />,
    Cpu: <Cpu className="w-5 h-5 text-blue-600" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
  };

  const serviceIdMap: string[] = [
    'business-websites',
    'founder-dashboards',
    'ai-video-editing',
    'systems-organization',
    'planning-execution',
  ];

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white"
    >
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Trust Statement Badge */}
            <div
              id="hero-trust-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-sky-300 text-xs font-semibold tracking-wide shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{HERO_DATA.trustStatement}</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Turning Business Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300">
                Digital Reality.
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {HERO_DATA.subheadline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                onClick={onNavigateToContact}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-base transition-all duration-200 shadow-md shadow-sky-500/25 hover:shadow-sky-400/30 active:scale-98 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-base transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Key Value Micro-Proof */}
            <div className="pt-4 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Founder-Centric Execution</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Zero Technical Jargon</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Rapid Turnaround</span>
              </span>
            </div>

          </div>

          {/* Right Column: Connected Business Flow Visual (Interactive & Minimal) */}
          <div className="lg:col-span-5 w-full">
            <div
              id="hero-business-flow-card"
              className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 p-5 sm:p-6 shadow-xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Connected Business Pipeline
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">
                  {activeStepIndex + 1} of 5
                </span>
              </div>

              {/* Connected Flow Steps */}
              <div className="mt-5 space-y-2.5">
                {HERO_DATA.flowSteps.map((step, idx) => {
                  const isSelected = activeStepIndex === idx;
                  return (
                    <div
                      key={step.label}
                      id={`hero-flow-step-${idx}`}
                      onMouseEnter={() => setActiveStepIndex(idx)}
                      onClick={() => {
                        setActiveStepIndex(idx);
                        if (onSelectServiceNode) {
                          onSelectServiceNode(serviceIdMap[idx]);
                        }
                      }}
                      className={`group p-3 sm:p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-slate-700/90 border-sky-400/80 shadow-md translate-x-1'
                          : 'bg-slate-800/50 border-slate-700/60 hover:bg-slate-700/50 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                            isSelected ? 'bg-slate-900 shadow-sm' : 'bg-slate-900/60'
                          }`}
                        >
                          {iconMap[step.icon]}
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-sm font-semibold tracking-tight transition-colors ${
                                isSelected ? 'text-white' : 'text-slate-200'
                              }`}
                            >
                              {step.label}
                            </span>
                            {idx < HERO_DATA.flowSteps.length - 1 && (
                              <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
                                →
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-slate-400 font-normal">
                            {step.detail}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center pl-2">
                        <span
                          className={`text-xs px-2 py-0.5 rounded font-medium transition-colors ${
                            isSelected
                              ? 'bg-sky-400/20 text-sky-300 font-semibold'
                              : 'text-slate-500 group-hover:text-slate-300'
                          }`}
                        >
                          {isSelected ? 'Active' : 'Step ' + (idx + 1)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Synergy Statement */}
              <div className="mt-5 pt-4 border-t border-slate-700/80 bg-slate-900/50 rounded-xl p-3 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <p className="text-xs text-slate-300 leading-snug">
                  <span className="font-semibold text-white">Seamless Synergy:</span> Not isolated
                  gigs. Every website, dashboard, and workflow is integrated into your business execution.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
