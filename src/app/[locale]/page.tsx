import { Section } from "@/components/ui/section"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { Blog } from "@/components/blog"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <Section id="hero">
        <Hero />
      </Section>

      <Section id="work">
        <Projects />
      </Section>

      <Section id="services">
        <Services />
      </Section>
    </div>
  )
}
