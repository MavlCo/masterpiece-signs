import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react'
import { SITE, NAV_LINKS, SERVICES } from '@/lib/constants'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-black" role="contentinfo">
      {/* Gold top accent */}
      <div className="gold-gradient-bg h-px opacity-50" />

      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="Masterpiece Signs & Graphics home">
              <Image
                src="/logos/logo.png"
                alt="Masterpiece Signs & Graphics, Inc."
                width={160}
                height={107}
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="text-cream/50 text-sm font-inter leading-relaxed mb-5">
              Premium custom signage crafted with precision and passion. Family-owned,
              serving Ohio, Michigan & Indiana since 1988.
            </p>

            <OrnamentalDivider compact className="max-w-36 mb-5" />

            <blockquote className="font-cormorant italic text-gold-core text-lg leading-snug">
              "{SITE.tagline}"
            </blockquote>
            <p className="text-cream/30 text-xs font-inter mt-1.5">— {SITE.owner}, Owner</p>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-7">
              {[
                { href: SITE.social.facebook, Icon: Facebook, label: 'Facebook' },
                { href: SITE.social.instagram, Icon: Instagram, label: 'Instagram' },
                { href: SITE.social.twitter, Icon: Twitter, label: 'Twitter / X' },
                { href: SITE.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-cream/30 hover:text-gold-core transition-colors duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold-core mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-cream/50 text-sm font-inter hover:text-gold-core transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold-core mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map(({ id, title }) => (
                <li key={id}>
                  <Link
                    href="/services"
                    className="flex items-center gap-2 text-cream/50 text-sm font-inter hover:text-gold-core transition-colors duration-200"
                  >
                    <svg width="6" height="6" viewBox="0 0 8 8" fill="#D4AF37" aria-hidden="true">
                      <path d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3L4 0Z" />
                    </svg>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold-core mb-5">
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-gold-core mt-0.5 shrink-0" />
                <div className="text-cream/50 text-sm font-inter leading-relaxed">
                  {SITE.address.street}
                  <br />
                  {SITE.address.poBox}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold-core shrink-0" />
                <a
                  href={SITE.phone.href}
                  className="text-cream/50 text-sm font-inter hover:text-gold-core transition-colors"
                >
                  {SITE.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gold-core shrink-0" />
                <a
                  href={SITE.email.href}
                  className="text-cream/50 text-sm font-inter hover:text-gold-core transition-colors break-all"
                >
                  {SITE.email.display}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={14} className="text-gold-core shrink-0 mt-0.5" />
                <div className="text-cream/50 text-sm font-inter">
                  <div>Mon – Fri</div>
                  <div className="text-cream/70">8:00 AM – 4:30 PM</div>
                  <div className="text-cream/30 text-xs mt-1">Sat & Sun: Closed</div>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/25 text-xs font-inter">
            © {year} Masterpiece Signs & Graphics, Inc. All Rights Reserved.
          </p>
          <p className="text-cream/25 text-xs font-inter">
            {SITE.address.city}, {SITE.address.state} · A+ BBB Rated
          </p>
        </div>
      </div>
    </footer>
  )
}
