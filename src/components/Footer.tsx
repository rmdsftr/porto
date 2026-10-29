import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
        </p>
        <button type="button" className="link-btn" onClick={() => window.scrollTo({ top: 0 })}>
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
