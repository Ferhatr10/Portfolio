import { Section } from "@/components/ui/section"
import { Hero } from "@/components/hero"
import { SimpleCareer } from "@/components/career/simple"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <Section id="hero">
        <Hero />
      </Section>

      <Section id="services">
        <Services />
      </Section>

      <Section id="career">
        <SimpleCareer />
      </Section>

      <Section id="work">
        <Projects />
      </Section>
    </div>
  )
}
