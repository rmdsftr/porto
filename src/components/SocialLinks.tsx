import Icon, { type IconName } from './Icon'
import { profile } from '../data/profile'

type SocialLinksProps = {
  exclude?: IconName[]
}

export default function SocialLinks({ exclude = [] }: SocialLinksProps) {
  const socials = profile.socials.filter((social) => !exclude.includes(social.icon))

  return (
    <ul className="socials">
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label={social.label}
            title={social.label}
          >
            <Icon name={social.icon} size={19} strokeWidth={1.5} />
          </a>
        </li>
      ))}
    </ul>
  )
}
