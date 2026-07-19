import { Button } from '~/components/ui/button'

const LINKS = [
  { href: '#projects', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-sm tracking-tight text-foreground"
        >
          AB
        </a>

        <nav className="flex items-center gap-6 md:gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          variant="default"
          size="sm"
          className="hidden font-mono text-xs font-semibold uppercase tracking-[0.15em] md:inline-flex"
          render={<a href="#contact" />}
        >
          Hire me <span aria-hidden="true">↗</span>
        </Button>
      </div>
    </header>
  )
}
