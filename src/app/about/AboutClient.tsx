'use client'

import { motion } from 'framer-motion'
import { Heart, ShieldCheck, Repeat, Lightbulb } from 'lucide-react'

const values = [
  {
    Icon: Heart,
    title: 'Family First',
    text: 'We run our shop the way we run our family — with integrity, care, and the knowledge that our name is on everything we do.',
  },
  {
    Icon: ShieldCheck,
    title: 'Quality Guaranteed',
    text: 'Our proofing and quality management is second to none. We deliver it right the first time, every time — that is our promise.',
  },
  {
    Icon: Repeat,
    title: 'Lasting Relationships',
    text: 'A high percentage of our business comes from repeat clients and their referrals. That loyalty is the measure of our work.',
  },
  {
    Icon: Lightbulb,
    title: 'Continuous Growth',
    text: 'We invest in training and development so our team always brings the latest product knowledge and techniques to your project.',
  },
]

export default function AboutClient() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map(({ Icon, title, text }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="flex flex-col gap-4 p-6 bg-ink-black border border-charcoal"
        >
          <div className="w-10 h-10 flex items-center justify-center border border-gold-core/30 bg-gold-core/5">
            <Icon size={18} className="text-gold-core" aria-hidden="true" />
          </div>
          <h3 className="font-cinzel text-xs tracking-[0.12em] uppercase text-cream">
            {title}
          </h3>
          <p className="text-cream/40 text-sm font-inter leading-relaxed">{text}</p>
        </motion.div>
      ))}
    </div>
  )
}
