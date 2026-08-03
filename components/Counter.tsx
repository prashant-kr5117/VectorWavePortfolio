"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  value,
  suffix = "",
  duration = 1200,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value > 0 ? 1 : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el || value <= 1) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const stepTime = Math.max(duration / value, 40);
        let current = 1;

        const interval = setInterval(() => {
          current += 1;
          setDisplay(current);
          if (current >= value) clearInterval(interval);
        }, stepTime);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
