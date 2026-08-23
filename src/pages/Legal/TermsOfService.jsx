import React from 'react';
import PageTransition from '../../components/PageTransition/PageTransition';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Card from '../../components/Card/Card';

export default function TermsOfService() {
  return (
    <PageTransition>
      <section className="pt-16 pb-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Legal & Compliance"
            title="Terms of"
            highlight="Service"
            description="Last updated: August 2026. Standard terms governing interactions with Privish Innovations."
            align="left"
            className="mb-10"
          />

          <Card className="space-y-6 text-sm text-body-text font-['Plus_Jakarta_Sans'] leading-relaxed bg-white">
            <div>
              <h3 className="text-base font-bold text-ink font-['Space_Grotesk'] mb-2">
                1. Engagement & Milestone Structure
              </h3>
              <p>
                All custom software development contracts are governed by our standard 30/40/30 milestone agreements (or 50/50 for rapid-turnaround tasks). Development commences strictly upon receipt of the upfront milestone commitment.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-ink font-['Space_Grotesk'] mb-2">
                2. Intellectual Property
              </h3>
              <p>
                Upon final payment (100% milestone settlement), full rights and ownership of the customized client codebase, database schemas, and designated assets are transferred to the client, subject to standard open-source library licenses.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-ink font-['Space_Grotesk'] mb-2">
                3. Statutory Jurisdiction
              </h3>
              <p>
                All commercial agreements and contracts are executed under the legal jurisdiction of the courts of Lucknow, Uttar Pradesh, India, backed by our Udyam MSME statutory compliance guidelines.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-ink font-['Space_Grotesk'] mb-2">
                4. Contact Details
              </h3>
              <p>
                For official correspondence, please contact{' '}
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
