"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="font-heading text-2xl font-light text-foreground mb-2">ALEX CHEN</h3>
            <p className="font-body text-sm text-muted-foreground uppercase tracking-widest">Photography</p>
          </div>

          <div className="h-px bg-border w-24 mx-auto mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-muted-foreground">
              © {currentYear} Alex Chen Photography. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="/privacy"
                className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
              >
                Terms
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
