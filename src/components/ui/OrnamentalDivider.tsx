import { cn } from '@/lib/utils'

interface OrnamentalDividerProps {
  className?: string
  compact?: boolean
}

export default function OrnamentalDivider({
  className,
  compact = false,
}: OrnamentalDividerProps) {
  return (
    <div className={cn('flex items-center', compact ? 'gap-3' : 'gap-4', className)}>
      <div
        className="flex-1 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.6))',
        }}
      />
      <svg
        width={compact ? 12 : 16}
        height={compact ? 12 : 16}
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z"
          fill="#D4AF37"
        />
      </svg>
      <div
        className="flex-1 h-px"
        style={{
          background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.6))',
        }}
      />
    </div>
  )
}
