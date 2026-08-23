import React from 'react';
import { Link } from 'react-router';
import { Mail, Phone, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0D0D0B] text-white pt-16 pb-12 overflow-hidden">
      {/* Decorative Lucknow Roomi Darwaza Silhouette Vector Line Art */}
      <div className="w-full overflow-hidden opacity-25 pointer-events-none mb-12 flex justify-center">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-6xl h-24 stroke-white/40"
          strokeWidth="1.5"
        >
          {/* Stylized Roomi Darwaza & Lucknow Minaret Skyline silhouette */}
          <path d="M0 110 H200 V95 H240 V80 H280 V60 C280 40, 320 20, 360 40 V60 H400 V90 H440 V110" />
          <path d="M440 110 H500 V80 C500 50, 530 30, 560 30 C590 30, 600 10, 600 10 C600 10, 610 30, 640 30 C670 30, 700 50, 700 80 V110" />
          {/* Main Grand Arch */}
          <path d="M520 110 C520 60, 560 45, 600 45 C640 45, 680 60, 680 110" />
          <path d="M550 110 C550 80, 575 65, 600 65 C625 65, 650 80, 650 110" />
          {/* Right Skyline */}
          <path d="M700 110 H760 V90 H800 V60 C840 40, 880 20, 920 40 V60 H960 V80 H1000 V95 H1200" />
          {/* Ground Baseline */}
          <line x1="0" y1="110" x2="1200" y2="110" strokeWidth="2" stroke="rgba(253, 123, 3, 0.4)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm border border-white/10">
                <svg
                  viewBox="0 0 100 100"
                  className="w-7 h-7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#FD7B03" />
                      <stop offset="100%" stop-color="#FD3502" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M30 80 V20 H54 C68 20 76 28 76 42 C76 56 68 64 54 64 H44"
                    stroke="url(#footerLogoGrad)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-white font-['Space_Grotesk']">
                  PRIVISH
                </span>
                <span className="block text-[10px] uppercase font-semibold tracking-widest text-brand-orange font-['Plus_Jakarta_Sans']">
                  INNOVATIONS
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed font-['Plus_Jakarta_Sans'] pt-2">
              "We help startups, businesses and organizations build, automate and grow with technology."
            </p>

            {/* Compliance Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                <span>Udyam MSME Registered</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>GST Compliant</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-['Space_Grotesk']">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-['Plus_Jakarta_Sans']">
              {['Home', 'About Us', 'Services', 'Work & Concepts', 'Pricing & Packages', 'Contact'].map((name, idx) => {
                const paths = ['/', '/about', '/services', '/work', '/pricing', '/contact'];
                return (
                  <li key={name}>
                    <Link
                      to={paths[idx]}
                      className="text-gray-400 hover:text-brand-orange transition-colors inline-flex items-center gap-1"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-['Space_Grotesk']">
              Specialized Solutions
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400 font-['Plus_Jakarta_Sans']">
              <li>
                <Link to="/services#website" className="hover:text-brand-orange transition-colors">
                  Web Applications & Portals
                </Link>
              </li>
              <li>
                <Link to="/services#mobile" className="hover:text-brand-orange transition-colors">
                  Cross-Platform Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services#portals" className="hover:text-brand-orange transition-colors">
                  Custom MIS & Dashboards
                </Link>
              </li>
              <li>
                <Link to="/services#tms" className="hover:text-brand-orange transition-colors">
                  Training Management Systems (TMS)
                </Link>
              </li>
              <li>
                <Link to="/services#ecommerce" className="hover:text-brand-orange transition-colors">
                  Localized Retail E-Commerce
                </Link>
              </li>
              <li>
                <Link to="/services#amc" className="hover:text-brand-orange transition-colors">
                  AMC & Cloud VPS Hosting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-['Space_Grotesk']">
              Contact & Studio
            </h3>
            <div className="space-y-3 text-sm text-gray-400 font-['Plus_Jakarta_Sans']">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                <span>Lucknow – 226022, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="tel:+918127015970" className="hover:text-white transition-colors">
                  +91 8127015970
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:privishinnovations@gmail.com" className="hover:text-white transition-colors">
                  privishinnovations@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Mon–Sat: 10:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-['Plus_Jakarta_Sans']">
          <p>© {new Date().getFullYear()} Privish Innovations. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
