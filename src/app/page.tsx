import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ValueStatement from '@/components/sections/ValueStatement'
import ServicesOverview from '@/components/sections/ServicesOverview'
import FeaturedPortfolio from '@/components/sections/FeaturedPortfolio'
import ProcessStrip from '@/components/sections/ProcessStrip'
import WhyMasterpiece from '@/components/sections/WhyMasterpiece'
import Testimonials from '@/components/sections/Testimonials'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Masterpiece Signs & Graphics | Building Masterpieces Since 1988',
  description:
    "Premium custom signage in Bluffton, Ohio. Monument signs, storefront letters, vehicle wraps, golf course signage & more. Family-owned since 1988. A+ BBB. Serving OH, MI & IN.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStatement />
      <ServicesOverview />
      <FeaturedPortfolio />
      <ProcessStrip />
      <WhyMasterpiece />
      <Testimonials />
      <CTABand />
    </>
  )
}
