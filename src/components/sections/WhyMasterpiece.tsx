'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Users, Repeat, Award } from 'lucide-react'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import Button from '@/components/ui/Button'

const pillars = [
  {
    Icon: ShieldCheck,
    title: 'Quality Guarantee',
    text: 'Our internal proofing is second to none. We deliver it right the first time — guaranteed.',
  },
  {
    Icon: Users,
    title: 'Family Values',
    text: 'We treat every client as an individual, not a job number. That has not changed in 35+ years.',
  },
  {
    Icon: Repeat,
    title: 'Repeat Customers',
    text: 'A high percentage of our business comes from clients who return — and from their referrals.',
  },
  {
    Icon: Award,
    title: 'Tri-State Reputation',
    text: 'Businesses across Ohio, Michigan, and Indiana trust us for signage that truly represents them.',
  },
]

export default function WhyMasterpiece() {
  return (
    <section className="bg-warm-white section-pad overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/480035035_1157451379375263_6007914464376267083_n.jpg"
                alt="Masterpiece Signs craftsman applying vehicle wrap"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Corner accent */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 0 1px rgba(212,175,55,0.3)',
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-5 -right-5 lg:-right-8 bg-ink-black border border-gold-core/40 p-5 shadow-2xl"
            >
              <div className="font-cinzel font-black text-3xl gold-gradient-text leading-none">
                35+
              </div>
              <div className="font-inter text-[10px] tracking-[0.2em] uppercase text-cream/40 mt-1">
                Years of Craft
              </div>
            </motion.div>
          </motion.div>

          {/* Copy side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-inter text-[11px] tracking-[0.25em] uppercase text-gold-core mb-5">
              Why Masterpiece
            </p>

            <OrnamentalDivider className="max-w-36 mb-6" compact />

            <h2 className="font-cinzel font-bold text-ink-black uppercase tracking-[0.04em] leading-tight text-3xl sm:text-4xl mb-6">
              The Standard You
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #F9E27E 0%, #D4AF37 45%, #A67C00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Deserve.
              </span>
            </h2>

            <p className="text-ink-black/55 font-inter text-base leading-relaxed mb-8">
              We are a proud, family-run business that believes in providing top-quality
              customer service and the finest signs in the industry. Every single project
              gets the same dedication — whether it's a single yard sign or a complete
              facility identity system.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-9">
              {pillars.map(({ Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon size={15} className="text-gold-core shrink-0" aria-hidden="true" />
                    <h3 className="font-cinzel text-[11px] tracking-[0.12em] uppercase text-ink-black">
                      {title}
                    </h3>
                  </div>
                  <p className="text-ink-black/50 text-sm font-inter leading-relaxed pl-[1.5625rem]">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <Button href="/about">Our Story</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
