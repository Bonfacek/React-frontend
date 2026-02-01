"use client"

import Link from "next/link"
import { Zap, Hammer, Network, Leaf } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge technology and modern engineering practices",
  },
  {
    icon: Hammer,
    title: "Excellence",
    description: "Commitment to quality and precision in every project",
  },
  {
    icon: Network,
    title: "Reliability",
    description: "Dependable solutions with proven track record",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Environmentally conscious engineering solutions",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About JawaTech Engineering
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With over two decades of industry experience, we've established ourselves as a trusted leader in
            comprehensive engineering and construction solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <img src="/professional-engineering-team-discussing-blueprint.jpg" alt="Team" className="rounded-lg shadow-lg" />
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Our Mission & Vision</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <strong>Mission:</strong> To deliver innovative, sustainable engineering solutions that drive progress and
              improve lives.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong>Vision:</strong> To be the preferred partner for transformative infrastructure projects across
              biogas, civil, electrical, and telecommunications sectors.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Learn More About Us
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow animate-scale-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
