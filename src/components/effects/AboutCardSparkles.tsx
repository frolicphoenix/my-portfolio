import { useRef, useEffect } from 'react';

const AboutCardSparkles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // The exact SVG path you provided, turned into a Path2D
    const starPath = new Path2D(
      'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z'
    );

    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

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

    const particles: Particle[] = [];
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * (canvas.width || 1),
          y: Math.random() * (canvas.height || 1),
          size: Math.random() * 12 + 6,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: Math.random() * 0.015 + 0.01,
          rotation: Math.random() * 360,
        });
      }
    };

    initParticles();

    let animationId: number;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        // Move & wrap
        p.x = (p.x + p.speedX + canvas.width) % canvas.width;
        p.y = (p.y + p.speedY + canvas.height) % canvas.height;
        p.rotation = (p.rotation + 0.2) % 360;

        // Twinkle
        p.opacity += p.twinkleSpeed;
        if (p.opacity > 1 || p.opacity < 0.5) p.twinkleSpeed *= -1;

        // Draw the star path
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        const scale = (p.size / 68); // original viewBox is 0–68
        ctx.scale(scale, scale);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = 'rgba(255, 255, 200, 1)'; // same golden-white tone
        ctx.fill(starPath);
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
    />
  );
};

export default AboutCardSparkles;
