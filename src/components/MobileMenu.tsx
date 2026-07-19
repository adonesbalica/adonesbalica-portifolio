import { useEffect } from 'react'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

const LINKS = [
  { href: '#projects', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Lock body scroll + close on Escape while the menu is open.
  useEffect(() => {
    if (!open) return

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div
      className={cn(
        'fixed inset-0 z-40 md:hidden',
        open ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
      />

      {/* Slide-in panel */}
      <nav
        className={cn(
          'absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col gap-2 border-l border-border bg-card px-6 pt-20 pb-8 transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="border-b border-border py-4 font-display text-2xl uppercase tracking-tight text-foreground transition-colors hover:text-primary"
          >
            {link.label}
          </a>
        ))}

        <Button
          variant="default"
          size="sm"
          className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.15em]"
          render={<a href="#contact" onClick={onClose} />}
        >
          Hire me <span aria-hidden="true">↗</span>
        </Button>
      </nav>
    </div>
  )
}
