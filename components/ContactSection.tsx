import React, { useState, useEffect } from 'react';
import {
  Send,
  Mail,
  Linkedin,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Phone,
} from 'lucide-react';
import { ContactFormData } from '../types';
import { SERVICES_DATA } from '../data/websiteData';

interface ContactSectionProps {
  initialServicePrefill?: string;
  initialNeedPrefill?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServicePrefill,
  initialNeedPrefill,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    serviceNeeded: initialServicePrefill || 'Business Website Design',
    message: initialNeedPrefill ? `I'm reaching out regarding: ${initialNeedPrefill}` : '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServicePrefill) {
      setFormData((prev) => ({
        ...prev,
        serviceNeeded: initialServicePrefill,
      }));
    }
    if (initialNeedPrefill) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message
          ? `${prev.message}\n(Selected Need: ${initialNeedPrefill})`
          : `I am interested in exploring help with: ${initialNeedPrefill}.`,
      }));
    }
  }, [initialServicePrefill, initialNeedPrefill]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of what you are working on';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please write at least 10 characters so we can understand your request';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean, fast frontend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      serviceNeeded: 'Business Website Design',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            Start a Conversation
          </div>
          
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Let's Work Together
          </h2>
          
          <p
            id="contact-subtext"
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Tell me about your business, current challenge, or project idea. We'll explore the best
            path forward together.
          </p>
        </div>

        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-6 sm:p-7 rounded-3xl border border-slate-200/90 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Direct Communication Channels
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prefer to reach out directly? Connect through any of the channels below for a prompt,
                straightforward reply.
              </p>

              <div className="space-y-3.5 pt-2">
                {/* Email Placeholder */}
                <a
                  href="mailto:customerservice@growthsparkweb.com"
                  id="contact-email-link"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-xs transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Email Inquiry
                    </span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                      customerservice@growthsparkweb.com
                    </span>
                  </div>
                </a>

                {/* LinkedIn Placeholder */}
                <a
                  href="linkedin.com/in/sarojini-mangalam-5b47a7114"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-link"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-xs transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      LinkedIn Network
                    </span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      linkedin.com/in/sarojini-mangalam-5b47a7114
                    </span>
                  </div>
                </a>

                {/* WhatsApp Placeholder */}
                <a
                  href="https://wa.me/919900263958"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-link"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-xs transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      WhatsApp Quick Chat
                    </span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      +91 9900263958 (WhatsApp)
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Response turnaround: usually within 24 hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div
              id="contact-form-container"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl relative"
            >
              {isSubmitted ? (
                /* Success Feedback State */
                <div
                  id="contact-success-state"
                  className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">Enquiry Received!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <span className="font-semibold text-slate-900">{formData.name}</span>.
                      We have received your note regarding{' '}
                      <span className="font-semibold text-slate-900">{formData.serviceNeeded}</span> and will review
                      your details promptly.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      id="contact-reset-btn"
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form id="contact-enquiry-form" onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                          : 'border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-sky-500 focus:ring-sky-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Company Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                            : 'border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-sky-500 focus:ring-sky-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company / Business Name
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="e.g. Acme Ventures"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm transition-all focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* What do you need help with? */}
                  <div>
                    <label htmlFor="contact-service-needed" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      What do you need help with? <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="contact-service-needed"
                      value={formData.serviceNeeded}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceNeeded: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm transition-all focus:outline-none cursor-pointer"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.name}>
                          {srv.name}
                        </option>
                      ))}
                      <option value="Custom Multi-Service Package">
                        Custom Multi-Service Package (Website + Dashboard + Execution)
                      </option>
                      <option value="General Business Consultation">
                        General Consultation / Not Sure Yet
                      </option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Brief Message / Project Context <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell us about what you want to build, current bottlenecks, or desired timeline..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                          : 'border-slate-200 bg-slate-50/50 hover:border-slate-300 focus:border-sky-500 focus:ring-sky-200'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base transition-all shadow-md active:scale-98 cursor-pointer disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                    >
                      {isSubmitting ? (
                        <span>Sending Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center font-normal">
                    Your details are kept confidential. Form can be connected to Formspree / Resend webhook.
                  </p>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
