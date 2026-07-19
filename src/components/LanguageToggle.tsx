import { Globe } from 'lucide-react'
import { Menu } from '@base-ui/react/menu'
import { useTranslation } from 'react-i18next'
import { cn } from '~/lib/utils'

const LOCALES = [
  { value: 'en', labelKey: 'language.en' },
  { value: 'pt', labelKey: 'language.pt' },
] as const

export function LanguageToggle({ className }: { className?: string }) {
  const { t, i18n } = useTranslation()
  const current = i18n.language === 'pt' ? 'pt' : 'en'

  return (
    <Menu.Root>
      <Menu.Trigger
        aria-label={t('language.label')}
        className={cn(
          'grid size-9 place-items-center rounded-lg border border-border text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          className,
        )}
      >
        <Globe className="size-5" />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner
          side="bottom"
          align="end"
          sideOffset={8}
          className="z-[60]"
        >
          <Menu.Popup className="min-w-36 rounded-lg border border-border bg-card p-1 text-foreground shadow-xl shadow-black/40">
            <Menu.RadioGroup
              value={current}
              onValueChange={(value) => i18n.changeLanguage(value as 'en' | 'pt')}
            >
              {LOCALES.map((loc) => (
                <Menu.RadioItem
                  key={loc.value}
                  value={loc.value}
                  className={cn(
                    'flex cursor-pointer items-center justify-between rounded-md px-3 py-2 font-mono text-xs uppercase tracking-[0.15em] outline-none transition-colors',
                    'data-[highlighted]:bg-muted data-[checked]:text-primary',
                  )}
                >
                  {t(loc.labelKey)}
                  {current === loc.value && (
                    <span aria-hidden="true" className="text-primary">
                      ✓
                    </span>
                  )}
                </Menu.RadioItem>
              ))}
            </Menu.RadioGroup>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}
