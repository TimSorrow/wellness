import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Wellness Tenerife | Private & group classes by the ocean",
  description:
    "Mindful private and small-group yoga on Tenerife: sunrise beach flows, villa sessions, and guided meditation in English or Russian.",
  keywords: [
    "Tenerife wellness",
    "private yoga",
    "beach yoga",
    "meditation",
    "Vinyasa",
    "Hatha",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}

