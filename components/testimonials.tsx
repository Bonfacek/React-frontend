"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "David Kamau",
    role: "Project Manager",
    company: "Nairobi Infrastructure Ltd",
    image: "/african-businessman-david-kamau.jpg",
    rating: 5,
    text: "JawaTech delivered our biogas plant ahead of schedule and within budget. Their expertise in renewable energy solutions is unmatched in Kenya.",
  },
  {
    name: "Grace Wanjiku",
    role: "CEO",
    company: "Green Energy Solutions",
    image: "/african-businesswoman-grace-wanjiku.jpg",
    rating: 5,
    text: "Outstanding electrical work on our solar installation project. Professional team with deep knowledge of sustainable energy systems.",
  },
  {
    name: "Peter Omondi",
    role: "Operations Director",
    company: "Kenya Telecom Group",
    image: "/african-businessman-peter-omondi.jpg",
    rating: 5,
    text: "JawaTech handled our Faiba installation flawlessly. Fast, reliable, and excellent customer service throughout the project.",
  },
  {
    name: "Sarah Njeri",
    role: "Facility Manager",
    company: "Westlands Commercial Plaza",
    image: "/african-businesswoman-sarah-njeri.jpg",
    rating: 5,
    text: "Their civil engineering work on our building renovation was exceptional. Attention to detail and commitment to quality is impressive.",
  },
    
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the businesses and organizations that trust JawaTech for their engineering and construction needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-20 h-20 text-primary/10 text-8xl leading-none">"</div>

            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-6">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                />
                <div>
                  <h3 className="text-xl font-bold text-navy">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">{testimonials[currentIndex].text}</p>

              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
