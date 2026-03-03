'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/about/FadeIn'

function ChatIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

export function Newsletter() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire up to email service (Resend, Formspree, EmailJS, etc.)
    setSent(true)
  }

  return (
    <FadeIn className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <ChatIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Get in touch</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Have a project in mind or just want to say hi? I&apos;ll get back to you within 24 hours.
      </p>

      {sent ? (
        <div className="mt-6 rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
          Message sent — I&apos;ll be in touch soon!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <input
            type="text"
            placeholder="Your name"
            aria-label="Your name"
            required
            className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 text-sm shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-hidden dark:border-zinc-700 dark:bg-zinc-700/15 dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
          />
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 text-sm shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-hidden dark:border-zinc-700 dark:bg-zinc-700/15 dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
          />
          <textarea
            placeholder="Tell me about your project..."
            aria-label="Message"
            required
            rows={4}
            className="w-full resize-none appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-2 text-sm shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-hidden dark:border-zinc-700 dark:bg-zinc-700/15 dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
          />
          <Button type="submit" className="w-full">
            Send message
          </Button>
        </form>
      )}
    </FadeIn>
  )
}
