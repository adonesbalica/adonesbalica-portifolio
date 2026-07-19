import { Badge } from '~/components/ui/badge'

const STATS = [
  { value: '6+', label: 'Years exp.' },
  { value: '20+', label: 'Projects shipped' },
  { value: '3', label: 'Open source libs' },
]

const EXPERIENCE = [
  {
    role: 'Senior Frontend Engineer',
    org: 'Acme Corp',
    period: '2023 — Present',
    tags: ['Next.js', 'TypeScript', 'NestJS'],
  },
  {
    role: 'Fullstack Developer',
    org: 'Startup XYZ',
    period: '2021 — 2023',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    role: 'Junior Developer',
    org: 'Freelance',
    period: '2019 — 2021',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl border-t border-border px-5 py-16 sm:px-8 sm:py-24"
    >
      <h2 className="mb-10 flex items-baseline gap-3">
        <span className="font-mono text-xs text-primary">03</span>
        <span className="font-display text-2xl uppercase tracking-tight sm:text-3xl">
          About me
        </span>
      </h2>

      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="max-w-lg text-[13px] leading-relaxed text-muted-foreground">
            I&apos;m Adones Balica, a software engineer focused on building
            high-quality web and mobile products. I work across the full
            stack — crafting responsive frontends with React and Next.js,
            designing RESTful APIs with NestJS, and managing relational data
            with PostgreSQL and Prisma.
          </p>
          <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-muted-foreground">
            I care about clean code, great developer experience, and
            shipping things that actually work in production. Whether it&apos;s
            a design system, a backend service, or a React Native app, I
            bring the same discipline to every layer of the stack.
          </p>

          <div className="mt-10">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#5c5c58]">
              Experience
            </p>
            <ul className="border-t border-muted">
              {EXPERIENCE.map((job) => (
                <li
                  key={job.role}
                  className="flex flex-col gap-2 border-b border-muted py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-foreground">{job.role}</p>
                    <p className="text-xs text-muted-foreground">{job.org}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {job.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="font-mono text-[10px] uppercase tracking-wide"
                      >
                        {tag}
                      </Badge>
                    ))}
                    <span className="font-mono text-[11px] text-[#5c5c58]">
                      {job.period}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-6 lg:grid-cols-1 lg:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl text-primary sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-[#5c5c58]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <ul className="mt-10 space-y-3 border-t border-muted pt-6 font-mono text-xs">
            <li>
              <a
                href="https://github.com/adonesbalica"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                github.com/adonesbalica
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/adonesb"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                linkedin.com/in/adonesb
              </a>
            </li>
            <li>
              <a
                href="mailto:adones@example.com"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                adones@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
