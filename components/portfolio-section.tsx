"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const portfolioImages = [
  {
    id: 1,
    src: "/download(1).jpeg?height=800&width=600",
    alt: "Portrait Photography 1",
    category: "Portrait",
  },
  {
    id: 2,
    src: "/foto-gunung.jpg?height=600&width=800",
    alt: "Urban Landscape 1",
    category: "Landscape",
  },
  {
    id: 3,
    src: "/gantangan-gw.jpg?height=900&width=600",
    alt: "Fashion Photography 1",
    category: "Fashion",
  },
  {
    id: 4,
    src: "/jalanan.jpg?height=600&width=600",
    alt: "Street Photography 1",
    category: "Street",
  },
  {
    id: 5,
    src: "/park.jpeg?height=700&width=800",
    alt: "Nature Photography 1",
    category: "Nature",
  },
  {
    id: 6,
    src: "/mantep.jpg?height=800&width=600",
    alt: "Artistic Photography 1",
    category: "Art",
  },
  {
    id: 7,
    src: "/enggatau(1).jpeg?height=600&width=900",
    alt: "Wedding Photography 1",
    category: "Wedding",
  },
  {
    id: 8,
    src: "/parfum.jpeg?height=800&width=700",
    alt: "Commercial Photography 1",
    category: "Commercial",
  },
]

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")
  const { scrollYProgress } = useScroll()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const categories = ["All", "Portrait", "Landscape", "Fashion", "Street", "Nature", "Art", "Wedding", "Commercial"]

  const filteredImages = filter === "All" ? portfolioImages : portfolioImages.filter((img) => img.category === filter)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = selectedImage ? filteredImages.find((img) => img.id === selectedImage) : null

  return (
    <section id="portfolio" className="relative py-20 px-6 overflow-hidden">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6">Portfolio</h2>
          <div className="h-px bg-accent w-24 mx-auto mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated collection of visual stories, each frame capturing the essence of a moment frozen in time
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`font-body text-sm uppercase tracking-widest px-4 py-2 transition-colors ${
                filter === category
                  ? "text-foreground border-b border-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative overflow-hidden bg-card">
                <motion.img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/30 flex items-center justify-center"
                >
                  <span className="font-body text-white text-sm uppercase tracking-widest">{image.category}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1, x: -4 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 4 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </motion.button>

              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-4 left-4 text-white"
              >
                <p className="font-body text-sm uppercase tracking-widest">{selectedImageData.category}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
