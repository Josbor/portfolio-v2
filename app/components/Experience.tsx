import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedSection from "./AnimatedSection"
import { useLanguage } from "../contexts/LanguageContext"

const experiences = [
  {
    title: {
      en: "Frontend Developer at Marxa Digital, Mexico",
      es: "Desarrollador Frontend en Marxa Digital, México",
    },
    type: {
      en: "Remote",
      es: "Remoto",
    },
    period: "Agosto 2022 – Diciembre 2024",
    achievements: {
      en: [
        "Development of a loyalty module with an intelligent appointment system synchronized to customer registration dates.",
        "Redesign of web platform with a mobile-first approach, improving loading speed by 35% through lazy loading.",
        "Migration of CSS styles to Tailwind for standardization and reuse of components.",
        "Integration of ChatGPT API for predictive sales analysis in Node.js.",
        "Refactoring of data processing module to support XLSX/CSV files.",
        "Implementation of conversational chatbot with dynamic flows using Botpress.",
        "Resolution of critical bugs in key ERP modules, reducing system errors by 20%.",
        "Active participation in Agile ceremonies (dailies, sprint planning, demos).",
      ],
      es: [
        "Desarrollo de módulo de fidelización con sistema de citas inteligentes sincronizado a fechas de registro de clientes.",
        "Rediseño de plataforma web con enfoque mobile-first, mejorando la velocidad de carga en un 35% mediante lazy loading.",
        "Migración de estilos CSS a Tailwind para estandarización y reutilización de componentes.",
        "Integración de API de ChatGPT para análisis predictivo de ventas en Node.js.",
        "Refactorización de módulo de procesamiento de datos para soporte de archivos XLSX/CSV.",
        "Implementación de chatbot conversacional con flujos dinámicos usando Botpress.",
        "Resolución de bugs críticos en módulos ERP clave, reduciendo errores del sistema en un 20%.",
        "Participación activa en ceremonias Agile (dailies, sprint planning, demos).",
      ],
    },
    techStack: ["Angular", "TypeScript", "Tailwind CSS", "Firebase", "Node.js", "REST APIs"],
  },
  {
    title: {
      en: "Full Stack Developer at Grupo KFC",
      es: "Desarrollador Full Stack en Grupo KFC",
    },
    type: {
      en: "Quito, Ecuador",
      es: "Quito, Ecuador",
    },
    period: "Mayo 2019 – Junio 2020",
    achievements: {
      en: [
        "Development of automated printing module using optimized SQL queries and PHP scripts on the server.",
        "Complete redesign of the personnel management system interface (look and feel) to improve usability.",
        "Update of the reports module with React, Node.js and SQL to optimize report generation (partial work, project under development during my participation).",
        "Review of reusable stored procedures to support new system modules.",
        "Improvement of frontend-backend interaction through efficient SQL queries and optimization of data flows.",
      ],
      es: [
        "Desarrollo de módulo de impresión automatizada mediante consultas SQL optimizadas y scripts PHP en servidor.",
        "Rediseño completo de la interfaz del sistema de gestión de personal (look and feel) para mejorar usabilidad.",
        "Actualización del módulo de reportes con React, Node.js y SQL para optimizar generación de informes (trabajo parcial, proyecto en desarrollo durante mi participación).",
        "Revisión de stored procedures reutilizables para soporte de nuevos módulos del sistema.",
        "Mejora de interacción frontend-backend mediante consultas SQL eficientes y optimización de flujos de datos.",
      ],
    },
    techStack: ["React.js", "Node.js", "PHP", "SQL Server", "JavaScript", "Git"],
  },
]

export default function Experience() {
  const { language } = useLanguage()

  return (
    <AnimatedSection>
      <section id="experience" className="py-20 px-6 bg-muted/50">
        <div className="container max-w-screen-xl mx-auto">
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

