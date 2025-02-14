"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

export default function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}

