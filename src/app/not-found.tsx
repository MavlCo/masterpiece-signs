import Link from 'next/link'
import OrnamentalDivider from '@/components/ui/OrnamentalDivider'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="min-h-[100dvh] bg-ink-black flex items-center justify-center text-center px-6">
      <div className="max-w-lg">
        <div className="font-cinzel font-black text-[6rem] leading-none gold-gradient-text mb-4">
          404
        </div>
        <OrnamentalDivider className="max-w-36 mx-auto mb-8" compact />
        <h1 className="font-cinzel font-bold text-cream uppercase tracking-[0.06em] text-2xl mb-4">
          Page Not Found
        </h1>
        <p className="text-cream/45 font-inter text-base leading-relaxed mb-8">
          The page you are looking for has been moved or does not exist. Let us help you
          find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
