export interface NavLink {
  href: string
  label: string
}

export interface Service {
  id: string
  title: string
  description: string
  materials?: string
  useCases?: string[]
  image?: string
}

export interface Testimonial {
  id: number
  name: string
  company?: string
  rating: number
  text: string
  date: string
  badge?: string
}

export interface PortfolioItem {
  id: number
  title: string
  category: PortfolioCategory
  client?: string
  image: string
  description?: string
}

export type PortfolioCategory =
  | 'All'
  | 'Monument'
  | 'Storefront'
  | 'Vehicle'
  | 'Banner'
  | 'Golf'
  | 'Hand-Painted'

export interface ProcessStep {
  number: string
  title: string
  description: string
  details?: string[]
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  slug: string
  readTime?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
}
