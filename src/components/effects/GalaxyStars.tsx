// import React from "react";
import { useP5 } from "../../hooks/useP5";

const GalaxyStars = () => {
  const sketch = (p5: any) => {
    let stars: Star[] = [];
    let nebulaParticles: Nebula[] = [];
    const numStars = 350;
    const numNebula = 80;
    let auroraOffset = 0;

    // ----- STAR CLASS -----
    class Star {
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      phase: number;

      constructor() {
        this.x = p5.random(-p5.width, p5.width);
        this.y = p5.random(-p5.height, p5.height);
        this.size = p5.random(1, 2.2);
        this.baseAlpha = p5.random(100, 200);
        this.phase = p5.random(p5.TWO_PI);
      }

      update() {
        this.phase += 0.02;
      }

      show() {
        const alpha = this.baseAlpha + 55 * p5.sin(this.phase);
        p5.fill(255, alpha);
        p5.noStroke();
        p5.ellipse(this.x, this.y, this.size);
      }
    }

    // ----- NEBULA CLASS -----
    class Nebula {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      col: any;
      
      constructor() {
        this.x = p5.random(-p5.width, p5.width);
        this.y = p5.random(-p5.height, p5.height);
        this.size = p5.random(80, 200);
        this.speedX = p5.random(-0.2, 0.2);
        this.speedY = p5.random(-0.1, 0.1);
        // Olive-green shades: tweak the R G B values as desired
        this.col = p5.color(
          p5.random(70, 110),  // R: muted green tones
          p5.random(90, 140),  // G: lush, leafy green
          p5.random(60, 90),   // B: low blue component for warmth
          20                  // very transparent
        );
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > p5.width) this.x = -p5.width;
        if (this.x < -p5.width) this.x = p5.width;
        if (this.y > p5.height) this.y = -p5.height;
        if (this.y < -p5.height) this.y = p5.height;
      }

      show() {
        p5.noStroke();
        p5.fill(this.col);
        p5.ellipse(this.x, this.y, this.size);
      }
    }

    p5.setup = () => {
      p5.createCanvas(window.innerWidth, window.innerHeight);
      p5.colorMode(p5.RGB, 255, 255, 255, 255);
      // Create stars & nebula particles
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
      for (let i = 0; i < numNebula; i++) {
        nebulaParticles.push(new Nebula());
      }
    };

    // ----- Aurora Effect -----
    const drawAurora = () => {
      p5.noStroke();
      // Olive-green aurora shade
      p5.fill(85, 107, 47, 100); // dark olive green with transparency
      p5.beginShape();
      let xOff = auroraOffset;
      for (let x = -50; x <= p5.width + 50; x += 10) {
        // Create a swirling wave using noise
        const y = p5.map(p5.noise(xOff, p5.frameCount * 0.005), 0, 1, 50, 150);
        p5.vertex(x, y);
        xOff += 0.05;
      }
      p5.vertex(p5.width + 50, 0);
      p5.vertex(-50, 0);
      p5.endShape(p5.CLOSE);
      // Increment offset for animated swirl
      auroraOffset += 0.01;
    };

    p5.draw = () => {
      // Use a transparent background to create a trailing effect
      p5.background(5, 5, 20, 50);

      // ---------- Mouse Reactive Parallax ----------
      // Calculate a slight offset based on mouse position
      const offsetX = p5.map(p5.mouseX, 0, p5.width, -50, 50);
      const offsetY = p5.map(p5.mouseY, 0, p5.height, -50, 50);

     // ---------- Stars (Mouse Reactive Parallax) ----------
      p5.push();
      p5.translate(p5.width / 2 + offsetX, p5.height / 2 + offsetY);
      for (let s of stars) {
        s.update();
        s.show();
      }
      p5.pop();


      // ---------- Nebula Layers ----------
      p5.push();
      // They stay in the background without mouse offset
      for (let n of nebulaParticles) {
        n.update();
        n.show();
      }
      p5.pop();

      // ---------- Aurora Waves ----------
      p5.push();
      // Draw the aurora in the top region of the canvas
      p5.push();
      p5.translate(-p5.width / 2, -p5.height / 2);
      drawAurora();
      p5.pop();
      p5.pop();
    };

    p5.windowResized = () => {
      p5.resizeCanvas(window.innerWidth, window.innerHeight);
    };
  };

  useP5(sketch, "galaxy-stars");

  return <div id="galaxy-stars" className="absolute inset-0 z-[-1]" />;
};

export default GalaxyStars;
