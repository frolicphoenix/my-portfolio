import { useEffect, useRef } from "react";

export function useP5(sketch: (p5: any) => void, parentId: string) {
  const instanceRef = useRef<any>(null);

  useEffect(() => {
    // Flag to track if component is mounted
    let mounted = true;
    
    // Function to load p5 and create instance
    const loadP5 = async () => {
      try {
        const p5Module = await import("p5");
        // Check if component is still mounted after async import
        if (!mounted) return;
        
        const p5 = p5Module.default;
        const parent = document.getElementById(parentId);
        
        if (parent) {
          // Only create new instance if we don't already have one
          if (!instanceRef.current) {
            console.log("Creating new p5 instance");
            instanceRef.current = new p5(sketch, parent);
          }
        }
      } catch (error) {
        console.error("Failed to load p5:", error);
      }
    };
    
    loadP5();
    
    // Cleanup function that runs when component unmounts
    return () => {
      mounted = false;
      
      // Properly remove the p5 instance if it exists
      if (instanceRef.current) {
        console.log("Removing p5 instance");
        try {
          instanceRef.current.remove();
        } catch (e) {
          console.error("Error removing p5 instance:", e);
        }
        instanceRef.current = null;
      }
    };
  }, [sketch, parentId]);
}