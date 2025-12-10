import AdSense from "@/components/AdSense";

export const metadata = {
  title: "Terms and Conditions - TenStream",
  description: "Read TenStream's Terms and Conditions to understand the rules and regulations for using our website and downloading the TenStream APK.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Terms and Conditions
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
          {/* Agreement to Terms */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Agreement to Terms
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of 
                this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms and Conditions ("Terms") govern your access to and use of the TenStream website. 
                Please read these Terms carefully before using our website.
              </p>
            </div>
          </section>

          {/* Use License */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Use License
            </h2>
            <div className="space-y-4 text-zinc-300">
              <p className="leading-relaxed">
                Permission is granted to temporarily download one copy of the TenStream APK for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Disclaimer
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                The materials on TenStream's website are provided on an 'as is' basis. TenStream makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>
              <p>
                Further, TenStream does not warrant or make any representations concerning the accuracy, likely results, 
                or reliability of the use of the materials on its website or otherwise relating to such materials or on 
                any sites linked to this site.
              </p>
            </div>
          </section>

          {/* Limitations */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Limitations
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              In no event shall TenStream or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
              to use the materials on TenStream's website, even if TenStream or a TenStream authorized representative 
              has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          {/* User Responsibilities */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              User Responsibilities
            </h2>
            <div className="space-y-4 text-zinc-300">
              <p className="leading-relaxed">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ensuring they comply with all applicable laws and regulations in their jurisdiction</li>
                <li>Using the TenStream app in a legal and responsible manner</li>
                <li>Respecting intellectual property rights and copyright laws</li>
                <li>Not using the app for any illegal activities</li>
                <li>Keeping their devices secure and protected</li>
              </ul>
            </div>
          </section>

          {/* Content Disclaimer */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Content Disclaimer
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              TenStream is an informational website that provides information about the TenStream mobile application. 
              We do not host, store, or distribute any video content. The TenStream app may provide access to third-party 
              content, and we are not responsible for the availability, legality, or quality of such content. Users are 
              solely responsible for ensuring their use of the app complies with applicable laws.
            </p>
          </section>

          {/* Modifications */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Modifications
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              TenStream may revise these terms of service for its website at any time without notice. By using this 
              website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          {/* Governing Law */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Governing Law
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with applicable laws. Any disputes 
              relating to these terms will be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Contact Information
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us through our 
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

