import React from 'react';
import { Sparkles, CheckCircle2, User, ShieldCheck, Compass, Code, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image/Avatar Profile Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              {/* Background ambient accent */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500 to-indigo-500 rounded-3xl blur-lg opacity-20" />
              
              <div
                id="about-profile-card"
                className="relative bg-white rounded-3xl p-7 border border-slate-200 shadow-xl space-y-6"
              >
                {/* Professional Profile Visual Placeholder */}
                <div className="w-full aspect-square max-w-[280px] mx-auto rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-6 text-center text-white relative overflow-hidden border border-slate-700 shadow-inner">
                  <div className="w-20 h-20 rounded-full bg-slate-700/80 border-2 border-sky-400/50 flex items-center justify-center mb-3">
                    <User className="w-10 h-10 text-sky-300" />
                  </div>
                  <span className="font-bold text-base tracking-tight text-white">
                    GrowthSparkWeb
                  </span>
                  <span className="text-xs text-sky-400 font-mono mt-0.5">
                    Lead Digital &amp; Execution Partner
                  </span>
                  
                  <div className="mt-4 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-600 text-[11px] text-slate-300 flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Open for New Projects &amp; Sprints</span>
                  </div>
                </div>

                {/* Core Principles Mini-List */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Single point of contact for technical &amp; operational work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Pragmatic focus on what drives actual business value</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Transparent communication and reliable delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider">
              About GrowthSparkWeb
            </div>

            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              Built on a Simple Principle: <br />
              <span className="text-slate-800">Pragmatic Execution Over Unnecessary Complexity.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                GrowthSparkWeb was created around a simple idea: businesses don't always need more
                complexity — they need someone who can understand what needs to be done and help make it
                happen.
              </p>
              <p>
                From building a business website to organizing information, creating dashboards, producing
                AI-assisted content or coordinating operational details, GrowthSparkWeb brings digital
                skills and practical business execution together.
              </p>
            </div>

            {/* 3 Pillars of Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Compass className="w-4 h-4 text-sky-600" />
                  <span>Strategic Clarity</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We look at the whole picture before jumping into technical tasks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Code className="w-4 h-4 text-indigo-600" />
                  <span>Modern Web Craft</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Clean, responsive static code that loads instantly and lasts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  <span>Hands-On Delivery</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Staying until the tasks are tested, launched, and running smoothly.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
