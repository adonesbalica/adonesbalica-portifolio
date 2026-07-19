import { Badge } from '~/components/ui/badge'
import type { Project } from '~/lib/github'

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl border-t border-border px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-primary">02</span>
          <span className="font-display text-2xl uppercase tracking-tight sm:text-3xl">
            Projects
          </span>
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          Live from GitHub
        </span>
      </div>

      {projects.length === 0 ? (
        <p className="border-t border-muted py-8 font-mono text-sm text-muted-foreground">
          Couldn&apos;t load repos from GitHub right now — check back shortly,
          or view the profile directly on{' '}
          <a
            href="https://github.com/adonesbalica"
            className="text-primary underline underline-offset-4"
          >
            github.com/adonesbalica
          </a>
          .
        </p>
      ) : (
        <ol className="border-t border-muted">
          {projects.map((project, i) => (
            <li key={project.id} className="border-b border-muted">
              <a
                href={project.homepage ?? project.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-1 py-5 transition-colors hover:bg-card sm:flex-row sm:items-center sm:gap-4 sm:py-6"
              >
                <span className="font-mono text-xs text-muted-foreground sm:w-8">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="flex flex-1 flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="font-display text-lg uppercase tracking-tight text-foreground group-hover:text-primary sm:text-xl">
                    {project.displayName}
                  </span>
                  <Badge variant="secondary" className="w-fit font-mono text-[10px] uppercase tracking-[0.15em]">
                    {project.category}
                  </Badge>
                </span>

                <span className="mt-2 line-clamp-1 text-xs text-muted-foreground sm:hidden">
                  {project.description}
                </span>

                <span className="flex shrink-0 items-center gap-4 pt-1 sm:pt-0">
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.year}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                  >
                    ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
