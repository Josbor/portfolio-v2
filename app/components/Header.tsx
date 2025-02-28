"use client"

import { Button } from "@/components/ui/button"
import { ScrollLink } from "./ScrollLink"
import { ThemeToggle } from "./ThemeToggle"
import { LanguageToggle } from "./LanguageToggle"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { MouseEventHandler, useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { cn } from "@/lib/utils"
import { debounce } from "lodash"

const menuItems = {
  en: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
  es: [
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#experience", label: "Experiencia" },
    { href: "#skills", label: "Habilidades" },
    { href: "#contact", label: "Contacto" },
  ],
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

 
const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, { href, label }: { href: string; label: string; }) => {
      
      event.preventDefault()
      console.log('paso')
      
      const target = document.querySelector(href)
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.scrollY + (window.innerWidth >= 768 ? 0:300 )
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    
        setTimeout(() => {
          setIsOpen(false);
        }, 1000);

  
  }
  return (
    <header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b border-border/40">
      <div className="container flex max-w-screen-xl items-center justify-between">
        <ScrollLink href="#top" className="text-2xl font-bold text-primary">
          JB
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {menuItems[language].map((item) => (
              <li key={item.href}>
                <ScrollLink href={item.href}>{item.label}</ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <ThemeToggle />

          {/* Desktop CV Button */}
          <Button asChild className="hidden md:inline-flex">
            <a href={`/assets/${language.toUpperCase()}_JOSE_BORREGO_CV.pdf`} download={`[${language.toUpperCase()}] JOSE BORREGO CV.pdf`}>
              {language === "es" ? "Descargar CV" : "Download CV"}
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left text-2xl font-bold text-primary">José Borrego</SheetTitle>
              </SheetHeader>
              <nav className="mt-8">
                <ul className="space-y-4">
                  {menuItems[language].map((item) => (
                    <li key={item.href}>
                      <a href={item.href} onClick={(e)=>handleLinkClick(e,item)} className={"flex items-center py-2 text-lg hover:text-primary transition-colors"}>
                       {item.label}
                          </a>
                    </li>
                  ))}
                  <li className="pt-4 border-t">
                    <Button asChild className="w-full">
                      <a href={`/assets/${language.toUpperCase()}_JOSE_BORREGO_CV.pdf`} download={`[${language.toUpperCase()}] JOSE BORREGO CV.pdf`}>
                        {language === "es" ? "Descargar CV" : "Download CV"}
       </a>
                    </Button>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

