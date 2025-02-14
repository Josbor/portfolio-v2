import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimatedSection from "./AnimatedSection"
import { useLanguage } from "../contexts/LanguageContext"

export default function Contact() {
  const { language } = useLanguage()

  return (
    <AnimatedSection className="animate-in-scale">
      <section id="contact" className="py-20 px-6 bg-muted/50">
        <div className="container max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">{language === "es" ? "Contáctame" : "Contact Me"}</h2>
          <form className="max-w-md mx-auto space-y-4">
            <AnimatedSection className="animate-in-left">
              <Input type="text" placeholder={language === "es" ? "Nombre" : "Name"} required />
            </AnimatedSection>
            <AnimatedSection className="animate-in-right">
              <Input type="email" placeholder="Email" required />
            </AnimatedSection>
            <AnimatedSection className="animate-in-left">
              <Textarea placeholder={language === "es" ? "Mensaje" : "Message"} required />
            </AnimatedSection>
            <AnimatedSection className="animate-in-scale">
              <Button type="submit" className="w-full">
                {language === "es" ? "Enviar Mensaje" : "Send Message"}
              </Button>
            </AnimatedSection>
          </form>
        </div>
      </section>
    </AnimatedSection>
  )
}

