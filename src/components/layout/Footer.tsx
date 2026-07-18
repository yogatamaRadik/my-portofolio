export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-10 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:justify-between">
        <p>&copy; {currentYear} Yogatama Radik - Indonesia</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/yogatamaRadik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/itsyogatamaradik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}