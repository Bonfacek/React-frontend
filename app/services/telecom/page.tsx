"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

export default function TelecomPage() {
  const { isLoggedIn } = useAuth()
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Telecommunications Engineering & Faiba Installation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Modern telecom network design, deployment, maintenance and Faiba fiber connectivity solutions for
              reliable, high-speed connectivity across East Africa.
            </p>
          </div>

          <div className="mt-0 h-140 rounded-lg  shadow-lg animate-scale-up">
            <img
              src="/tellecom.jpg"
              alt="Telecommunications Engineering"
              className="w-full h-full object-cover"
            />
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
                JawaTech's telecommunications team designs and deploys advanced networks that support modern
                communication needs. From fiber optic installation to 5G infrastructure and Faiba connectivity, we
                deliver cutting-edge solutions across Kenya and East Africa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We handle everything from network planning and site acquisition to installation, testing, and ongoing
                maintenance to ensure maximum uptime and performance. Our Faiba installation services bring high-speed
                internet to communities across the region.
              </p>
            </div>

            <div className="bg-secondary/50 border border-border rounded-lg p-8 animate-slide-in-right">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Telecom Services</h3>
              <ul className="space-y-4">
                {[
                  "Fiber optic network installation",
                  "5G infrastructure deployment",
                  "Tower and antenna installation",
                  "Network design and optimization",
                  "Microwave link setup",
                  "Faiba fiber connectivity",
                  "Last-mile connectivity solutions",
                  "Network maintenance and upgrades",
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
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Network Deployments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "5G Urban Network", location: "Nairobi Metropolitan", nodes: "500+" },
                { name: "Fiber Backbone", location: "Central Kenya", distance: "2000 km" },
                { name: "Faiba Rural Connectivity", location: "Remote Areas", towers: "150" },
              ].map((project, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <img
                    src="/fiber-optic-network-installation-african-setting.jpg"
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-bold text-lg text-foreground mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-1">
                    <strong>Location:</strong> {project.location}
                  </p>
                  <p className="text-muted-foreground">
                    <strong>{project.nodes ? "Nodes" : project.distance ? "Distance" : "Towers"}:</strong>{" "}
                    {project.nodes || project.distance || project.towers}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 mb-20 animate-scale-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-foreground font-medium">Network Projects</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10,000 km</div>
                <p className="text-foreground font-medium">Fiber Deployed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-foreground font-medium">Network Uptime</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  author: "David Kumar",
                  company: "Telecom Providers Inc",
                  text: "JawaTech deployed our 5G network ahead of schedule. Excellent planning and execution.",
                },
                {
                  author: "Victoria Brown",
                  company: "National Network Services",
                  text: "Their fiber installation was flawless. Professional team with strong technical knowledge.",
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
            <h2 className="text-3xl font-bold mb-4">Expand Your Network?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Build robust telecommunications infrastructure with our expert engineering team. Let's discuss your
              connectivity goals.
            </p>
            <Link
              href={isLoggedIn ? "/quote":"/login?returnTo=/quote"}
              className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold hover:bg-secondary transition-colors"
            >
              Start Your Network Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
