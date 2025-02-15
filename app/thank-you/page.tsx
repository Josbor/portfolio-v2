'use client';
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext";
import { use, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Providers } from "../providers";

export default function ThankYouPage() {
  const { language } = useLanguage();
  const [storedLanguage, setLanguage] = useState<"es"|"en">("en");
  useEffect(() => {
    setLanguage((localStorage.getItem("language") ?? language)as "es" | "en");
  },[])
  const content={
    es:{
      title: "¡Gracias por contactar!",
      description: "Hemos recibido tu mensaje. me pondre en contacto contigo pronto.",
      buttonText: "Volver a la página principal"
    },
    en:{
      title: "Thank you for contacting!",
      description: "We have received your message. I will contact you soon.",
      buttonText: "Back to the main page"
    }
  }
  return (
     
    <div className="min-h-screen bg-gradient-to-b flex items-center justify-center px-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <div className="mx-auto mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-center">{content[storedLanguage].title}</CardTitle>
          <CardDescription className="text-center">
            {content[storedLanguage].description}
          </CardDescription>
        </CardHeader>
        <CardContent>{/* You can add additional content here if needed */}</CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">{content[storedLanguage].buttonText }</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
    
  )
}

