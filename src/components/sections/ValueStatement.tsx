'use client'

import { motion } from 'framer-motion'
import { Shield, Repeat, ThumbsUp, Map } from 'lucide-react'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'

const stats = [
  { value: '35+', label: 'Years in Business', Icon: Shield },
  { value: '3', label: 'States Served', Icon: Map },
  { value: '500+', label: 'Signs Installed', Icon: ThumbsUp },
  { value: 'A+', label: 'BBB Rated', Icon: Repeat },
]

export default function ValueStatement() {
  return (
    <section className="bg-warm-white section-pad">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-inter text-[11px] tracking-[0.25em] uppercase text-gold-core mb-5"
            >
              Who We Are
            </motion.p>

            <OrnamentalDivider className="max-w-40 mb-6" compact />

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-cinzel font-bold text-ink-black uppercase tracking-[0.04em] leading-tight text-3xl sm:text-4xl mb-6"
            >
              Crafted With Care.
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #F9E27E 0%, #D4AF37 45%, #A67C00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Delivered With Pride.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-ink-black/60 font-inter leading-relaxed text-base sm:text-lg mb-4"
            >
              Masterpiece Signs & Graphics is a full-service custom sign shop that consults,
              designs, manufactures, and installs signs of every kind. Family-run and fiercely
              proud of every piece that leaves our shop.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-ink-black/60 font-inter leading-relaxed text-base sm:text-lg"
            >
              Small enough to treat every client as an individual. Equipped with the
              technology and talent of a large shop. That combination is why businesses
              across Ohio, Michigan, and Indiana keep coming back.
            </motion.p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map(({ value, label, Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-ink-black rounded-sm p-6 flex flex-col gap-3 border border-charcoal card-hover"
              >
                <div className="w-9 h-9 flex items-center justify-center border border-gold-core/30 rounded-sm">
                  <Icon size={16} className="text-gold-core" aria-hidden="true" />
                </div>
                <div
                  className="font-cinzel font-black text-3xl sm:text-4xl gold-gradient-text leading-none"
                >
                  {value}
                </div>
                <div className="font-inter text-xs tracking-[0.1em] uppercase text-cream/40">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
