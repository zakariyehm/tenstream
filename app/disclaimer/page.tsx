import AdSense from "@/components/AdSense";

export const metadata = {
  title: "Disclaimer - TenStream",
  description: "Read TenStream's Disclaimer to understand the limitations of liability and important information about using our website and the TenStream app.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Disclaimer
          </h1>
          <p className="text-xl text-zinc-400">
            Important information about TenStream
          </p>
        </div>

        {/* AdSense - Top Banner */}
        <div className="mb-8">
          <AdSense format="horizontal" className="w-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* General Disclaimer */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              General Disclaimer
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                TenStream excludes all representations, warranties, conditions, and terms relating to our website and 
                the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory 
                quality, fitness for purpose, and/or the use of reasonable care and skill).
              </p>
              <p>
                Nothing in this disclaimer will limit or exclude our liability for death or personal injury resulting from 
                negligence, limit or exclude our liability for fraud or fraudulent misrepresentation, or limit any of our 
                liabilities in any way that is not permitted under applicable law.
              </p>
            </div>
          </section>

          {/* Website Content Disclaimer */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Website Content Disclaimer
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                While we endeavor to keep the information up to date and correct, we make no representations or warranties 
                of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability 
                with respect to the website or the information, products, services, or related graphics contained on the website 
                for any purpose.
              </p>
              <p>
                Any reliance you place on such information is therefore strictly at your own risk. In no event will we be 
                liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any 
                loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use 
                of this website.
              </p>
            </div>
          </section>

          {/* App Disclaimer */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              TenStream App Disclaimer
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                TenStream is an informational website that provides download links and information about the TenStream mobile 
                application. We do not develop, host, or control the TenStream mobile application itself.
              </p>
              <p>
                The TenStream app is a third-party application, and we are not responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The functionality, performance, or availability of the app</li>
                <li>Any content accessed through the app</li>
                <li>Any issues, bugs, or errors in the app</li>
                <li>Compatibility with your device</li>
                <li>Any data loss or security issues</li>
              </ul>
            </div>
          </section>

          {/* Content Disclaimer */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Content Disclaimer
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                TenStream does not host, store, or distribute any video content, movies, or TV shows. The TenStream app may 
                provide access to third-party content sources, and we are not responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The availability, legality, or quality of content accessed through the app</li>
                <li>Copyright infringement or intellectual property violations</li>
                <li>Content accuracy, appropriateness, or suitability</li>
                <li>Any harm or damage resulting from accessing such content</li>
              </ul>
              <p className="text-orange-500 font-semibold mt-4">
                Users are solely responsible for ensuring their use of the TenStream app complies with all applicable laws 
                and regulations in their jurisdiction, including copyright and intellectual property laws.
              </p>
            </div>
          </section>

          {/* External Links Disclaimer */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              External Links Disclaimer
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Through this website, you are able to link to other websites which are not under the control of TenStream. 
              We have no control over the nature, content, and availability of those sites. The inclusion of any links does 
              not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </section>

          {/* Download Disclaimer */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Download Disclaimer
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                When downloading the TenStream APK from our website, you acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are downloading the APK at your own risk</li>
                <li>We are not responsible for any damage to your device</li>
                <li>You should scan the APK with antivirus software before installation</li>
                <li>You should only download from our official website</li>
                <li>We are not responsible for any security vulnerabilities</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Limitation of Liability
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              In no event shall TenStream, its owners, operators, or affiliates be liable for any direct, indirect, 
              incidental, special, consequential, or punitive damages, including without limitation, loss of profits, 
              data, use, goodwill, or other intangible losses, resulting from your use of this website or the TenStream app.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              If you have any questions about this Disclaimer, please contact us through our 
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

