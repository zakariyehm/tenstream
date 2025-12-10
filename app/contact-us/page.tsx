import AdSense from "@/components/AdSense";

export const metadata = {
  title: "Contact Us - TenStream",
  description: "Get in touch with TenStream. We're here to help with any questions, feedback, or support requests about the TenStream app.",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Contact Us
          </h1>
          <p className="text-xl text-zinc-400">
            We'd love to hear from you
          </p>
        </div>

        {/* AdSense - Top Banner */}
        <div className="mb-8">
          <AdSense format="horizontal" className="w-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Contact Information */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <div className="space-y-6 text-zinc-300 leading-relaxed">
              <p>
                Thank you for your interest in TenStream! We value your feedback, questions, and suggestions. 
                Whether you need help with the app, have a feature request, or want to report an issue, we're here to assist you.
              </p>
              <p>
                While TenStream is a free streaming application, we are committed to providing the best possible 
                user experience. Your feedback helps us improve the app and add new features that matter to you.
              </p>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Ways to Reach Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700">
                <h3 className="font-semibold text-lg mb-3 text-white">General Inquiries</h3>
                <p className="text-zinc-400 text-sm">
                  For general questions about TenStream, app features, or usage guidelines, please visit our 
                  <a href="/about" className="text-orange-500 hover:text-orange-400 ml-1">About Us</a> page.
                </p>
              </div>
              <div className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700">
                <h3 className="font-semibold text-lg mb-3 text-white">Technical Support</h3>
                <p className="text-zinc-400 text-sm">
                  For technical issues, installation problems, or troubleshooting, check our 
                  <a href="/download" className="text-orange-500 hover:text-orange-400 ml-1">Download</a> page 
                  for installation instructions.
                </p>
              </div>
              <div className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700">
                <h3 className="font-semibold text-lg mb-3 text-white">Feedback & Suggestions</h3>
                <p className="text-zinc-400 text-sm">
                  We welcome your feedback! Share your ideas for new features or improvements that would 
                  enhance your TenStream experience.
                </p>
              </div>
              <div className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700">
                <h3 className="font-semibold text-lg mb-3 text-white">Legal Inquiries</h3>
                <p className="text-zinc-400 text-sm">
                  For legal matters, copyright concerns, or DMCA requests, please review our 
                  <a href="/terms-and-conditions" className="text-orange-500 hover:text-orange-400 ml-1">Terms and Conditions</a> 
                  and <a href="/privacy-policy" className="text-orange-500 hover:text-orange-400 ml-1">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Important Notice */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Important Notice
            </h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                TenStream is an informational website that provides details about the TenStream mobile application. 
                We provide download links and installation guides to help users access the app.
              </p>
              <p>
                Please note that TenStream is a third-party application, and we are not responsible for the content 
                available through the app. Users are responsible for ensuring they comply with all applicable laws 
                and regulations in their jurisdiction.
              </p>
              <p className="text-orange-500 font-semibold">
                For the best experience, always download TenStream APK from our official website and follow the 
                installation instructions carefully.
              </p>
            </div>
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

