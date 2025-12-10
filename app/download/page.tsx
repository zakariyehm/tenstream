'use client';

import { useState } from "react";
import AdSense from "@/components/AdSense";

export default function DownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Download TenStream
          </h1>
          <p className="text-xl text-zinc-400">
            Get the latest version of TenStream for Android
          </p>
        </div>

        {/* AdSense - Top Banner */}
        <div className="mb-8">
          <AdSense format="horizontal" className="w-full" />
        </div>

        {/* Download Card */}
        <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8 md:p-12 mb-8">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-2">TenStream APK</h2>
              <p className="text-zinc-400 mb-6">Version 1.0.0 • 90 MB</p>
            </div>

            <a
              href="/tenstream.apk"
              download="TenStream.apk"
              onClick={() => {
                setIsDownloading(true);
                setTimeout(() => setIsDownloading(false), 2000);
              }}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] no-underline"
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
          </div>
        </div>

        {/* Installation Instructions */}
        <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
          <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Installation Instructions</h3>
          <ol className="space-y-4 text-zinc-300">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">1</span>
              <div>
                <p className="font-medium">Enable Unknown Sources</p>
                <p className="text-zinc-400 text-sm mt-1">Go to Settings → Security → Enable "Install from Unknown Sources"</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#04C16A] rounded-full flex items-center justify-center text-black font-bold">2</span>
              <div>
                <p className="font-medium">Download the APK</p>
                <p className="text-zinc-400 text-sm mt-1">Click the download button above to get the TenStream APK file</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#04C16A] rounded-full flex items-center justify-center text-black font-bold">3</span>
              <div>
                <p className="font-medium">Install the App</p>
                <p className="text-zinc-400 text-sm mt-1">Open the downloaded APK file and follow the installation prompts</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#04C16A] rounded-full flex items-center justify-center text-black font-bold">4</span>
              <div>
                <p className="font-medium">Launch TenStream</p>
                <p className="text-zinc-400 text-sm mt-1">Open the app and start streaming your favorite content!</p>
              </div>
            </li>
          </ol>
        </div>

        {/* AdSense - Middle Banner */}
        <div className="mt-8 mb-8">
          <AdSense format="horizontal" className="w-full" />
        </div>

        {/* System Requirements */}
        <div className="mt-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
          <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">System Requirements</h3>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Android 6.0 (Marshmallow) or higher</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>At least 100 MB of free storage space</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Internet connection for streaming content</span>
            </li>
          </ul>
        </div>

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
  );
}

