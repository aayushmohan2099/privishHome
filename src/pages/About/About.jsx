import React from "react";
import { motion } from "motion/react";
import {
  Users,
  Terminal,
  Code2,
  Smartphone,
  Palette,
  ShieldCheck,
  Compass,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageTransition from "../../components/PageTransition/PageTransition";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

const TEAM_ROLES = [
  {
    role: "Founder & Architect",
    icon: Compass,
    focus:
      "System architecture, core business logic, client interface, and strategic milestones.",
    skills: [
      "Full-Stack Architecture",
      "Client Solutioning",
      "Security & Scalability",
    ],
  },
  {
    role: "Backend Engineer",
    icon: Terminal,
    focus:
      "Python/Django specialist architecting resilient APIs, relational databases, and auth systems.",
    skills: ["Django / Python", "PostgreSQL / Redis", "API & Cloud Automation"],
  },
  {
    role: "Frontend Developer",
    icon: Code2,
    focus:
      "React.js and modern JS craftsman engineering buttery-smooth, accessible, responsive interfaces.",
    skills: ["React 19 / JSX", "Tailwind CSS v4", "Motion Performance"],
  },
  {
    role: "Mobile App Developer",
    icon: Smartphone,
    focus:
      "Native-performance mobile engineer specializing in offline-first Android and iOS field apps.",
    skills: ["Cross-Platform Mobile", "Offline Sync", "Device Hardware APIs"],
  },
  {
    role: "UI/UX Designer",
    icon: Palette,
    focus:
      "Interaction designer transforming complex operational workflows into intuitive screen states.",
    skills: ["User Flow Mapping", "Wireframing & Prototypes", "Design Systems"],
  },
];

export default function About() {
  return (
    <PageTransition>
      {/* 1. Header Hero */}
      <section className="pt-16 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Are"
            title="A Lean Studio Engineered for"
            highlight="High-Caliber Software"
            description="We stay small on purpose. A five-person team means low overhead, direct accountability, and enterprise-grade software built for small and mid-sized organizations."
            align="left"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <Card className="space-y-4">
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-ink">
                Our Core Philosophy
              </h3>
              <p className="text-sm text-body-text leading-relaxed font-['Plus_Jakarta_Sans']">
                Privish Innovations was founded on a simple premise: small and
                mid-sized organizations deserve the same caliber of custom
                software that used to be reserved for enterprise budgets.
              </p>
              <p className="text-sm text-body-text leading-relaxed font-['Plus_Jakarta_Sans']">
                By maintaining a lean, focused engineering team in Lucknow, we
                avoid bureaucratic agency bloat. You interact directly with the
                engineers building your solution.
              </p>
            </Card>

            <Card className="space-y-4 bg-ink text-white border-none shadow-xl">
              <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>The Road Forward</span>
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-ink">
                Transitioning into a Product-Centric Studio
              </h3>
              <p className="text-sm text-muted leading-relaxed font-['Plus_Jakarta_Sans']">
                We are systematically growing from a pure-play service model
                into building our own intellectual property — beginning with an
                advanced Training Management System (TMS) and rural beneficiary
                tracking modules.
              </p>
              <p className="text-sm text-muted leading-relaxed font-['Plus_Jakarta_Sans']">
                What we learn from building our own scalable products goes
                directly back into your custom build.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 2. Team Matrix (Functional glyphs - no fake AI photos) */}
      <section className="py-20 bg-white border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Team"
            title="The Five-Person"
            highlight="Core Matrix"
            description="Our specialized roles work cohesively to design, develop, deploy, and maintain your digital products."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_ROLES.map((member) => {
              const Icon = member.icon;
              return (
                <Card
                  key={member.role}
                  className="flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-ink font-['Space_Grotesk']">
                        {member.role}
                      </h4>
                      <p className="text-xs text-body-text font-['Plus_Jakarta_Sans'] mt-2 leading-relaxed">
                        {member.focus}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-ink/5 mt-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted block mb-2 font-['Plus_Jakarta_Sans']">
                      Core Domain
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md bg-cream text-[11px] font-medium text-body-text border border-ink/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Culture / Hiring Card */}
            <Card className="flex flex-col justify-between bg-gradient-to-br from-brand-orange/5 to-brand-flame/5 border-dashed border-brand-orange/30">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ink font-['Space_Grotesk']">
                    Join The Studio
                  </h4>
                  <p className="text-xs text-body-text font-['Plus_Jakarta_Sans'] mt-2 leading-relaxed">
                    We are always keen to connect with talented local developers
                    in Lucknow seeking high-impact craft.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Button to="/contact" variant="secondary" size="sm">
                  Say Hello
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Legal Stability & Registration Moat */}
      <section className="py-20 bg-cream border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trust & Governance"
            title="Institutional Governance &"
            highlight="Legal Stability"
            description="Our statutory registrations provide contractual peace of mind and strict statutory protections for our clients."
            align="left"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-ink/5 shadow-xs space-y-3">
              <ShieldCheck className="w-8 h-8 text-brand-orange" />
              <h4 className="text-base font-bold text-ink font-['Space_Grotesk']">
                MSME / Udyam Micro-Enterprise
              </h4>
              <p className="text-xs text-body-text leading-relaxed font-['Plus_Jakarta_Sans']">
                Active Udyam registration ensures statutory payment timeline
                compliance and reliable cash-flow pipelines, safeguarding your
                project delivery schedule.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-ink/5 shadow-xs space-y-3">
              <CheckCircle2 className="w-8 h-8 text-brand-orange" />
              <h4 className="text-base font-bold text-ink font-['Space_Grotesk']">
                GST Compliance
              </h4>
              <p className="text-xs text-body-text leading-relaxed font-['Plus_Jakarta_Sans']">
                Clean invoicing with standard GST input tax credit (ITC)
                eligibility for corporate and institutional business buyers
                across India.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-ink/5 shadow-xs space-y-3">
              <Sparkles className="w-8 h-8 text-brand-orange" />
              <h4 className="text-base font-bold text-ink font-['Space_Grotesk']">
                MCA SPICe+ Private Limited
              </h4>
              <p className="text-xs text-body-text leading-relaxed font-['Plus_Jakarta_Sans']">
                Active incorporation structure ensuring formal corporate
                governance, intellectual property protection, and scalable
                service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-16 bg-white border-t border-ink/5 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-ink">
            Ready to collaborate with a focused, accountable team?
          </h3>
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
            Schedule a Discovery Call
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}
