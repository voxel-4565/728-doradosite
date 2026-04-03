"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fadeInUp" | "fadeIn" | "moveUp";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 1250,
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("scroll-revealed");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal-${animation} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}
