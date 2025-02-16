import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import AnimatedSection from "./AnimatedSection"
import { useLanguage } from "../contexts/LanguageContext"
import content from "../data/content.json"

export default function Projects() {
  const { language } = useLanguage()
  const projects = content.projects

  return (
    <AnimatedSection className="animate-in-scale">
      <section id="projects" className="py-20 px-6 bg-muted/50">
        <div className="md:container max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            {language === "es" ? "Mis Proyectos" : "My Projects"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name[language]}
                    width={400}
                    height={200}
                    className="rounded-t-lg w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardTitle className="mb-2">{project.name[language]}</CardTitle>
                  <CardDescription className="mb-4">{project.description[language]}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex-col md:flex-row gap-2">
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      {language === "es" ? "Repositorio" : "Repository"}
                    </a>
                  </Button>
                  <Button asChild className="w-full">
                    <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {language === "es" ? "Ver Online" : "View Online"}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

