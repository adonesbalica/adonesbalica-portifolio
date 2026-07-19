import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14"
    >
      {/* faint accent glow behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <Badge variant="outline" className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-primary border-primary/30">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
        {t('hero.badge')}
      </Badge>

      <h1 className="font-display leading-[0.9] tracking-tight">
        <span className="block text-[12vw] text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem]">
          Adones
        </span>
        <span className="text-stroke block text-[12vw] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
          Balica
        </span>
      </h1>

      <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        <span aria-hidden="true">&gt;_</span> {t('hero.role')}
      </p>

      <p className="mt-4 max-w-md text-balance text-[13px] leading-relaxed text-muted-foreground">
        {t('hero.intro')}
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button
          variant="default"
          size="sm"
          className="font-mono text-xs font-semibold uppercase tracking-[0.15em]"
          render={<a href="#projects" />}
        >
          {t('hero.viewProjects')} <span aria-hidden="true">↗</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="font-mono text-xs font-semibold uppercase tracking-[0.15em]"
          render={<a href="#contact" />}
        >
          {t('hero.contactMe')}
        </Button>
      </div>
    </section>
  )
}
