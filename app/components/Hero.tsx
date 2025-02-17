import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ScrollLink } from "./ScrollLink"
import AnimatedSection from "./AnimatedSection"
import { useLanguage } from "../contexts/LanguageContext"
import content from "../data/content.json"

export default function Hero() {
  const { language } = useLanguage()
  const { title, subtitle, description, cta } = content.hero[language]

  return (
    <AnimatedSection>
      <section id="about" className="py-12 md:py-20 px-6">
        <div className="container max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Mobile: Image on top */}
            <div className="md:hidden w-48 h-48 relative mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profilePic.jpg-yCzb2hsRtVfCvBHdOmmTdez3raRs5j.jpeg"
                alt="Jose Borrego"
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
            <div className="hidden  md:w-1/2 md:flex justify-center">
              <div className="relative w-72 h-72">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profilePic.jpg-yCzb2hsRtVfCvBHdOmmTdez3raRs5j.jpeg"
                  alt="Jose Borrego"
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

