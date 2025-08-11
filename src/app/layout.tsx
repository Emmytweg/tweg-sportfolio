import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { poppins } from "../styles/font"

export const metadata: Metadata = {
  title: "Emmanuel Ayanfeoluwa",
  description: "Web Developer and Social Media Manager portfolio.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body className="min-h-[100svh] bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
