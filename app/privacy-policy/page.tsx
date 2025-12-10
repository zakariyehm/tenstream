import AdSense from "@/components/AdSense";

export const metadata = {
  title: "Privacy Policy - TenStream",
  description: "Read TenStream's Privacy Policy to understand how we handle your information and protect your privacy when using our website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Privacy Policy
          </h1>
          <p className="text-xl text-zinc-400">
            Last updated: December 2024
          </p>
        </div>

        {/* AdSense - Top Banner */}
        <div className="mb-8">
          <AdSense format="horizontal" className="w-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Introduction
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Welcome to TenStream. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website. Please read this privacy policy carefully. If you do 
                not agree with the terms of this privacy policy, please do not access the site.
              </p>
              <p>
                We are committed to protecting your privacy and ensuring you have a positive experience on our website. 
                This policy applies to all visitors and users of our website.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Information We Collect
            </h2>
            <div className="space-y-4 text-zinc-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Automatically Collected Information</h3>
                <p className="leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, 
                  including information about your web browser, IP address, time zone, and some of the cookies that 
                  are installed on your device.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Usage Data</h3>
                <p className="leading-relaxed">
                  We may collect information about how you access and use our website, including pages visited, 
                  time spent on pages, and links clicked. This helps us improve our website and user experience.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Cookies and Tracking Technologies</h3>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain 
                  information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              How We Use Your Information
            </h2>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>To provide, maintain, and improve our website services</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>To analyze website usage and trends</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>To personalize your experience on our website</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>To display relevant advertisements (via Google AdSense)</span>
              </li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Third-Party Services
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Our website uses Google AdSense, a third-party advertising service. Google AdSense uses cookies to 
                serve ads based on your prior visits to our website or other websites. Google's use of advertising 
                cookies enables it and its partners to serve ads to you based on your visit to our site and/or other 
                sites on the Internet.
              </p>
              <p>
                You may opt out of personalized advertising by visiting 
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 ml-1">Google's Ads Settings</a>.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Data Security
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. 
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot 
              guarantee absolute security.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Changes to This Privacy Policy
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
              Policy periodically for any changes.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us through our 
              <a href="/contact-us" className="text-orange-500 hover:text-orange-400 ml-1">Contact Us</a> page.
            </p>
          </section>

          {/* AdSense - Bottom */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <AdSense format="rectangle" className="w-full" />
            </div>
            <div>
              <AdSense format="vertical" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

