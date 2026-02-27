import React from 'react'
import { Shield, Target, Zap } from 'lucide-react'

const Quality = () => {
  const points = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'High-Quality Materials',
      description: 'Sourcing only the best materials for superior durability and a flawless finish that lasts for years.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precise Techniques',
      description: 'Utilizing expert methods and state-of-the-art tools to ensure every piece meets the highest standards.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Volume with Care',
      description: 'We have the capacity to manage large-scale projects while consistently maintaining precise quality.'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="bg-[#1a1a1a] rounded-[60px] p-20 text-background overflow-hidden relative">
          {/* Subtle decorative element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
          
          <div className="relative z-10">
            <span className="label-uppercase text-white/50 border-white/10">The standard</span>
            <h2 className="heading-2 text-background mb-6">Our Commitment to Quality</h2>
            <p className="text-white/60 text-lg md:text-xl mb-16 max-w-2xl leading-relaxed">
              We are committed to delivering more than just cabinets—we deliver a lasting investment in your space.
            </p>
          
            <div className="grid md:grid-cols-3 gap-12">
              {points.map((point, index) => (
                <div key={index} className="space-y-6">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl w-fit">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quality
