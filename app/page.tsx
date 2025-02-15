'use client';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background" id="top">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact router={router}/>
      </main>
      <Footer />
    </div>
  )
}

