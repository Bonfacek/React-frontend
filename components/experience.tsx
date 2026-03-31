"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: 20, label: "Years of Experience", suffix: "+" },
  { number: 500, label: "Projects Completed", suffix: "+" },
  { number: 20, label: "Qualified Engineers", suffix: "+" },
  { number: 500, label: "Happy Clients", suffix: "+" },
]

type CountUpProps = {
  end: number
  duration?: number
}

function CountUp({ end, duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration])

  return count
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Experience</h2>
          <p className="text-lg text-muted-foreground">
            Proven expertise and track record of success across all sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 text-center animate-scale-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                <CountUp end={stat.number} />
                {stat.suffix}
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
