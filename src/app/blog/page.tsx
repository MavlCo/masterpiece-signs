import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import SectionHeader from '@/components/ui/SectionHeader'
import CTABand from '@/components/sections/CTABand'
import { BLOG_POSTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog | Signage Insights',
  description:
    'Expert signage education from Masterpiece Signs & Graphics. Tips on sign placement, storefront regulations, signage ROI, and more.',
}

const [featured, ...rest] = BLOG_POSTS

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink-black pt-32 pb-16 text-center">
        <div className="container-custom">
          <p className="font-inter text-[11px] tracking-[0.3em] uppercase text-gold-core mb-6">
            Insights & Education
          </p>
          <OrnamentalDivider className="max-w-48 mx-auto mb-8" compact />
          <h1
            className="font-cinzel font-black uppercase tracking-[0.05em] leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            <span className="gold-gradient-text">Signage</span>
            <span className="text-cream"> Insights</span>
          </h1>
          <p className="font-cormorant italic text-silver/70 text-xl max-w-xl mx-auto leading-relaxed">
            "Good design is not about functionality or beauty. It is BOTH!"
          </p>
        </div>
      </section>

      <section className="bg-rich-black section-pad">
        <div className="container-custom">

          {/* Featured post */}
          <div className="mb-16">
            <p className="font-inter text-[11px] tracking-[0.25em] uppercase text-gold-core mb-6">
              Featured Article
            </p>

            <Link
              href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-0 bg-ink-black border border-charcoal hover:border-gold-core/40 transition-colors duration-300 overflow-hidden"
              aria-label={`Read ${featured.title}`}
            >
              <div className="relative aspect-video lg:aspect-auto min-h-64">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-black/30 lg:block hidden" />
              </div>

              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold-core border border-gold-core/30 px-2 py-0.5">
                    {featured.category}
                  </span>
                  {featured.readTime && (
                    <div className="flex items-center gap-1 text-cream/30 text-xs font-inter">
                      <Clock size={11} />
                      {featured.readTime}
                    </div>
                  )}
                </div>

                <h2 className="font-cinzel font-bold text-cream uppercase tracking-[0.04em] text-2xl sm:text-3xl leading-tight mb-4 group-hover:text-gold-core transition-colors">
                  {featured.title}
                </h2>
                <p className="text-cream/50 font-inter text-base leading-relaxed mb-6">
                  {featured.excerpt}
                </p>

                <div className="flex items-center gap-2 text-gold-core font-inter text-sm">
                  Read Article
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="mt-6 pt-6 border-t border-charcoal">
                  <span className="text-cream/25 text-xs font-inter">{featured.date}</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Articles grid */}
          <SectionHeader
            eyebrow="More Articles"
            title="From Our"
            titleGold="Knowledge Base"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-ink-black border border-charcoal hover:border-gold-core/35 transition-colors duration-300 overflow-hidden"
                aria-label={`Read ${post.title}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold-core">
                      {post.category}
                    </span>
                    {post.readTime && (
                      <div className="flex items-center gap-1 text-cream/25 text-[11px] font-inter">
                        <Clock size={10} />
                        {post.readTime}
                      </div>
                    )}
                  </div>

                  <h3 className="font-cinzel text-sm tracking-[0.06em] uppercase text-cream leading-snug mb-3 group-hover:text-gold-core transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-cream/40 text-sm font-inter leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-charcoal">
                    <span className="text-cream/25 text-xs font-inter">{post.date}</span>
                    <ArrowRight
                      size={14}
                      className="text-gold-core/50 group-hover:text-gold-core group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
