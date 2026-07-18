export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-10 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:justify-between">
        <p>&copy; {currentYear} Yogatama Radik - Indonesia</p>
      </div>
    </footer>
  );
}