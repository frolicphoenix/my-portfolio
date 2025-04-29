import { useEffect, useRef } from "react";
import type P5 from "p5";

/**
 * Custom hook to initialize a p5.js sketch within a React component.
 * @param sketch - The p5 sketch function.
 * @param parentId - The DOM element ID where the canvas is mounted.
 */
export function useP5(sketch: (p5: P5) => void, parentId: string) {
  const instanceRef = useRef<P5 | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Dynamically import p5 to reduce bundle size
    import("p5").then(({ default: P5Class }) => {
      if (!isMounted || typeof window === "undefined") return;

      const parent = document.getElementById(parentId);
      if (parent) {
        // Initialize the p5 instance
        instanceRef.current = new P5Class(sketch, parent);
      }
    });

    return () => {
      isMounted = false;
      // Clean up the p5 instance on unmount
      if (instanceRef.current) {
        instanceRef.current.remove();
        instanceRef.current = null;
      }
    };
  }, [sketch, parentId]);
}
