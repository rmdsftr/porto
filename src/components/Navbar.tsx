import { useState, type ComponentPropsWithoutRef } from 'react'
import { Link, useLocation } from 'react-router'
import Icon from './Icon'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

type Theme = 'light' | 'dark'

type SectionLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
  hash: string
  onLanding: boolean
}

function SectionLink({ hash, onLanding, ...props }: SectionLinkProps) {
  return onLanding ? <a href={hash} {...props} /> : <Link to={`/${hash}`} {...props} />
}

export default function Navbar() {
  const onLanding = useLocation().pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <header className="navbar">
      <nav className="container" aria-label="Main navigation">
        <SectionLink hash="#about" onLanding={onLanding} className="brand" onClick={() => setMenuOpen(false)}>
          {profile.nickname}
          <span>.</span>
        </SectionLink>

        <ul id="nav-links" className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {links.map((link) => (
            <li key={link.href}>
              <SectionLink hash={link.href} onLanding={onLanding} onClick={() => setMenuOpen(false)}>
                {link.label}
              </SectionLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-controls="nav-links"
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={18} />
          </button>
        </div>
      </nav>
    </header>
  )
}
