import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import Button from '@/components/ui/Button'
import CTABand from '@/components/sections/CTABand'
import { BLOG_POSTS } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-ink-black pt-32 pb-0 relative">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-inter text-[11px] tracking-[0.15em] uppercase text-cream/40 hover:text-gold-core transition-colors mb-8"
          >
            <ArrowLeft size={13} />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-gold-core border border-gold-core/30 px-2.5 py-1">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-cream/30 text-xs font-inter">
                <Calendar size={11} />
                {post.date}
              </div>
              {post.readTime && (
                <div className="flex items-center gap-1.5 text-cream/30 text-xs font-inter">
                  <Clock size={11} />
                  {post.readTime}
                </div>
              )}
            </div>

            <h1 className="font-cinzel font-bold text-cream uppercase tracking-[0.04em] text-3xl sm:text-4xl leading-tight mb-4">
              {post.title}
            </h1>

            <p className="font-cormorant italic text-silver/60 text-xl leading-relaxed mb-0">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="bg-ink-black">
        <div className="container-custom pt-10 pb-0">
          <div className="max-w-3xl relative aspect-video overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article body */}
      <section className="bg-rich-black section-pad">
        <div className="container-custom">
          <div className="max-w-2xl">
            <OrnamentalDivider className="mb-10" compact />
            <div className="prose prose-invert prose-cream font-inter text-cream/65 leading-[1.75] text-base sm:text-lg space-y-6">
              <p>
                Signage is one of the most powerful and underrated marketing assets a
                business can have. Studies show that nearly 76% of consumers have entered
                a store they had never visited before based solely on its signs. Your sign
                is working 24 hours a day, 7 days a week, and it never calls in sick.
              </p>
              <p>
                At Masterpiece Signs & Graphics, we have been helping businesses across
                Ohio, Michigan, and Indiana make powerful first impressions since 1988.
                In that time, we have seen exactly which sign types drive foot traffic,
                build brand recognition, and ultimately convert passersby into customers.
              </p>
              <p>
                The most effective signage strategies share a few key traits: they are
                consistent with the brand, highly visible from the target distance, and
                crafted from materials that communicate quality. A sign that peels,
                fades, or looks cheap sends a message — just not the one you intend.
              </p>
              <p>
                Whether you are investing in a permanent monument sign for your building
                entrance, a vehicle wrap for your fleet, or hand-painted window lettering
                for your storefront, the principle is the same: your signage is your
                brand in the physical world. Make it a Masterpiece.
              </p>
            </div>

            <OrnamentalDivider className="my-12" compact />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="font-cormorant italic text-gold-core text-lg">
                "Don't just buy a sign, buy a Masterpiece."
              </p>
              <Button href="/contact" size="sm">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* More posts */}
      <section className="bg-ink-black py-16">
        <div className="container-custom">
          <p className="font-inter text-[11px] tracking-[0.25em] uppercase text-gold-core mb-8">
            More Articles
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3).map((p) => (
              <Link
                key={p.id}
                href={`/blog/${p.slug}`}
                className="group border border-charcoal hover:border-gold-core/35 transition-colors p-5"
              >
                <div className="font-inter text-[10px] tracking-[0.18em] uppercase text-gold-core mb-2">
                  {p.category}
                </div>
                <h3 className="font-cinzel text-sm tracking-[0.05em] uppercase text-cream leading-snug group-hover:text-gold-core transition-colors">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
