import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    { src: '/images/portfolio-1.png', alt: 'Modern Living Space' },
    { src: '/images/service-1.png', alt: 'Bespoke Cabinetry' },
    { src: '/images/portfolio-2.png', alt: 'Minimalist Dining' },
    { src: '/images/service-4.png', alt: 'Custom Joinery' },
    { src: '/images/portfolio-3.png', alt: 'Luxury Kitchen' },
    { src: '/images/about-main.png', alt: 'Elegant Bedroom' },
    { src: '/images/portfolio-4.png', alt: 'Architectural Details' },
    { src: '/images/service-3.png', alt: 'Premium Materials' },
  ];

  return (
    <section id="gallery" className="section-padding bg-background w-full">
      <div className="container-custom flex flex-col items-center">

        {/* Header Section */}
        <div className="w-full flex flex-col items-center text-center mb-12 md:mb-16 gap-6">
          <div className="space-y-4 flex flex-col items-center">
            <div className="flex items-center space-x-4">
              <span className="w-12 h-[1px] bg-foreground"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                Our Work
              </span>
              <span className="w-12 h-[1px] bg-foreground"></span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-[1.1] tracking-tight">
              Our <span className="text-muted-foreground">Gallery</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Explore our curated collection of masterful designs and bespoke carpentry. Every piece is a testament to our dedication to craft and quality.
          </p>
        </div>

        {/* Pinterest-style Masonry Gallery */}
        <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[24px] group break-inside-avoid"
            >
              {/* Varying heights to simulate organic masonry before true images load */}
              <div className={`relative w-full ${index % 3 === 0 ? 'aspect-[3/4]' :
                index % 4 === 0 ? 'aspect-[4/5]' : 'aspect-square'
                }`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />

                {/* Subtle Hover Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <p className="text-white font-heading font-bold text-lg">{image.alt}</p>
                  <p className="text-white/80 text-sm">View Details</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center w-full">
          <button className="bg-foreground text-background px-8 py-4 rounded-full font-semibold text-sm hover:bg-foreground/90 transition-colors tracking-wide">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
