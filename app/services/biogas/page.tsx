"use client"

import { is } from "date-fns/locale"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import React from "react"

export default function BiogasPage() {
  const { isLoggedIn } = useAuth()
  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-20 min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
         <video
            src="/biogas.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center animate-fade-in-up">
            <h1 className="text-6xl sm:text-5xl lg:text-6xl font-bold text-[#158b00] mb-6">
              Biogas Construction
            </h1>
            <p className="text-lg text-white/80 italic max-w-2xl mx-auto mb-8">
              State-of-the-art biogas facilities engineered for maximum efficiency,
              sustainability, and environmental impact.
            </p>
          </div>
        </div>
      </section>
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
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Our Process */}
        <div className="py-20 mb-20 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Process</h2>

          {[
            {
              step: "01",
              tag: "Discovery",
              title: "Consultation & Feasibility",
              description:
                "We begin with an in-depth analysis of your waste streams, energy needs, and site conditions. Our engineers assess the optimal biogas solution size, feedstock availability, and projected gas output before a single brick is laid.",
              features: [
                "Site visit & soil assessment",
                "Feedstock availability analysis",
                "Projected gas output report",
              ],
              image: ["/site_survey.jpg", "/site -mark.jpg"],
            },
            {
              step: "02",
              tag: "Engineering",
              title: "Design & Engineering",
              description:
                "Custom biogas plant design using advanced modeling software to maximise efficiency and output. Every system is drawn to your specific site layout, feedstock type, and capacity requirements.",
              features: [
                "CAD drawings & structural plans",
                "Material & cost breakdown",
                "Regulatory compliance checks",
              ],
              image: ["/biogas-plant.jpg", "/site -mark.jpg"],
            },
            {
              step: "03",
              tag: "Build",
              title: "Construction & Installation",
              description:
                "Our expert construction team ensures timely, high-quality installation of your biogas facility. We handle all civil works, pipework, gas storage, and appliance connection from start to finish.",
              features: [
                "Skilled masonry & civil works",
                "Gas piping & storage installation",
                "Quality checks at every stage",
              ],
              image: ["/biogasflame.png", "/site -mark.jpg", "/almost.jpeg"],
            },
            {
              step: "04",
              tag: "Handover",
              title: "Commissioning & Support",
              description:
                "Comprehensive testing, operator training, and ongoing support to ensure your plant runs at peak performance. We don't leave until you're confident and fully operational.",
              features: [
                "Full system pressure testing",
                "Operator training & manual",
                "1-year warranty & aftercare",
              ],
              image: ["/biogasflame.png", "/biogas-plant.jpg", "/biogas-plant.png"],
            },
          ].map((item, i) => (
            <ProcessRow key={i} item={item} index={i} />
          ))}
        </div>
        {/* Benefits of Installing Biogas */}
        <div className="py-20 mb-20 animate-fade-in-up">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-3">Why Install a Biogas Plant?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              A biogas plant is more than an energy source — it's a long-term investment in your household,
              farm, or institution's sustainability and independence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Free Cooking Gas",
                description:
                  "Eliminate or dramatically reduce your LPG and firewood costs. A well-fed biodigester provides enough gas for all daily household cooking needs.",
                media: "/biogas-plant.jpg", 
                type: "image",                       // "image" or "video"
              },
              {
                title: "Rich Organic Fertiliser",
                description:
                  "The bioslurry produced is a potent, ready-to-use organic fertiliser that improves soil health and boosts crop yields — reducing chemical fertiliser spend.",
                media: "/biogas.mp4",
                type: "video",
              },
              {
                title: "Reliable Energy Independence",
                description:
                  "No more dependence on fuel supply chains or price volatility. Your energy is generated on-site, every single day, from waste you already have.",
                media: "/biogas-plant.jpg",
                type: "image",
              },
              {
                title: "Reduced Carbon Footprint",
                description:
                  "Biogas replaces fossil fuels and captures methane that would otherwise escape into the atmosphere. A measurable contribution to climate action.",
                media: "/biogas.mp4",
                type: "video",
              },
              {
                title: "Clean Indoor Air",
                description:
                  "Switching from wood or charcoal to biogas eliminates harmful indoor smoke, dramatically reducing respiratory illness — especially for women and children.",
                media: "/biogas-plant.jpg",
                type: "image",
              },
              {
                title: "Strong Return on Investment",
                description:
                  "Most installations recover their full cost within 3–5 years through fuel savings alone, then deliver free energy and fertiliser for 20+ years.",
                media: "/biogas.mp4",
                type: "video",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                {/* Media */}
                <div className="relative w-full aspect-video overflow-hidden bg-muted">
                  {benefit.type === "video" ? (
                    <video
                      src={benefit.media}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause()
                        e.currentTarget.currentTime = 0
                      }}
                    />
                  ) : (
                    <img
                      src={benefit.media}
                      alt={benefit.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Text */}
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-base font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
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
          <div className="bg-linear-to-r from-primary/10 to-accent/10 rounded-lg p-8 mb-20 animate-scale-up">
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
            {/* Call to Action */}
          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center animate-scale-up">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Biogas Project?</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Contact us today for a consultation and feasibility study tailored to your specific requirements.
            </p>
            <Link
              href={isLoggedIn ? "/quote" : "/login?returnTo=/quote"}
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

function ProcessRow({
  item,
  index,
}: {
  item: {
    step: string
    tag: string
    title: string
    description: string
    features: string[]
    image: string[]
  }
  index: number
}) {
  const [current, setCurrent] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  const next = React.useCallback(() => {
    setCurrent((prev) => (prev + 1) % item.image.length)
  }, [item.image.length])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + item.image.length) % item.image.length)
  }

  React.useEffect(() => {
    if (paused || item.image.length <= 1) return
    const timer = setInterval(next, 3500)
    return () => clearInterval(timer)
  }, [paused, next, item.image.length])

  // Build slides with for loop
  const slides = []
  for (let j = 0; j < item.image.length; j++) {
    slides.push(
      <img
        key={j}
        src={item.image[j]}
        alt={`${item.title} — image ${j + 1}`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          j === current ? "opacity-100" : "opacity-0"
        }`}
      />
    )
  }

  // Build dots with for loop
  const dots = []
  for (let j = 0; j < item.image.length; j++) {
    dots.push(
      <button
        key={j}
        onClick={() => { setCurrent(j); setPaused(true) }}
        aria-label={`Go to image ${j + 1}`}
        className={`rounded-full transition-all duration-300 ${
          j === current
            ? "bg-white w-5 h-1.5"
            : "bg-white/50 w-1.5 h-1.5 hover:bg-white/80"
        }`}
      />
    )
  }

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 last:mb-0 ${
        index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Text side */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-5xl font-bold text-primary/20 leading-none">{item.step}</span>
          <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-md bg-primary/10 text-primary">
            {item.tag}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
        <ul className="flex flex-col gap-2 mt-2">
          {item.features.map((f, j) => (
            <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Slideshow side */}
      <div
        className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3] group shadow-sm"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Slides */}
        {slides}

        {/* Arrows — only show if more than 1 image */}
        {item.image.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white text-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70 z-10"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white text-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70 z-10"
            >
              ›
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {dots}
            </div>

            {/* Progress bar */}
            {!paused && (
              <div
                key={current}
                className="absolute bottom-0 left-0 h-[2px] bg-primary/70 z-10 animate-progress-bar"
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}
