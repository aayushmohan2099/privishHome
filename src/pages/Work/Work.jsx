import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Layers,
  Database,
  GraduationCap,
  ShoppingBag,
  BarChart3,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";
import PageTransition from "../../components/PageTransition/PageTransition";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

const CONCEPTS = [
  {
    id: "beneficiary-tracker",
    title: "NGO Beneficiary Tracker",
    badge: "Engineering Concept",
    category: "Field Operations & MIS",
    summary:
      "A multi-location community delivery and field surveillance system designed for NGOs tracking relief distribution, health camps, and vocational training.",
    tags: [
      "Offline Mobile Sync",
      "Role-Based Access",
      "Automated Grant Reports",
    ],
    highlights: [
      "Field volunteers log beneficiary records with GPS coordinates offline",
      "Instant aggregate charts tracking demographic age, gender, and regional coverage",
      "One-click PDF reporting formatted for institutional donor audits",
    ],
  },
  {
    id: "tms-portal",
    title: "Coaching Center Training Portal",
    badge: "Engineering Concept",
    category: "Education & Batch Management",
    summary:
      "Centralized administrative engine designed for competitive exam coaching hubs in Lucknow and Kanpur to automate batch schedules, rosters, and fees.",
    tags: [
      "Batch Scheduler",
      "Automated Attendance",
      "Verifiable QR Certificates",
    ],
    highlights: [
      "Dynamic conflict-free scheduling engine for multi-classroom institutes",
      "Automated daily attendance logging with automated WhatsApp absence alerts",
      "Integrated fee instalment ledger and digital student identity cards",
    ],
  },
  {
    id: "ecommerce-storefront",
    title: "Retailer E-Commerce Storefront",
    badge: "Engineering Concept",
    category: "Retail & Payment Automation",
    summary:
      "A fast, lightweight direct-to-consumer digital storefront built for local retail and medical supply businesses in Uttar Pradesh.",
    tags: ["UPI Intent Checkout", "Real-Time Inventory", "WhatsApp Order Bot"],
    highlights: [
      "Instant UPI QR and payment gateway integration with sub-second checkout",
      "Low-stock automated alerts preventing out-of-stock orders",
      "Automated digital invoice dispatch directly via WhatsApp API",
    ],
  },
  {
    id: "public-mis",
    title: "Institutional MIS Dashboard",
    badge: "Engineering Concept",
    category: "Public-Sector & Procurement",
    summary:
      "A secure, high-uptime monitoring console engineered for tender tracking, asset allocation, and departmental metric consolidation.",
    tags: ["Statutory Compliance", "Audit Trail", "Encrypted PostgreSQL"],
    highlights: [
      "Complete tamper-evident audit log recording every user action",
      "Granular permission tiers strictly isolating department workspaces",
      "High-performance CSV exports capable of processing 100k+ rows in seconds",
    ],
  },
];

export default function Work() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Build"
            title="Technical Capability &"
            highlight="Engineering Concepts"
            description="We build software with operational precision. Explore our core technical architectures and operational frameworks."
            align="left"
            className="mb-8"
          />

          <div className="p-4 rounded-xl bg-white border border-brand-orange/20 flex items-center gap-3 text-xs text-body-text max-w-2xl">
            <Sparkles className="w-5 h-5 text-brand-orange shrink-0" />
            <span>
              <strong>Transparency Note:</strong> We are early in publishing
              client case studies. Every architecture below demonstrates our
              in-house technical stack and engineering blueprints.
            </span>
          </div>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="py-12 bg-white border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONCEPTS.map((concept) => (
              <Card
                key={concept.id}
                className="flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted font-['Plus_Jakarta_Sans']">
                      {concept.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-orange/10 text-brand-flame border border-brand-orange/20">
                      {concept.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-ink">
                    {concept.title}
                  </h3>

                  <p className="text-sm text-body-text font-['Plus_Jakarta_Sans'] leading-relaxed">
                    {concept.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-ink/5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink block font-['Space_Grotesk']">
                      Key Highlights:
                    </span>
                    <ul className="space-y-2 text-xs text-body-text font-['Plus_Jakarta_Sans']">
                      {concept.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-ink/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {concept.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-cream text-[10px] font-medium text-body-text border border-ink/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-flame hover:text-brand-orange transition-colors"
                  >
                    Discuss Similar Build <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Invitation Section */}
      <section className="py-20 bg-cream border-t border-ink/5 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto">
            <FileCheck2 className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-ink">
            Want your project to be our next flagship case study?
          </h3>

          <p className="text-sm sm:text-base text-body-text font-['Plus_Jakarta_Sans'] max-w-2xl mx-auto leading-relaxed">
            Partner with Privish Innovations to build your custom web portal,
            mobile app, or automation system with direct founder oversight and
            transparent milestone pricing.
          </p>

          <div className="pt-2">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Let's Build Together
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
