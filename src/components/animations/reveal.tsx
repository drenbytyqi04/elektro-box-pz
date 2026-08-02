"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

const distanceFor = (direction: Direction) => {
  switch (direction) {
    case "up":
      return { y: 32 };
    case "down":
      return { y: -32 };
    case "left":
      return { x: 32 };
    case "right":
      return { x: -32 };
    default:
      return {};
  }
};

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  id?: string;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  className,
  id,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...distanceFor(direction) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}

export function StaggerGroup({
  children,
  stagger = 0.08,
  delay = 0,
  once = true,
  className,
}: StaggerProps) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
