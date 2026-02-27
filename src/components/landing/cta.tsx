import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="px-6 md:px-10 py-8 md:py-12 bg-background w-full">
      <div className="container-custom relative w-full rounded-[32px] overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center justify-center p-8 md:p-12 text-center">

        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banner-1.jpg"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 md:space-y-8 flex flex-col items-center">

          <h2 className="text-3xl md:text-5xl lg:text-5xl font-heading font-bold text-white leading-tight tracking-tight max-w-3xl">
            Build Your Home With A Comfortable Room By Using Our Interior
          </h2>

          <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-2xl font-light">
            Looking for quality design furniture? then your choice is right have visited our website<br className="hidden md:block" />
            We have furniture with several quality ready to be sent to you
          </p>

          <div className="pt-4">
            <Link
              href="/#categories"
              className="inline-flex items-center justify-center bg-white text-black px-10 py-3.5 rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;
