import React from 'react';
import { Code2, Layers, Rocket, TrendingUp, ArrowUpRight } from 'lucide-react';
import { PILLARS_DATA } from '../data/websiteData';

interface IntroPillarsProps {
  onLearnMoreClick?: (pillarId: string) => void;
}

export const IntroPillars: React.FC<IntroPillarsProps> = ({ onLearnMoreClick }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-sky-600" />,
    Layers: <Layers className="w-6 h-6 text-indigo-600" />,
    Rocket: <Rocket className="w-6 h-6 text-cyan-600" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-600" />,
  };

  return (
    <section id="intro" className="py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            Holistic Business Execution
          </div>
          
          <h2
            id="intro-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            More Than a Website. <br className="hidden sm:inline" />
            <span className="text-slate-800">A Practical Business Partner.</span>
          </h2>
          
          <p
            id="intro-subtext"
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            A good website is only one part of a growing business. GrowthSparkWeb brings
            together digital creation, organization and execution to help founders move from ideas to
            action.
          </p>
        </div>

        {/* 4 Feature Cards (Build, Organize, Execute, Grow) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS_DATA.map((pillar) => (
            <div
              key={pillar.id}
              id={`pillar-card-${pillar.id}`}
              className="group bg-slate-50 hover:bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-sky-50 border border-slate-200 group-hover:border-sky-200 flex items-center justify-center shadow-xs transition-colors duration-200 mb-5">
                  {iconMap[pillar.iconName]}
                </div>

                <div className="space-y-1 mb-3">
                  <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 space-y-2">
                {pillar.details.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Value Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg tracking-tight text-white">
              Need a tailored combination of services?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We frequently package website launches with founder dashboards and operational workflows.
            </p>
          </div>
          <a
            href="#services"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <span>See All 7 Core Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
