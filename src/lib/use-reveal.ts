import { useEffect } from "react";

const REVEAL_THRESHOLD = 0.12;

/**
 * Fades in every `[data-reveal]` element once it enters the viewport.
 * Elements are hidden by CSS only while `html.js` is set, so the page
 * stays readable without JavaScript. Skipped for reduced-motion users.
 */
export function useReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (elements.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      for (const el of elements) el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: REVEAL_THRESHOLD },
    );
    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);
}
