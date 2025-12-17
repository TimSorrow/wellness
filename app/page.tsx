import AboutSection from "@/components/sections/AboutSection"
import FooterSection from "@/components/sections/FooterSection"
import Hero from "@/components/sections/Hero"
import ServicesSection from "@/components/sections/ServicesSection"

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FooterSection />
    </div>
  )
}

