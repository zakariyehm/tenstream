import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              TenStream
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Your ultimate destination for free streaming entertainment. Download TenStream APK and enjoy unlimited movies and TV shows in HD quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/logo" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
                  Logo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">
            Copyright © {currentYear} TenStream. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm mt-2 md:mt-0">
            Built with Next.js & Capacitor
          </p>
        </div>
      </div>
    </footer>
  );
}

