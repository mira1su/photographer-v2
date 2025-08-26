"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, ExternalLink, Mail, Phone, MapPin, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Reset form
      setFormData({ name: "", email: "", message: "" })
      setSubmitStatus("success")

      // In a real app, you would send the data to your backend
      console.log("Form submitted:", formData)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <div className="h-px bg-accent w-16 sm:w-24 mx-auto mb-6 sm:mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Ready to create something extraordinary together? Let's discuss your vision and bring it to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-body text-xs sm:text-sm uppercase tracking-widest text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-accent outline-none transition-colors font-body text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-xs sm:text-sm uppercase tracking-widest text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-accent outline-none transition-colors font-body text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-xs sm:text-sm uppercase tracking-widest text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-accent outline-none transition-colors font-body text-foreground placeholder:text-muted-foreground resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent font-body text-sm"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-destructive font-body text-sm"
                >
                  Sorry, there was an error sending your message. Please try again.
                </motion.div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors font-body text-xs sm:text-sm uppercase tracking-widest py-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact Details */}
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-light text-foreground mb-4 sm:mb-6">
                Let's Connect
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span className="font-body text-muted-foreground text-sm sm:text-base">hello@alexchen.photo</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span className="font-body text-muted-foreground text-sm sm:text-base">+1 (555) 123-4567</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span className="font-body text-muted-foreground text-sm sm:text-base">New York City, NY</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-light text-foreground mb-4 sm:mb-6">
                Follow My Work
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="https://instagram.com/alexchen.photo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-body text-xs sm:text-sm uppercase tracking-widest">Instagram</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="https://behance.net/alexchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-body text-xs sm:text-sm uppercase tracking-widest">Behance</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="border-t border-border pt-6 sm:pt-8">
              <h3 className="font-heading text-lg sm:text-xl font-light text-foreground mb-3 sm:mb-4">Availability</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                Currently accepting new projects for 2024. Typical response time is within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
