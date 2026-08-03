"use client";

import { useEffect, useState } from "react";

type Segment = { text: string; className?: string };

export default function Typewriter({
  text,
  segments,
  className = "",
  speed = 100,
  startDelay = 300,
}: {
  text?: string;
  segments?: Segment[];
  className?: string;
  speed?: number;
  startDelay?: number;
}) {
  const parts: Segment[] = segments ?? [{ text: text ?? "" }];
  const fullText = parts.map((p) => p.text).join("");

  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= fullText.length) {
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
  }, [fullText, speed, startDelay]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {parts.map((part, i) => {
          const start = parts.slice(0, i).reduce((sum, p) => sum + p.text.length, 0);
          const visible = part.text.slice(0, Math.max(0, Math.min(part.text.length, count - start)));
          return visible ? (
            <span key={i} className={part.className}>
              {visible}
            </span>
          ) : null;
        })}
        <span
          className="ml-0.5 inline-block w-[2px] animate-blink bg-current align-middle"
          style={{ height: "0.9em" }}
        />
      </span>
      <span className="sr-only">{fullText}</span>
    </span>
  );
}
