import { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

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
          Contact
        </span>
      </h2>
      <h2 className="font-display leading-[0.95] tracking-tight">
        <span className="block text-[10vw] text-foreground sm:text-5xl md:text-6xl">
          Let&apos;s build
        </span>
        <span className="text-stroke block text-[10vw] sm:text-5xl md:text-6xl">
          something.
        </span>
      </h2>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground">
            Open to full-time roles and freelance projects. If you need a
            software engineer who can own both frontend and backend, reach
            out.
          </p>
          <a
            href="mailto:adonesbalica@gmail.com"
            className="mt-6 block font-display text-base text-primary"
          >
            adonesbalica@gmail.com
          </a>
          <p className="mt-2 font-mono text-xs text-[#5c5c58]">
            Usually responds within 24h
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#5c5c58]">
                Name
              </Label>
              <Input
                required
                name="name"
                type="text"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <Label className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#5c5c58]">
                Email
              </Label>
              <Input
                required
                name="email"
                type="email"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div>
            <Label className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#5c5c58]">
              Message
            </Label>
            <Textarea
              required
              name="message"
              rows={4}
              placeholder="Tell me about your project..."
            />
          </div>

          <Button
            type="submit"
            variant="default"
            size="sm"
            className="font-mono text-xs font-semibold uppercase tracking-[0.15em]"
          >
            Send it <span aria-hidden="true">↗</span>
          </Button>

          {status === 'sent' && (
            <p className="font-mono text-xs text-primary">
              Opening your email client…
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
