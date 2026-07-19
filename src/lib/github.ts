import { createServerFn } from '@tanstack/react-start'

// --- Configuration --------------------------------------------------------

const GITHUB_USERNAME = 'adonesbalica'

// How many projects to show while you haven't hand-picked any yet.
const PROJECT_COUNT = 5

// Once you know which repos you want featured, list their exact repo
// names here (case-sensitive), in the order you want them displayed.
// Example: ['fintrack-platform', 'trailsync-mobile', 'devboard']
// Leave empty to auto-select your top repos by stars / recent activity.
export const FEATURED_REPOS: string[] = []

// -----------------------------------------------------------------------

export type Project = {
  id: number
  name: string
  displayName: string
  description: string
  category: string
  url: string
  homepage: string | null
  year: string
  stars: number
  language: string | null
}

type GithubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  fork: boolean
  archived: boolean
  private: boolean
  pushed_at: string
  updated_at: string
  topics?: string[]
}

function toTitleCase(slug: string): string {
  return slug
    .replace(/[-_]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function categorize(repo: GithubRepo): string {
  const lang = (repo.language ?? '').toLowerCase()
  const name = repo.name.toLowerCase()
  const topics = (repo.topics ?? []).map((t) => t.toLowerCase())

  if (
    topics.includes('react-native') ||
    lang === 'kotlin' ||
    lang === 'swift' ||
    name.includes('mobile') ||
    name.includes('app-native')
  ) {
    return 'Mobile App'
  }
  if (
    topics.includes('api') ||
    topics.includes('backend') ||
    name.includes('api') ||
    name.includes('server') ||
    name.includes('backend')
  ) {
    return 'Backend / API'
  }
  if (
    topics.includes('cli') ||
    topics.includes('tool') ||
    name.includes('cli') ||
    name.includes('tool')
  ) {
    return 'Developer Tool'
  }
  if (lang === 'html' || lang === 'css') {
    return 'Web'
  }
  return 'Full-Stack Web App'
}

export const getFeaturedProjects = createServerFn({ method: 'GET' }).handler(
  async (): Promise<Project[]> => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner&sort=pushed`,
        {
          headers: {
            Accept: 'application/vnd.github+json',
            'User-Agent': 'adones-balica-portfolio',
          },
        },
      )

      if (!res.ok) {
        return []
      }

      const repos = (await res.json()) as GithubRepo[]
      const eligible = repos.filter((r) => !r.fork && !r.archived && !r.private)

      let selected: GithubRepo[]

      if (FEATURED_REPOS.length > 0) {
        selected = FEATURED_REPOS
          .map((name) => eligible.find((r) => r.name === name))
          .filter((r): r is GithubRepo => Boolean(r))
      } else {
        selected = [...eligible]
          .sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count
            }
            return (
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
            )
          })
          .slice(0, PROJECT_COUNT)
      }

      return selected.map((repo) => ({
        id: repo.id,
        name: repo.name,
        displayName: toTitleCase(repo.name),
        description: repo.description ?? 'No description yet.',
        category: categorize(repo),
        url: repo.html_url,
        homepage: repo.homepage || null,
        year: String(new Date(repo.pushed_at).getFullYear()),
        stars: repo.stargazers_count,
        language: repo.language,
      }))
    } catch {
      return []
    }
  },
)
