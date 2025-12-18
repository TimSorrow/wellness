import { Instagram, Mail, PhoneCall } from "lucide-react"

export default function FooterSection() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="mt-12 border-t border-border bg-white/80">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <p className="pill w-fit">Contact</p>
            <h3 className="text-2xl font-display text-sage-dark">Ready to book?</h3>
            <p className="text-sm text-muted-foreground">
              Tell me your dates, location on Tenerife, and whether you prefer sunrise, daytime,
              or sunset. I&apos;ll confirm within a few hours.
            </p>
          </div>

          <div className="space-y-3 text-sm text-foreground">
            <a
              href="https://wa.me/34600000000"
              className="flex items-center gap-2 rounded-xl border border-border px-4 py-3 hover:border-primary/70 hover:text-primary transition"
              target="_blank"
              rel="noreferrer"
            >
              <PhoneCall className="h-4 w-4" />
              WhatsApp: +34 600 000 000
            </a>
            <a
              href="https://instagram.com/yourprofile"
              className="flex items-center gap-2 rounded-xl border border-border px-4 py-3 hover:border-primary/70 hover:text-primary transition"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-4 w-4" />
              Instagram: @yourprofile
            </a>
            <a
              href="mailto:hello@yogatenerife.com"
              className="flex items-center gap-2 rounded-xl border border-border px-4 py-3 hover:border-primary/70 hover:text-primary transition"
            >
              <Mail className="h-4 w-4" />
              hello@yogatenerife.com
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>© {year} Wellness. Crafted with ocean breeze in Tenerife.</span>
          <span>Tenerife, Canary Islands</span>
        </div>
      </div>
    </footer>
  )
}

