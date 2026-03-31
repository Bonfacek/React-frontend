"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    projectDescription: "",
    timeline: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
    fullName: formData.name,
    email: formData.email,
    phoneNumber: formData.phone,
    projectType: formData.projectType,
    details: formData.projectDescription,
    timeLine: formData.timeline,
    }
    try{
      const response = await fetch("http://localhost:8080/api/quotes/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })  
      
      if (!response.ok) {
        throw new Error("Failed to submit quote request")
      }
    }
    catch (error) {
      console.error("Error submitting quote request:", error)
    }

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        projectDescription: "",
        timeline: "",
      })
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 animate-fade-in-up">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Get a Project Quote</h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your construction or engineering project, and we'll provide a detailed quote.
            </p>
          </div>

          {submitted && (
            <div className="mb-8 p-4 bg-accent/20 border border-accent rounded-lg text-center">
              <p className="text-accent font-medium">
                Thank you! We've received your quote request. We'll contact you soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-foreground font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange} 
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="+254 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">Project Type *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  title="Project Type"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="">Select a service</option>
                  <option value="biogas">Biogas Construction</option>
                  <option value="civil">Civil Engineering</option>
                  <option value="electrical">Electrical Engineering</option>
                  <option value="solar">Solar Installation</option>
                  <option value="telecom">Telecommunications Engineering</option>
                  <option value="faiba">Faiba Installation</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">Project Timeline *</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  title="Project Timeline"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (1-3 months)</option>
                  <option value="short">Short-term (3-6 months)</option>
                  <option value="medium">Medium-term (6-12 months)</option>
                  <option value="long">Long-term (12+ months)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-foreground font-medium mb-2">Project Details *</label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                placeholder="Describe your project in detail, including any specific requirements, location, or challenges..."
              />
            </div>

            <div className="flex gap-4 pt-6">
              <button
               type="submit"
                className="flex-1 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
              >
                Request Quote

              </button>
              <Link
                href="/"
                className="flex-1 border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors font-medium text-lg text-center"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
