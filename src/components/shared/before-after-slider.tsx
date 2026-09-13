"use client";

import { useRef, useState, useCallback, useLayoutEffect } from "react";
import { useTranslations } from "next-intl";
import { MoveHorizontal } from "lucide-react";

import { MediaPlaceholder } from "@/components/shared/media-placeholder";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({ beforeLabel, afterLabel, className }: BeforeAfterSliderProps) {
  const t = useTranslations("common");
  const resolvedBefore = beforeLabel ?? t("before");
  const resolvedAfter = afterLabel ?? t("after");
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative aspect-[4/3] w-full touch-none overflow-hidden rounded-2xl border border-border select-none",
        className
      )}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      <div className="absolute inset-0">
        <MediaPlaceholder icon="Lightbulb" label={resolvedAfter} variant="grid" />
      </div>

      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
        <div className="absolute inset-y-0 left-0" style={{ width: containerWidth || "100%" }}>
          <MediaPlaceholder icon="Wrench" label={resolvedBefore} variant="plain" className="from-secondary via-background to-secondary" />
        </div>
      </div>

      <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        {resolvedBefore}
      </div>
      <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur">
        {resolvedAfter}
      </div>

      <div
        className="absolute inset-y-0 z-10 flex w-0.5 -translate-x-1/2 cursor-ew-resize items-center justify-center bg-primary"
        style={{ left: `${position}%` }}
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
        }}
        role="slider"
        aria-label={`${resolvedBefore} / ${resolvedAfter}`}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
        }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
          <MoveHorizontal className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
