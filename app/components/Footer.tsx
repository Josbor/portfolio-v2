import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import content from "../data/content.json"

export default function Footer() {
  const { github, linkedin, email, copyright } = content.footer

  return (
    <footer className="py-6 px-6 bg-background border-t border-border/40">
      <div className="container max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </Link>
          <Link href={linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href={email}>
            <Mail className="w-6 h-6" />
          </Link>
        </div>
        <p>{copyright}</p>
      </div>
    </footer>
  )
}

