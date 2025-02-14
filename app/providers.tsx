"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { LanguageProvider } from "./contexts/LanguageContext"

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <LanguageProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem {...props}>
        {children}
      </NextThemesProvider>
    </LanguageProvider>
  )
}

