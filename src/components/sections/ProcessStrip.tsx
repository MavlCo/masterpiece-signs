'use client'

import { motion } from 'framer-motion'
import { Palette, Hammer, CheckCircle } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import Button from '@/components/ui/Button'
import { PROCESS_STEPS } from '@/lib/constants'

const stepIcons = [Palette, Hammer, CheckCircle]

export default function ProcessStrip() {
  return (
    <section className="bg-ink-black section-pad">
      <div className="container-custom">
        <SectionHeader
          eyebrow="How It Works"
          title="Three Steps to"
          titleGold="Your Masterpiece"
          subtitle="Our process is built around your peace of mind — from first conversation to final installation, every step is deliberate and quality-controlled."
          className="mb-16"
        />

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
            style={{
              background:
                'linear-gradient(to right, transparent, rgba(212,175,55,0.4) 20%, rgba(212,175,55,0.4) 80%, transparent)',
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {PROCESS_STEPS.map(({ number, title, description, details }, i) => {
              const Icon = stepIcons[i]
              return (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                  {/* Step badge */}
                  <div className="relative mb-7">
                    <div
                      className="w-20 h-20 flex items-center justify-center border border-gold-core/30 rounded-sm"
                      style={{
                        background:
                          'radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, transparent 70%)',
                      }}
                    >
                      <Icon size={28} className="text-gold-core" aria-hidden="true" />
                    </div>
                    <div
                      className="absolute -top-2.5 -right-2.5 font-cinzel font-black text-[10px] tracking-[0.15em] gold-gradient-text bg-ink-black border border-gold-core/30 px-1.5 py-0.5"
                    >
                      {number}
                    </div>
                  </div>

                  <h3 className="font-cinzel text-xl tracking-[0.06em] uppercase text-cream mb-3">
                    {title}
                  </h3>

                  <p className="text-cream/50 font-inter text-sm leading-relaxed mb-5">
                    {description}
                  </p>

                  {details && (
                    <ul className="space-y-2 w-full">
                      {details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2.5">
                          <svg
                            width="6"
                            height="6"
                            viewBox="0 0 8 8"
                            fill="#D4AF37"
                            aria-hidden="true"
                          >
                            <path d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3L4 0Z" />
                          </svg>
                          <span className="text-cream/40 text-xs font-inter">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Vertical connector (mobile) */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <OrnamentalDivider className="lg:hidden w-full mt-8" compact />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Button href="/process" variant="secondary">
            Learn More About Our Process
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
