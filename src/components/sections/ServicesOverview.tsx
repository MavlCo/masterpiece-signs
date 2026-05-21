'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
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
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  monument: Landmark,
  storefront: Store,
  vehicle: Truck,
  banners: Flag,
  handpainted: PenTool,
  golf: Target,
}

export default function ServicesOverview() {
  return (
    <section className="bg-ink-black section-pad">
      <div className="container-custom">
        <SectionHeader
          eyebrow="What We Do"
          title="Craftsmanship Across"
          titleGold="Every Sign Type"
          subtitle="From ground-level monuments to rolling vehicle wraps, our shop handles the full spectrum of custom signage — with golf course signage as our crown specialty."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ id, title, description }, i) => {
            const Icon = iconMap[id] ?? Store
            const isGolf = id === 'golf'

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  href="/services"
                  className={`group relative flex flex-col gap-5 p-7 rounded-sm border transition-all duration-300 h-full ${
                    isGolf
                      ? 'border-gold-core/40 bg-gradient-to-br from-rich-black to-[#1a1700] hover:border-gold-core'
                      : 'border-charcoal bg-rich-black hover:border-gold-core/60 hover:bg-[#1a1a1a]'
                  } hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]`}
                  aria-label={`Learn more about ${title}`}
                >
                  {isGolf && (
                    <div className="absolute top-4 right-4 font-inter text-[9px] tracking-[0.2em] uppercase text-gold-core border border-gold-core/40 px-2 py-0.5">
                      Specialty
                    </div>
                  )}

                  <div
                    className={`w-10 h-10 flex items-center justify-center border rounded-sm transition-colors ${
                      isGolf
                        ? 'border-gold-core/50 bg-gold-core/10'
                        : 'border-charcoal group-hover:border-gold-core/40'
                    }`}
                  >
                    <Icon
                      size={18}
                      className={isGolf ? 'text-gold-core' : 'text-cream/40 group-hover:text-gold-core transition-colors'}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-cinzel text-sm tracking-[0.08em] uppercase text-cream mb-2.5">
                      {title}
                    </h3>
                    <p className="text-cream/45 text-sm font-inter leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-gold-core/60 group-hover:text-gold-core transition-colors">
                    <span className="font-inter text-[11px] tracking-[0.15em] uppercase">
                      Learn More
                    </span>
                    <ArrowRight size={13} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
