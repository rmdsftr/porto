import { useCallback, useEffect, useRef, useState } from 'react'

type PlaybackUpdate = {
  data: {
    isPaused: boolean
    isBuffering: boolean
    duration: number
    position: number
  }
}

type EmbedController = {
  togglePlay(): void
  restart(): void
  destroy(): void
  addListener(event: 'ready', handler: () => void): void
  addListener(event: 'playback_update', handler: (event: PlaybackUpdate) => void): void
}

type EmbedOptions = {
  uri?: string
  url?: string
  width?: number | string
  height?: number | string
}

type IFrameAPI = {
  createController(
    element: HTMLElement,
    options: EmbedOptions,
    callback: (controller: EmbedController) => void,
  ): void
}

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: IFrameAPI) => void
  }
}

const API_SRC = 'https://open.spotify.com/embed/iframe-api/v1'
const EMBED_HEIGHT = 80

let apiPromise: Promise<IFrameAPI> | null = null

function loadSpotifyIframeApi() {
  apiPromise ??= new Promise<IFrameAPI>((resolve, reject) => {
    window.onSpotifyIframeApiReady = resolve
    const script = document.createElement('script')
    script.src = API_SRC
    script.async = true
    script.onerror = () => {
      script.remove()
      apiPromise = null
      reject(new Error('Failed to load the Spotify iFrame API'))
    }
    document.body.appendChild(script)
  })
  return apiPromise
}

export function spotifyUrl(uri: string) {
  const [, type, id] = uri.split(':')
  return `https://open.spotify.com/${type}/${id}`
}

function afterLoadIdle(callback: () => void) {
  let idleId: number | undefined
  let timeoutId: number | undefined

  const schedule = () => {
    if (typeof window.requestIdleCallback === 'function') idleId = window.requestIdleCallback(callback, { timeout: 2000 })
    else timeoutId = window.setTimeout(callback, 200)
  }

  if (document.readyState === 'complete') schedule()
  else window.addEventListener('load', schedule, { once: true })

  return () => {
    window.removeEventListener('load', schedule)
    if (idleId !== undefined) window.cancelIdleCallback(idleId)
    if (timeoutId !== undefined) window.clearTimeout(timeoutId)
  }
}

type Playback = {
  ready: boolean
  playing: boolean
  position: number
  duration: number
}

export function useSpotifyPlayer(uri: string) {
  const hostRef = useRef<HTMLDivElement>(null)
  const controllerRef = useRef<EmbedController | null>(null)
  const repeatRef = useRef(true)
  const endedRef = useRef(false)
  const playingRef = useRef(false)
  const pendingRestartRef = useRef(false)

  const [playback, setPlayback] = useState<Playback>({ ready: false, playing: false, position: 0, duration: 0 })
  const [repeat, setRepeat] = useState(true)

  useEffect(() => {
    const wrapper = hostRef.current
    if (!wrapper) return

    let cancelled = false
    const target = document.createElement('div')
    wrapper.appendChild(target)

    const cancelSchedule = afterLoadIdle(() => {
      loadSpotifyIframeApi()
        .then((api) => {
          if (cancelled) return
          api.createController(target, { url: spotifyUrl(uri), width: '100%', height: EMBED_HEIGHT }, (controller) => {
            if (cancelled) {
              controller.destroy()
              return
            }
            controllerRef.current = controller

            controller.addListener('ready', () => setPlayback((p) => ({ ...p, ready: true })))

            controller.addListener('playback_update', ({ data }) => {
              const ended = data.duration > 0 && data.position >= data.duration
              const playing = !data.isPaused && !ended
              playingRef.current = playing
              setPlayback((p) => ({ ...p, playing, position: data.position, duration: data.duration }))

              if (ended && !endedRef.current && repeatRef.current) controller.restart()
              endedRef.current = ended
            })
          })
        })
        .catch(() => {
        })
    })

    return () => {
      cancelled = true
      cancelSchedule()
      controllerRef.current?.destroy()
      controllerRef.current = null
      wrapper.replaceChildren()
    }
  }, [uri])

  const togglePlay = useCallback(() => {
    const controller = controllerRef.current
    if (!controller) return
    if (pendingRestartRef.current && !playingRef.current) controller.restart()
    else controller.togglePlay()
    pendingRestartRef.current = false
  }, [])

  const restart = useCallback(() => {
    const controller = controllerRef.current
    if (!controller) return
    if (playingRef.current) controller.restart()
    else pendingRestartRef.current = true
    setPlayback((p) => ({ ...p, position: 0 }))
  }, [])

  const toggleRepeat = useCallback(() => {
    repeatRef.current = !repeatRef.current
    setRepeat(repeatRef.current)
  }, [])

  return { hostRef, ...playback, repeat, togglePlay, restart, toggleRepeat }
}
