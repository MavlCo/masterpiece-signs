'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { TESTIMONIALS, SITE } from '@/lib/constants'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? 'text-gold-core fill-gold-core' : 'text-charcoal'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const featured = TESTIMONIALS.slice(0, 3)

  return (
    <section className="bg-rich-black section-pad">
      <div className="container-custom">
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-4 border border-gold-core/25 bg-charcoal/50 px-6 py-3.5">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(SITE.rating.score) ? 'text-gold-core fill-gold-core' : 'text-gold-core/40'}
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="w-px h-5 bg-charcoal" />
            <div>
              <span className="font-cinzel font-bold text-cream text-lg">{SITE.rating.score}</span>
              <span className="text-cream/40 font-inter text-xs ml-1">
                / 5 on Google ({SITE.rating.count} reviews)
              </span>
            </div>
          </div>
        </motion.div>

        <SectionHeader
          eyebrow="Client Voices"
          title="What Our"
          titleGold="Clients Say"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-5 p-7 bg-ink-black border border-charcoal hover:border-gold-core/40 transition-colors duration-300 rounded-sm"
            >
              <div className="flex items-start justify-between">
                <Quote size={28} className="text-gold-core/30" aria-hidden="true" />
                <StarRating rating={t.rating} />
              </div>

              <blockquote className="font-cormorant italic text-cream/80 text-lg leading-relaxed flex-1">
                "{t.text}"
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-charcoal">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-cinzel font-bold text-sm text-ink-black gold-gradient-bg shrink-0"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-cinzel text-xs tracking-[0.08em] uppercase text-cream">
                    {t.name}
                  </div>
                  {t.company && (
                    <div className="font-inter text-[11px] text-cream/40 mt-0.5">{t.company}</div>
                  )}
                  {t.badge && (
                    <div className="font-inter text-[10px] tracking-[0.15em] uppercase text-gold-core/60 mt-0.5">
                      {t.badge}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/reviews" variant="secondary">
            Read All Reviews
          </Button>
          <Button
            href="https://g.page/r/masterpiece-signs"
            variant="ghost"
            external
          >
            Leave a Review
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
