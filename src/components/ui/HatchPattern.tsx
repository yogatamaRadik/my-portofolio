export function HatchPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-20 h-full w-full text-zinc-950/[.06] dark:text-zinc-50/[.07]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="hatch-pattern"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="16"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hatch-pattern)" />
    </svg>
  );
}