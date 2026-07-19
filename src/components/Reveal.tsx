import { type ReactNode } from 'react'
import { useReveal } from '~/hooks/useReveal'
import { cn } from '~/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Stagger delay in ms before the reveal transition starts. */
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article' | 'header'
}

/**
 * Fades + slides its children up into view the first time they enter the
 * viewport. Falls back to visible when motion is reduced.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <Tag
      // @ts-expect-error -- ref typing across polymorphic element tags
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out motion-reduce:transition-none',
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
