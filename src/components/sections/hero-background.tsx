import Image from "next/image";

/**
 * Cinematic hero backdrop: real photography layered under the animated
 * circuit/gradient scene, dimmed by the gradients below for text legibility.
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      <Image
        src="/images/hero.jpg"
        alt="Modern smart home powered by Electro Box"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />

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
