import React, { useState } from 'react';
import {
  Globe,
  LayoutDashboard,
  Video,
  Boxes,
  CheckSquare,
  CalendarCheck,
  Compass,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/websiteData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onSelectForContact: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectForContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-6 h-6 text-sky-600" />,
    LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-indigo-600" />,
    Video: <Video className="w-6 h-6 text-cyan-600" />,
    Boxes: <Boxes className="w-6 h-6 text-blue-600" />,
    CheckSquare: <CheckSquare className="w-6 h-6 text-violet-600" />,
    CalendarCheck: <CalendarCheck className="w-6 h-6 text-teal-600" />,
    Compass: <Compass className="w-6 h-6 text-slate-700" />,
  };

  const handleOpenModal = (service: ServiceItem) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            Capabilities &amp; Solutions
          </div>
          
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            What I Can Help You With
          </h2>
          
          <p
            id="services-subtext"
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            From your primary customer touchpoint to your internal operational engine, here are the seven
            core ways GrowthSparkWeb accelerates your business.
          </p>
        </div>

        {/* 7 Interactive Service Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {SERVICES_DATA.map((service, index) => {
            const isFeatured = index === 0 || index === 1; // Highlight websites and dashboards subtly
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-200 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-200/80 ${
                  isFeatured
                    ? 'border-slate-300 ring-1 ring-slate-200'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 group-hover:bg-sky-50 group-hover:border-sky-200 flex items-center justify-center transition-colors shadow-2xs">
                      {iconMap[service.iconName] || <Globe className="w-6 h-6 text-sky-600" />}
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-sky-600 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Preview Deliverable Pills */}
                  <div className="space-y-1.5 mb-6">
                    {service.deliverables.slice(0, 3).map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    id={`service-learn-more-${service.id}`}
                    type="button"
                    onClick={() => handleOpenModal(service)}
                    className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-sky-600 inline-flex items-center gap-1.5 transition-colors cursor-pointer focus:outline-none focus-visible:underline"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectForContact(service.name)}
                    className="text-xs font-medium px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-700 transition-colors cursor-pointer"
                  >
                    Quick Inquire
                  </button>
                </div>
              </div>
            );
          })}

          {/* 8th Helper Card: Custom Combination */}
          <div
            id="service-card-custom-package"
            className="group bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-7 border border-slate-700/80 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-sky-400" />
                </div>
                <span className="text-xs font-mono text-sky-300 uppercase tracking-wider font-semibold">
                  Custom
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-2.5">
                Multi-Service Execution Package
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Combine web design, founder dashboards, and operational systems into a single seamless monthly
                partnership or launch sprint.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-700/80">
              <button
                id="service-custom-package-btn"
                type="button"
                onClick={() => onSelectForContact('Custom Multi-Service Package')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <span>Discuss Custom Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Deep-dive Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelectForContact={(name) => onSelectForContact(name)}
      />
    </section>
  );
};
