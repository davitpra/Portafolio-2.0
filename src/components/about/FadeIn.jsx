'use client'

import { useEffect, useRef } from 'react'

export function FadeIn({ as: Tag = 'div', delay = 0, className, style, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.style.opacity = '1'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay / 1000}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay / 1000}s`,
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}
