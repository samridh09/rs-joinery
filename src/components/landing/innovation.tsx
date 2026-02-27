import React from 'react';
import Image from 'next/image';

const Innovation = () => {
  return (
    <section id="heritage" className="section-padding bg-muted/40 w-full overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

        {/* Left Column: Arch Image & Floating Elements */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-start lg:pl-6 pb-12 lg:pb-0">

          {/* Background Decorative Arch Wireframe */}
          <div className="absolute top-6 left-0 md:top-10 md:left-4 w-[90%] md:w-[80%] lg:w-full aspect-[2/3] border border-border rounded-t-[1000px] rounded-b-[40px] z-0" />

          {/* Main Arch Image */}
          <div className="relative w-[90%] md:w-[80%] lg:w-full aspect-[2/3] rounded-t-[1000px] rounded-b-[40px] overflow-hidden shadow-2xl z-10 bg-muted">
            <Image
              src="/images/about-main.png"
              alt="Craftsmanship and Heritage"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating Circle Badge */}
          <div className="absolute -bottom-6 right-0 md:bottom-12 md:-right-8 lg:-right-12 bg-foreground text-background rounded-full shadow-2xl flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 z-20 border-8 border-background">
            <span className="text-3xl md:text-4xl font-heading font-extrabold mb-1 tracking-tight">
              30<span className="text-background/50 text-2xl font-normal">+</span>
            </span>
            <span className="text-[9px] md:text-[11px] uppercase font-bold tracking-[0.2em] text-center mt-1 text-background/80">
              Years<br />Experience
            </span>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-10 relative z-10 pt-4 md:pt-0">

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="w-12 h-[1px] bg-foreground"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                Our Heritage
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-heading font-extrabold text-foreground leading-[1.05] tracking-tight">
              Decades of <br className="hidden md:block" />
              <span className="text-muted-foreground">Innovation</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            For over thirty years, we have been at the forefront of interior design, blending timeless craftsmanship with modern sensibilities. Every piece tells a story of meticulous attention to detail and a passion for creating spaces that inspire.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border mt-8 max-w-lg">
            <div className="flex flex-col space-y-2">
              <p className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
                15<span className="text-muted-foreground font-normal">k</span>
              </p>
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Projects Completed</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
                100<span className="text-muted-foreground font-normal">%</span>
              </p>
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Client Satisfaction</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Innovation;
