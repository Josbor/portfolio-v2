import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import AnimatedSection from "./AnimatedSection"
import { useLanguage } from "../contexts/LanguageContext"

const projects = [
  {
    id: 1,
    name: {
      en: "Crypto Quotation",
      es: "Cotizador Cripto",
    },
    description: {
      en: "This is a project to check the data of different cryptocurrencies",
      es: "Este es un proyecto para consultar los datos de las diferentes criptomonedas",
    },
    projectUrl: "https://github.com/Josbor/cripto-react",
    deploy: "https://cripto-consulta.netlify.app/",
    image: "https://raw.githubusercontent.com/Josbor/portfolio/main/src/assets/img/project-5.png",
    technologies: ["React", "API Integration"],
  },
  {
    id: 2,
    name: {
      en: "To-Do List",
      es: "Lista de Tareas",
    },
    description: {
      en: "Small project for task management",
      es: "Pequeño proyecto realizado para administrar tareas",
    },
    projectUrl: "https://github.com/Josbor/todolist-crud",
    deploy: "https://todolist-crud.vercel.app/",
    image: "https://raw.githubusercontent.com/Josbor/Josbor/main/todo-list-crud.jpg",
    technologies: ["React", "Firebase", "Tailwind"],
  },
  {
    id: 3,
    name: {
      en: "Expense Manager",
      es: "Administrador de Gastos",
    },
    description: {
      en: "Small application created to manage and record expenses based on a budget",
      es: "Pequeña aplicación creada para administrar y registrar los gastos basado en un presupuesto",
    },
    projectUrl: "https://github.com/Josbor/Control-gastos",
    deploy: "https://administracion-gastos.netlify.app/",
    image: "https://raw.githubusercontent.com/Josbor/Josbor/main/costsmanager.png",
    technologies: ["React", "LocalStorage"],
  },
  {
    id: 4,
    name: {
      en: "Veterinarian Appointments",
      es: "Consultas Veterinario",
    },
    description: {
      en: "Project where appointments are scheduled for patients at a veterinary clinic",
      es: "Proyecto donde se agendan citas a los pacientes en una veterinaria",
    },
    projectUrl: "https://github.com/Josbor/citas_react",
    deploy: "https://citasveterinariofinal.netlify.app/",
    image: "https://raw.githubusercontent.com/Josbor/portfolio/main/src/assets/img/project-4.png",
    technologies: ["React", "LocalStorage"],
  },
  {
    id: 5,
    name: {
      en: "Personal Portfolio",
      es: "Portafolio Personal",
    },
    description: {
      en: "Personal project developed to showcase my profile, skills, and completed works",
      es: "Proyecto personal desarrollado para mostrar mi perfil, habilidades y trabajos realizados",
    },
    projectUrl: "https://github.com/Josbor/portfolio",
    deploy: "https://jose-borrego.netlify.app/",
    image: "https://raw.githubusercontent.com/Josbor/portfolio/main/src/assets/img/project-2.jpeg",
    technologies: ["React", "Material UI"],
  },
  {
    id: 6,
    name: {
      en: "Furniture Store",
      es: "Tienda de Muebles",
    },
    description: {
      en: "It is a small presentation project for a furniture store",
      es: "Es un pequeño proyecto de presentación de una tienda de muebles",
    },
    projectUrl: "https://github.com/Josbor/tienda-muebles",
    deploy: "https://muebles-shop.netlify.app",
    image: "https://raw.githubusercontent.com/Josbor/portfolio/main/src/assets/img/project-6.png",
    technologies: ["HTML", "CSS"],
  },
]

export default function Projects() {
  const { language } = useLanguage()

  return (
    <AnimatedSection className="animate-in-scale">
      <section id="projects" className="py-20 px-6 bg-muted/50">
        <div className="container max-w-screen-xl mx-auto">
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
                <CardFooter className="flex gap-2 justify-between p-4">
                  <Button asChild variant="outline" className="flex-1">
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      {language === "es" ? "Repositorio" : "Repository"}
                    </a>
                  </Button>
                  <Button asChild className="flex-1">
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

