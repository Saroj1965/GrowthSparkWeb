import React, { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Clock,
  UserCheck,
  ArrowRight,
  Globe,
  LayoutDashboard,
  Video,
  Boxes,
  CheckSquare,
  CalendarCheck,
  Compass,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForContact: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
  onSelectForContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-6 h-6 text-sky-600" />,
    LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-indigo-600" />,
    Video: <Video className="w-6 h-6 text-cyan-600" />,
    Boxes: <Boxes className="w-6 h-6 text-blue-600" />,
    CheckSquare: <CheckSquare className="w-6 h-6 text-violet-600" />,
    CalendarCheck: <CalendarCheck className="w-6 h-6 text-teal-600" />,
    Compass: <Compass className="w-6 h-6 text-slate-700" />,
  };

  return (
    <div
      id="service-details-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        id="service-details-modal-content"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 sm:p-7 sm:pb-5 border-b border-slate-100 flex items-start justify-between bg-slate-50/80">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
              {iconMap[service.iconName] || <Globe className="w-6 h-6 text-sky-600" />}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                Service Breakdown
              </span>
              <h3 id="service-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900">
                {service.name}
              </h3>
            </div>
          </div>

          <button
            id="service-modal-close-btn"
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            {service.shortDescription}
          </p>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <span>What Is Included &amp; Delivered</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For & Expected Outcomes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Ideal For</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {service.idealFor}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Turnaround Guide</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {service.timelineGuide}
              </p>
            </div>
          </div>

          {/* Business Outcomes */}
          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Direct Business Outcomes
            </h4>
            <ul className="space-y-1.5">
              {service.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            Ready to discuss your {service.name.toLowerCase()} needs?
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200/70 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              id="service-modal-inquire-btn"
              type="button"
              onClick={() => {
                onClose();
                onSelectForContact(service.name);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span>Inquire About This</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
