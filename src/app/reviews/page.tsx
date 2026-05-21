import type { Metadata } from 'next'
import { Star, Quote, ExternalLink } from 'lucide-react'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import CTABand from '@/components/sections/CTABand'
import { TESTIMONIALS, SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Reviews | Client Testimonials',
  description:
    `${SITE.rating.score}★ Google rated. Read what clients across Ohio, Michigan & Indiana say about Masterpiece Signs & Graphics.`,
}

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'text-gold-core fill-gold-core' : 'text-charcoal'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink-black pt-32 pb-16 text-center">
        <div className="container-custom">
          <p className="font-inter text-[11px] tracking-[0.3em] uppercase text-gold-core mb-6">
            Social Proof
          </p>
          <OrnamentalDivider className="max-w-48 mx-auto mb-8" compact />
          <h1
            className="font-cinzel font-black uppercase tracking-[0.05em] leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            <span className="gold-gradient-text">Client</span>
            <span className="text-cream"> Reviews</span>
          </h1>

          {/* Rating summary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="font-cinzel font-black text-5xl gold-gradient-text leading-none">
                {SITE.rating.score}
              </div>
              <StarRating rating={Math.floor(SITE.rating.score)} />
              <div className="font-inter text-xs text-cream/40 tracking-wide">
                {SITE.rating.count} Google Reviews
              </div>
            </div>

            <div className="w-px h-16 bg-charcoal hidden sm:block" />

            <div className="flex flex-col items-center gap-2">
              <div className="font-cinzel font-black text-5xl gold-gradient-text leading-none">
                {SITE.bbb}
              </div>
              <div className="font-inter text-xs tracking-[0.2em] uppercase text-cream/40">
                BBB Rating
              </div>
              <div className="font-inter text-xs text-cream/25">Not Accredited</div>
            </div>

            <div className="w-px h-16 bg-charcoal hidden sm:block" />

            <div className="flex flex-col items-center gap-2">
              <div className="font-cinzel font-black text-5xl gold-gradient-text leading-none">
                10+
              </div>
              <div className="font-inter text-xs tracking-[0.2em] uppercase text-cream/40">
                Years of Reviews
              </div>
              <div className="font-inter text-xs text-cream/25">Consistent Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* All reviews */}
      <section className="bg-rich-black section-pad">
        <div className="container-custom">
          <SectionHeader
            eyebrow="What Clients Say"
            title="Voices of"
            titleGold="Experience"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.id}
                className="flex flex-col gap-5 p-7 bg-ink-black border border-charcoal hover:border-gold-core/35 transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <Quote size={26} className="text-gold-core/25" aria-hidden="true" />
                  <StarRating rating={t.rating} size={13} />
                </div>

                <blockquote className="font-cormorant italic text-cream/75 text-lg leading-relaxed flex-1">
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
                      <div className="font-inter text-[11px] text-cream/40 mt-0.5">
                        {t.company}
                      </div>
                    )}
                    <div className="flex items-center gap-2 mt-0.5">
                      {t.badge && (
                        <span className="font-inter text-[10px] tracking-[0.12em] uppercase text-gold-core/50">
                          {t.badge}
                        </span>
                      )}
                      <span className="text-cream/25 text-xs font-inter">{t.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Leave review CTA */}
          <div className="text-center border border-gold-core/20 bg-charcoal/30 p-10">
            <p className="font-inter text-[11px] tracking-[0.2em] uppercase text-gold-core mb-4">
              Share Your Experience
            </p>
            <OrnamentalDivider className="max-w-36 mx-auto mb-6" compact />
            <h3 className="font-cinzel font-bold text-cream uppercase text-xl tracking-[0.06em] mb-4">
              Had a Great Experience?
            </h3>
            <p className="text-cream/45 font-inter text-sm leading-relaxed max-w-md mx-auto mb-7">
              Your review helps other businesses in Ohio, Michigan, and Indiana find the
              quality signage they deserve. We read every one.
            </p>
            <Button
              href="https://g.page/r/masterpiece-signs/review"
              external
            >
              Leave a Google Review <ExternalLink size={13} />
            </Button>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
