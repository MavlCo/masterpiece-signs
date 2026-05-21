'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

// 17 hand-picked images spanning the full portfolio collection
const CAROUSEL_IMAGES = [
  '/images/313419042_651075236679549_534765979086936746_n.jpg',
  '/images/314398167_653110519809354_6768231229096114555_n.jpg',
  '/images/326775644_761567931530839_4580855714126231212_n.jpg',
  '/images/327444276_1530541020764150_4676692195196536176_n.jpg',
  '/images/350777126_643178434381360_5357841699464247927_n.jpg',
  '/images/357365914_801073781679693_3759353950855819762_n.jpg',
  '/images/380168442_842411320879272_3866588044608308344_n.jpg',
  '/images/381035265_842419390878465_2303646129406870956_n.jpg',
  '/images/381163909_842417347545336_7921488998980754806_n.jpg',
  '/images/404955982_875359584251112_7759454148356413512_n.jpg',
  '/images/461796257_1064058988714503_8509472152614466343_n.jpg',
  '/images/474565606_1140790377708030_7943489835746648999_n.jpg',
  '/images/474799269_1143139847473083_3250626863898515692_n.jpg',
  '/images/476557985_1152482923205442_4086881415617206867_n.jpg',
  '/images/477366344_1152482739872127_1887820089743401974_n.jpg',
  '/images/480035035_1157451379375263_6007914464376267083_n.jpg',
  '/images/481220181_1167403558380045_7149764226559404428_n.jpg',
] as const

const SLIDE_DURATION_MS = 5500  // how long each image is displayed
const FADE_DURATION_MS   = 1400  // crossfade duration

export default function HeroCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [nextIdx, setNextIdx]       = useState<number | null>(null)
  const [isFading, setIsFading]     = useState(false)

  // Ref so the advance callback always reads the latest currentIdx
  const currentRef = useRef(currentIdx)
  currentRef.current = currentIdx

  const slideTimerRef    = useRef<ReturnType<typeof setTimeout>>()
  const fadeCleanupRef   = useRef<ReturnType<typeof setTimeout>>()

  const advance = useCallback(() => {
    const next = (currentRef.current + 1) % CAROUSEL_IMAGES.length

    // Stage the next image (renders at opacity:0 so browser starts loading it)
    setNextIdx(next)

    // Double rAF ensures the element is painted before the transition fires,
    // avoiding the "instant jump" that happens when you set opacity and
    // transition in the same frame.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsFading(true)
      })
    })

    // After the crossfade completes, promote next → current and clean up
    fadeCleanupRef.current = setTimeout(() => {
      setCurrentIdx(next)
      setNextIdx(null)
      setIsFading(false)
    }, FADE_DURATION_MS + 50)
  }, [])

  useEffect(() => {
    const schedule = () => {
      slideTimerRef.current = setTimeout(() => {
        advance()
        schedule()
      }, SLIDE_DURATION_MS)
    }

    schedule()

    // Pause when the tab is hidden to avoid wasted work
    const handleVisibility = () => {
      if (document.hidden) {
        clearTimeout(slideTimerRef.current)
        clearTimeout(fadeCleanupRef.current)
      } else {
        schedule()
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      clearTimeout(slideTimerRef.current)
      clearTimeout(fadeCleanupRef.current)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [advance])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/*
        Current image — always rendered at full opacity.
        Sits at z-index 0 (CSS stacking base).
      */}
      <Image
        src={CAROUSEL_IMAGES[currentIdx]}
        alt=""
        fill
        priority={currentIdx === 0}
        sizes="100vw"
        quality={75}
        className="absolute inset-0 object-cover object-center select-none pointer-events-none"
        style={{ willChange: 'opacity' }}
      />

      {/*
        Next image — rendered only while advancing.
        Starts at opacity:0, transitions to opacity:1 (fade-in on top of current).
        Once it reaches opacity:1, we promote it to current and unmount this.
      */}
      {nextIdx !== null && (
        <Image
          src={CAROUSEL_IMAGES[nextIdx]}
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="absolute inset-0 object-cover object-center select-none pointer-events-none"
          style={{
            opacity: isFading ? 1 : 0,
            transition: isFading
              ? `opacity ${FADE_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
              : 'none',
            willChange: 'opacity',
          }}
        />
      )}
    </div>
  )
}
