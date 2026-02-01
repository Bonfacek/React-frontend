"use client"

import Link from "next/link"
import { ArrowRight, Zap, Hammer, Network, Leaf, Sun } from "lucide-react"

const servicesList = [
  {
    id: "biogas",
    icon: Leaf,
    title: "Biogas Construction",
    description: "State-of-the-art biogas facilities designed for maximum efficiency and environmental impact.",
    href: "/services/biogas",
  },
  {
    id: "civil",
    icon: Hammer,
    title: "Civil Engineering",
    description: "Comprehensive civil engineering services including infrastructure development and structural design.",
    href: "/services/civil",
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical Engineering",
    description: "Complete electrical installation, power distribution, and renewable energy integration solutions.",
    href: "/services/electrical",
  },
  {
    id: "solar",
    icon: Sun,
    title: "Solar Installation",
    description: "Cutting-edge solar energy solutions for residential, commercial, and industrial applications.",
    href: "/services/electrical",
  },
  {
    id: "telecom",
    icon: Network,
    title: "Telecommunications Engineering",
    description: "Modern telecom network design, deployment, and maintenance for reliable connectivity.",
    href: "/services/telecom",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive engineering and construction solutions tailored to your project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={service.id} href={service.href}>
                <div
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-primary transition-all duration-300 h-full flex flex-col cursor-pointer group animate-scale-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>

                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
