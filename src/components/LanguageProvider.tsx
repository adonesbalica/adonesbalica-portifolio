import { useEffect, type ReactNode } from 'react'
import '~/lib/i18n'
import { setStoredLocale } from '~/lib/i18n'
import { useTranslation } from 'react-i18next'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n: inst } = useTranslation()

  useEffect(() => {
    setStoredLocale(inst.language as 'en' | 'pt')
    document.documentElement.lang = inst.language
  }, [inst, inst.language])

  return <>{children}</>
}
