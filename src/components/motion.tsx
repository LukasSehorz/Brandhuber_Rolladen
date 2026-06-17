import { motion, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade + slide-up when scrolled into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.7,
  amount = 0.2,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers the reveal of its <StaggerItem> children. */
export function Stagger({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0,
  amount = 0.2,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, y = 28 }: { children: ReactNode; className?: string; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** GSAP scroll-scrubbed parallax for a fill image (image should be oversized e.g. scale-110). */
export function ParallaxImage({
  src,
  alt = "",
  className,
  strength = 8,
}: {
  src: string;
  alt?: string;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLImageElement>(null);
  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    },
    { scope: ref },
  );
  return <img ref={ref} src={src} alt={alt} className={className} />;
}

/** GSAP number count-up that fires once when scrolled into view. */
export function CountUp({ to, from = 0, duration = 1.8, className }: { to: number; from?: number; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const obj = { v: from };
      gsap.to(obj, {
        v: to,
        duration,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: () => {
          el.textContent = String(Math.round(obj.v));
        },
      });
    },
    { scope: ref },
  );
  return <span ref={ref} className={className}>{from}</span>;
}

/** Re-export the motion factory for one-off hover/inline animations. */
export { motion };
