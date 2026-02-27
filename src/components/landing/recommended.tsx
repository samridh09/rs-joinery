import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  image: string;
  link?: string;
}

const ProductCard = ({ title, image, link = "#" }: ProductCardProps) => {
  return (
    <div className="group relative w-full h-full rounded-[32px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <h3 className="text-white font-heading font-bold text-2xl md:text-3xl tracking-tight leading-tight max-w-[200px]">
          {title}
        </h3>

        <Link
          href={link}
          className="inline-flex items-center justify-center space-x-2 bg-white text-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-gray-100 transition-colors w-max shrink-0"
        >
          <span>View all products</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

const Recommended = () => {
  return (
    <section id="recommended" className="section-padding bg-background w-full">
      <div className="container-custom flex flex-col items-center">

        {/* Header */}
        <div className="text-center max-w-2xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight mb-4">
            Most Recommend Product For You
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Discover top-recommended furniture tailored to your style and needs. Elevate your home with pieces designed for comfort and elegance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full min-h-[600px] lg:h-[700px]">

          {/* Left Column (Tall Card) */}
          <div className="w-full h-[400px] lg:h-full">
            <ProductCard
              title="Living Room Furnitures"
              image="/images/about-main.png"
            />
          </div>

          {/* Right Column (Two Stacked Cards) */}
          <div className="flex flex-col gap-6 w-full h-[600px] lg:h-full">
            <div className="flex-1 w-full relative">
              <ProductCard
                title="Bedroom Furnitures"
                image="/images/service-1.png"
              />
            </div>
            <div className="flex-1 w-full relative">
              <ProductCard
                title="Dinning Furnitures"
                image="/images/service-2.png"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Recommended;
