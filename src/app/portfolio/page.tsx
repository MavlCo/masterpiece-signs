import type { Metadata } from 'next'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import CTABand from '@/components/sections/CTABand'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio | Our Work',
  description:
    'Browse our portfolio of custom signage: monument signs, storefront letters, vehicle wraps, golf course signage, hand-painted signs, and more.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink-black pt-32 pb-16 text-center">
        <div className="container-custom">
          <p className="font-inter text-[11px] tracking-[0.3em] uppercase text-gold-core mb-6">
            Our Work
          </p>
          <OrnamentalDivider className="max-w-48 mx-auto mb-8" compact />
          <h1
            className="font-cinzel font-black uppercase tracking-[0.05em] leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            <span className="gold-gradient-text">Portfolio</span>
            <span className="text-cream block text-[0.55em] mt-2 tracking-[0.1em]">
              The Masterpieces We&apos;ve Built
            </span>
          </h1>
          <p className="font-cormorant italic text-silver/70 text-xl max-w-xl mx-auto leading-relaxed">
            Every project is a statement. Browse our work and imagine what we can build
            for you.
          </p>
        </div>
      </section>

      {/* Portfolio grid with filter */}
      <section className="bg-ink-black section-pad pt-8">
        <div className="container-custom">
          <PortfolioClient />
        </div>
      </section>

      <CTABand />
    </>
  )
}
