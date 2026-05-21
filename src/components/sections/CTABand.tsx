'use client'

import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import { SITE } from '@/lib/constants'

export default function CTABand() {
  return (
    <section className="bg-ink-black section-pad relative overflow-hidden">
      {/* Gold glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px gold-gradient-bg opacity-40" aria-hidden="true" />
      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-gradient-bg opacity-40" aria-hidden="true" />

      <div className="container-custom text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-inter text-[11px] tracking-[0.3em] uppercase text-gold-core mb-6"
        >
          Ready to Begin?
        </motion.p>

        <OrnamentalDivider className="max-w-48 mx-auto mb-8" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-cinzel font-black uppercase tracking-[0.05em] leading-tight text-cream mb-5"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
        >
          Ready to Build Your{' '}
          <span className="gold-gradient-text">Masterpiece?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-cormorant italic text-silver/70 text-xl sm:text-2xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          "Don't just buy a sign — buy a Masterpiece."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10"
        >
          <Button href="/contact" size="lg">
            Request a Quote <ArrowRight size={15} />
          </Button>
          <a
            href={SITE.phone.href}
            className="flex items-center gap-2.5 font-cinzel text-xs tracking-[0.15em] uppercase text-cream/60 hover:text-gold-core transition-colors border border-cream/15 hover:border-gold-core/40 px-7 py-4"
            aria-label={`Call us at ${SITE.phone.display}`}
          >
            <Phone size={14} />
            {SITE.phone.display}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="font-inter text-cream/25 text-xs tracking-wide"
        >
          {SITE.hours} · {SITE.address.city}, {SITE.address.state}
        </motion.p>
      </div>
    </section>
  )
}
