import { Link } from 'react-router'

type NotFoundProps = {
  title?: string
  message?: string
}

export default function NotFound({
  title = 'Page not found',
  message = "The page you're looking for doesn't exist or has been moved.",
}: NotFoundProps) {
  return (
    <section className="section contact">
      <div className="container">
        <header className="section-head">
          <p className="section-eyebrow">404</p>
          <h1 className="section-title">{title}</h1>
        </header>
        <p className="contact-text">{message}</p>
        <div className="actions">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
