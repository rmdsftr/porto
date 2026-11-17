import Icon from './Icon'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
        </p>
        <button type="button" className="link-btn back-to-top" onClick={() => window.scrollTo({ top: 0 })}>
          Back to top
          <Icon name="arrowUp" size={14} />
        </button>
      </div>
    </footer>
  )
}
