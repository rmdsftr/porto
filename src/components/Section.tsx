import type { ReactNode } from 'react'

type SectionProps = {
  eyebrow: string
  title: string
  alt?: boolean
  className?: string
  children: ReactNode
}

export default function Section({ eyebrow, title, alt, className, children }: SectionProps) {
  const classes = ['section', alt && 'section-alt', className].filter(Boolean).join(' ')

  return (
    <section className={classes}>
      <div className="container">
        <header className="section-head">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  )
}
