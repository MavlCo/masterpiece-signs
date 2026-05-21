'use client'

import { motion } from 'framer-motion'
import OrnamentalDivider from './OrnamentalDivider'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleGold?: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  titleGold,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-inter text-[11px] tracking-[0.25em] uppercase text-gold-core mb-5"
        >
          {eyebrow}
        </motion.p>
      )}

      {centered && <OrnamentalDivider className="max-w-48 mx-auto mb-6" compact />}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={cn(
          'font-cinzel font-bold uppercase tracking-[0.04em] leading-tight',
          light ? 'text-ink-black' : 'text-cream',
          'text-3xl sm:text-4xl lg:text-5xl'
        )}
      >
        {titleGold ? (
          <>
            <span className="gold-gradient-text">{titleGold}</span>
            {title && <span className="block">{title}</span>}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={cn(
            'font-inter leading-relaxed mt-5 max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-ink-black/60' : 'text-cream/60',
            'text-base sm:text-lg'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
