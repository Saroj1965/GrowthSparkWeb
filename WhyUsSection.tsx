import React from 'react';
import { Target, Wrench, Sliders, Cpu, Check, Shield } from 'lucide-react';
import { DIFFERENTIATORS } from '../data/websiteData';

export const WhyUsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Target: <Target className="w-6 h-6 text-sky-600" />,
    Wrench: <Wrench className="w-6 h-6 text-indigo-600" />,
    Sliders: <Sliders className="w-6 h-6 text-cyan-600" />,
    Cpu: <Cpu className="w-6 h-6 text-blue-600" />,
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            Why Choose Us
          </div>
          
          <h2
            id="why-us-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Why GrowthSparkWeb
          </h2>
          
          <p
            id="why-us-subtext"
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Not just another agency that dumps design files in your lap. We bridge technical craftsmanship
            with relentless execution discipline.
          </p>
        </div>

        {/* 4 Differentiators Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIATORS.map((diff, index) => (
            <div
              key={diff.title}
              id={`why-card-${index}`}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-sky-50 group-hover:border-sky-200 flex items-center justify-center mb-5 transition-colors">
                  {iconMap[diff.iconName] || <Shield className="w-6 h-6 text-sky-600" />}
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
                  {diff.subtitle}
                </span>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                  {diff.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {diff.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-start gap-2 text-xs font-medium text-slate-700 bg-slate-50/50 p-3 rounded-xl">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{diff.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison / Trust Callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 max-w-4xl mx-auto shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                The GrowthSparkWeb Standard
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                Direct founder-level attention. No junior handoffs.
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When you partner with GrowthSparkWeb, you collaborate with an experienced builder who
                understands strategy, code, and operational reality.
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Clear weekly milestone check-ins &amp; transparent backlogs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Production code ready for direct Vercel static deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Pragmatic cost structures with clear, upfront scopes</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
