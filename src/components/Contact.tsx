import { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import { useTranslation } from 'react-i18next'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const { t } = useTranslation()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const message = String(form.get('message') ?? '')

    const subject = encodeURIComponent(`Project inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:adonesbalica@gmail.com?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl border-t border-border px-5 py-16 sm:px-8 sm:py-24"
    >
      <h2 className="mb-2 flex items-baseline gap-3">
        <span className="font-mono text-xs text-primary">05</span>
        <span className="font-display text-2xl uppercase tracking-tight sm:text-3xl">
          {t('contact.title')}
        </span>
      </h2>
      <h2 className="font-display leading-[0.95] tracking-tight">
        <span className="block text-[10vw] text-foreground sm:text-5xl md:text-6xl">
          {t('contact.headingA')}
        </span>
        <span className="text-stroke block text-[10vw] sm:text-5xl md:text-6xl">
          {t('contact.headingB')}
        </span>
      </h2>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground">
            {t('contact.intro')}
          </p>
          <a
            href="mailto:adonesbalica@gmail.com"
            className="mt-6 block font-display text-base text-primary"
          >
            adonesbalica@gmail.com
          </a>
          <p className="mt-2 font-mono text-xs text-[#5c5c58]">
            {t('contact.responds')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#5c5c58]">
                {t('contact.name')}
              </Label>
              <Input
                required
                name="name"
                type="text"
                placeholder={t('contact.namePlaceholder')}
              />
            </div>
            <div>
              <Label className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#5c5c58]">
                {t('contact.email')}
              </Label>
              <Input
                required
                name="email"
                type="email"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>
          </div>

          <div>
            <Label className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#5c5c58]">
              {t('contact.message')}
            </Label>
            <Textarea
              required
              name="message"
              rows={4}
              placeholder={t('contact.messagePlaceholder')}
            />
          </div>

          <Button
            type="submit"
            variant="default"
            size="sm"
            className="font-mono text-xs font-semibold uppercase tracking-[0.15em]"
          >
            {t('contact.send')} <span aria-hidden="true">↗</span>
          </Button>

          {status === 'sent' && (
            <p className="font-mono text-xs text-primary">
              {t('contact.sending')}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
