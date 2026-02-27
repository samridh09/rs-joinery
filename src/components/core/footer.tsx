'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-6 md:px-10 mt-auto">
      <div className="container-custom">
        {/* Top Section: Newsletter & Branding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 border-b border-background/20 pb-20">

          {/* Logo & Description */}
          <div className="space-y-8">
            <Link href="/" className="inline-block relative">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={32}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-lg max-w-sm leading-relaxed">
              Crafting exceptional cabinetry and joinery that transforms spaces into timeless works of art, blending heritage with modern luxury.
            </p>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-heading font-bold">Stay Inspired</h3>
            <p className="text-background/70 text-sm">
              Subscribe to our newsletter for the latest designs, trends, and exclusive offers.
            </p>
            <form className="relative max-w-md w-full" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent border-b border-background/30 px-0 py-3 text-background placeholder:text-background/40 focus:outline-none focus:border-background transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-background/10 rounded-full transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-lg">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/#heritage" className="text-background/70 hover:text-background transition-colors text-sm">Our Heritage</Link></li>
              <li><Link href="/#gallery" className="text-background/70 hover:text-background transition-colors text-sm">Craftsmanship</Link></li>
              <li><Link href="/" className="text-background/70 hover:text-background transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading font-bold text-lg">Products</h4>
            <ul className="space-y-4">
              <li><Link href="/#categories" className="text-background/70 hover:text-background transition-colors text-sm">Bathroom</Link></li>
              <li><Link href="/#categories" className="text-background/70 hover:text-background transition-colors text-sm">Chairs & Decor</Link></li>
              <li><Link href="/#recommended" className="text-background/70 hover:text-background transition-colors text-sm">Living Room</Link></li>
              <li><Link href="/#recommended" className="text-background/70 hover:text-background transition-colors text-sm">Bedroom</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading font-bold text-lg">Support</h4>
            <ul className="space-y-4">
              <li><Link href="/#contact" className="text-background/70 hover:text-background transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/" className="text-background/70 hover:text-background transition-colors text-sm">FAQs</Link></li>
              <li><Link href="/" className="text-background/70 hover:text-background transition-colors text-sm">Warranty</Link></li>
              <li><Link href="/" className="text-background/70 hover:text-background transition-colors text-sm">Care Guide</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading font-bold text-lg">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-background/20 text-background/50 text-xs">
          <p>© {new Date().getFullYear()} RS Joinery & Cabinetry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-background transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-background transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
