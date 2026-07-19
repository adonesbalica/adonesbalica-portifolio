import { createFileRoute } from '@tanstack/react-router'
import { getFeaturedProjects } from '~/lib/github'
import { Nav } from '~/components/Nav'
import { Hero } from '~/components/Hero'
import { Projects } from '~/components/Projects'
import { About } from '~/components/About'
import { Skills } from '~/components/Skills'
import { Contact } from '~/components/Contact'
import { Footer } from '~/components/Footer'
import { Reveal } from '~/components/Reveal'
import { BackToTop } from '~/components/BackToTop'

export const Route = createFileRoute('/')({
  loader: () => getFeaturedProjects(),
  component: Home,
})

function Home() {
  const projects = Route.useLoaderData()

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Nav />
      <main>
        <Hero />
        <Reveal>
          <Projects projects={projects} />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
