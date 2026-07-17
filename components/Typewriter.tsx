"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  className = "",
  speed = 40,
  startDelay = 300,
}: {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span className="ml-0.5 inline-block w-[2px] animate-blink bg-current align-middle" style={{ height: "0.9em" }} />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
