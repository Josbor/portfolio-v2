import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-6 px-6 bg-background border-t border-border/40">
      <div className="container max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <Link href="https://github.com/Josbor" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/josbor/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="mailto:josbor.dev@gmail.com">
            <Mail className="w-6 h-6" />
          </Link>
        </div>
        <p>&copy; 2023 José Borrego. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

