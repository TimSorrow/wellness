import Link from "next/link"
import { Instagram, PhoneCall } from "lucide-react"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Classes" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-white/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-2xl md:text-3xl text-sage-dark tracking-tight"
        >
          Ayla Yoga
          <span className="ml-2 text-sm font-sans text-muted-foreground">Tenerife</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative pb-1 hover:text-primary transition-colors"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 block h-px w-0 bg-primary transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/34600000000"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary/60 hover:text-primary transition"
            target="_blank"
            rel="noreferrer"
          >
            <PhoneCall className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="https://instagram.com/yourprofile"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-primary transition"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white shadow-soft-lift hover:-translate-y-0.5 transition"
          >
            Book a class
          </a>
        </div>
      </div>
    </header>
  )
}

