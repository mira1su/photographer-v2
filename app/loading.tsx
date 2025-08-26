"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full mx-auto mb-4"
        />
        <p className="font-body text-sm text-muted-foreground uppercase tracking-widest">Loading</p>
      </motion.div>
    </div>
  )
}
