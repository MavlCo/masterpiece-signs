import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Landmark,
  Store,
  Truck,
  Flag,
  PenTool,
  Target,
  ArrowRight,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import Button from '@/components/ui/Button'
import CTABand from '@/components/sections/CTABand'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services | Our Capabilities',
  description:
    'Full-service custom signage: monument signs, storefront & channel letters, vehicle wraps, banners, hand-painted signs, and our signature golf course signage. Bluffton, OH.',
}

const iconMap: Record<string, React.ElementType> = {
  monument: Landmark,
  storefront: Store,
  vehicle: Truck,
  banners: Flag,
  handpainted: PenTool,
  golf: Target,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink-black pt-32 pb-16 text-center">
        <div className="container-custom">
          <p className="font-inter text-[11px] tracking-[0.3em] uppercase text-gold-core mb-6">
            What We Do
          </p>
          <OrnamentalDivider className="max-w-48 mx-auto mb-8" compact />
          <h1
            className="font-cinzel font-black uppercase tracking-[0.05em] leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            <span className="gold-gradient-text">Capabilities</span>
            <span className="text-cream"> & Services</span>
          </h1>
          <p className="font-cormorant italic text-silver/70 text-xl max-w-2xl mx-auto leading-relaxed">
            From the first consultation to the final installation — we handle every stage
            with the same standard of excellence.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="bg-rich-black section-pad">
        <div className="container-custom space-y-20">
          {SERVICES.map(({ id, title, description, materials, useCases, image }, i) => {
            const Icon = iconMap[id] ?? Store
            const isGolf = id === 'golf'
            const isEven = i % 2 === 0

            return (
              <div
                key={id}
                id={id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={image ?? ''}
                      alt={title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ boxShadow: 'inset 0 0 0 1px rgba(212,175,55,0.2)' }}
                    />
                    {isGolf && (
                      <div className="absolute top-4 left-4 font-cinzel text-[9px] tracking-[0.2em] uppercase text-ink-black bg-gold-core px-3 py-1.5">
                        Signature Specialty
                      </div>
                    )}
                  </div>
                </div>

                {/* Copy */}
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 flex items-center justify-center border border-gold-core/30 bg-gold-core/5">
                      <Icon size={16} className="text-gold-core" aria-hidden="true" />
                    </div>
                    <span className="font-inter text-[11px] tracking-[0.2em] uppercase text-gold-core">
                      {isGolf ? 'Signature Specialty' : 'Service'}
                    </span>
                  </div>

                  <h2 className="font-cinzel font-bold text-cream uppercase tracking-[0.04em] text-2xl sm:text-3xl leading-tight mb-4">
                    {title}
                  </h2>

                  <p className="text-cream/55 font-inter text-base leading-relaxed mb-6">
                    {description}
                  </p>

                  {materials && (
                    <div className="mb-6">
                      <h3 className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold-core/70 mb-2">
                        Materials
                      </h3>
                      <p className="text-cream/40 text-sm font-inter">{materials}</p>
                    </div>
                  )}

                  {useCases && (
                    <div className="mb-8">
                      <h3 className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold-core/70 mb-3">
                        Common Applications
                      </h3>
                      <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                        {useCases.map((uc) => (
                          <li key={uc} className="flex items-center gap-2 text-cream/40 text-sm font-inter">
                            <svg width="5" height="5" viewBox="0 0 8 8" fill="#D4AF37" aria-hidden="true">
                              <path d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3L4 0Z" />
                            </svg>
                            {uc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button href="/contact">
                    Request a Quote <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CTABand />
    </>
  )
}
