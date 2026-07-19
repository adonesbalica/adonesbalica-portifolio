# Adones Balica — Portfolio

Mobile-first personal portfolio built with **TanStack Start**, **TanStack Router**, **Tailwind CSS v4**, and **React 19**. The Projects section pulls live data from the GitHub REST API (no auth token needed for public repos).

Design matches the provided style guide: near-black background, acid-lime accent (`#d7ff3f`), an Archivo Black display face for headlines with an outlined "ghost" treatment, JetBrains Mono for labels/eyebrows, and Inter for body copy.

## Requirements

- Node.js **>= 22.12**
- npm (or pnpm/yarn/bun if you prefer — just swap the commands below)

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  router.tsx              # router instance
  routes/
    __root.tsx             # document shell, fonts, meta
    index.tsx               # home page — loads GitHub projects, renders sections
  components/
    Nav.tsx                 # sticky header + mobile menu
    Hero.tsx                 # name / tagline / CTAs
    Projects.tsx             # numbered project list (fed by GitHub)
    About.tsx                 # bio, stats, experience timeline
    Skills.tsx                 # proficiency bars + tag grid
    Contact.tsx                 # closing CTA + contact form
    Footer.tsx
  lib/
    github.ts                # server function that fetches & curates repos
  styles/
    app.css                   # Tailwind v4 theme tokens (colors, fonts)
```

## Wiring your GitHub projects

`src/lib/github.ts` fetches all public, non-fork repos for **adonesbalica** and picks 5 by default (highest stars, then most recently pushed).

When you're ready to hand-pick which projects show (and in what order), just fill in `FEATURED_REPOS` at the top of that file with the exact repo names:

```ts
export const FEATURED_REPOS: string[] = [
  'fintrack-platform',
  'trailsync-mobile',
  'devboard',
]
```

Leave it empty to keep the automatic top-5 behavior. Change `PROJECT_COUNT` if you want a different number.

Each project also gets an auto-guessed category ("Full-Stack Web App", "Mobile App", "Backend / API", "Developer Tool") based on its language/topics/name — override `categorize()` in the same file if you want more control, or better yet, add [GitHub topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) to your repos (e.g. `react-native`, `api`, `cli`) so it picks up automatically.

## Editable content

- **Hero copy**: `src/components/Hero.tsx`
- **Bio / experience / stats**: `src/components/About.tsx`
- **Skill bars / stack tags**: `src/components/Skills.tsx`
- **Email / social links**: `src/components/Contact.tsx`, `src/components/About.tsx`, `src/components/Footer.tsx` — search for `adones@example.com`, `github.com/adonesbalica`, `linkedin.com/in/adonesb` and swap in your real links.
- **Colors / fonts**: `src/styles/app.css` under the `@theme` block.

## Contact form

The form currently opens the visitor's email client via a `mailto:` link (no backend required). If you'd rather send it through a real backend, swap the `handleSubmit` in `Contact.tsx` for a TanStack `createServerFn` that emails you or posts to a service like Resend/Formspree — happy to wire that up if you want it.

## Build for production

```bash
npm run build
npm run start
```

## Notes

- Built mobile-first: base styles target small screens, with `sm:`/`md:`/`lg:` breakpoints layering in the two/three-column layouts, sticky nav, and larger type for wider viewports.
- This was scaffolded by hand (file-by-file) rather than via `create-tsrouter-app`, since it was generated in a sandboxed environment without package-registry access — so **run `npm install` and give `npm run dev` a try locally** before deploying; ping me with any errors and I'll fix them.
