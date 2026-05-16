import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import type { Metadata } from "next"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jose Borrego - Full Stack Software Engineer",
  description:
    "Portfolio de Jose Borrego, ingeniero de software full stack especializado en React, Angular, Node.js, AWS e integración con IA.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}