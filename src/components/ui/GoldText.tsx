import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GoldTextProps {
  children: ReactNode
  className?: string
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p'
}

export default function GoldText({ children, className, as: Tag = 'span' }: GoldTextProps) {
  return (
    <Tag className={cn('gold-gradient-text', className)}>
      {children}
    </Tag>
  )
}
