import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'David Prado',
    default:
      'David Prado - Full Stack Developer',
  },
  description:
    'David Prado is a Full Stack Developer. I am passionate about building products and services that help people.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
