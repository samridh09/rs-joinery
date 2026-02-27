import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contacts" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="label-uppercase">Contact Us</span>
            <h2 className="heading-2 mb-8">Start Your Project</h2>
            <p className="text-lead mb-12 max-w-md">
              Have a vision you want to bring to life? We'd love to hear from you. 
              Schedule a consultation or visit our studio.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                  <Mail className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">Email Us</div>
                  <div className="text-lg font-bold text-foreground">hello@rsjoinery.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                  <Phone className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">Call Us</div>
                  <div className="text-lg font-bold text-foreground">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">Our Studio</div>
                  <div className="text-lg font-bold text-foreground">123 Design District, NY 10012</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-12 rounded-[40px] border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">First Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-card border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-card border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                <input type="email" className="w-full px-6 py-4 bg-card border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-card border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-gray-900 text-background py-5 rounded-2xl font-bold hover:bg-foreground transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
