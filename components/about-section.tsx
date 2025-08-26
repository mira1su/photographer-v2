"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6 bg-card overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1"
          >
            <motion.div style={{ y: imageY }} className="relative max-w-md mx-auto lg:mx-0">
              <img
                src="/AgethaChealsea.jpg?height=600&width=500"
                alt="Alex Chen - Photographer"
                className="w-full h-auto object-cover grayscale"
              />
              <div className="absolute inset-0 border border-accent/20 translate-x-4 translate-y-4 -z-10" />
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            style={{ y: contentY }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6">About</h2>
            <div className="h-px bg-accent w-16 mb-8" />

            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                With over a decade of experience behind the lens, I specialize in capturing the extraordinary within the
                ordinary. My work spans across portrait, landscape, and commercial photography, each project driven by a
                passion for authentic storytelling.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Based in New York City, I draw inspiration from the urban landscape and the diverse stories of the
                people who call this city home. My approach combines technical precision with artistic vision, creating
                images that resonate on both emotional and aesthetic levels.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                When I'm not behind the camera, you'll find me exploring new neighborhoods, experimenting with film
                photography, or mentoring emerging photographers in the art of visual storytelling.
              </motion.p>
            </div>

            {/* Skills/Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="font-heading text-xl font-light text-foreground mb-4">Specialties</h3>
              <div className="flex flex-wrap gap-3">
                {["Portrait", "Wedding", "Commercial", "Street", "Fashion", "Landscape"].map((specialty, index) => (
                  <motion.span
                    key={specialty}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="font-body text-sm uppercase tracking-widest text-muted-foreground border border-border px-3 py-1 hover:border-accent transition-colors cursor-default"
                  >
                    {specialty}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
