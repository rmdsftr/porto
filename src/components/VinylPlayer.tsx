import Icon from './Icon'
import { spotifyUrl, useSpotifyPlayer } from '../hooks/useSpotifyPlayer'
import type { ThemeSong } from '../types/profile'

type VinylPlayerProps = {
  song: ThemeSong
  photo: string
  photoAlt: string
}

function formatTime(ms: number) {
  const seconds = Math.max(0, Math.floor(ms / 1000))
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`
}

export default function VinylPlayer({ song, photo, photoAlt }: VinylPlayerProps) {
  const { hostRef, ready, playing, position, duration, repeat, togglePlay, restart, toggleRepeat } = useSpotifyPlayer(
    song.spotifyUri,
  )
  const progress = `${duration > 0 ? Math.min((position / duration) * 100, 100) : 0}%`

  return (
    <div className={playing ? 'player playing' : 'player'}>
      <div className="player-disc">
        <span className="player-disc-glow" aria-hidden="true" />
        <span className="player-disc-grooves" aria-hidden="true" />
        <div className="player-disc-label">
          <img src={photo} alt={photoAlt} />
        </div>
      </div>

      <div className="player-progress">
        <div className="player-bar" aria-hidden="true">
          <span className="player-bar-fill" style={{ width: progress }} />
          <span className="player-bar-knob" style={{ left: progress }} />
        </div>
        <p className="player-time">
          <span>{formatTime(position)}</span>
          <span>{duration > 0 ? `-${formatTime(duration - position)}` : '-:--'}</span>
        </p>
      </div>

      <div className="player-controls">
        <button type="button" className="player-btn player-toggle" aria-label="Shuffle" disabled>
          <Icon name="shuffle" size={22} strokeWidth={1.8} />
        </button>
        <button type="button" className="player-btn" onClick={restart} aria-label="Previous" disabled={!ready}>
          <Icon name="skipBack" size={22} />
        </button>
        <button
          type="button"
          className="player-btn player-play"
          onClick={togglePlay}
          aria-label={`${playing ? 'Pause' : 'Play'} ${song.title} by ${song.artist}`}
          disabled={!ready}
        >
          <span className="player-play-circle">
            <Icon name={playing ? 'pause' : 'play'} size={18} />
          </span>
        </button>
        <button type="button" className="player-btn" aria-label="Next" disabled>
          <Icon name="skipForward" size={22} />
        </button>
        <button
          type="button"
          className="player-btn player-toggle"
          onClick={toggleRepeat}
          aria-label="Repeat this song"
          aria-pressed={repeat}
          disabled={!ready}
        >
          <Icon name="repeatOne" size={22} strokeWidth={1.8} />
        </button>
      </div>

      <a className="player-credit" href={spotifyUrl(song.spotifyUri)} target="_blank" rel="noreferrer">
        <span className="player-credit-label">Now playing</span> {song.title} by {song.artist}
      </a>

      <div ref={hostRef} className="player-embed" inert />
    </div>
  )
}
