import { createFileRoute } from '@tanstack/react-router'
import { getFeaturedProjects } from '~/lib/github'
import { Nav } from '~/components/Nav'
import { Hero } from '~/components/Hero'
import { Projects } from '~/components/Projects'
import { About } from '~/components/About'
import { Skills } from '~/components/Skills'
import { Contact } from '~/components/Contact'
import { Footer } from '~/components/Footer'

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
        <Projects projects={projects} />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
