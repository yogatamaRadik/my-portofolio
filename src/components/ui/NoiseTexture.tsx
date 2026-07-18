export function NoiseTexture() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-20 h-full w-full opacity-[0.03] dark:opacity-[0.05]"
      aria-hidden="true"
    >
      <filter id="noise-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="2"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-filter)" />
    </svg>
  );
}