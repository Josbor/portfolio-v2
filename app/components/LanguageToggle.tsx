"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext"
import { useEffect } from "react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const handleOnclick = () => {
    localStorage.setItem("language", language === "es" ? "en" : "es")
    setLanguage(language === "es" ? "en" : "es")
  }
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as "es" | "en"
    if (storedLanguage) {
      setLanguage(storedLanguage)       
  }}
  ,[])
  return (
    <Button variant="ghost" size="sm" onClick={handleOnclick}>
      {language === "es" ? "EN" : "ES"}
    </Button>
  )
}

