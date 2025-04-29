import React, { useRef, useEffect, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

const SVG_PATH = `M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z`;

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  twinkleSpeed: number;
  rotation: number;
}

const AboutCardSparkles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const initParticles = useCallback(
    (width: number, height: number): Particle[] => {
      const count = 40;
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 12 + 6,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: Math.random() * 0.015 + 0.01,
          rotation: Math.random() * 360,
        });
      }
      return particles;
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const starPath = new Path2D(SVG_PATH);
    const dpr = window.devicePixelRatio || 1;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      particles = initParticles(width, height);
    };

    resizeCanvas();
    observerRef.current = new ResizeObserver(resizeCanvas);
    observerRef.current.observe(canvas.parentElement!);

    const animate = () => {
      if (shouldReduceMotion) return;

      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x = (p.x + p.speedX + width) % width;
        p.y = (p.y + p.speedY + height) % height;
        p.rotation = (p.rotation + 0.2) % 360;
        p.opacity += p.twinkleSpeed;
        if (p.opacity > 1 || p.opacity < 0.5) p.twinkleSpeed *= -1;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        const scale = p.size / 68;
        ctx.scale(scale, scale);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = 'rgba(255, 255, 200, 1)';
        ctx.fill(starPath);
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [initParticles, shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      role="presentation"
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
    />
  );
};

export default React.memo(AboutCardSparkles);
