import AdSense from "@/components/AdSense";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            About Us
          </h1>
        </div>

        {/* AdSense - Top Banner */}
        <div className="mb-8">
          <AdSense format="horizontal" className="w-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Welcome Section */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8 md:p-10">
            <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
              <p>
                Welcome to TenStream, your ultimate destination for all things related to the TenStream App! We are dedicated 
                to providing you with detailed, accurate, and up-to-date information about the TenStream platform, a popular 
                streaming app that offers endless entertainment options for movie lovers and TV show enthusiasts.
              </p>
              <p>
                Our website serves as a comprehensive resource where you can learn about the TenStream App, its features, and 
                how it stands out in the world of streaming services. Whether you're looking to download the TenStream APK, 
                understand the installation process, or explore the app's functionality, we've got you covered.
              </p>
              <p>
                At TenStream, we strive to simplify your experience by offering step-by-step guides, insightful reviews, and 
                troubleshooting tips to ensure you enjoy a seamless streaming journey. Our goal is to empower users with the 
                knowledge they need to make the most of TenStream and its exceptional features.
              </p>
              <p className="text-orange-500 font-semibold">
                Thank you for visiting our website. Stay connected for the latest updates, guides, and all the information 
                you need about the TenStream App!
              </p>
            </div>
          </section>

          {/* What We Offer */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-white">Step-by-Step Guides</h3>
                  <p className="text-zinc-400">Comprehensive installation and usage guides to help you get started quickly</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-white">Insightful Reviews</h3>
                  <p className="text-zinc-400">Detailed reviews and analysis of TenStream's features and performance</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-white">Troubleshooting Tips</h3>
                  <p className="text-zinc-400">Solutions to common issues and problems you might encounter</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-white">Latest Updates</h3>
                  <p className="text-zinc-400">Stay informed about new features, updates, and improvements</p>
                </div>
              </div>
            </div>
          </section>

          {/* AdSense - Middle Banner */}
          <div className="my-8">
            <AdSense format="horizontal" className="w-full" />
          </div>

          {/* About TenStream App */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">About TenStream App</h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                TenStream is a powerful mobile streaming application that brings you the best movies and TV series. 
                Built with React Native and Expo, the app integrates seamlessly with TMDB (The Movie Database) to provide 
                you with comprehensive information about movies and TV shows, including ratings, reviews, and detailed descriptions.
              </p>
              <p>
                With a beautiful dark-themed interface, TenStream offers intuitive navigation, personalized recommendations, 
                and seamless video playback. Whether you're looking for the latest blockbusters or classic TV shows, 
                TenStream has you covered with its extensive library and user-friendly features.
              </p>
            </div>
          </section>

          {/* AdSense - Bottom Section */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
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

