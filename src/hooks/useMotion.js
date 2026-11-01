import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins once for the whole app
if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

/**
 * Runs `setup(gsap, ScrollTrigger, mm)` inside gsap.context + matchMedia scoped to `ref`.
 * Skipped entirely when the user prefers reduced motion, so content simply stays visible.
 * Everything is reverted/killed on unmount.
 */
export function useGsap(ref, setup, deps = []) {
  useLayoutEffect(() => {
    if (!ref.current) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      setup(gsap, ScrollTrigger, mm)
    }, ref)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
