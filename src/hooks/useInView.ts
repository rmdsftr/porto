import { useEffect, useRef, useState } from 'react'

export function useInView<T extends Element>(rootMargin = '-80px 0px 200px 0px') {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )
    observer.observe(element)

    return () => observer.disconnect()
  }, [rootMargin])

  return [ref, inView] as const
}
