import { useEffect } from "react";

export function useP5(sketch: (p5: any) => void, parentId: string) {
  useEffect(() => {
    let instance: any;
    let mounted = true;

    import("p5").then((p5Module) => {
      if (!mounted) return;
      const p5 = p5Module.default;
      const parent = document.getElementById(parentId);
      if (parent) {
        instance = new p5(sketch, parent);
      }
    });

    return () => {
      mounted = false;
      if (instance) instance.remove();
    };
  }, []); 
}
