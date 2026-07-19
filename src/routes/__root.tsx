import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import appCss from '~/styles/app.css?url'
import { LanguageProvider } from '~/components/LanguageProvider'
import { useTranslation } from 'react-i18next'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Adones Balica — Software Engineer',
      },
      {
        name: 'description',
        content:
          'Adones Balica — Software engineer building fast, scalable web and mobile applications. React, Next.js, NestJS, PostgreSQL.',
      },
      { name: 'theme-color', content: '#0a0a0a' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap',
      },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <LanguageProvider>
      <HtmlShell />
    </LanguageProvider>
  )
}

function HtmlShell() {
  const { i18n } = useTranslation()
  return (
    <html lang={i18n.language === 'pt' ? 'pt' : 'en'}>
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
