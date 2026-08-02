"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Ambient radial glow that follows the pointer on fine-pointer, non-reduced-motion
 * desktop viewports. Purely decorative — never intercepts pointer events and never
 * replaces the native cursor, so it has no accessibility impact.
 */
export function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { stiffness: 40, damping: 20, mass: 0.8 });
  const springY = useSpring(y, { stiffness: 40, damping: 20, mass: 0.8 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] mix-blend-screen md:block"
      style={{
        x: springX,
        y: springY,
        background: "radial-gradient(circle, #FF9900 0%, transparent 70%)",
      }}
    />
  );
}
