import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en'
import pt from './locales/pt'

const STORAGE_KEY = 'portfolio-locale'

const getInitialLocale = (): 'en' | 'pt' => {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'pt') return stored
  return 'en'
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  lng: getInitialLocale(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export const setStoredLocale = (locale: 'en' | 'pt') => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }
}

export default i18n
