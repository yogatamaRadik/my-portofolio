type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold tracking-widest text-zinc-400 dark:text-zinc-600">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100">
        {title}
      </h2>
    </div>
  );
}