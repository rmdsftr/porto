import Icon from '../Icon'
import SocialLinks from '../SocialLinks'
import { profile } from '../../data/profile'

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export default function Hero() {
  const { status } = profile

  return (
    <section id="about" className="hero">
      <div className="container">
        <div>
          <p className="hero-greeting">Hi, I'm</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>

          {status && (
            <p className="status-badge">
              <span className="status-dot" aria-hidden="true" />
              <span>
                {status.label}
                {status.place && (
                  <>
                    {' at '}
                    {status.url ? (
                      <a href={status.url} target="_blank" rel="noreferrer">
                        {status.place}
                      </a>
                    ) : (
                      status.place
                    )}
                  </>
                )}
              </span>
            </p>
          )}

          <p className="hero-location">
            <Icon name="mapPin" size={16} />
            {profile.location}
          </p>

          {profile.cvUrl && (
            <div className="actions">
              <a href={profile.cvUrl} className="btn btn-primary" download={`CV - ${profile.name}.pdf`}>
                <Icon name="download" size={18} />
                Download CV
              </a>
            </div>
          )}

          <SocialLinks />
        </div>

        <div className="hero-media">
          {profile.photo ? (
            <img src={profile.photo} alt={`Photo of ${profile.name}`} className="avatar" />
          ) : (
            <div className="avatar avatar-fallback" aria-hidden="true">
              {getInitials(profile.name)}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
