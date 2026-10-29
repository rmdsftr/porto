import Icon from './Icon'
import { profile } from '../data/profile'

export default function SocialLinks() {
  return (
    <ul className="socials">
      {profile.socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label={social.label}
            title={social.label}
          >
            <Icon name={social.icon} size={18} />
          </a>
        </li>
      ))}
    </ul>
  )
}
