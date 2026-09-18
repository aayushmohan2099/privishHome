// src/pages/Home/Home.jsx
import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  Monitor,
  Smartphone,
  Database,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Zap,
  MapPin,
  Sparkles,
  Layers,
  FileCode,
  TrendingUp,
  Building2,
  GraduationCap,
  Store,
  Stethoscope,
  Landmark,
} from "lucide-react";
import PageTransition from "../../components/PageTransition/PageTransition";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { variants, transitions } from "../../lib/motionTokens";

export default function Home() {
  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Soft Background Radial Gradient Accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-amber/10 to-brand-flame/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants.staggerContainer}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <motion.div
                variants={variants.fadeInUp}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider font-['Plus_Jakarta_Sans']"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Digital Transformation Partner · Lucknow, India</span>
              </motion.div>

              <motion.h1
                variants={variants.fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink font-['Space_Grotesk'] leading-[1.1]"
              >
                We Digitize{" "}
                <span className="text-gradient-brand">Your Dreams</span>
              </motion.h1>

              <motion.p
                variants={variants.fadeInUp}
                className="text-lg md:text-xl text-body-text font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl"
              >
                We specialize in building custom portals, MIS dashboards, and
                automation systems that solve real operational bottlenecks — not
                another templated website.
              </motion.p>

              <motion.div
                variants={variants.fadeInUp}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Start Your Project
                </Button>
                <Button to="/services" variant="secondary" size="lg">
                  See What We Build
                </Button>
              </motion.div>

              {/* Local Proximity Proof */}
              <motion.div
                variants={variants.fadeInUp}
                className="pt-4 flex items-center gap-2 text-xs text-muted font-medium font-['Plus_Jakarta_Sans']"
              >
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>
                  Available for on-site discovery sessions in Lucknow & Kanpur
                  region
                </span>
              </motion.div>
            </motion.div>

            {/* Right Interactive Mockup Panels */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: transitions.fluidEase }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
                {/* Background Card - Admin MIS Dashboard */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="absolute -top-4 -left-4 w-64 bg-ink text-white p-5 rounded-2xl shadow-xl border border-white/10 z-10"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="text-xs font-semibold font-['Space_Grotesk']">
                        Live Operations MIS
                      </span>
                    </div>
                    <span className="text-[10px] text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded">
                      99.9% Uptime
                    </span>
                  </div>
                  <div className="pt-3 space-y-2">
                    <div className="text-2xl font-bold font-['Space_Grotesk'] text-white">
                      ₹4,82,500
                    </div>
                    <div className="text-[11px] text-gray-400">
                      Monthly Processed Value
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-brand w-3/4 rounded-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Center Main Card - Training & Portal Management */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -6 }}
                  className="relative z-20 w-72 bg-white text-ink p-6 rounded-2xl shadow-2xl border border-ink/5"
                >
                  <div className="flex items-center justify-between pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange font-['Plus_Jakarta_Sans']">
                      TMS Admin Console
                    </span>
                    <Layers className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span>Enrolled Batches</span>
                      <span className="font-bold text-ink">14 Active</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span>Attendance Sync</span>
                      <span className="text-emerald-600 font-bold">
                        100% Automated
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-cream border border-ink/5 text-xs text-body-text">
                      "Batch 04 certificates generated and dispatched
                      automatically."
                    </div>
                  </div>
                </motion.div>

                {/* Lower Right Card - Field Mobile App */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="absolute -bottom-4 -right-4 w-60 bg-gradient-to-br from-brand-amber to-brand-flame text-white p-4 rounded-2xl shadow-xl z-30"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="w-4 h-4 text-white" />
                    <span className="text-xs font-bold font-['Space_Grotesk']">
                      Beneficiary App
                    </span>
                  </div>
                  <p className="text-[11px] text-white/90 leading-tight">
                    Offline data capture with instant cloud ledger sync when
                    connected.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="py-8 bg-white border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center text-center">
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold text-ink font-['Space_Grotesk']">
                Udyam MSME Registered
              </span>
              <span className="text-xs text-muted font-['Plus_Jakarta_Sans']">
                Micro-Enterprise Protections
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold text-ink font-['Space_Grotesk']">
                GST Compliant
              </span>
              <span className="text-xs text-muted font-['Plus_Jakarta_Sans']">
                Clean Invoicing & ITC
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold text-ink font-['Space_Grotesk']">
                MCA SPICe+ Process
              </span>
              <span className="text-xs text-muted font-['Plus_Jakarta_Sans']">
                Private Limited Governance
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold text-ink font-['Space_Grotesk']">
                Lucknow Studio
              </span>
              <span className="text-xs text-muted font-['Plus_Jakarta_Sans']">
                Direct Accountability
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Specializations */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Build"
            title="Engineered for"
            highlight="Operational Impact"
            description="We build tailored digital systems that eliminate manual overhead, organize fragmented data, and scale your organization."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink font-['Space_Grotesk'] mb-3">
                  Website Development
                </h3>
                <p className="text-sm text-body-text leading-relaxed font-['Plus_Jakarta_Sans']">
                  Responsive, modern, and high-performance websites that elevate
                  your brand and drive measurable conversions.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/services#website"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-flame hover:text-brand-orange transition-colors"
                >
                  Explore Web Solutions <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>

            <Card className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink font-['Space_Grotesk'] mb-3">
                  Mobile App Development
                </h3>
                <p className="text-sm text-body-text leading-relaxed font-['Plus_Jakarta_Sans']">
                  Android & iOS applications that deliver buttery-smooth field
                  experiences and accelerate business growth.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/services#mobile"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-flame hover:text-brand-orange transition-colors"
                >
                  Explore Mobile Apps <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>

            <Card className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink font-['Space_Grotesk'] mb-3">
                  Portals & MIS Solutions
                </h3>
                <p className="text-sm text-body-text leading-relaxed font-['Plus_Jakarta_Sans']">
                  Custom back-office portals and automated dashboards to
                  streamline operations and empower decisive management.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/services#portals"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-flame hover:text-brand-orange transition-colors"
                >
                  Explore MIS Portals <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              to="/services"
              variant="secondary"
              size="md"
              icon={ArrowRight}
            >
              Explore All Specialized Services
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Why Privish Innovations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Privish Advantage"
            title="Built on"
            highlight="Substance & Accountability"
            description="We deliberately compete on operational substance rather than agency fluff. Here is why clients partner with us."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-cream border border-ink/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold font-['Space_Grotesk']">
                01
              </div>
              <h4 className="text-lg font-bold text-ink font-['Space_Grotesk']">
                Outcome-Driven, Not Hour-Billed
              </h4>
              <p className="text-sm text-body-text font-['Plus_Jakarta_Sans'] leading-relaxed">
                You pay for working milestones and delivered automation, never
                an inflated hourly timesheet.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-ink/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold font-['Space_Grotesk']">
                02
              </div>
              <h4 className="text-lg font-bold text-ink font-['Space_Grotesk']">
                Modular Architecture
              </h4>
              <p className="text-sm text-body-text font-['Plus_Jakarta_Sans'] leading-relaxed">
                We develop reusable, modern blocks to accelerate project
                timelines and slash maintenance costs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-ink/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold font-['Space_Grotesk']">
                03
              </div>
              <h4 className="text-lg font-bold text-ink font-['Space_Grotesk']">
                Local Proximity
              </h4>
              <p className="text-sm text-body-text font-['Plus_Jakarta_Sans'] leading-relaxed">
                Based locally in Lucknow. No timezone mismatch, real
                face-to-face planning, and swift communication.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-ink/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold font-['Space_Grotesk']">
                04
              </div>
              <h4 className="text-lg font-bold text-ink font-['Space_Grotesk']">
                Transparent 30/40/30 Split
              </h4>
              <p className="text-sm text-body-text font-['Plus_Jakarta_Sans'] leading-relaxed">
                30% upfront, 40% when you test the working build, and 30% at
                launch. Complete cash-flow peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How We Work (Sequential Timeline) */}
      <section className="py-20 bg-cream border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver"
            highlight="Predictable Results"
            description="A clear, phased roadmap designed to give you total visibility and control at every step."
            align="left"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                num: "01",
                title: "Discovery Call",
                desc: "Deep dive into your exact operational bottlenecks and technical goals.",
              },
              {
                num: "02",
                title: "Scope & Milestones",
                desc: "Detailed architectural roadmap with clear 30/40/30 milestone pricing.",
              },
              {
                num: "03",
                title: "Active Build",
                desc: "Robust full-stack development. 40% milestone due upon functional test access.",
              },
              {
                num: "04",
                title: "Launch & Handover",
                desc: "Production deployment onto secure cloud VPS. Final 30% due.",
              },
              {
                num: "05",
                title: "Ongoing AMC",
                desc: "Continuous data backups, security monitoring, and version support.",
              },
            ].map((step, idx) => (
              <div
                key={step.num}
                className="relative p-5 rounded-2xl bg-white border border-ink/5 shadow-xs space-y-2"
              >
                <span className="text-xs font-bold text-brand-orange uppercase font-['Plus_Jakarta_Sans']">
                  Step {step.num}
                </span>
                <h4 className="text-base font-bold text-ink font-['Space_Grotesk']">
                  {step.title}
                </h4>
                <p className="text-xs text-body-text leading-relaxed font-['Plus_Jakarta_Sans']">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted font-['Space_Grotesk']">
              Tailored Digital Solutions Across Core Sectors
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-cream border border-ink/5 text-center flex flex-col items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-orange" />
              <span className="text-xs font-bold text-ink font-['Space_Grotesk']">
                NGOs & Foundations
              </span>
            </div>
            <div className="p-4 rounded-xl bg-cream border border-ink/5 text-center flex flex-col items-center gap-2">
              <GraduationCap className="w-6 h-6 text-brand-orange" />
              <span className="text-xs font-bold text-ink font-['Space_Grotesk']">
                Coaching Institutes
              </span>
            </div>
            <div className="p-4 rounded-xl bg-cream border border-ink/5 text-center flex flex-col items-center gap-2">
              <Store className="w-6 h-6 text-brand-orange" />
              <span className="text-xs font-bold text-ink font-['Space_Grotesk']">
                Retail & Local Stores
              </span>
            </div>
            <div className="p-4 rounded-xl bg-cream border border-ink/5 text-center flex flex-col items-center gap-2">
              <Stethoscope className="w-6 h-6 text-brand-orange" />
              <span className="text-xs font-bold text-ink font-['Space_Grotesk']">
                Medical & Pharma
              </span>
            </div>
            <div className="p-4 rounded-xl bg-cream border border-ink/5 text-center flex flex-col items-center gap-2">
              <Landmark className="w-6 h-6 text-brand-orange" />
              <span className="text-xs font-bold text-ink font-['Space_Grotesk']">
                Public & Institutional
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Pricing Preview */}
      <section className="py-20 bg-cream border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Transparent Packages"
            title="Clear, Predictable"
            highlight="Rupee Pricing"
            description="No hidden fees. Choose a standard tier or let us scope your custom MIS build."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-muted font-['Plus_Jakarta_Sans']">
                  Starter Tier
                </span>
                <div className="text-3xl font-bold font-['Space_Grotesk'] text-ink mt-2 mb-1">
                  ₹19,999
                </div>
                <p className="text-xs text-muted mb-6">
                  Ideal for marketing sites & early businesses
                </p>
                <ul className="text-left text-xs space-y-2.5 font-['Plus_Jakarta_Sans'] border-t border-ink/5 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />{" "}
                    Custom Layout & UI Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />{" "}
                    Customer Interface & Mobile-Ready
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />{" "}
                    Admin Console & Staff Training
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Button
                  to="/pricing"
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  View Starter Details
                </Button>
              </div>
            </Card>

            <Card className="text-center flex flex-col justify-between border-2 border-brand-orange relative shadow-lg">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-brand text-white text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full">
                Most Popular
              </span>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-brand-orange font-['Plus_Jakarta_Sans']">
                  Standard Tier
                </span>
                <div className="text-3xl font-bold font-['Space_Grotesk'] text-ink mt-2 mb-1">
                  ₹34,999
                </div>
                <p className="text-xs text-muted mb-6">
                  Complete portal with operational reporting
                </p>
                <ul className="text-left text-xs space-y-2.5 font-['Plus_Jakarta_Sans'] border-t border-ink/5 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />{" "}
                    Everything in Starter
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />{" "}
                    Inventory & Operational Reports
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />{" "}
                    Push Notifications & Promo Engine
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Button
                  to="/pricing"
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  View Standard Details
                </Button>
              </div>
            </Card>

            <Card className="text-center flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-muted font-['Plus_Jakarta_Sans']">
                  Premium Tier
                </span>
                <div className="text-3xl font-bold font-['Space_Grotesk'] text-ink mt-2 mb-1">
                  ₹49,999
                </div>
                <p className="text-xs text-muted mb-6">
                  Full-scale commercial platform with payment gateway
                </p>
                <ul className="text-left text-xs space-y-2.5 font-['Plus_Jakarta_Sans'] border-t border-ink/5 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />{" "}
                    Everything in Standard
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />{" "}
                    Razorpay & UPI Payment Gateway
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />{" "}
                    Advanced Analytics & Custom API Hooks
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Button
                  to="/pricing"
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  View Premium Details
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. Bottom Hero Banner (Verbatim Client Line) */}
      <section className="py-20 bg-ink text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] tracking-tight">
            Let's Connect & Build Something Amazing Together
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto">
            Schedule a direct discovery session to explore your custom software,
            MIS portal, or mobile app roadmap.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Get In Touch
            </Button>
            <Button href="tel:+918127015970" variant="white" size="lg">
              Call +91 8127015970
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
