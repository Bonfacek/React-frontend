"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  projectType: string
  projectDescription: string
  timeline: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  projectType?: string
  projectDescription?: string
  timeline?: string
}

export default function QuotePage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    projectDescription: "",
    timeline: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      newErrors.email = "Email address is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    // Phone validation (Kenyan phone number format)
    const phoneRegex = /^(?:\+254|0)[17]\d{8}$/
    if (!formData.phone) {
      newErrors.phone = "Phone number is required"
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid Kenyan phone number (e.g., 0712345678 or +254712345678)"
    }
    
    // Project type validation
    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type"
    }
    
    // Timeline validation
    if (!formData.timeline) {
      newErrors.timeline = "Please select a timeline"
    }
    
    // Description validation
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Project details are required"
    } else if (formData.projectDescription.length < 20) {
      newErrors.projectDescription = "Please provide at least 20 characters of detail"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form first
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitError(null)
    
    const payload = {
      fullName: formData.name,
      email: formData.email,
      phoneNumber: formData.phone,
      projectType: formData.projectType,
      details: formData.projectDescription,
      timeLine: formData.timeline,
    }
    
    try {
      const response = await fetch("{process.env.NEXT_PUBLIC_API_URL}/api/quotes/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to submit quote request")
      }
      
      // Show success message
      setSubmitted(true)
      
      // Reset form after 3 seconds
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
      
    } catch (error) {
      console.error("Error submitting quote request:", error)
      setSubmitError(error instanceof Error ? error.message : "Failed to submit request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 animate-fade-in-up shadow-lg">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Get a Project Quote</h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your construction or engineering project, and we'll provide a detailed quote within 24 hours.
            </p>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-green-800 font-medium">
                  Thank you! We've received your quote request. Our team will contact you within 24 hours.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitError && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-red-800 font-medium">{submitError}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label className="block text-foreground font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition-colors ${
                    errors.name ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-foreground font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition-colors ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-foreground font-medium mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="0712345678 or +254712345678"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Project Type Field */}
              <div>
                <label className="block text-foreground font-medium mb-2">
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-label="Project Type"
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition-colors ${
                    errors.projectType ? 'border-red-500' : 'border-border'
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="biogas">Biogas Construction</option>
                  <option value="civil">Civil Engineering</option>
                  <option value="electrical">Electrical Engineering</option>
                  <option value="solar">Solar Installation</option>
                  <option value="telecom">Telecommunications Engineering</option>
                  <option value="faiba">Faiba Installation</option>
                </select>
                {errors.projectType && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>
                )}
              </div>

              {/* Timeline Field */}
              <div className="md:col-span-2">
                <label className="block text-foreground font-medium mb-2">
                  Project Timeline <span className="text-red-500">*</span>
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-label="Project Timeline"
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition-colors ${
                    errors.timeline ? 'border-red-500' : 'border-border'
                  }`}
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (1-3 months)</option>
                  <option value="short">Short-term (3-6 months)</option>
                  <option value="medium">Medium-term (6-12 months)</option>
                  <option value="long">Long-term (12+ months)</option>
                </select>
                {errors.timeline && (
                  <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>
                )}
              </div>
            </div>

            {/* Project Details Field */}
            <div>
              <label className="block text-foreground font-medium mb-2">
                Project Details <span className="text-red-500">*</span>
              </label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                disabled={isSubmitting}
                rows={5}
                className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary transition-colors ${
                  errors.projectDescription ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Describe your project in detail, including any specific requirements, location, budget range, or challenges..."
              />
              {errors.projectDescription && (
                <p className="text-red-500 text-sm mt-1">{errors.projectDescription}</p>
              )}
              {!errors.projectDescription && formData.projectDescription && (
                <p className="text-gray-500 text-xs mt-1">
                  {formData.projectDescription.length}/20+ characters
                </p>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Request Quote"
                )}
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
