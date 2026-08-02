"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MotionReveal({
  children,
  className,
  delay = 0,
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: [0.92, 1], y: [8, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
