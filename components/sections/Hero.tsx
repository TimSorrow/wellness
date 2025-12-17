import { ArrowRight, Languages, Sparkles, Waves } from "lucide-react"

const highlights = [
  {
    title: "Sunrise beach flows",
    description: "Move with the Atlantic breeze and Teide in view.",
    Icon: Waves,
  },
  {
    title: "Private & small groups",
    description: "Tailored sessions in villas, hotels, or our cozy studio.",
    Icon: Sparkles,
  },
  {
    title: "Bilingual guidance",
    description: "Gentle cues in English or Russian to keep you present.",
    Icon: Languages,
  },
]

const heroImage =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80"

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-sand-50" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-24">
        <div className="pill">Yoga by the ocean • Tenerife</div>

        <div className="mt-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-tight text-sage-dark">
              Breathe with the Atlantic, ground with the volcano.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Ayla leads soulful yoga that blends mindful movement, breathwork, and meditation.
              Whether you want a sunrise beach flow, a private villa class, or a gentle stretch
              after surfing, every session is tailored to your energy.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-white shadow-soft-lift hover:-translate-y-0.5 transition"
              >
                Book a class
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary/70 hover:text-primary transition"
              >
                View class styles
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {highlights.map(({ title, description, Icon }) => (
                <div key={title} className="card p-4">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-sand-50/80" />
            <div className="relative space-y-4">
              <div className="pill w-fit">Session focus</div>
              <h2 className="text-2xl font-display text-sage-dark">
                Calm nervous system, open breath, realign posture.
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Gentle warm-up to release travel tension.</li>
                <li>• Fluid sequences that meet your level and energy.</li>
                <li>• Breath-led meditation and a long, nurturing savasana.</li>
              </ul>
              <div className="rounded-2xl border border-border/70 bg-white/70 p-4">
                <p className="text-sm font-semibold text-foreground">Availability</p>
                <p className="text-sm text-muted-foreground">
                  Sunrise & sunset slots • Playa de las Américas • Costa Adeje • Private villas island-wide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

