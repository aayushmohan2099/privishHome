// src/pages/Contact/Contact.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import PageTransition from "../../components/PageTransition/PageTransition";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { transitions } from "../../lib/motionTokens";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate brief relay submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Contact form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <PageTransition>
      <section className="pt-16 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Build Something"
            highlight="Exceptional Together"
            description="Have an upcoming project or need advice on digitizing your operations? Drop us a message or schedule a direct discovery call."
            align="left"
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7">
              <Card className="bg-white">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={transitions.fast}
                      className="py-12 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-ink">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-sm text-body-text max-w-md mx-auto font-['Plus_Jakarta_Sans']">
                        Thank you for reaching out. Our engineering team in
                        Lucknow will review your project brief and respond
                        within 24 business hours.
                      </p>
                      <div className="pt-4">
                        <Button
                          onClick={() => setIsSubmitted(false)}
                          variant="secondary"
                          size="sm"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5 font-['Plus_Jakarta_Sans']">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Aditya Sharma"
                            {...register("name", {
                              required: "Name is required",
                            })}
                            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-cream/40 focus:bg-white text-ink transition-colors font-['Plus_Jakarta_Sans'] ${
                              errors.name
                                ? "border-red-500"
                                : "border-ink/10 focus:border-brand-orange"
                            }`}
                          />
                          {errors.name && (
                            <span className="text-[11px] text-red-500 mt-1 block">
                              {errors.name.message}
                            </span>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5 font-['Plus_Jakarta_Sans']">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            {...register("phone", {
                              required: "Phone number is required",
                            })}
                            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-cream/40 focus:bg-white text-ink transition-colors font-['Plus_Jakarta_Sans'] ${
                              errors.phone
                                ? "border-red-500"
                                : "border-ink/10 focus:border-brand-orange"
                            }`}
                          />
                          {errors.phone && (
                            <span className="text-[11px] text-red-500 mt-1 block">
                              {errors.phone.message}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5 font-['Plus_Jakarta_Sans']">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            placeholder="aditya@example.com"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                              },
                            })}
                            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-cream/40 focus:bg-white text-ink transition-colors font-['Plus_Jakarta_Sans'] ${
                              errors.email
                                ? "border-red-500"
                                : "border-ink/10 focus:border-brand-orange"
                            }`}
                          />
                          {errors.email && (
                            <span className="text-[11px] text-red-500 mt-1 block">
                              {errors.email.message}
                            </span>
                          )}
                        </div>

                        {/* Organization */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5 font-['Plus_Jakarta_Sans']">
                            Organization / Business Name
                          </label>
                          <input
                            type="text"
                            placeholder="Institute or Store Name"
                            {...register("organization")}
                            className="w-full px-4 py-2.5 rounded-xl border border-ink/10 text-sm bg-cream/40 focus:bg-white text-ink transition-colors font-['Plus_Jakarta_Sans'] focus:border-brand-orange"
                          />
                        </div>
                      </div>

                      {/* Service & Budget Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Service Required */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5 font-['Plus_Jakarta_Sans']">
                            Service Needed *
                          </label>
                          <select
                            {...register("service", {
                              required: "Please select a service",
                            })}
                            className="w-full px-4 py-2.5 rounded-xl border border-ink/10 text-sm bg-cream/40 focus:bg-white text-ink transition-colors font-['Plus_Jakarta_Sans'] focus:border-brand-orange"
                          >
                            <option value="Website Development">
                              Website Development (Starter/Custom)
                            </option>
                            <option value="Mobile App Development">
                              Mobile App (Android / iOS)
                            </option>
                            <option value="Portals & MIS">
                              Portals & Custom MIS Dashboard
                            </option>
                            <option value="Training Management System">
                              Training Management System (TMS)
                            </option>
                            <option value="Retail E-Commerce">
                              Localized Retail E-Commerce
                            </option>
                            <option value="AMC & Hosting">
                              AMC & Cloud VPS Hosting
                            </option>
                            <option value="Other Custom Solution">
                              Other Custom Architecture
                            </option>
                          </select>
                        </div>

                        {/* Budget Range */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5 font-['Plus_Jakarta_Sans']">
                            Estimated Budget
                          </label>
                          <select
                            {...register("budget")}
                            className="w-full px-4 py-2.5 rounded-xl border border-ink/10 text-sm bg-cream/40 focus:bg-white text-ink transition-colors font-['Plus_Jakarta_Sans'] focus:border-brand-orange"
                          >
                            <option value="₹19,999 - ₹35,000">
                              ₹19,999 – ₹35,000 (Starter / Standard)
                            </option>
                            <option value="₹35,000 - ₹60,000">
                              ₹35,000 – ₹60,000 (Standard / Premium)
                            </option>
                            <option value="₹60,000+">
                              ₹60,000+ (Custom Enterprise / Multi-tier)
                            </option>
                            <option value="Flexible / Need Guidance">
                              Flexible / Need Discovery Scoping
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Project Message */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5 font-['Plus_Jakarta_Sans']">
                          Project Summary & Operational Needs *
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about the system you want to build, the current bottlenecks, or your desired launch target..."
                          {...register("message", {
                            required: "Please provide brief details",
                          })}
                          className={`w-full px-4 py-3 rounded-xl border text-sm bg-cream/40 focus:bg-white text-ink transition-colors font-['Plus_Jakarta_Sans'] ${
                            errors.message
                              ? "border-red-500"
                              : "border-ink/10 focus:border-brand-orange"
                          }`}
                        />
                        {errors.message && (
                          <span className="text-[11px] text-red-500 mt-1 block">
                            {errors.message.message}
                          </span>
                        )}
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={isSubmitting}
                          icon={Send}
                          className="w-full sm:w-auto"
                        >
                          {isSubmitting
                            ? "Sending Brief..."
                            : "Send Project Brief"}
                        </Button>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </Card>
            </div>

            {/* Right Column: Coordinates & Map */}
            <div className="lg:col-span-5 space-y-6">
              {/* Studio Coordinates Card */}
              <Card className="space-y-6">
                <h3 className="text-lg font-bold font-['Space_Grotesk'] text-ink">
                  Direct Studio Coordinates
                </h3>

                <div className="space-y-4 text-sm font-['Plus_Jakarta_Sans']">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase text-ink block font-['Space_Grotesk']">
                        Location
                      </span>
                      <p className="text-xs text-body-text mt-0.5">
                        Lucknow – 226022, Uttar Pradesh, India
                      </p>
                      <span className="text-[11px] text-muted block mt-0.5">
                        Serving clients across Lucknow, Kanpur & Pan-India
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase text-ink block font-['Space_Grotesk']">
                        Direct Phone
                      </span>
                      <a
                        href="tel:+918127015970"
                        className="text-xs text-brand-flame font-semibold hover:underline block mt-0.5"
                      >
                        +91 8127015970
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase text-ink block font-['Space_Grotesk']">
                        Email Address
                      </span>
                      <a
                        href="mailto:privishinnovations@gmail.com"
                        className="text-xs text-body-text hover:text-brand-orange block mt-0.5"
                      >
                        privishinnovations@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase text-ink block font-['Space_Grotesk']">
                        Office Hours
                      </span>
                      <p className="text-xs text-body-text mt-0.5">
                        Mon–Sat: 10:00 AM – 7:00 PM IST
                      </p>
                      <span className="text-[11px] text-muted block mt-0.5">
                        Sunday: Closed
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-ink/5">
                  <a
                    href="https://wa.me/918127015970"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 font-semibold text-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat Directly on WhatsApp
                  </a>
                </div>
              </Card>

              {/* Styled Interactive Map Representation */}
              <div className="relative rounded-2xl overflow-hidden border border-ink/10 bg-ink text-white p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold font-['Space_Grotesk']">
                      Lucknow Studio Region
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-400">PIN 226022</span>
                </div>

                <p className="text-xs text-gray-300 font-['Plus_Jakarta_Sans'] leading-relaxed mb-4">
                  We frequently host on-site discovery workshops and
                  architecture reviews for businesses in Lucknow and surrounding
                  hubs.
                </p>

                <a
                  href="https://maps.google.com/?q=Lucknow+226022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-orange hover:text-white font-semibold transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
