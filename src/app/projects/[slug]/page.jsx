import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

import { ArticleLayout } from '@/components/ArticleLayout'
import { projects } from '@/lib/projects'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.name,
    description: project.description,
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <ArticleLayout project={project}>
      <ReactMarkdown>{project.body}</ReactMarkdown>
    </ArticleLayout>
  )
}
