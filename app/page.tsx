'use client';

import Image from "next/image";
import { useState } from "react";
import AdSense from "@/components/AdSense";

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);

  const features = [
    {
      icon: "🎬",
      title: "Movies & TV Series",
      description: "Browse thousands of movies and TV series with detailed information and ratings"
    },
    {
      icon: "⭐",
      title: "For You Section",
      description: "Personalized recommendations based on trending content and your preferences"
    },
    {
      icon: "📺",
      title: "Video Player",
      description: "High-quality video playback with support for multiple formats and resolutions"
    },
    {
      icon: "🔖",
      title: "Watchlist",
      description: "Save your favorite movies and shows to watch later with one tap"
    },
    {
      icon: "🔍",
      title: "Search & Discover",
      description: "Find your favorite content quickly with powerful search and filtering options"
    },
    {
      icon: "🌙",
      title: "Dark Theme",
      description: "Beautiful dark interface designed for comfortable viewing day and night"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/10 to-purple-500/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          {/* Logo/Title */}
          <div className="mb-8">
            <div className="flex flex-col items-center gap-6 mb-6">
              <Image
                src="/logo.png"
                alt="TenStream Logo"
                width={120}
                height={120}
                className="rounded-3xl shadow-2xl"
                priority
              />
            </div>
            <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
              TenStream
            </h1>
            <p className="text-2xl md:text-3xl text-zinc-300 font-light">
              Your Ultimate Streaming Experience
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-zinc-400 mb-4 leading-relaxed">
              TenStream - Watch Free Movies & TV Shows in HD on any device.
            </p>
            <p className="text-base md:text-lg text-zinc-500 mb-6">
              No Subscription Fees, No Registration, and Unlimited Free HD Content.
            </p>
            <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
              The TenStream app redefines streaming with its no-cost model, offering popular movies and TV shows in HD 
              without any subscription, registration, or login requirements. With TenStream, you can forget about expensive 
              streaming platforms and enjoy your favorite content free of charge, anytime and anywhere.
            </p>
            {/* Version Info */}
            <div className="mt-6 inline-flex items-center gap-4 px-4 py-2 bg-zinc-900/50 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 text-sm">Version:</span>
              <span className="text-orange-500 font-semibold">1.0.0</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400 text-sm">Size:</span>
              <span className="text-orange-500 font-semibold">90 MB</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400 text-sm">Updated:</span>
              <span className="text-orange-500 font-semibold">Dec 2024</span>
            </div>
          </div>

          {/* Download Button */}
          <a
            href="/tenstream.apk"
            download="TenStream.apk"
            onClick={(e) => {
              setIsDownloading(true);
              setTimeout(() => {
                setIsDownloading(false);
              }, 2000);
            }}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] disabled:opacity-50 disabled:cursor-not-allowed no-underline"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center gap-3">
              {isDownloading ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download APK
                </>
              )}
            </span>
          </a>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* AdSense - Top Banner */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <AdSense format="horizontal" className="w-full" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Features
          </h2>
          <p className="text-center text-zinc-400 mb-16 text-lg">
            Everything you need for the perfect streaming experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            How to Use TenStream App
          </h2>
          <p className="text-center text-zinc-400 mb-12 text-lg">
            Get started with TenStream in just a few simple steps
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Instructions */}
            <div className="space-y-6">
              <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">First Launch</h3>
                    <p className="text-zinc-400">On the first launch, tap <strong className="text-white">OK</strong> to dismiss the Change Log dialog.</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#04C16A] rounded-full flex items-center justify-center text-black font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Optional Login</h3>
                    <p className="text-zinc-400">Optionally, log in with your email or skip this step to proceed.</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#04C16A] rounded-full flex items-center justify-center text-black font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Explore Content</h3>
                    <p className="text-zinc-400">Explore the <strong className="text-white">Movies</strong> screen or switch to <strong className="text-white">TV Shows</strong> via the menu.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* App Screenshot Placeholder */}
            <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-6 flex items-center justify-center">
              <div className="w-full max-w-sm">
                <div className="bg-black rounded-2xl p-4 shadow-2xl">
                  {/* Mock Phone Frame */}
                  <div className="bg-zinc-900 rounded-lg overflow-hidden">
                    <div className="bg-zinc-800 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded"></div>
                        <span className="text-white font-semibold text-sm">TenStream</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-5 h-5 bg-zinc-700 rounded"></div>
                        <div className="w-5 h-5 bg-zinc-700 rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-purple-500 text-white rounded text-sm font-semibold">Trending</button>
                        <button className="px-4 py-2 bg-zinc-800 text-zinc-400 rounded text-sm">Popular</button>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="aspect-[2/3] bg-zinc-800 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-zinc-500 text-sm mt-4">TenStream App Interface</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Why Choose TenStream?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Completely Free</h4>
                  <p className="text-zinc-400 text-sm">No subscription fees, no registration required. Enjoy unlimited free HD content.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Multi-Device Support</h4>
                  <p className="text-zinc-400 text-sm">Works on Android phones, tablets, Smart TVs, and more.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Offline Downloads</h4>
                  <p className="text-zinc-400 text-sm">Download your favorite movies and shows to watch offline anytime.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Regular Updates</h4>
                  <p className="text-zinc-400 text-sm">Regular updates with new features, bug fixes, and content additions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20 px-6 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            TenStream App Screenshots
          </h2>
          <p className="text-center text-zinc-400 mb-12 text-lg">
            Explore the beautiful interface and features of TenStream
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Screenshot 1 - Home Screen */}
            <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-4">
              <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-[9/16] bg-gradient-to-br from-zinc-900 to-black flex flex-col">
                  <div className="bg-zinc-800 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded"></div>
                        <span className="text-white font-semibold text-xs">TenStream</span>
                      </div>
                  </div>
                  <div className="flex-1 p-4 space-y-3">
                    <div className="h-48 bg-zinc-800 rounded-lg"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-zinc-800 rounded w-3/4"></div>
                      <div className="h-4 bg-zinc-800 rounded w-1/2"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-[2/3] bg-zinc-800 rounded"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-zinc-500 text-sm mt-3">Home Screen</p>
            </div>

            {/* Screenshot 2 - Movies Screen */}
            <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-4">
              <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-[9/16] bg-gradient-to-br from-zinc-900 to-black flex flex-col">
                  <div className="bg-zinc-800 px-4 py-3 flex items-center justify-between">
                    <span className="text-white font-semibold text-xs">Movies</span>
                    <div className="w-5 h-5 bg-zinc-700 rounded"></div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <div key={i} className="aspect-[2/3] bg-zinc-800 rounded"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-zinc-500 text-sm mt-3">Movies Library</p>
            </div>

            {/* Screenshot 3 - Video Player */}
            <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-4">
              <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-[9/16] bg-gradient-to-br from-zinc-900 to-black flex flex-col">
                  <div className="flex-1 bg-zinc-800 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="bg-zinc-900 px-4 py-3">
                    <div className="h-1 bg-zinc-700 rounded-full mb-2">
                      <div className="h-1 bg-[#04C16A] rounded-full w-1/3"></div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span>10:30</span>
                      <span>30:45</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-zinc-500 text-sm mt-3">Video Player</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-500 text-sm mb-4">
              Replace these placeholders with actual screenshots of your TenStream app
            </p>
            <p className="text-zinc-600 text-xs">
              To add screenshots: Place your images in /public/screenshots/ and update the Image src paths
            </p>
          </div>
        </div>
      </section>

      {/* AdSense - Middle Banner */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <AdSense format="horizontal" className="w-full" />
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Conclusion
          </h2>
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-8">
            <p>
              TenStream stands out as a reliable, user-friendly streaming application that delivers an exceptional 
              entertainment experience. With its completely free access, support for multiple languages, and compatibility 
              across devices, it caters to a diverse audience. Features like multiple servers, offline downloads, and regular 
              updates make it an unparalleled choice for movie and TV enthusiasts.
            </p>
            <p>
              TenStream App eliminates the need for costly subscriptions or registrations, delivering premium content effortlessly. 
              Whether you're looking to binge your favorite series or discover the latest releases, TenStream ensures a smooth, 
              high-quality experience. Download TenStream today and unlock a world of free entertainment at your fingertips!
            </p>
          </div>
          
          {/* Download Button - Prominent */}
          <div className="text-center mb-12">
            <a
              href="/tenstream.apk"
              download="TenStream.apk"
              onClick={() => {
                setIsDownloading(true);
                setTimeout(() => setIsDownloading(false), 2000);
              }}
              className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] no-underline"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center gap-3">
                {isDownloading ? (
                  <>
                    <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Downloading...
                  </>
                ) : (
                  <>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download TenStream APK
                  </>
                )}
              </span>
            </a>
          </div>

          {/* AdSense - Sidebar Style */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <AdSense format="rectangle" className="w-full" />
            </div>
            <div>
              <AdSense format="vertical" className="w-full" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
