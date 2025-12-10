'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="TenStream Logo"
              width={50}
              height={50}
              className="rounded-xl"
              priority
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              TenStream
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-zinc-300 hover:text-orange-500 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/download" 
              className="text-zinc-300 hover:text-orange-500 transition-colors font-medium"
            >
              Download
            </Link>
            <Link 
              href="/about" 
              className="text-zinc-300 hover:text-orange-500 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/logo" 
              className="text-zinc-300 hover:text-orange-500 transition-colors font-medium"
            >
              Logo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-zinc-300 hover:text-orange-500 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-zinc-800 pt-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-zinc-300 hover:text-orange-500 transition-colors font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/download"
              onClick={() => setIsMenuOpen(false)}
              className="block text-zinc-300 hover:text-orange-500 transition-colors font-medium py-2"
            >
              Download
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-zinc-300 hover:text-orange-500 transition-colors font-medium py-2"
            >
              About
            </Link>
            <Link
              href="/logo"
              onClick={() => setIsMenuOpen(false)}
              className="block text-zinc-300 hover:text-orange-500 transition-colors font-medium py-2"
            >
              Logo
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

