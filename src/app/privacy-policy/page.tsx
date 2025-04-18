import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-gray-600 mb-4">
                Last Updated: {lastUpdated}
              </p>
              <div className="h-0.5 w-full bg-gray-100 my-8"></div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">1. Introduction</h2>
                <p>
                  Welcome to Astreus AI. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, disclose, and safeguard your information when 
                  you visit our website and use our services.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">2. Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us, information we collect automatically when you 
                  use our services, and information from third parties.
                </p>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 mt-6">2.1 Information You Provide</h3>
                <p>
                  We may collect personal information that you provide when you:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Create an account or user profile</li>
                  <li>Fill out forms or surveys</li>
                  <li>Subscribe to newsletters or communications</li>
                  <li>Contact our support team</li>
                  <li>Participate in contests, promotions, or events</li>
                </ul>
                <p>
                  This information may include your name, email address, company information, and other contact details.
                </p>

                <h3 className="text-xl font-bold mb-3 text-gray-900 mt-6">2.2 Automatically Collected Information</h3>
                <p>
                  When you use our services, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Device information (such as your IP address, browser type, and operating system)</li>
                  <li>Usage information (such as pages visited, time spent on the site, and links clicked)</li>
                  <li>Location information (based on your IP address)</li>
                  <li>Cookies and similar technologies</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">3. How We Use Your Information</h2>
                <p>
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing transactions and managing your account</li>
                  <li>Sending you technical notices, updates, and support messages</li>
                  <li>Responding to your comments, questions, and requests</li>
                  <li>Understanding how users interact with our services</li>
                  <li>Detecting, preventing, and addressing technical issues or fraud</li>
                  <li>Communicating with you about products, services, offers, and events</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">4. Sharing Your Information</h2>
                <p>
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Service providers who perform services on our behalf</li>
                  <li>Business partners with whom we jointly offer products or services</li>
                  <li>Law enforcement or other third parties where required by law</li>
                  <li>In connection with a merger, sale, or acquisition</li>
                </ul>
                <p>
                  We do not sell your personal information to third parties.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">5. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information from unauthorized 
                  access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
                  or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">6. Your Rights and Choices</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Accessing, correcting, or deleting your personal information</li>
                  <li>Objecting to or restricting certain processing activities</li>
                  <li>Requesting that we transfer your information to another organization</li>
                  <li>Withdrawing consent for processing</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided at the end of this policy.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">7. International Data Transfers</h2>
                <p>
                  Your information may be transferred to, and processed in, countries other than the country in which you 
                  reside. These countries may have data protection laws that are different from the laws of your country. 
                  We ensure appropriate safeguards are in place to protect your information when transferred internationally.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">8. Children's Privacy</h2>
                <p>
                  Our services are not directed to children under the age of 13. We do not knowingly collect personal 
                  information from children under 13. If you are a parent or guardian and believe that your child has 
                  provided us with personal information, please contact us.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the 
                  new privacy policy on this page and updating the "Last Updated" date. You are advised to review this 
                  privacy policy periodically for any changes.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">10. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our practices, please contact us at:
                </p>
                <p className="mt-2">
                  <strong>Email:</strong> privacy@astreus.ai<br />
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