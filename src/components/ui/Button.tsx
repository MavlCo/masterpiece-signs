import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const sizeMap = {
  sm: 'px-5 py-2.5 text-[11px]',
  md: 'px-7 py-3.5 text-xs',
  lg: 'px-9 py-4 text-xs',
}

const variantMap = {
  primary:
    'gold-gradient-bg text-ink-black font-semibold gold-glow-hover hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'border border-gold-core text-gold-core hover:gold-gradient-bg hover:text-ink-black hover:-translate-y-0.5',
  ghost: 'text-cream/70 hover:text-gold-core border border-cream/20 hover:border-gold-core/50',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 font-cinzel tracking-[0.15em] uppercase transition-all duration-300',
    sizeMap[size],
    variantMap[variant],
    disabled && 'opacity-50 pointer-events-none',
    className
  )

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  )
}
