import { useState, type ComponentPropsWithoutRef } from 'react'
import { Link, useLocation } from 'react-router'
import Icon from './Icon'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Journey' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

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

  return (
    <header className="navbar">
      <nav className="container" aria-label="Main navigation">
        <SectionLink hash="#about" onLanding={onLanding} className="brand" onClick={() => setMenuOpen(false)}>
          <span className="diamond" aria-hidden="true" />
          {profile.nickname}
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

        <button
          type="button"
          className="icon-btn menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-controls="nav-links"
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
        </button>
      </nav>
    </header>
  )
}
