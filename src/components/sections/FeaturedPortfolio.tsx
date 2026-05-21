'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { PORTFOLIO_ITEMS } from '@/lib/constants'

const featured = PORTFOLIO_ITEMS.slice(0, 6)

export default function FeaturedPortfolio() {
  return (
    <section className="bg-rich-black section-pad">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Our Work"
          title="Masterpieces"
          titleGold="In the Field"
          subtitle="Every project is a reflection of our commitment to quality. Here is a selection of work we are proud to call our own."
          className="mb-16"
        />

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((item, i) => {
            const tall = i === 0 || i === 4
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.075 }}
                className={tall && i === 0 ? 'sm:row-span-2' : ''}
              >
                <Link
                  href="/portfolio"
                  className="group relative block overflow-hidden bg-charcoal border border-charcoal hover:border-gold-core/50 transition-colors duration-300"
                  style={{ height: tall && i === 0 ? '100%' : '280px', minHeight: '240px' }}
                  aria-label={`View ${item.title} project`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-black/90 via-ink-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="font-inter text-[9px] tracking-[0.2em] uppercase text-gold-core mb-1.5">
                      {item.category}
                    </div>
                    <div className="font-cinzel text-sm tracking-[0.06em] uppercase text-cream">
                      {item.title}
                    </div>
                    {item.description && (
                      <p className="font-inter text-xs text-cream/50 mt-1.5 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Corner icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-gold-core/20 backdrop-blur-sm flex items-center justify-center border border-gold-core/40">
                      <ExternalLink size={13} className="text-gold-core" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Button href="/portfolio" variant="secondary" size="lg">
            View Full Portfolio <ArrowRight size={14} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
