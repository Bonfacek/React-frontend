"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

export default function ElectricalPage() {
  const { isLoggedIn } = useAuth()
  return (
    <main className="min-h-screen bg-background">
   {/* Hero Section */}
<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

 
  <div className="absolute inset-0">
    <img
      src="/power.jpg"
      alt="Electrical Engineering"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/55" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in-up">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#8B0000] mb-6">
      Electrical Engineering & Solar Installation
    </h1>
    <p className="text-lg max-w-2xl italic mx-auto text-accent-500 text-white/80">
      Complete electrical installation, power distribution, solar energy
      solutions and renewable energy integration for modern infrastructure.
    </p>
  </div>

</section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Expertise</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our electrical engineering team specializes in designing and implementing complex power systems for
                commercial, industrial, and renewable energy applications. We stay current with the latest technologies
                and safety standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From solar integration to smart grid management, we deliver electrical solutions that are efficient,
                sustainable, and cost-effective. Our solar installation services have helped hundreds of East African
                businesses reduce energy costs.
              </p>
            </div>

            <div className="bg-secondary/50 border border-border rounded-lg p-8 animate-slide-in-right">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Electrical Services</h3>
              <ul className="space-y-4">
                {[
                  "Power distribution system design",
                  "High and low voltage installations",
                  "Solar panel installation & optimization",
                  "Battery storage systems",
                  "Smart grid technology",
                  "Energy efficiency solutions",
                  "Renewable energy integration",
                  "Maintenance and upgrades",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Examples */}
          <div className="mb-20 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Recent Installations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Solar Farm Integration", location: "Central Kenya", capacity: "5 MW" },
                { name: "Commercial Building Power", location: "Nairobi CBD", capacity: "2.5 MW" },
                { name: "Industrial Plant Upgrade", location: "Mombasa", capacity: "10 MW" },
              ].map((project, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <img
                    src="/solar-installation-african-setting.jpg"
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-bold text-lg text-foreground mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-1">
                    <strong>Location:</strong> {project.location}
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Capacity:</strong> {project.capacity}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 mb-20 animate-scale-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <p className="text-foreground font-medium">Electrical Projects</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50 MW</div>
                <p className="text-foreground font-medium">Clean Energy Installed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">30%</div>
                <p className="text-foreground font-medium">Average Energy Savings</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  author: "Robert Wilson",
                  company: "Energy Solutions Ltd",
                  text: "Their solar integration saved us 40% on energy costs. Excellent technical team and support.",
                },
                {
                  author: "Jennifer Martinez",
                  company: "Industrial Power Inc",
                  text: "Professional installation with minimal downtime. JawaTech delivers quality electrical engineering.",
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-secondary/30 border border-border rounded-lg p-6">
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center animate-scale-up">
            <h2 className="text-3xl font-bold mb-4">Upgrade Your Power Systems?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Optimize your electrical infrastructure with our cutting-edge solar and renewable energy solutions.
              Contact us for an energy audit and personalized recommendations.
            </p>
            <Link
              href={"/quote"}
              className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold hover:bg-secondary transition-colors"
            >
              Get Free Energy Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
