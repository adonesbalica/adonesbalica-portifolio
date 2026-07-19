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

const EDUCATION = [
  {
    course: "Bachelor's in Software Engineering",
    institution: 'Faculdade Anhanguera',
    period: '2026 — 2030',
    note: 'Started Feb 2026 · Expected graduation Jan 2030',
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

          <div className="mt-10">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#5c5c58]">
              Education
            </p>
            <ul className="border-t border-muted">
              {EDUCATION.map((edu) => (
                <li
                  key={edu.course}
                  className="flex flex-col gap-2 border-b border-muted py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-foreground">
                      {edu.course}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {edu.institution}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-[#5c5c58]">
                      {edu.note}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="outline"
                      className="font-mono text-[10px] uppercase tracking-wide"
                    >
                      {edu.period}
                    </Badge>
                    <Badge className="font-mono text-[10px] uppercase tracking-wide">
                      In progress
                    </Badge>
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
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                github.com/adonesbalica
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/adones-balica/"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                linkedin.com/in/adones-balica
              </a>
            </li>
            <li>
              <a
                href="mailto:adonesbalica@gmail.com"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                adonesbalica@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
