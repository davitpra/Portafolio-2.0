import Link from 'next/link'
import clsx from 'clsx'

import { FadeIn } from '@/components/about/FadeIn'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/ui/SocialIcons'

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export function AboutSocialLinks() {
  return (
    <FadeIn delay={100}>
      <div className="mt-6 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <ul role="list" className="space-y-3">
          <SocialLink
            href="https://www.instagram.com/davit_prado/"
            icon={InstagramIcon}
          >
            Follow on Instagram
          </SocialLink>
          <SocialLink href="https://github.com/davitpra" icon={GitHubIcon}>
            Follow on GitHub
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/davitprado/"
            icon={LinkedInIcon}
          >
            Follow on LinkedIn
          </SocialLink>
        </ul>
        <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-700/40">
          <ul role="list">
            <SocialLink href="mailto:davitprado@outlook.com" icon={MailIcon}>
              davitprado@outlook.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </FadeIn>
  )
}
