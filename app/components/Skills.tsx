import { Badge } from "@/components/ui/badge"
import AnimatedSection from "./AnimatedSection"
import { useLanguage } from "../contexts/LanguageContext"

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Styled Components",
  "Tailwind CSS",
  "Git",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "RESTful APIs",
  "GraphQL",
  "Jest",
  "Cypress",
]

export default function Skills() {
  const { language } = useLanguage()

  return (
    <AnimatedSection className="animate-in-scale">
      <section id="skills" className="py-20 px-6">
        <div className="container max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            {language === "es" ? "Mis Habilidades" : "My Skills"}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <AnimatedSection key={index} className="animate-in-scale">
                <Badge variant="outline" className="text-lg py-2 px-4">
                  {skill}
                </Badge>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

