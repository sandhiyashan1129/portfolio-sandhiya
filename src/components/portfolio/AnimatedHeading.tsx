import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Segment = {
  text: string;
  className?: string;
};

type AnimatedHeadingProps = {
  segments: Segment[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  letterDelay?: number;
  trailing?: ReactNode;
};

/**
 * Animates a heading letter-by-letter with a smooth fade + slide-up.
 * Layout, font, and spacing are preserved — only opacity/transform animate.
 */
export function AnimatedHeading({
  segments,
  as = "h2",
  className = "",
  delay = 0,
  letterDelay = 0.04,
  trailing,
}: AnimatedHeadingProps) {
  const Tag = motion[as];
  let globalIndex = 0;

  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
      aria-label={segments.map((s) => s.text).join("")}
    >
      {segments.map((seg, segIdx) => (
        <span key={segIdx} className={seg.className} aria-hidden="true">
          {Array.from(seg.text).map((char, i) => {
            const idx = globalIndex++;
            return (
              <motion.span
                key={`${segIdx}-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: delay + idx * letterDelay,
                }}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
      {trailing}
    </Tag>
  );
}