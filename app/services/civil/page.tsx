"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CivilPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Civil Engineering</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Comprehensive civil engineering services including infrastructure development, structural design, and
              project management.
            </p>
          </div>

          <div className="mt-12 h-96 rounded-lg overflow-hidden shadow-lg animate-scale-up">
            <img src="/civil-engineering-construction-infrastructure.jpg" alt="Civil Engineering" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Expertise</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our civil engineering team brings decades of experience in designing and constructing diverse
                infrastructure projects. We specialize in roads, bridges, water management systems, and commercial
                structures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We employ the latest CAD software, structural analysis tools, and sustainable construction practices to
                deliver projects that are both innovative and environmentally responsible.
              </p>
            </div>

            <div className="bg-secondary/50 border border-border rounded-lg p-8 animate-slide-in-right">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Civil Engineering Services</h3>
              <ul className="space-y-4">
                {[
                  "Road and highway construction",
                  "Bridge design and construction",
                  "Building structural engineering",
                  "Water management systems",
                  "Foundation and geotechnical work",
                  "Site surveying and assessment",
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
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Notable Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Urban Highway Expansion", location: "Metro Area", duration: "3 years" },
                { name: "Multi-Span Bridge", location: "River Crossing", duration: "18 months" },
                { name: "Water Treatment Plant", location: "Industrial District", duration: "12 months" },
              ].map((project, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <img
                    src="/bridge.png"
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-bold text-lg text-foreground mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-1">
                    <strong>Location:</strong> {project.location}
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Duration:</strong> {project.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 mb-20 animate-scale-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-foreground font-medium">Civil Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">$500M+</div>
                <p className="text-foreground font-medium">Total Project Value</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-foreground font-medium">On-Time Delivery</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  author: "Michael Chen",
                  company: "Infrastructure Authority",
                  text: "Jawatech delivered a complex urban highway project ahead of schedule. Their engineering team is exceptional.",
                },
                {
                  author: "Sarah Munene",
                  company: "Self Employed",
                  text: "Impressed by their attention to detail and sustainable construction practices. Highly professional team.",
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
            <h2 className="text-3xl font-bold mb-4">Planning Your Infrastructure Project?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Let us handle the engineering. Contact our civil engineering team for a comprehensive project assessment.
            </p>
            <Link
              href="/login"
              className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold hover:bg-secondary transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
