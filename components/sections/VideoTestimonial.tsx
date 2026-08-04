"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Play } from "lucide-react";
import Reveal from "@/components/Reveal";

type VideoTestimonialProps = {
  videoSrc: string;
  poster?: StaticImageData | string;
  quote: string;
  name: string;
  role: string;
};

export default function VideoTestimonial({
  videoSrc,
  poster,
  quote,
  name,
  role,
}: VideoTestimonialProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-surface-alt px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-xl font-bold text-ink sm:text-2xl">
          Hear it from our clients
        </h2>
        <p className="mt-3 text-sm text-ink-muted sm:text-base">
          Real feedback from the businesses we&apos;ve helped grow.
        </p>

        <div className="relative mx-auto mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-ink-inverse shadow-xl">
          {playing ? (
            <video
              className="h-full w-full"
              controls
              autoPlay
              playsInline
              preload="none"
              poster={typeof poster === "string" ? poster : poster?.src}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play testimonial from ${name}`}
              className="group absolute inset-0 h-full w-full"
            >
              {poster ? (
                <Image
                  src={poster}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <span className="absolute inset-0 bg-gradient-to-br from-ink-inverse to-ink-inverse-alt" />
              )}
              <span className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play size={26} className="ml-1 fill-current" />
                </span>
              </span>
            </button>
          )}
        </div>

        <p className="mx-auto mt-6 max-w-xl text-sm italic text-ink-muted sm:text-base">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="mt-3 text-sm font-bold text-ink">{name}</p>
        <p className="text-xs text-ink-faint">{role}</p>
      </Reveal>
    </section>
  );
}
