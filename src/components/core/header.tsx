import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
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
        <nav className="hidden md:flex items-center justify-center space-x-8 flex-none">
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

        {/* Right Spacer for Center Balance */}
        <div className="flex-1 hidden md:flex justify-end"></div>
      </div>
    </header>
  );
};

export default Header;
