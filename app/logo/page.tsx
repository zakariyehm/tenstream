import Image from 'next/image';

export default function LogoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            TenStream Logo
          </h1>
          <p className="text-xl text-zinc-400">
            Brand identity and logo resources
          </p>
        </div>

        {/* Logo Showcase */}
        <div className="space-y-8">
          {/* Main Logo */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Primary Logo</h2>
            <div className="flex flex-col items-center justify-center p-12 bg-black rounded-xl">
              <Image
                src="/logo.png"
                alt="TenStream Logo"
                width={200}
                height={200}
                className="rounded-3xl mb-4"
                priority
              />
              <p className="text-zinc-400 text-sm">Main brand logo with gradient effect</p>
            </div>
          </section>

          {/* Logo Variations */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Logo Variations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Light Background */}
              <div className="p-8 bg-white rounded-xl flex flex-col items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="TenStream Logo"
                  width={120}
                  height={120}
                  className="rounded-2xl"
                />
                <p className="text-zinc-600 text-sm mt-4">Light background variant</p>
              </div>
              
              {/* Dark Background */}
              <div className="p-8 bg-black rounded-xl border border-zinc-800 flex flex-col items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="TenStream Logo"
                  width={120}
                  height={120}
                  className="rounded-2xl"
                />
                <p className="text-zinc-400 text-sm mt-4">Dark background variant</p>
              </div>
            </div>
          </section>

          {/* Brand Colors */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Brand Colors</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="h-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg"></div>
                <div>
                  <p className="font-semibold text-white mb-1">Primary Orange</p>
                  <p className="text-zinc-400 text-sm">#F97316</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg"></div>
                <div>
                  <p className="font-semibold text-white mb-1">Gradient Pink-Purple</p>
                  <p className="text-zinc-400 text-sm">#EC4899 → #A855F7</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-24 bg-zinc-900 rounded-lg border border-zinc-800"></div>
                <div>
                  <p className="font-semibold text-white mb-1">Background</p>
                  <p className="text-zinc-400 text-sm">#181818</p>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Typography</h2>
            <div className="space-y-6">
              <div>
                <p className="text-zinc-400 text-sm mb-2">Heading</p>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  TenStream
                </h1>
              </div>
              <div>
                <p className="text-zinc-400 text-sm mb-2">Subheading</p>
                <h2 className="text-3xl font-semibold text-white">Your Ultimate Streaming Experience</h2>
              </div>
              <div>
                <p className="text-zinc-400 text-sm mb-2">Body Text</p>
                <p className="text-lg text-zinc-300">TenStream is a powerful mobile streaming application that brings you the best movies and TV series.</p>
              </div>
            </div>
          </section>

          {/* Usage Guidelines */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-6 text-[#04C16A]">Usage Guidelines</h2>
            <div className="space-y-4 text-zinc-300">
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p>Maintain the gradient effect when displaying the logo</p>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p>Use appropriate contrast on different backgrounds</p>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p>Ensure minimum clear space around the logo</p>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p>Do not modify, distort, or alter the logo design</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

