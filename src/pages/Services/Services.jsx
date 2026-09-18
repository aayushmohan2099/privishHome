// src/pages/Services/Services.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import {
  Monitor,
  Smartphone,
  Database,
  GraduationCap,
  ShoppingBag,
  Server,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";
import PageTransition from "../../components/PageTransition/PageTransition";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

const SERVICES = [
  {
    id: "website",
    title: "Website Development",
    eyebrow: "Fast, High-Converting Web Platforms",
    icon: Monitor,
    idealFor:
      "Local businesses, coaching centers, corporate firms, retail stores",
    summary:
      "High-performance brand and marketing websites engineered for extreme responsiveness, fast initial loading times, and SEO ranking — built strictly to convert traffic into calls and leads.",
    features: [
      "Custom React/Tailwind frontend with zero heavy bloated templates",
      "Ultra-fast load times with 95+ Google PageSpeed score target",
      "Mobile-first responsive architecture with 44px+ touch targets",
      "Integrated contact forms, WhatsApp triggers, and lead capture pipelines",
      "SEO-ready markup with dynamic schema and OpenGraph tags",
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    eyebrow: "Native-Performance Cross-Platform Apps",
    icon: Smartphone,
    idealFor:
      "Multi-location operations, field surveyors, retail stores, consumer brands",
    summary:
      "Custom Android and iOS mobile applications designed for smooth performance, offline capability, and frictionless deployment to app stores.",
    features: [
      "Cross-platform codebase (React Native / Flutter) saving build costs",
      "Offline-first SQLite local caching with automated cloud sync",
      "Camera, GPS geolocation, and hardware device integrations",
      "Push notification engine for automated announcements and promotions",
      "App Store and Google Play Store submission management",
    ],
  },
  {
    id: "portals",
    title: "Portals & MIS Dashboards",
    eyebrow: "Data Consolidation & Operational Control",
    icon: Database,
    idealFor:
      "NGOs tracking community deliveries, local government-adjacent sectors, logistics",
    summary:
      "Custom back-office management interfaces, administrative forms, and MIS portals that consolidate fragmented spreadsheets into clean visual feeds.",
    features: [
      "Role-based access control (Admin, Manager, Field Worker, Viewer)",
      "Real-time analytics and visual chart aggregation",
      "CSV / Excel / PDF one-click report exports with statutory formatting",
      "Automated audit logs tracking every record modification",
      "Secure Python/Django backend with resilient PostgreSQL storage",
    ],
  },
  {
    id: "tms",
    title: "Training Management Systems (TMS)",
    eyebrow: "Specialized Institute & Coaching Portals",
    icon: GraduationCap,
    idealFor:
      "Lucknow & Kanpur coaching hubs, vocational centers, corporate trainers",
    summary:
      "Specialized admin portals designed for coaching institutes and training centers to manage enrollment, batch timings, trainer allocations, student progress, and attendance in a secure central dashboard.",
    features: [
      "Multi-batch scheduling with conflict prevention algorithms",
      "Student enrollment roster, fee tracking, and digital receipts",
      "Daily attendance tracking with instant WhatsApp absence alerts",
      "Mock exam result publishing and student performance visualizers",
      "Automated digital certificate generation with verifiable QR codes",
    ],
  },
  {
    id: "ecommerce",
    title: "Localized Retail E-Commerce",
    eyebrow: "Indian Gateway Ready Digital Storefronts",
    icon: ShoppingBag,
    idealFor:
      "Medical stores, pharmaceutical distributors, local retailers, direct-to-consumer",
    summary:
      "Affordable, customized digital storefronts integrated with Indian payment gateways (Razorpay, UPI QR) and real-time inventory control modules.",
    features: [
      "Razorpay, PayU, and direct UPI QR intent checkout flows",
      "Live stock count alerts with low-inventory automated warnings",
      "Custom discount coupons engine with percentage or flat deduction rules",
      "Instant order receipts sent to customer WhatsApp and Email",
      "Mobile-optimized single-page checkout minimizing cart abandonment",
    ],
  },
  {
    id: "amc",
    title: "Annual Maintenance Contracts & VPS Hosting",
    eyebrow: "Continuous Reliability & Cloud Management",
    icon: Server,
    idealFor:
      "Long-term operational peace of mind, high-uptime web applications",
    summary:
      "Ongoing server administration, secure automated backups, system security updates, and performance monitoring. We maintain a high-performance VPS setup with 10-20% AMC service level guarantees.",
    features: [
      "Automated daily offsite database backups with one-click restore",
      "Proactive SSL certificate renewals and security patch deployments",
      "Dedicated uptime monitoring with instant alerting protocols",
      "10-20% AMC retainer packages customized to your platform traffic",
      "Direct WhatsApp priority support channel with senior engineer response",
    ],
  },
];

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Specialized Capabilities"
            title="Custom Software Built to"
            highlight="Solve Real Operational Friction"
            description="From high-speed public web apps to complex MIS engines, every system we build is architected for long-term maintainability and business results."
            align="left"
            className="mb-8"
          />

          {/* Anchor Quick Jump Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-ink/10 text-body-text hover:text-brand-flame hover:border-brand-orange/40 transition-colors shadow-2xs"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Blocks List */}
      <section className="py-12 bg-white border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 pt-4 border-t border-ink/5 first:border-none first:pt-0"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start`}
                >
                  {/* Left Column - Core Info */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider font-['Plus_Jakarta_Sans']">
                      <Icon className="w-4 h-4" />
                      <span>{service.eyebrow}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-ink">
                      {service.title}
                    </h3>

                    <p className="text-sm text-body-text font-['Plus_Jakarta_Sans'] leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="p-4 rounded-xl bg-cream border border-ink/5">
                      <span className="text-xs font-bold text-ink block mb-1 font-['Space_Grotesk']">
                        Ideal For:
                      </span>
                      <p className="text-xs text-muted font-['Plus_Jakarta_Sans']">
                        {service.idealFor}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Button
                        to="/contact"
                        variant="primary"
                        size="sm"
                        icon={ArrowRight}
                      >
                        Scope a {service.title} Project
                      </Button>
                    </div>
                  </div>

                  {/* Right Column - Architectural Feature Checklist */}
                  <div className="lg:col-span-5">
                    <Card className="bg-cream/50">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-4 font-['Space_Grotesk']">
                        Key Engineering Features
                      </h4>
                      <ul className="space-y-3 font-['Plus_Jakarta_Sans']">
                        {service.features.map((feat, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-body-text leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-cream border-t border-ink/5 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-ink">
            Need a tailored hybrid system?
          </h3>
          <p className="text-sm text-body-text font-['Plus_Jakarta_Sans']">
            We scope custom integrations, multi-tenant databases, and custom
            automation workflows to fit your exact budget.
          </p>
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
            Request a Technical Scoping Session
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}
