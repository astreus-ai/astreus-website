import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfServicePage() {
  // Header navigation items
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Docs', href: '/docs' },
    { label: 'GitHub', href: 'https://github.com/astreus-ai/astreus' },
  ];

  // Last updated date
  const lastUpdated = 'June 15, 2024';

  // Footer columns
  const footerColumns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'Roadmap', href: '/roadmap' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms-of-service' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' },
        { label: 'Tutorials', href: '/tutorials' },
        { label: 'Examples', href: '/examples' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'GitHub', href: 'https://github.com/astreus-ai/astreus' },
        { label: 'Discord', href: 'https://discord.gg/astreus' },
        { label: 'X', href: 'https://x.com/astreusai' },
        { label: 'Blog', href: '/blog' },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        logo="/astreus-logo-black.svg"
        brandName="Astreus"
        navItems={navItems}
        cta={{ label: 'Get Started', href: '/docs/getting-started' }}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 text-gray-900">
                Terms of Service
              </h1>
              <p className="text-gray-600 mb-4">
                Last Updated: {lastUpdated}
              </p>
              <div className="h-0.5 w-full bg-gray-100 my-8"></div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Please read these Terms of Service (&ldquo;Terms&rdquo;, &ldquo;Terms of Service&rdquo;) carefully before using the 
                  Astreus AI platform (&ldquo;the Service&rdquo;) operated by Astreus AI, Inc. (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;).
                </p>
                <p>
                  Your access to and use of the Service is conditioned on your acceptance of and compliance with 
                  these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
                <p>
                  By accessing or using the Service, you agree to be bound by these Terms. If you disagree 
                  with any part of the terms, then you may not access the Service.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">1. Accounts</h2>
                <p>
                  When you create an account with us, you must provide accurate, complete, and current information. 
                  Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                </p>
                <p>
                  You are responsible for safeguarding the password that you use to access the Service and for any activities 
                  or actions under your password. You agree not to disclose your password to any third party. You must notify us 
                  immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">2. Intellectual Property</h2>
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive 
                  property of Astreus AI, Inc. and its licensors. The Service is protected by copyright, trademark, 
                  and other laws of both the United States and foreign countries. Our trademarks and trade dress may not 
                  be used in connection with any product or service without the prior written consent of Astreus AI, Inc.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">3. User Content</h2>
                <p>
                  Our Service allows you to post, link, store, share and otherwise make available certain information, 
                  text, graphics, videos, or other material (&ldquo;Content&rdquo;). You are responsible for the Content that you 
                  post to the Service, including its legality, reliability, and appropriateness.
                </p>
                <p>
                  By posting Content to the Service, you grant us the right and license to use, modify, perform, 
                  display, reproduce, and distribute such Content on and through the Service. You retain any and all 
                  of your rights to any Content you submit, post, or display on or through the Service and you are 
                  responsible for protecting those rights.
                </p>
                <p>
                  You represent and warrant that: (i) the Content is yours or you have the right to use it and grant us 
                  the rights and license as provided in these Terms, and (ii) the posting of your Content on or through 
                  the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any 
                  other rights of any person.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">4. Acceptable Use</h2>
                <p>
                  You agree not to use the Service:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>In any way that violates any applicable national or international law or regulation</li>
                  <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors</li>
                  <li>To transmit any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable</li>
                  <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use of the Service, or which may harm the Company or users of the Service</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">5. Termination</h2>
                <p>
                  We may terminate or suspend your account immediately, without prior notice or liability, for any 
                  reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will immediately cease. If you wish to terminate 
                  your account, you may simply discontinue using the Service or delete your account.
                </p>
                <p>
                  All provisions of the Terms which by their nature should survive termination shall survive 
                  termination, including, without limitation, ownership provisions, warranty disclaimers, 
                  indemnity, and limitations of liability.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">6. Limitation of Liability</h2>
                <p>
                  In no event shall Astreus AI, Inc., its directors, employees, partners, agents, suppliers, or affiliates, 
                  be liable for any indirect, incidental, special, consequential or punitive damages, including without 
                  limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your 
                  access to or use of or inability to access or use the Service; (ii) any conduct or content of any third 
                  party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or 
                  alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) 
                  or any other legal theory, whether or not we have been informed of the possibility of such damage.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">7. Disclaimer</h2>
                <p>
                  Your use of the Service is at your sole risk. The Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. 
                  The Service is provided without warranties of any kind, whether express or implied, including, but not limited 
                  to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
                </p>
                <p>
                  Astreus AI, Inc., its subsidiaries, affiliates, and licensors do not warrant that a) the Service will function 
                  uninterrupted, secure, or available at any particular time or location; b) any errors or defects will be corrected; 
                  c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">8. Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the State of California, 
                  United States, without regard to its conflict of law provisions.
                </p>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. 
                  If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions 
                  of these Terms will remain in effect.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">9. Changes</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is 
                  material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes 
                  a material change will be determined at our sole discretion.
                </p>
                <p>
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. 
                  If you do not agree to the new terms, please stop using the Service.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">10. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="mt-2">
                  <strong>Email:</strong> legal@astreus.ai<br />
                  <strong>Address:</strong> Astreus AI, Inc., 123 Tech Plaza, San Francisco, CA 94107, USA
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer 
        logo="/astreus-logo-black.svg"
        brandName="Astreus"
        columns={footerColumns}
        socialLinks={{
          twitter: 'https://x.com/astreusai',
          github: 'https://github.com/astreus-ai/astreus',
          discord: 'https://discord.gg/astreus',
        }}
      />
    </div>
  );
} 