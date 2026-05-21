'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Award, Users, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import HeroCarousel from '@/components/sections/HeroCarousel'

const trustBadges = [
  { Icon: Star, label: '35+ Years' },
  { Icon: Users, label: 'Family-Owned' },
  { Icon: MapPin, label: 'OH · MI · IN' },
  { Icon: Award, label: 'A+ BBB Rated' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-ink-black">
      {/* Carousel background + dark overlay */}
      <div className="absolute inset-0">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-black/90 via-ink-black/85 to-ink-black" />
      </div>

      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 35%, rgba(212,175,55,0.08) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-inter text-[10px] tracking-[0.35em] uppercase text-gold-core mb-7"
        >
          Premium Custom Signage · Bluffton, Ohio
        </motion.p>

        <OrnamentalDivider className="max-w-48 mx-auto mb-8" compact />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cinzel font-black uppercase tracking-[0.05em] leading-none mb-6"
          style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5rem)' }}
        >
          <span className="gold-gradient-text">Building Masterpieces</span>
          <br />
          <span className="text-cream">Since 1988</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-cormorant italic text-silver leading-relaxed mx-auto mb-10"
          style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', maxWidth: '38rem' }}
        >
          "Don't just buy a sign — buy a Masterpiece."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Button href="/contact" size="lg">
            Request a Quote
          </Button>
          <Button href="/portfolio" variant="secondary" size="lg">
            View Our Work <ArrowRight size={14} />
          </Button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
          aria-label="Trust indicators"
        >
          {trustBadges.map(({ Icon, label }, i) => (
            <div key={label} className="flex items-center gap-2">
              <Icon
                size={13}
                className="text-gold-core shrink-0"
                aria-hidden="true"
              />
              <span className="font-inter text-[11px] tracking-[0.18em] uppercase text-cream/50">
                {label}
              </span>
              {i < trustBadges.length - 1 && (
                <span className="hidden sm:block text-gold-core/25 ml-4" aria-hidden="true">
                  ·
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-gold-core/60 to-transparent" />
        <div className="w-1 h-1 rounded-full bg-gold-core/40" />
      </motion.div>
    </section>
  )
}
