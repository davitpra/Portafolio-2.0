import { Container } from '@/components/layout/Container'
import { HomeArticle } from '@/components/home/HomeArticle'
import { HeroSection } from '@/components/home/HeroSection'
import { Newsletter } from '@/components/home/Newsletter'
import { Photos } from '@/components/home/Photos'
import { Resume } from '@/components/home/Resume'
import { getAllArticles } from '@/lib/articles'

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 3)

  return (
    <>
      <Container className="mt-9">
        <HeroSection />
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <HomeArticle key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
