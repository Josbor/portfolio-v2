import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ScrollLink } from "./ScrollLink"
import AnimatedSection from "./AnimatedSection"
import { useLanguage } from "../contexts/LanguageContext"

const content = {
  en: {
    title: "José Borrego",
    subtitle: "Frontend Developer passionate about creating incredible web experiences",
    description:
      "I am a web developer with experience in creating modern and responsive web applications. I specialize in frontend technologies such as React, Next.js, and TypeScript, and have a strong interest in user interface design and user experience.",
    cta: "Contact Me",
  },
  es: {
    title: "José Borrego",
    subtitle: "Desarrollador Frontend apasionado por crear experiencias web increíbles",
    description:
      "Soy un desarrollador web con experiencia en la creación de aplicaciones web modernas y responsivas. Me especializo en tecnologías frontend como React, Next.js y TypeScript, y tengo un fuerte interés en el diseño de interfaces de usuario y la experiencia del usuario.",
    cta: "Contáctame",
  },
}

export default function Hero() {
  const { language } = useLanguage()
  const { title, subtitle, description, cta } = content[language]

  return (
    <AnimatedSection>
      <section id="about" className="py-12 md:py-20 px-6">
        <div className="container max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Mobile: Image on top */}
            <div className="md:hidden w-48 h-48 relative mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profilePic.jpg-yCzb2hsRtVfCvBHdOmmTdez3raRs5j.jpeg"
                alt="José Borrego"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>

            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">{title}</h1>
              <p className="text-xl mb-6">{subtitle}</p>
              <p className="mb-6 text-muted-foreground">{description}</p>
              <Button asChild size="lg" className="w-full md:w-auto">
                <ScrollLink href="#contact">{cta}</ScrollLink>
              </Button>
            </div>

            {/* Desktop: Image on right */}
            <div className="hidden md:block md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profilePic.jpg-yCzb2hsRtVfCvBHdOmmTdez3raRs5j.jpeg"
                  alt="José Borrego"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

