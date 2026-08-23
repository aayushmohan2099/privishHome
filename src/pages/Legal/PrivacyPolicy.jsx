import React from 'react';
import PageTransition from '../../components/PageTransition/PageTransition';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Card from '../../components/Card/Card';

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <section className="pt-16 pb-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Legal & Compliance"
            title="Privacy"
            highlight="Policy"
            description="Last updated: August 2026. This policy describes how Privish Innovations handles and protects information collected through our corporate website."
            align="left"
            className="mb-10"
          />

          <Card className="space-y-6 text-sm text-body-text font-['Plus_Jakarta_Sans'] leading-relaxed bg-white">
            <div>
              <h3 className="text-base font-bold text-ink font-['Space_Grotesk'] mb-2">
                1. Information We Collect
              </h3>
              <p>
                When you submit a project inquiry or contact us through our website, we may collect your name, phone number, email address, organization name, and project requirements. We use this information solely to communicate with you and evaluate your project.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-ink font-['Space_Grotesk'] mb-2">
                2. Use of Information
              </h3>
              <p>
                We do not sell, rent, or distribute your personal contact details to third parties or marketing lists. Your data is used exclusively by our internal team in Lucknow to prepare milestone scopes, proposals, and project communications.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-ink font-['Space_Grotesk'] mb-2">
                3. Data Security
              </h3>
              <p>
                We employ standard industry security protocols to safeguard client data submitted via our digital channels and servers.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-ink font-['Space_Grotesk'] mb-2">
                4. Contact for Privacy Inquiries
              </h3>
              <p>
                If you have questions regarding this Privacy Policy, please reach out to us at{' '}
                <a href="mailto:privishinnovations@gmail.com" className="text-brand-flame font-semibold underline">
                  privishinnovations@gmail.com
                </a>.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </PageTransition>
  );
}
