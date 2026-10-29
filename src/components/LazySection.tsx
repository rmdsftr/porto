import { Suspense, useEffect, useState, type ComponentType, type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type LazySectionProps = {
  id: string
  component: ComponentType
}

function OnMount({ onMount, children }: { onMount: (mounted: boolean) => void; children: ReactNode }) {
  useEffect(() => onMount(true), [onMount])
  return children
}

export default function LazySection({ id, component: Component }: LazySectionProps) {
  const [ref, inView] = useInView<HTMLDivElement>()
  const [mounted, setMounted] = useState(false)
  const placeholder = <div className="section-placeholder" />

  return (
    <div id={id} ref={ref} className={mounted ? 'lazy-section' : 'lazy-section pending'}>
      {inView ? (
        <Suspense fallback={placeholder}>
          <OnMount onMount={setMounted}>
            <Component />
          </OnMount>
        </Suspense>
      ) : (
        placeholder
      )}
    </div>
  )
}
