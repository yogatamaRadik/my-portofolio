export default function ExperienceLoading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-950 dark:border-zinc-700 dark:border-t-zinc-50" />
      <p className="text-sm text-zinc-500 dark:text-zinc-500">Loading...</p>
    </div>
  );
}