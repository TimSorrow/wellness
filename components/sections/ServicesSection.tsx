import { Sparkles, Sun, Waves, Wind } from "lucide-react"

const services = [
  {
    title: "Hatha Yoga",
    description: "Slow, steady postures to build presence, balance, and strength.",
    focus: "Perfect for beginners and anyone needing grounding.",
    Icon: Sun,
  },
  {
    title: "Vinyasa Flow",
    description: "Breath-led sequences that awaken energy and fluidity.",
    focus: "For movers who enjoy creative transitions and a soft burn.",
    Icon: Wind,
  },
  {
    title: "Beach Yoga",
    description: "Sunrise or golden hour flows with ocean breeze and soft sand.",
    focus: "Great for couples, friends, and mindful holiday photos.",
    Icon: Waves,
  },
  {
    title: "Meditation",
    description: "Guided breathwork, body scans, and nervous system resets.",
    focus: "Ideal pre-flight, post-hike, or to unwind remote workdays.",
    Icon: Sparkles,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="pill w-fit">Offerings</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display text-sage-dark">
            Private sessions, intimate groups, sunrise beach flows.
          </h2>
        </div>
        <p className="text-sm text-muted-foreground md:max-w-sm">
          Mats provided on request. We travel across the island or host you near Playa de las Américas.
          Sessions can be 60 or 90 minutes.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map(({ title, description, focus, Icon }) => (
          <div key={title} className="card p-6 hover:shadow-soft-lift transition">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{description}</p>
            <p className="mt-2 text-sm font-medium text-foreground">{focus}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

