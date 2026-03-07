import { Container } from '@/components/layout/Container'
import { HeroSection } from '@/components/home/HeroSection'
import { Contact } from '@/components/home/Contact'
import { Resume } from '@/components/home/Resume'
import { TechStack } from '@/components/home/TechStack'
import { Services } from '@/components/home/Services'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <HeroSection />
      </Container>
      <Container className="mt-16">
        <FeaturedProjects />
      </Container>
      <Container className="mt-16">
        <TechStack />
      </Container>
      <Container className="mt-10">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-8">
          <Services />
          <div className="space-y-10">
            <Resume />
            <Contact />
          </div>
        </div>
      </Container>
    </>
  )
}
