import Icon from '../Icon'
import SocialLinks from '../SocialLinks'
import VinylPlayer from '../VinylPlayer'
import { profile } from '../../data/profile'

export default function Hero() {
  const { status } = profile

  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero-copy">
          <p className="section-eyebrow">About me</p>

          <div className="hero-heading">
            <h1>{profile.name}</h1>
            <p className="hero-role">
              {profile.role}
              {profile.focus && (
                <>
                  {' · '}
                  <span>{profile.focus}</span>
                </>
              )}
            </p>
            {profile.alsoHandles && <p className="hero-also">{profile.alsoHandles}</p>}
          </div>

          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-meta">
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
              <Icon name="mapPin" size={15} />
              {profile.location}
            </p>
          </div>

          <div className="hero-actions">
            {profile.cvUrl && (
              <a href={profile.cvUrl} className="btn btn-outline" download={`CV - ${profile.name}.pdf`}>
                <Icon name="download" size={16} />
                Download CV
              </a>
            )}
            <SocialLinks />
          </div>
        </div>

        {profile.themeSong && (
          <div className="hero-media">
            <VinylPlayer song={profile.themeSong} photo={profile.photo} photoAlt={`Photo of ${profile.name}`} />
          </div>
        )}
      </div>
    </section>
  )
}
