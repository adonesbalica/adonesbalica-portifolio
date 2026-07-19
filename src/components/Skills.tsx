import { Badge } from '~/components/ui/badge'
import { useReveal } from '~/hooks/useReveal'
import { useTranslation } from 'react-i18next'
import { cn } from '~/lib/utils'

const PROFICIENCY = [
  { value: 95, key: 'skills.proficiency.react' },
  { value: 92, key: 'skills.proficiency.ts' },
  { value: 88, key: 'skills.proficiency.nest' },
  { value: 85, key: 'skills.proficiency.db' },
  { value: 80, key: 'skills.proficiency.rn' },
  { value: 94, key: 'skills.proficiency.css' },
]

const STACK = [
  {
    labelKey: 'skills.groups.frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'React Native'],
  },
  {
    labelKey: 'skills.groups.backend',
    items: ['Node.js', 'NestJS', 'REST API', 'GraphQL'],
  },
  {
    labelKey: 'skills.groups.database',
    items: ['PostgreSQL', 'Prisma ORM', 'SQL'],
  },
  {
    labelKey: 'skills.groups.tooling',
    items: ['Git', 'GitHub', 'Vercel', 'Docker', 'Jest'],
  },
]

function ProficiencyBar({
  skill,
  animate,
}: {
  skill: { value: number; key: string }
  animate: boolean
}) {
  const { t } = useTranslation()
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between font-mono text-xs">
        <span className="text-foreground">{t(skill.key)}</span>
        <span className="text-primary">{skill.value}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            'h-1 rounded-full bg-primary transition-[width] duration-1000 ease-out motion-reduce:transition-none',
          )}
          style={{ width: animate ? `${skill.value}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const { t } = useTranslation()
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl border-t border-border px-5 py-16 sm:px-8 sm:py-24"
    >
      <h2 className="mb-10 flex items-baseline gap-3">
        <span className="font-mono text-xs text-primary">04</span>
        <span className="font-display text-2xl uppercase tracking-tight sm:text-3xl">
          {t('skills.title')}
        </span>
      </h2>

      <div ref={ref} className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
        {PROFICIENCY.map((skill) => (
          <ProficiencyBar key={skill.key} skill={skill} animate={visible} />
        ))}
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((group) => (
          <div key={group.labelKey}>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#5c5c58]">
              {t(group.labelKey)}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge
                    variant="secondary"
                    className="font-mono text-xs transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
