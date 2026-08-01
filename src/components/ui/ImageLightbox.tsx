"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ImageLightboxProps = {
  src: string;
  alt: string;
};

export function ImageLightbox({ src, alt }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="block w-full overflow-hidden rounded-xl border border-black/[.08] dark:border-white/[.145]"
      >
        <Image
          src={src}
          alt={alt}
          width={400}
          height={280}
          className="h-40 w-full object-cover transition-opacity hover:opacity-80"
        />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close image"
            className="absolute right-6 top-6 text-3xl text-white/80 transition-colors hover:text-white"
          >
            ✕
          </button>
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={900}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] w-auto rounded-lg object-contain"
          />
        </div>
      )}
    </>
  );
}