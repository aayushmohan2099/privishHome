import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Minus, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  CreditCard, 
  ChevronDown,
  Sparkles
} from 'lucide-react';
import PageTransition from '../../components/PageTransition/PageTransition';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { transitions } from '../../lib/motionTokens';

const COMPARISON_ROWS = [
  { name: 'Core UI & Setup', starter: 'Custom layout', standard: 'Custom layout', premium: 'Custom layout' },
  { name: 'Customer Interface', starter: true, standard: true, premium: true },
  { name: 'Admin Console', starter: true, standard: true, premium: true },
  { name: 'Staff Training & Onboarding', starter: true, standard: true, premium: true },
  { name: 'Inventory & Stock Control', starter: false, standard: true, premium: true },
  { name: 'Offers & Promos Engine', starter: false, standard: true, premium: true },
  { name: 'Push Notifications & Alerts', starter: false, standard: true, premium: true },
  { name: 'Operational & MIS Reports', starter: false, standard: true, premium: true },
  { name: 'Razorpay / UPI Integration', starter: false, standard: false, premium: true },
  { name: 'Coupons & Discount Rules', starter: false, standard: false, premium: true },
  { name: 'Advanced Analytics Dashboard', starter: false, standard: false, premium: true },
  { name: 'Custom API Hooks & Webhooks', starter: false, standard: false, premium: true },
];

