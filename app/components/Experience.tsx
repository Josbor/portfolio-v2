import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedSection from "./AnimatedSection"
import { useLanguage } from "../contexts/LanguageContext"
import content from "../data/content.json"

export default function Experience() {
  const { language } = useLanguage()
  const experiences = content.experience

  return (
    <AnimatedSection>
      <section id="experience" className="py-20  px-6 bg-muted/50">
        <div className=" md:container max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            {language === "es" ? "Experiencia Laboral" : "Work Experience"}
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} className={`animate-in-${index % 2 === 0 ? "left" : "right"}`}>
                <Card>
                  <CardHeader>
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-bold">{exp.title[language]}</CardTitle>
                      <CardDescription className="text-base">
                        <span className="font-medium">{exp.type[language]}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.period}</span>
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      {exp.achievements[language].map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <div className="text-sm font-semibold mb-2">
                        {language === "es" ? "Tecnologías:" : "Tech Stack:"}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

