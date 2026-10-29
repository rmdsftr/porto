import Icon from '../Icon'
import Section from '../Section'
import SocialLinks from '../SocialLinks'
import { profile } from '../../data/profile'

export default function Contact() {
  return (
    <Section eyebrow="Contact" title="Let's work together" className="contact">
      <p className="contact-text">{profile.contactText}</p>
      <div className="actions">
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          <Icon name="mail" size={18} />
          {profile.email}
        </a>
      </div>
      <SocialLinks />
    </Section>
  )
}
