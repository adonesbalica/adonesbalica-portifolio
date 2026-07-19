export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#5c5c58]">
          © 2026 Adones Balica — Software Engineer
        </p>
        <div className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#5c5c58]">
          <a
            href="https://github.com/adonesbalica"
            className="transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/adonesb"
            className="transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="mailto:adones@example.com"
            className="transition-colors hover:text-primary"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
