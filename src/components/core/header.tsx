"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-transform duration-300">
      <div className="bg-card rounded-full px-8 py-4 flex items-center w-full relative">
        {/* Logo Container */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center z-10 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-end space-x-8 flex-1">
          <Link href="/" className="relative group cursor-pointer flex items-center text-sm font-medium text-foreground border-b border-foreground pb-0.5">
            Home
          </Link>
          <Link href="/#categories" className="relative group cursor-pointer flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Categories
          </Link>
          <Link href="/#recommended" className="relative group cursor-pointer flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Recommended
          </Link>
          <Link href="/#heritage" className="relative group cursor-pointer flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Heritage
          </Link>
          <Link href="/#gallery" className="relative group cursor-pointer flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Gallery
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-end flex-1">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground hover:text-muted-foreground transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-card rounded-2xl shadow-xl border border-border p-4 flex flex-col space-y-2">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground font-medium text-lg hover:text-muted-foreground transition-colors px-4 py-2 border-b border-border/50">
            Home
          </Link>
          <Link href="/#categories" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground font-medium text-lg hover:text-foreground transition-colors px-4 py-2 border-b border-border/50">
            Categories
          </Link>
          <Link href="/#recommended" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground font-medium text-lg hover:text-foreground transition-colors px-4 py-2 border-b border-border/50">
            Recommended
          </Link>
          <Link href="/#heritage" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground font-medium text-lg hover:text-foreground transition-colors px-4 py-2 border-b border-border/50">
            Heritage
          </Link>
          <Link href="/#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground font-medium text-lg hover:text-foreground transition-colors px-4 py-2">
            Gallery
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
