import { Clock, Heart, Leaf } from "lucide-react"

const highlights = [
  {
    title: "Grounded teaching",
    description: "10+ years of personal practice with roots in Hatha & Vinyasa.",
    Icon: Leaf,
  },
  {
    title: "Rest-first approach",
    description: "Slow down the nervous system before inviting strength and mobility.",
    Icon: Heart,
  },
  {
    title: "Made for travelers",
    description: "Short stays or long winter escapes — each class fits your rhythm.",
    Icon: Clock,
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <p className="pill w-fit">About Ayla</p>
          <h2 className="text-3xl sm:text-4xl font-display text-sage-dark leading-tight">
            Kind, attentive guidance inspired by Tenerife&apos;s calm energy.
          </h2>
          <p className="text-base text-muted-foreground">
            I teach to help you soften, lengthen, and feel at home in your body. Expect mindful breath,
            thoughtful hands-on cues (if you like them), and playlists that mirror the ocean&apos;s pace.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card p-4">
              <p className="text-sm font-semibold text-foreground">For all levels</p>
              <p className="text-sm text-muted-foreground">Beginners welcome, seasoned yogis challenged with care.</p>
            </div>
            <div className="card p-4">
              <p className="text-sm font-semibold text-foreground">Mindful touch</p>
              <p className="text-sm text-muted-foreground">Adjustments only with consent, always slow and supportive.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {highlights.map(({ title, description, Icon }) => (
            <div key={title} className="card p-4 flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

