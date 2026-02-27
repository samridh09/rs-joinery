import React from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Bespoke Kitchens',
      description: 'Custom-designed kitchens with clean, uninterrupted lines and handle-less options.',
      image: '/images/service-1.png',
    },
    {
      id: '02',
      title: 'Minimalist Cabinetry',
      description: 'Handle-less cabinetry with flawless finishes using push-to-open mechanisms.',
      image: '/images/service-2.png',
    },
    {
      id: '03',
      title: 'Premium Materials',
      description: 'Working with timber veneers, matte laminates, and high-performance hardware.',
      image: '/images/service-3.png',
    },
    {
      id: '04',
      title: 'Full Studio Joinery',
      description: 'Expert joinery solutions for offices and high-end residential spaces.',
      image: '/images/service-4.png',
    },
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="label-uppercase">What we do</span>
            <h2 className="heading-2">Expert Joinery Services</h2>
          </div>
          <div className="flex gap-4">
            <button className="p-3 rounded-full border border-black/5 hover:bg-black/5 transition-colors">
              <ArrowLeft className="w-6 h-6 text-muted-foreground" />
            </button>
            <button className="p-3 rounded-full bg-gray-900 hover:bg-foreground transition-colors">
              <ArrowRight className="w-6 h-6 text-background" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              <div className="relative h-[400px] w-full mb-6 overflow-hidden rounded-[32px]">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6 text-background font-bold text-lg opacity-80">
                  {service.id}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
