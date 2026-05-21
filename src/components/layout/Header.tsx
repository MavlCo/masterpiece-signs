'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, SITE } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-black/96 backdrop-blur-md border-b border-charcoal shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="Masterpiece Signs & Graphics home">
            <Image
              src="/logos/logo.png"
              alt="Masterpiece Signs & Graphics, Inc."
              width={140}
              height={93}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-inter text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                  pathname === href
                    ? 'text-gold-core'
                    : 'text-cream/60 hover:text-cream'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={SITE.phone.href}
              className="flex items-center gap-1.5 text-cream/50 hover:text-gold-core transition-colors text-xs font-inter"
              aria-label="Call us"
            >
              <Phone size={13} />
              <span className="tracking-wide">{SITE.phone.display}</span>
            </a>
            <Button href="/contact" size="sm">
              Request a Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-11 h-11 text-cream hover:text-gold-core transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink-black/98 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.055, duration: 0.35 }}
                >
                  <Link
                    href={href}
                    className={`font-cinzel text-2xl tracking-[0.12em] uppercase transition-colors duration-200 ${
                      pathname === href ? 'gold-gradient-text' : 'text-cream hover:text-gold-core'
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-col items-center gap-4 mt-10"
            >
              <Button href="/contact" size="lg">
                Request a Quote
              </Button>
              <a
                href={SITE.phone.href}
                className="flex items-center gap-2 text-cream/50 hover:text-gold-core transition-colors text-sm font-inter"
              >
                <Phone size={15} />
                {SITE.phone.display}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
