import type { ReactNode } from 'react'

type SectionProps = {
  eyebrow: string
  title: string
  subtitle?: string
  className?: string
  children: ReactNode
}

export default function Section({ eyebrow, title, subtitle, className, children }: SectionProps) {
  const classes = ['section', className].filter(Boolean).join(' ')

  return (
    <section className={classes}>
      <div className="container">
        <header className="section-head">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
