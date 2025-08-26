"use client"

import { useEffect, useRef } from "react"

export function useParallax(speed = 0.5) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = scrolled * speed
      element.style.transform = `translateY(${parallax}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return elementRef
}

export function useScrollOpacity() {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const windowHeight = window.innerHeight
      const elementTop = element.offsetTop
      const elementHeight = element.offsetHeight

      const opacity = Math.max(
        0,
        Math.min(1, 1 - (scrolled - elementTop + windowHeight) / (windowHeight + elementHeight)),
      )

      element.style.opacity = opacity.toString()
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return elementRef
}
