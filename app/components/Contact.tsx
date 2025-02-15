import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "../contexts/LanguageContext";
import { useRouter } from "next/navigation";

export default function Contact({ router }: { router: ReturnType<typeof useRouter> }) {
  const { language } = useLanguage();

  

  // Define estados para los campos del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Funciones para manejar los cambios en los campos del formulario
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, message }),
    });
    if (response.ok){
      router.push(`/thank-you?language=${language}`);
    } else {
      const result = await response.json();
      console.log(result);
    }
  };

  return (
    <AnimatedSection className="animate-in-scale">
      <section id="contact" className="py-20 px-6 bg-muted/50">
        <div className="container max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            {language === "es" ? "Contáctame" : "Contact Me"}
          </h2>
          <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
            <AnimatedSection className="animate-in-left">
              <Input
                type="text"
                placeholder={language === "es" ? "Nombre" : "Name"}
                value={name}
                onChange={handleNameChange}
                required
              />
            </AnimatedSection>
            <AnimatedSection className="animate-in-left">
              <Input
                type="email"
                placeholder={language === "es" ? "Correo Electrónico" : "Email"}
                value={email}
                onChange={handleEmailChange}
                required
              />
            </AnimatedSection>
            <AnimatedSection className="animate-in-left">
              <Textarea
                placeholder={language === "es" ? "Mensaje" : "Message"}
                value={message}
                onChange={handleMessageChange}
                required
              />
            </AnimatedSection>
            <Button type="submit">
              {language === "es" ? "Enviar" : "Send"}
            </Button>
          </form>
        </div>
      </section>
    </AnimatedSection>
  );
}

