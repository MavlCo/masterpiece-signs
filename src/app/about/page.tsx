import type { Metadata } from 'next'
import Image from 'next/image'
import {
  MapPin,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import Button from '@/components/ui/Button'
import CTABand from '@/components/sections/CTABand'
import { SITE } from '@/lib/constants'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us | Our Story',
  description:
    'Family-owned since 1988. Learn about Adam Boutwell, the Masterpiece Signs & Graphics team, and why businesses across Ohio, Michigan & Indiana trust us.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-black pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/77294123_2402235533236725_6924721229551108096_n.jpg"
            alt="Masterpiece Signs & Graphics branded vehicle at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-8"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-black/80 to-ink-black" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <p className="font-inter text-[11px] tracking-[0.3em] uppercase text-gold-core mb-6">
            Our Story
          </p>
          <OrnamentalDivider className="max-w-48 mx-auto mb-8" compact />
          <h1
            className="font-cinzel font-black uppercase tracking-[0.05em] text-cream leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            Building{' '}
            <span className="gold-gradient-text">Masterpieces</span>
            <br />
            Since 1988
          </h1>
          <p className="font-cormorant italic text-silver/70 text-xl max-w-2xl mx-auto leading-relaxed">
            A family business built on craftsmanship, community, and the quiet confidence
            that comes from doing things right for over three decades.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-rich-black section-pad">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="font-inter text-[11px] tracking-[0.25em] uppercase text-gold-core mb-5">
                The Masterpiece Story
              </p>
              <OrnamentalDivider className="max-w-36 mb-6" compact />
              <h2 className="font-cinzel font-bold text-cream uppercase tracking-[0.04em] text-3xl sm:text-4xl leading-tight mb-6">
                Three Decades of
                <br />
                <span className="gold-gradient-text">Trusted Craft</span>
              </h2>
              <div className="space-y-4 text-cream/55 font-inter text-base leading-relaxed">
                <p>
                  Masterpiece Signs & Graphics was founded on October 1, 1988, in the village
                  of Bluffton, Ohio, by Adam Boutwell — a craftsman with a clear philosophy:{' '}
                  <em className="text-gold-core font-cormorant italic text-lg">
                    "Don't just buy a sign, buy a Masterpiece."
                  </em>
                </p>
                <p>
                  What began as a small local sign shop has grown into a well-established,
                  multi-state operation with a loyal customer base across Ohio, Michigan,
                  and Indiana. A+ rated by the Better Business Bureau.
                </p>
                <p>
                  The secret? Treating every client as an individual and every project as
                  a personal statement. We are small enough to give you our full attention,
                  but equipped with the technology and talent of a large production house.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/404955982_875359584251112_7759454148356413512_n.jpg"
                  alt="Masterpiece Signs & Graphics — our shop and work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(212,175,55,0.25)' }}
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-ink-black border border-gold-core/35 p-5 shadow-2xl">
                <div className="font-cinzel font-black text-3xl gold-gradient-text leading-none">
                  {new Date().getFullYear() - SITE.founded}+
                </div>
                <div className="font-inter text-[10px] tracking-[0.2em] uppercase text-cream/35 mt-1">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-warm-white section-pad">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Values"
            title="What Drives"
            titleGold="Every Project"
            subtitle="These are not corporate bullet points. They are the principles that have guided this family business for over 35 years."
            light
            className="mb-14"
          />

          <AboutClient />
        </div>
      </section>

      {/* Team */}
      <section className="bg-ink-black section-pad">
        <div className="container-custom">
          <SectionHeader
            eyebrow="The Team"
            title="The People Behind"
            titleGold="Your Masterpiece"
            subtitle="Small team. Big talent. Every project touches the hands of people who genuinely care about the outcome."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Adam Boutwell',
                role: 'Owner & Founder',
                bio: 'The craftsman behind the philosophy. Adam has guided Masterpiece Signs since 1988 with an unwavering commitment to quality and personal service.',
                image: '/images/adam.jpg',
              },
              {
                name: 'Jason',
                role: 'Installation & Field Lead',
                bio: 'Described by customers as "one of the friendliest guys you\'ll ever meet." Jason leads field installation with care and precision.',
                image: '/images/480035035_1157451379375263_6007914464376267083_n.jpg',
              },
              {
                name: 'Design Team',
                role: 'Graphic Design & Production',
                bio: 'A skilled team of graphic designers who explore every material and concept to produce signs that truly represent your brand.',
                image: '/images/team.jpg',
              },
            ].map(({ name, role, bio, image }) => (
              <div
                key={name}
                className="group bg-rich-black border border-charcoal hover:border-gold-core/40 transition-colors duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="font-cinzel text-sm tracking-[0.08em] uppercase text-cream mb-1">
                    {name}
                  </div>
                  <div className="font-inter text-[11px] tracking-[0.15em] uppercase text-gold-core mb-3">
                    {role}
                  </div>
                  <p className="text-cream/45 text-sm font-inter leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-rich-black section-pad">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <SectionHeader
              eyebrow="Where We Serve"
              title="Tri-State"
              titleGold="Coverage"
              subtitle="Our loyal customer base spans across Ohio, Michigan, and Indiana — built one masterpiece at a time."
              centered={false}
              className="max-w-xl"
            />

            <div className="grid grid-cols-3 gap-4">
              {SITE.statesServed.map((state) => (
                <div
                  key={state}
                  className="flex flex-col items-center gap-3 p-6 bg-ink-black border border-charcoal text-center"
                >
                  <MapPin size={20} className="text-gold-core" />
                  <span className="font-cinzel text-xs tracking-[0.12em] uppercase text-cream">
                    {state}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
