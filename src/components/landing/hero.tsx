'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Truck, ShieldCheck, Box, MessageSquareText } from 'lucide-react';

const SLIDES = [
  {
    image: "/images/hero.png",
    heading: (
      <>
        The Art of Modern
        <br />
        Interior Living
      </>
    )
  },
  {
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80",
    heading: (
      <>
        Crafted for
        <br />
        Elegance
      </>
    )
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    heading: (
      <>
        Timeless Design
        <br />
        Every Space
      </>
    )
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col">
      {/* Top Image Section (Flexes to fill remaining height) */}
      <div className="relative flex-1 w-full overflow-hidden">
        <div 
          className="flex h-full w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {SLIDES.map((slide, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <Image 
                src={slide.image} 
                alt="Hero Slide" 
                fill 
                className="object-cover"
                priority={index === 0}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows (Always on top) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-white/50 text-background backdrop-blur-sm hover:bg-white/20 transition-colors pointer-events-auto"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-white/50 text-background backdrop-blur-sm hover:bg-white/20 transition-colors pointer-events-auto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Center Content (Always on top) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none z-20">
          <h1 
            key={currentSlide} // Force re-render for animation if desired
            className="text-5xl md:text-6xl lg:text-[72px] tracking-tight font-medium leading-[1.1] text-background pointer-events-auto animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            {SLIDES[currentSlide].heading}
          </h1>
        </div>
      </div>

      {/* Feature Bar (Docks at Bottom) */}
      <div className="bg-primary w-full text-primary-foreground px-8 py-6 md:py-8 flex-none grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center justify-between z-30">
        <div className="flex items-center space-x-3 justify-center md:justify-start">
          <Truck className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
          <span className="text-xs md:text-sm font-medium tracking-wide">Free Shipping Over $50</span>
        </div>
        
        <div className="flex items-center space-x-3 justify-center">
          <ShieldCheck className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
          <span className="text-xs md:text-sm font-medium tracking-wide">Quality Assurance</span>
        </div>
        
        <div className="flex items-center space-x-3 justify-center">
          <Box className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
          <span className="text-xs md:text-sm font-medium tracking-wide">Return within 14 days</span>
        </div>
        
        <div className="flex items-center space-x-3 justify-center md:justify-end">
          <MessageSquareText className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
          <span className="text-xs md:text-sm font-medium tracking-wide">Support 24/7</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
