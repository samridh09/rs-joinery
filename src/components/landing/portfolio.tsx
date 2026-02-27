import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="label-uppercase">Our Projects</span>
            <h2 className="heading-2 mb-8">
              Selected Works of <br /> Meticulous Joinery
            </h2>
            <p className="text-lead mb-12">
              Explore our portfolio of bespoke cabinetry that showcases our 
              commitment to precision, durable materials, and outstanding results.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1 space-y-8">
                  {/* Modern Bar */}
                  <div className="relative h-[300px] overflow-hidden rounded-[32px] group">
                      <Image 
                          src="/images/portfolio-2.png" 
                          alt="Bespoke Bar" 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-background font-medium">Bespoke Commercial Bar</div>
                  </div>
                  {/* Luxury Suite */}
                  <div className="relative h-[300px] overflow-hidden rounded-[32px] group">
                      <Image 
                          src="/images/portfolio-3.png" 
                          alt="Luxury Suite" 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-background font-medium">Luxury Suite Cabinetry</div>
                  </div>
              </div>
              
              <div className="col-span-1">
                  {/* Minimalist Kitchen */}
                  <div className="relative h-full min-h-[500px] overflow-hidden rounded-[32px] group">
                      <Image 
                          src="/images/portfolio-4.png" 
                          alt="Minimalist Kitchen" 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-10 left-10 text-background font-medium text-lg">Minimalist Handle-less Kitchen</div>
                  </div>
              </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-10 mt-10">
            <div className="lg:col-span-4">
                {/* Studio Fitout */}
                <div className="relative h-[450px] overflow-hidden rounded-[32px] group">
                    <Image 
                        src="/images/portfolio-1.png" 
                        alt="Studio Fitout" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-10 left-10 text-background font-medium text-lg text-background font-medium">Professional Studio Fitout</div>
                </div>
            </div>
            <div className="lg:col-span-8 flex items-center justify-end">
                <button className="border border-gray-900 text-foreground px-12 py-4 rounded-full font-medium hover:bg-gray-900 hover:text-background transition-all">
                    Request a Bespoke Quote
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
