"use client"

import { cn } from "@/lib/utils"
import type React from "react" // Import React

interface ScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function ScrollLink({ href, children, className }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset + (window.innerWidth <= 768 ? 0 : 300)
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
 
  }

  return (
    <a href={href} onClick={handleClick} className={cn("hover:text-primary transition-colors", className)}>
      {children}
    </a>
  )
}

