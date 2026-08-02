"use client";

/**
 * Cinematic hero backdrop. No stock/AI footage is bundled with this build, so
 * this renders an animated circuit/gradient scene that already reads as
 * premium out of the box. To use real footage instead, drop an .mp4 at
 * public/videos/hero.mp4 (+ public/videos/hero-poster.jpg) — see
 * public/videos/README.md — and swap the commented <video> block back in.
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      {/* <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video> */}

      <div className="grid-lines absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black,transparent)]" />

      <div className="animate-glow-pulse absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-primary/25 blur-[100px]" />
      <div className="animate-float absolute right-[10%] top-[35%] h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />
      <div
        className="animate-glow-pulse absolute bottom-[10%] left-[35%] h-80 w-80 rounded-full bg-primary/10 blur-[110px]"
        style={{ animationDelay: "1.2s" }}
      />

      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M0 120 H280 V60 H620 V180 H1000 V60 H1200 M0 420 H180 V520 H520 V620 H900 V480 H1200 M0 700 H400 V760 H750"
          stroke="#FF9900"
          strokeWidth="1"
        />
        {[
          [280, 120],
          [620, 60],
          [1000, 180],
          [180, 420],
          [520, 620],
          [900, 480],
          [400, 700],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="#FF9900" />
        ))}
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
    </div>
  );
}
