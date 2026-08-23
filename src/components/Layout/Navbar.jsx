import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import Button from "../Button/Button";
import { transitions } from "../../lib/motionTokens";
import Logo from "../../assets/logo/plogo-short.png";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Pricing", path: "/pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm border-b border-ink/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-ink text-white shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-200">
            <svg
              viewBox="0 0 100 100"
              className="w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="logoGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#FD7B03" />
                  <stop offset="100%" stop-color="#FD3502" />
                </linearGradient>
              </defs>
              {/* <path
                d="M30 80 V20 H54 C68 20 76 28 76 42 C76 56 68 64 54 64 H44"
                stroke="url(#logoGrad)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              /> */}
            </svg>
            <img
              src={Logo}
              alt="Privish Innovations"
              className="w-full h-full object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight text-ink font-['Space_Grotesk'] group-hover:text-brand-orange transition-colors">
              PRIVISH
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-widest text-brand-orange -mt-0.5 font-['Plus_Jakarta_Sans']">
              INNOVATIONS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-ink/5 shadow-xs">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-150 rounded-full font-['Plus_Jakarta_Sans'] ${
                  isActive
                    ? "text-ink font-semibold"
                    : "text-body-text hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-brand-orange/15 border border-brand-orange/20 rounded-full -z-10"
                    transition={transitions.fast}
                  />
                )}
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            to="/contact"
            variant="primary"
            size="sm"
            icon={ArrowRight}
            iconPosition="right"
          >
            Start Your Project
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-ink hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={transitions.fast}
            className="md:hidden overflow-hidden bg-cream border-b border-ink/10 shadow-xl"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-2">
                {NAV_LINKS.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors font-['Plus_Jakarta_Sans'] ${
                        isActive
                          ? "bg-brand-orange/15 text-brand-flame font-semibold"
                          : "text-ink hover:bg-ink/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-ink/10 flex flex-col gap-3">
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  icon={ArrowRight}
                >
                  Start Your Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
