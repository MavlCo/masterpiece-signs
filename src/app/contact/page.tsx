import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import { SITE } from '@/lib/constants'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Request a Quote',
  description:
    'Get in touch with Masterpiece Signs & Graphics. Request a free quote for custom signage in Ohio, Michigan & Indiana. Call (419) 358-0077 or fill out the form.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink-black pt-32 pb-16 text-center">
        <div className="container-custom">
          <p className="font-inter text-[11px] tracking-[0.3em] uppercase text-gold-core mb-6">
            Get In Touch
          </p>
          <OrnamentalDivider className="max-w-48 mx-auto mb-8" compact />
          <h1
            className="font-cinzel font-black uppercase tracking-[0.05em] leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            <span className="gold-gradient-text">Request</span>
            <span className="text-cream"> a Quote</span>
          </h1>
          <p className="font-cormorant italic text-silver/70 text-xl max-w-xl mx-auto leading-relaxed">
            Tell us about your project. We will respond within one business day.
          </p>
        </div>
      </section>

      {/* Two-column contact layout */}
      <section className="bg-rich-black section-pad">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-16">

            {/* Form */}
            <ContactForm />

            {/* Info sidebar */}
            <aside className="flex flex-col gap-8">
              {/* Contact details */}
              <div className="bg-ink-black border border-charcoal p-8">
                <h2 className="font-cinzel text-[11px] tracking-[0.25em] uppercase text-gold-core mb-6">
                  Contact Details
                </h2>

                <address className="not-italic space-y-5">
                  <div className="flex items-start gap-3.5">
                    <MapPin size={15} className="text-gold-core mt-0.5 shrink-0" />
                    <div>
                      <div className="font-inter text-[10px] tracking-[0.18em] uppercase text-cream/30 mb-1">
                        Address
                      </div>
                      <div className="text-cream/70 text-sm font-inter leading-relaxed">
                        {SITE.address.street}
                        <br />
                        {SITE.address.poBox}
                        <br />
                        {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone size={15} className="text-gold-core mt-0.5 shrink-0" />
                    <div>
                      <div className="font-inter text-[10px] tracking-[0.18em] uppercase text-cream/30 mb-1">
                        Phone
                      </div>
                      <a
                        href={SITE.phone.href}
                        className="text-cream/70 text-sm font-inter hover:text-gold-core transition-colors"
                      >
                        {SITE.phone.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail size={15} className="text-gold-core mt-0.5 shrink-0" />
                    <div>
                      <div className="font-inter text-[10px] tracking-[0.18em] uppercase text-cream/30 mb-1">
                        Email
                      </div>
                      <a
                        href={SITE.email.href}
                        className="text-cream/70 text-sm font-inter hover:text-gold-core transition-colors break-all"
                      >
                        {SITE.email.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock size={15} className="text-gold-core mt-0.5 shrink-0" />
                    <div>
                      <div className="font-inter text-[10px] tracking-[0.18em] uppercase text-cream/30 mb-1">
                        Hours
                      </div>
                      <div className="text-cream/70 text-sm font-inter">
                        Monday – Friday
                        <br />
                        8:00 AM – 4:30 PM
                      </div>
                      <div className="text-cream/30 text-xs font-inter mt-1">
                        Saturday & Sunday: Closed
                      </div>
                    </div>
                  </div>
                </address>
              </div>

              {/* Social links */}
              <div className="bg-ink-black border border-charcoal p-8">
                <h2 className="font-cinzel text-[11px] tracking-[0.25em] uppercase text-gold-core mb-6">
                  Follow Along
                </h2>
                <div className="flex items-center gap-5">
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
                      className="w-10 h-10 flex items-center justify-center border border-charcoal text-cream/40 hover:text-gold-core hover:border-gold-core/40 transition-all"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick trust */}
              <div className="bg-ink-black border border-gold-core/25 p-8">
                <blockquote className="font-cormorant italic text-gold-core text-xl leading-snug mb-4">
                  "{SITE.tagline}"
                </blockquote>
                <p className="text-cream/35 text-xs font-inter tracking-wide">
                  — {SITE.owner}, Owner & Founder
                </p>
                <OrnamentalDivider className="mt-6" compact />
                <div className="flex items-center justify-between mt-5">
                  <div className="text-center">
                    <div className="font-cinzel font-bold text-lg gold-gradient-text">{SITE.rating.score}★</div>
                    <div className="text-cream/30 text-[10px] font-inter">Google</div>
                  </div>
                  <div className="w-px h-8 bg-charcoal" />
                  <div className="text-center">
                    <div className="font-cinzel font-bold text-lg gold-gradient-text">{SITE.bbb}</div>
                    <div className="text-cream/30 text-[10px] font-inter">BBB</div>
                  </div>
                  <div className="w-px h-8 bg-charcoal" />
                  <div className="text-center">
                    <div className="font-cinzel font-bold text-lg gold-gradient-text">35+</div>
                    <div className="text-cream/30 text-[10px] font-inter">Years</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
