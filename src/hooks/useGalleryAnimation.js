import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motionValue } from "motion/react";
import { expoInOut, lerp } from "../lib/easing.js";
import { getStripTarget } from "../lib/layout.js";

const DURATION = 1.2;
export function useGalleryAnimation({
  wrapperRef,
  thumbRefs,
  openRef,
  featuredRef,
  count,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const progress = useRef(null);
  const controls = useRef(null);

  useEffect(() => {
    const p = motionValue(0);
    progress.current = p;

    let targets = [];

    // Measure the resting layout. The wrapper is never transformed, so this
    // stays correct even if called mid-animation.
    const measure = () => {
      const rect = wrapperRef.current.getBoundingClientRect();
      const scale = window.innerWidth < 768 ? 0.6 : 0.5;
      // The stack is pinned `gap` px from the left edge, so left === gap.
      const gap = rect.left;
      targets = Array.from({ length: count }, (_, i) =>
        getStripTarget(i, rect, window.innerHeight, { gap, scale }),
      );
    };

    const render = (t) => {
      const e = expoInOut(t);

      thumbRefs.current.forEach((el, i) => {
        const target = targets[i];
        const x = lerp(0, target.x, e);
        const y = lerp(0, target.y, e);
        const s = lerp(1, target.scale, e);
        el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${s})`;
      });

      openRef.current.style.opacity = 1 - e;
      featuredRef.current.style.opacity = e;
    };

    measure();
    render(p.get());
    const unsubscribe = p.on("change", render);

    return () => {
      unsubscribe();
      controls.current?.stop();
    };
  }, [count, wrapperRef, thumbRefs, openRef, featuredRef]);

  const goTo = useCallback((to) => {
    const p = progress.current;
    controls.current?.stop();
    // Duration scales with the distance left, so interrupting keeps the speed.
    const duration = DURATION * Math.abs(to - p.get());
    controls.current = animate(p, to, { duration, ease: "linear" });
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
    goTo(1);
  }, [goTo]);

  const close = useCallback(() => {
    setIsOpen(false);
    goTo(0);
  }, [goTo]);

  return { isOpen, open, close };
}
