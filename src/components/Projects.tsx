import { Badge } from '~/components/ui/badge'
import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { Project } from '~/lib/github'
import { cn } from '~/lib/utils'

function formatStars(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`
  return String(n)
}

function ProjectRow({
  project,
  index,
  category,
}: {
  project: Project
  index: number
  category: string
}) {
  return (
    <li className="border-b border-muted">
      <a
        href={project.homepage ?? project.url}
        target="_blank"
        rel="noreferrer"
        className="group relative flex flex-col gap-1 py-5 transition-colors hover:bg-card sm:flex-row sm:items-center sm:gap-4 sm:py-6"
      >
        {/* accent edge that grows on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-0.5 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <span className="font-mono text-xs text-muted-foreground sm:w-8">
          {String(index + 1).padStart(2, '0')}
        </span>

        <span className="flex flex-1 flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-3">
          <span className="font-display text-lg uppercase tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-xl">
            {project.displayName}
          </span>
          <Badge
            variant="secondary"
            className="w-fit font-mono text-[10px] uppercase tracking-[0.15em]"
          >
            {category}
          </Badge>
        </span>

        <span className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:mt-0 sm:hidden">
          {project.description}
        </span>

        <span className="hidden flex-1 text-xs leading-relaxed text-muted-foreground sm:block sm:max-w-xs">
          {project.description}
        </span>

        <span className="flex shrink-0 items-center gap-4 pt-1 sm:pt-0">
          <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
            <Star className="size-3.5" aria-hidden="true" />
            {formatStars(project.stars)}
          </span>
          {project.language && (
            <span className="font-mono text-xs text-muted-foreground">
              {project.language}
            </span>
          )}
          <span className="font-mono text-xs text-muted-foreground">
            {project.year}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              'font-mono text-sm text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary',
            )}
          >
            ↗
          </span>
        </span>
      </a>
    </li>
  )
}

export function Projects({ projects }: { projects: Project[] }) {
  const { t } = useTranslation()

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl border-t border-border px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-primary">02</span>
          <span className="font-display text-2xl uppercase tracking-tight sm:text-3xl">
            {t('projects.title')}
          </span>
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          {t('projects.live')}
        </span>
      </div>

      {projects.length === 0 ? (
        <p className="border-t border-muted py-8 font-mono text-sm text-muted-foreground">
          {t('projects.error')}{' '}
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
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              category={t(`projects.categories.${project.category}`)}
            />
          ))}
        </ol>
      )}
    </section>
  )
}
