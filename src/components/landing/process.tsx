import React from 'react'
import Image from 'next/image'

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Research',
      description: 'We begin by understanding your vision, lifestyle, and the unique characteristics of the site.',
    },
    {
      number: '02',
      title: 'Concept Development',
      description: 'Initial sketches and 3D models translate ideas into tangible architectural forms.',
    },
    {
      number: '03',
      title: 'Design Refinement',
      description: 'Iterative feedback loops ensure every detail aligns with functional and aesthetic goals.',
    },
    {
      number: '04',
      title: 'Construction Oversight',
      description: 'We manage the realization of the design, ensuring quality and precision at every stage.',
    },
  ]

  return (
    <section id="process" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] rounded-[40px] overflow-hidden">
            <Image 
              src="/images/process-bg.png" 
              alt="Design Process" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          <div>
            <span className="label-uppercase">Our Process</span>
            <h2 className="heading-2 mb-12">How we bring your <br /> vision to life</h2>
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-8 group">
                  <div className="text-2xl font-bold text-gray-300 group-hover:text-foreground transition-colors">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
