// src/pages/NotFound/NotFound.jsx
import React from "react";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";
import PageTransition from "../../components/PageTransition/PageTransition";
import Button from "../../components/Button/Button";
import { transitions } from "../../lib/motionTokens";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="min-h-[70vh] flex items-center justify-center py-20 bg-cream">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          {/* Animated Ribbon 404 Illustration */}
          <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="notFoundGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#FD7B03" />
                  <stop offset="100%" stop-color="#FD3502" />
                </linearGradient>
              </defs>
              <motion.path
                d="M20 50 C20 20, 50 20, 50 50 C50 80, 80 80, 80 50"
                stroke="url(#notFoundGrad)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: transitions.fluidEase }}
              />
            </svg>
            <span className="absolute font-bold text-3xl font-['Space_Grotesk'] text-ink">
              404
            </span>
          </div>

          <h1 className="text-3xl font-bold font-['Space_Grotesk'] text-ink">
            This page wandered off
          </h1>

          <p className="text-sm text-body-text font-['Plus_Jakarta_Sans'] leading-relaxed">
            The page you are looking for doesn't exist or has moved. Let's get
            you back to familiar ground.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <Button
              to="/"
              variant="primary"
              size="md"
              icon={Home}
              iconPosition="left"
            >
              Return Home
            </Button>
            <Button to="/services" variant="secondary" size="md">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