const FAQS = [
  {
    q: 'Can packages be customized for our specific workflow?',
    a: 'Yes. The tiers represent our baseline standard packages. Custom integrations, proprietary algorithms, multi-tenant databases, or custom hardware connections are scoped transparently during a discovery call.'
  },
  {
    q: 'Who manages server hosting and domain configuration?',
    a: 'We do. We host client applications on our dedicated high-performance Virtual Private Servers (VPS). This is structured to cost you less while ensuring high uptime, automated backups, and ongoing version maintenance.'
  },
  {
    q: 'Do you support systems after launch?',
    a: 'Every build includes standard 30-day post-launch warranty support. After warranty, clients can enroll in our 10-20% AMC service level agreements covering daily backups, security updates, and guaranteed response times.'
  },
  {
    q: 'What is the standard delivery timeline?',
    a: 'Starter web systems typically launch in 2-3 weeks. Standard and Premium portals or mobile apps average 4-8 weeks depending on custom feature scope and client feedback turnaround.'
  }
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Transparent Packages"
            title="Predictable Investment,"
            highlight="Zero Hidden Costs"
            description="Clear rupee pricing backed by an outcome-based milestone schedule that protects your cash flow."
            align="center"
            className="mb-12"
          />

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Starter Tier */}
            <Card className="flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-muted font-['Plus_Jakarta_Sans']">
                  Starter Tier
                </div>
                <div className="text-4xl font-bold font-['Space_Grotesk'] text-ink mt-3 mb-1">
                  ₹19,999
                </div>
                <p className="text-xs text-body-text mb-6 font-['Plus_Jakarta_Sans']">
                  Essential high-performance website or basic portal for local businesses.
                </p>
                <div className="space-y-3 border-t border-ink/5 pt-4 text-xs font-['Plus_Jakarta_Sans']">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Custom Layout & Responsive UI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Customer & Admin Interface</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Staff Walkthrough & 30-Day Support</span>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Button to="/contact" variant="secondary" size="md" className="w-full">
                  Choose Starter
                </Button>
              </div>
            </Card>

            {/* Standard Tier */}
            <Card className="flex flex-col justify-between border-2 border-brand-orange relative shadow-xl">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-brand text-white text-[11px] uppercase font-bold tracking-wider px-3.5 py-0.5 rounded-full shadow-xs">
                Recommended
              </span>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-brand-flame font-['Plus_Jakarta_Sans']">
                  Standard Tier
                </div>
                <div className="text-4xl font-bold font-['Space_Grotesk'] text-ink mt-3 mb-1">
                  ₹34,999
                </div>
                <p className="text-xs text-body-text mb-6 font-['Plus_Jakarta_Sans']">
                  Comprehensive operational portal with reporting and notifications.
                </p>
                <div className="space-y-3 border-t border-ink/5 pt-4 text-xs font-['Plus_Jakarta_Sans']">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Everything in Starter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Inventory / Data Ledger & Reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Push Notifications & Promo System</span>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Button to="/contact" variant="primary" size="md" className="w-full">
                  Choose Standard
                </Button>
              </div>
            </Card>

            {/* Premium Tier */}
            <Card className="flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-muted font-['Plus_Jakarta_Sans']">
                  Premium Tier
                </div>
                <div className="text-4xl font-bold font-['Space_Grotesk'] text-ink mt-3 mb-1">
                  ₹49,999
                </div>
                <p className="text-xs text-body-text mb-6 font-['Plus_Jakarta_Sans']">
                  Full commercial platform with payment gateway and analytics.
                </p>
                <div className="space-y-3 border-t border-ink/5 pt-4 text-xs font-['Plus_Jakarta_Sans']">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Everything in Standard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Razorpay / UPI Payment Gateway</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Advanced Analytics & Custom API Hooks</span>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Button to="/contact" variant="secondary" size="md" className="w-full">
                  Choose Premium
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-16 bg-white border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-ink">
              Detailed Feature Comparison
            </h3>
            <p className="text-xs text-muted font-['Plus_Jakarta_Sans'] mt-1">
              Compare package capabilities side-by-side.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-['Plus_Jakarta_Sans']">
              <thead>
                <tr className="border-b border-ink/10 text-xs font-bold uppercase tracking-wider text-ink bg-cream/50">
                  <th className="py-4 px-4">Metric / Feature</th>
                  <th className="py-4 px-4 text-center">Starter (₹19,999)</th>
                  <th className="py-4 px-4 text-center">Standard (₹34,999)</th>
                  <th className="py-4 px-4 text-center">Premium (₹49,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/5 text-sm">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.name} className="hover:bg-cream/30 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-ink text-xs sm:text-sm">
                      {row.name}
                    </td>
                    <td className="py-3.5 px-4 text-center text-xs">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="w-4 h-4 text-brand-orange mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-body-text">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center text-xs">
                      {typeof row.standard === 'boolean' ? (
                        row.standard ? (
                          <Check className="w-4 h-4 text-brand-orange mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-body-text">{row.standard}</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center text-xs">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? (
                          <Check className="w-4 h-4 text-brand-orange mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-body-text">{row.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Milestone Split Section (30/40/30) */}
      <section className="py-16 bg-cream border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cash-Flow Peace of Mind"
            title="The Transparent"
            highlight="30 / 40 / 30 Milestone Structure"
            description="We minimize risk for both parties by tying payments strictly to verifiable deliverables."
            align="left"
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-ink/5 shadow-xs space-y-3">
              <div className="text-3xl font-bold font-['Space_Grotesk'] text-brand-orange">
                30%
              </div>
              <h4 className="text-base font-bold text-ink font-['Space_Grotesk']">
                Upfront Commitment
              </h4>
              <p className="text-xs text-body-text leading-relaxed font-['Plus_Jakarta_Sans']">
                Initial milestone upon contract signing to finalize system architecture, data schemas, and UI wireframes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-ink/5 shadow-xs space-y-3">
              <div className="text-3xl font-bold font-['Space_Grotesk'] text-brand-orange">
                40%
              </div>
              <h4 className="text-base font-bold text-ink font-['Space_Grotesk']">
                Functional System Milestone
              </h4>
              <p className="text-xs text-body-text leading-relaxed font-['Plus_Jakarta_Sans']">
                Due only after a working, testable version is deployed to a staging environment where you can log in and verify features.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-ink/5 shadow-xs space-y-3">
              <div className="text-3xl font-bold font-['Space_Grotesk'] text-brand-orange">
                30%
              </div>
              <h4 className="text-base font-bold text-ink font-['Space_Grotesk']">
                Launch & Handover
              </h4>
              <p className="text-xs text-body-text leading-relaxed font-['Plus_Jakarta_Sans']">
                Final milestone upon production rollout, domain pointing, SSL verification, and staff handover training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-ink/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked"
            highlight="Questions"
            description="Clear answers regarding our billing, hosting, and ongoing engineering guarantees."
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-ink/10 overflow-hidden bg-cream/30"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-['Space_Grotesk'] font-bold text-base text-ink hover:text-brand-flame transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-orange transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={transitions.fast}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-sm text-body-text leading-relaxed font-['Plus_Jakarta_Sans'] border-t border-ink/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
