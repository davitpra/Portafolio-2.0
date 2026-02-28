import { Container } from '@/components/layout/Container'
import { AboutHero } from '@/components/about/AboutHero'
import { AboutStats } from '@/components/about/AboutStats'
import { AboutBio } from '@/components/about/AboutBio'
import { AboutStack } from '@/components/about/AboutStack'
import { AboutGallery } from '@/components/about/AboutGallery'
import { AboutSocialLinks } from '@/components/about/AboutSocialLinks'

export const metadata = {
  title: 'About',
  description:
    'Full Stack Developer based in Ontario, Canada — building scalable web apps for 5+ years.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
        {/* Left col — content */}
        <div>
          <AboutHero />
          <AboutStats />
          <AboutBio />
          <AboutStack />
        </div>

        {/* Right col — images + social */}
        <div className="lg:pl-8">
          <AboutGallery />
          <AboutSocialLinks />
        </div>
      </div>
    </Container>
  )
}
