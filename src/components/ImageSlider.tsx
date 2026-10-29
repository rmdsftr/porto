import { useRef, useState } from 'react'
import Icon from './Icon'

type ImageSliderProps = {
  images: string[]
  label: string
}

export default function ImageSlider({ images, label }: ImageSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  function goTo(target: number) {
    const track = trackRef.current
    if (!track) return
    const wrapped = (target + images.length) % images.length
    track.scrollTo({ left: wrapped * track.clientWidth, behavior: 'smooth' })
  }

  function handleScroll() {
    const track = trackRef.current
    if (!track) return
    setIndex(Math.round(track.scrollLeft / track.clientWidth))
  }

  const hasMany = images.length > 1

  return (
    <div className={hasMany ? 'slider has-controls' : 'slider'}>
      <div className="slider-track" ref={trackRef} onScroll={handleScroll}>
        {images.map((src, i) => (
          <img
            key={`${i}-${src}`}
            src={src}
            alt={`${label} preview ${i + 1}`}
            className="slider-slide"
            loading="lazy"
          />
        ))}
      </div>

      {hasMany && (
        <>
          <button
            type="button"
            className="icon-btn slider-prev"
            onClick={() => goTo(index - 1)}
            aria-label="Previous image"
          >
            <Icon name="arrowLeft" size={18} />
          </button>
          <button
            type="button"
            className="icon-btn slider-next"
            onClick={() => goTo(index + 1)}
            aria-label="Next image"
          >
            <Icon name="arrowRight" size={18} />
          </button>
        </>
      )}

      {hasMany && (
        <div className="slider-dots">
          {images.map((src, i) => (
            <button
              key={`${i}-${src}`}
              type="button"
              className={i === index ? 'active' : undefined}
              onClick={() => goTo(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      )}
    </div>
  )
}
