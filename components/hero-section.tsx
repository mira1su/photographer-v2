"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useParallax, useScrollOpacity } from "@/hooks/use-parallax"

export function HeroSection() {
  const parallaxRef = useParallax(-0.3)
  const overlayRef = useScrollOpacity()

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <div ref={parallaxRef} className="absolute inset-0 scale-110" style={{ willChange: "transform" }}>
          <img
            src="/foto-gunung.jpg?height=1200&width=1920"
            alt="Featured Photography Work"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </div>
        {/* Dynamic overlay with scroll opacity */}
        <div ref={overlayRef} className="absolute inset-0 bg-black/40" style={{ willChange: "opacity" }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4 sm:mb-6 tracking-wide"
          >
            ALEX CHEN
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 3.5 }}
            className="h-px bg-white/60 mx-auto max-w-xs sm:max-w-md mb-6 sm:mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4 }}
            className="font-body text-base sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4 tracking-wide"
          >
            Visual Storyteller
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.3 }}
            className="font-body text-sm sm:text-base text-white/70 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4"
          >
            Capturing moments that transcend time through the art of light, shadow, and emotion
          </motion.p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 4.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToPortfolio}
          className="flex flex-col items-center group cursor-pointer"
          aria-label="Scroll to portfolio"
        >
          <span className="font-body text-xs text-white/60 uppercase tracking-widest mb-2 group-hover:text-white/80 transition-colors">
            Explore Work
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
