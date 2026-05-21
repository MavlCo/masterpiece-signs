import type { Metadata } from 'next'
import Image from 'next/image'
import { Palette, Hammer, CheckCircle, ChevronRight } from 'lucide-react'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import CTABand from '@/components/sections/CTABand'
import { PROCESS_STEPS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Process | Design to Installation',
  description:
    'How Masterpiece Signs & Graphics works: Design, Build, Install. A client-focused process built around quality, transparency, and getting it right the first time.',
}

const stepIcons = [Palette, Hammer, CheckCircle]
const stepImages = [
  '/images/474634300_1140791171041284_8109839429359543536_n.jpg',
  '/images/480035035_1157451379375263_6007914464376267083_n.jpg',
  '/images/404955982_875359584251112_7759454148356413512_n.jpg',
]

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink-black pt-32 pb-16 text-center">
        <div className="container-custom">
          <p className="font-inter text-[11px] tracking-[0.3em] uppercase text-gold-core mb-6">
            How It Works
          </p>
          <OrnamentalDivider className="max-w-48 mx-auto mb-8" compact />
          <h1
            className="font-cinzel font-black uppercase tracking-[0.05em] leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            <span className="gold-gradient-text">Design.</span>{' '}
            <span className="text-cream">Build.</span>{' '}
            <span className="gold-gradient-text">Install.</span>
          </h1>
          <p className="font-cormorant italic text-silver/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Every Masterpiece follows a deliberate three-step journey — built around your
            peace of mind and our commitment to getting it right the first time.
          </p>
        </div>
      </section>

      {/* Process steps detail */}
      <section className="bg-rich-black section-pad">
        <div className="container-custom space-y-24">
          {PROCESS_STEPS.map(({ number, title, description, details }, i) => {
            const Icon = stepIcons[i]
            const image = stepImages[i]
            const isEven = i % 2 === 0

            return (
              <div
                key={number}
                className={`grid lg:grid-cols-2 gap-14 items-center`}
              >
                {/* Image */}
                <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={image}
                      alt={`Step ${number}: ${title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ boxShadow: 'inset 0 0 0 1px rgba(212,175,55,0.2)' }}
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 font-cinzel font-black text-6xl gold-gradient-text opacity-15 select-none pointer-events-none">
                    {number}
                  </div>
                </div>

                {/* Content */}
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 flex items-center justify-center border border-gold-core/30 bg-gold-core/5">
                      <Icon size={18} className="text-gold-core" aria-hidden="true" />
                    </div>
                    <span className="font-cinzel font-bold text-[10px] tracking-[0.3em] uppercase gold-gradient-text">
                      Step {number}
                    </span>
                  </div>

                  <h2 className="font-cinzel font-bold text-cream uppercase tracking-[0.04em] text-3xl sm:text-4xl leading-tight mb-5">
                    {title}
                  </h2>

                  <p className="text-cream/55 font-inter text-base leading-relaxed mb-7">
                    {description}
                  </p>

                  {details && (
                    <ul className="space-y-3 mb-8">
                      {details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3">
                          <ChevronRight size={14} className="text-gold-core shrink-0" aria-hidden="true" />
                          <span className="text-cream/50 text-sm font-inter">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {i === PROCESS_STEPS.length - 1 && (
                    <Button href="/contact">Start Your Project</Button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Quality guarantee */}
      <section className="bg-ink-black section-pad">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              eyebrow="Our Guarantee"
              title="Delivered Right."
              titleGold="The First Time."
              subtitle="Our internal proofing and quality management is second to none. Before anything leaves our shop, it meets our standards — and yours. That is not a marketing line. It is our guarantee."
              className="mb-10"
            />
            <Button href="/contact" size="lg">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
