import { Badge } from '~/components/ui/badge'

const PROFICIENCY = [
  { label: 'React / Next.js', value: 95 },
  { label: 'TypeScript', value: 92 },
  { label: 'NestJS / Node.js', value: 88 },
  { label: 'PostgreSQL / Prisma', value: 85 },
  { label: 'React Native', value: 80 },
  { label: 'CSS / Tailwind', value: 94 },
]

const STACK = [
  {
    label: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'React Native'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'NestJS', 'REST API', 'GraphQL'],
  },
  {
    label: 'Database',
    items: ['PostgreSQL', 'Prisma ORM', 'SQL'],
  },
  {
    label: 'Tooling',
    items: ['Git', 'GitHub', 'Vercel', 'Docker', 'Jest'],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl border-t border-border px-5 py-16 sm:px-8 sm:py-24"
    >
      <h2 className="mb-10 flex items-baseline gap-3">
        <span className="font-mono text-xs text-primary">04</span>
        <span className="font-display text-2xl uppercase tracking-tight sm:text-3xl">
          Skills
        </span>
      </h2>

      <div className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
        {PROFICIENCY.map((skill) => (
          <div key={skill.label}>
            <div className="mb-2 flex items-baseline justify-between font-mono text-xs">
              <span className="text-foreground">{skill.label}</span>
              <span className="text-primary">{skill.value}%</span>
            </div>
            <div className="h-px w-full bg-muted">
              <div
                className="h-px bg-primary"
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((group) => (
          <div key={group.label}>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#5c5c58]">
              {group.label}
            </p>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge variant="secondary" className="font-mono text-xs">
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
