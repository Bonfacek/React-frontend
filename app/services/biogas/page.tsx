"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function BiogasPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Biogas Construction</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              State-of-the-art biogas facilities engineered for maximum efficiency, sustainability, and environmental
              impact.
            </p>
          </div>

          <div className="mt-2 h-130 rounded-lg overflow-hidden shadow-lg animate-scale-up">
            <img src="/biogas-plant.png" alt="Biogas Construction" className="w-full h-full object-cover" />
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
                Jawatech specializes in designing and constructing cutting-edge biogas facilities that convert organic
                waste into renewable energy. Our team combines engineering excellence with environmental responsibility.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We handle every aspect of the project, from feasibility studies and site assessment to design,
                construction, and commissioning of fully operational biogas plants.
              </p>
            </div>

            <div className="bg-secondary/50 border border-border rounded-lg p-8 animate-slide-in-right">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Our Biogas Solutions?</h3>
              <ul className="space-y-4">
                {[
                  "Advanced anaerobic digestion technology",
                  "Complete waste-to-energy conversion",
                  "Environmental compliance and certifications",
                  "Operational support and maintenance",
                  "Proven ROI within 5-7 years",
                  "Scalable solutions for any capacity",
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
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Agricultural 8m³ Biogas Plant", location: "Engineer kwa deef", capacity: "24m³ plant" },
                { name: "A 48m³ biogas plant", location: "Kisii High School", capacity: "48m³" },
                { name: "Home 12m³ Domestic Biodigester", location: "Nakuru", capacity: "12m³ pit" },
              ].map((project, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <img
                    src="/biogasflame.png"
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
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-foreground font-medium">Biogas Facilities Built</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2,500 plants</div>
                <p className="text-foreground font-medium">Total Capacity Installed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <p className="text-foreground font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  author: "peter kimani",
                  company: "Muki Sacco",
                  text: "JawaTech transformed our farmers lives by building parmanent biogas plants and we have seen its productivity even in the gardens due to the biogas slury.",
                },
                {
                  author: "John Kiriru",
                  company: "Farmer",
                  text: "Professional team, excellent design, and outstanding one year warranty. Our biogas plant exceeded all expectations.",
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
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Biogas Project?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Contact us today for a consultation and feasibility study tailored to your specific requirements.
            </p>
            <Link
              href="/login"
              className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold hover:bg-secondary transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
