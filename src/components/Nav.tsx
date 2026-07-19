import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { MobileMenu } from '~/components/MobileMenu'
import { LanguageToggle } from '~/components/LanguageToggle'
import { useActiveSection } from '~/hooks/useActiveSection'
import { useTranslation } from 'react-i18next'
import { cn } from '~/lib/utils'

const LINKS = [
  { href: '#projects', key: 'nav.work' },
  { href: '#about', key: 'nav.about' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#contact', key: 'nav.contact' },
] as const

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const active = useActiveSection(
    LINKS.map((l) => l.href.replace('#', '')),
  )
  const { t } = useTranslation()

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="font-display text-base tracking-tight text-foreground transition-opacity hover:opacity-70"
          >
            AB
          </a>

          <nav className="hidden items-center gap-6 md:flex md:gap-8">
            {LINKS.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative font-mono text-xs uppercase tracking-[0.2em] transition-colors',
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {t(link.key)}
                  <span
                    className={cn(
                      'absolute -bottom-1.5 left-0 h-px bg-primary transition-all duration-300',
                      isActive ? 'w-full' : 'w-0',
                    )}
                  />
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle className="hidden md:grid" />

            <Button
              variant="default"
              size="sm"
              className="hidden font-mono text-xs font-semibold uppercase tracking-[0.15em] md:inline-flex"
              render={<a href="#contact" />}
            >
              {t('nav.hire')} <span aria-hidden="true">↗</span>
            </Button>

            <LanguageToggle className="md:hidden" />

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid size-9 place-items-center rounded-lg border border-border text-foreground transition-colors hover:border-primary hover:text-primary md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent">
          <div
            className="h-full bg-primary transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
