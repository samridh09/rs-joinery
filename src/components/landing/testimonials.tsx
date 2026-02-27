import React from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-black/5">
      <div className="container-custom max-w-4xl text-center">
        <div className="flex justify-center mb-10">
          <Quote className="w-12 h-12 text-gray-200 fill-current" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 leading-relaxed italic">
          "RS Joinery transformed our vision into a space that exceeds all expectations. 
          Their attention to detail and commitment to innovative design is truly world-class."
        </h2>
        
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white">
            <Image 
              src="/images/client-1.png" 
              alt="Sarah Jenkins" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="font-bold text-foreground">Sarah Jenkins</div>
          <div className="text-sm text-muted-foreground">CEO, Horizon Developments</div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
