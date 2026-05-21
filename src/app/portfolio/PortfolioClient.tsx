'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '@/lib/constants'
import type { PortfolioCategory } from '@/types'

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('All')
  const [lightboxItem, setLightboxItem] = useState<(typeof PORTFOLIO_ITEMS)[0] | null>(null)

  const filtered =
    activeFilter === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter)

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {PORTFOLIO_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat as PortfolioCategory)}
            className={`font-inter text-[11px] tracking-[0.18em] uppercase px-4 py-2 border transition-all duration-200 ${
              activeFilter === cat
                ? 'gold-gradient-bg text-ink-black border-transparent'
                : 'border-charcoal text-cream/50 hover:border-gold-core/40 hover:text-cream'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
            >
              <button
                onClick={() => setLightboxItem(item)}
                className="group relative block w-full aspect-square overflow-hidden bg-charcoal border border-charcoal hover:border-gold-core/50 transition-colors duration-300 text-left"
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/90 via-ink-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <ZoomIn size={22} className="text-gold-core" aria-hidden="true" />
                  <div className="font-inter text-[9px] tracking-[0.2em] uppercase text-gold-core">
                    {item.category}
                  </div>
                  <div className="font-cinzel text-xs tracking-[0.08em] uppercase text-cream text-center leading-snug">
                    {item.title}
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-cream/30 font-inter py-20">
          No projects in this category yet.
        </p>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-ink-black/96 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full bg-rich-black border border-charcoal overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>

              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <div className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold-core mb-1.5">
                    {lightboxItem.category}
                    {lightboxItem.client && ` · ${lightboxItem.client}`}
                  </div>
                  <h3 className="font-cinzel text-base tracking-[0.06em] uppercase text-cream mb-2">
                    {lightboxItem.title}
                  </h3>
                  {lightboxItem.description && (
                    <p className="text-cream/45 text-sm font-inter leading-relaxed">
                      {lightboxItem.description}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="shrink-0 text-cream/40 hover:text-cream transition-colors p-1"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
