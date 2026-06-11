"use client";

interface MarqueeStripProps {
  text: string;
  reverse?: boolean;
  speed?: number;
}

export default function MarqueeStrip({
  text,
  reverse = false,
  speed = 30,
}: MarqueeStripProps) {
  const repeated = Array(10).fill(text);

  return (
    <div className="overflow-hidden py-6 border-y border-gray-800/50">
      <div
        className={`flex whitespace-nowrap ${
          reverse ? "marquee-track-reverse" : "marquee-track"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeated.map((t, i) => (
          <span
            key={i}
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-heading)] font-bold text-gray-800/40 mx-8 select-none"
          >
            {t}
            <span className="text-green-primary/30 mx-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
