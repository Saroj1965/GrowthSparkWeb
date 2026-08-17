import React from 'react';
import { Sparkles, ArrowUp, Mail, Linkedin, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'How I Work', href: '#how-i-work' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Who I Help', href: '#who-i-help' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-400 flex items-center justify-center text-white shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                GrowthSpark<span className="text-sky-400">Web</span>
              </span>
            </a>

            <p className="text-sm font-semibold text-slate-300 tracking-wide">
              Build. Organize. Execute. Grow.
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
              A practical digital and business execution partner for founders, entrepreneurs, and growing
              teams.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Top Button */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                Connect
              </span>
              <p className="text-xs text-slate-400 mb-3">
                customerservice@growthsparkweb.com
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:customerservice@growthsparkweb.com"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button
                id="footer-back-to-top-btn"
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-800 transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 GrowthSparkWeb. All rights reserved.</p>
          <p className="text-slate-400">
            Static &amp; fast performance • Designed for real business execution
          </p>
        </div>
      </div>
    </footer>
  );
};
