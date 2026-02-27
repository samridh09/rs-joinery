import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Side - Asymmetrical Layering */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 w-full aspect-[4/5] rounded-[60px] overflow-hidden border border-black/5">
              <Image 
                src="/images/about-main.png" 
                alt="Luxury Cabinetry Detail" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Overlapping Secondary Image */}
            <div className="absolute -bottom-12 -right-12 z-20 w-1/2 aspect-square rounded-[40px] overflow-hidden border-[12px] border-white hidden md:block">
              <Image 
                src="/images/workshop-detail.png" 
                alt="Craftsmanship Detail" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Floating Decorative Element */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gray-100 rounded-full blur-3xl opacity-50 -z-10" />
          </div>

          {/* Content Side */}
          <div className="lg:col-span-6 lg:pl-12">
            <span className="label-uppercase">About RS Joinery</span>
            
            <h2 className="heading-2 mb-10">
              Where Master Craft meets <br /> 
              <span className="text-muted-foreground">Modern Architecture.</span>
            </h2>

            <div className="space-y-8 text-lead pb-12">
              <p>
                Welcome to <span className="text-foreground font-semibold">RS Joinery</span>, where we combine timeless craftsmanship with modern design to create exceptional cabinetry. Led by Director <span className="text-foreground font-semibold underline decoration-gray-300 decoration-2 underline-offset-4">Karanveer Singh</span>, our team specializes in bringing your vision to life, one meticulously crafted piece at a time.
              </p>
              
              <p>
                We specialize in the art of <span className="text-foreground font-medium">minimalist design</span>, creating kitchens with clean, uninterrupted lines. Our expertise in joinery allows us to produce handle-less cabinetry with flawless finishes.
              </p>
            </div>

            {/* Quick Stats / Highlights */}
            <div className="grid grid-cols-2 gap-8 border-t border-black/5 pt-12">
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">Volume</div>
                <div className="text-sm text-muted-foreground font-medium">Capable of handling large scale projects without compromising quality.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">Precision</div>
                <div className="text-sm text-muted-foreground font-medium">Sourcing only the best materials for superior durability and finish.</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About
