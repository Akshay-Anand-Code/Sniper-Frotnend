import React, { useRef, useEffect } from 'react';

const STAR_COUNT = 120;
const STAR_MIN_RADIUS = 0.3;
const STAR_MAX_RADIUS = 1.1;
const STAR_MIN_ALPHA = 0.25;
const STAR_MAX_ALPHA = 0.85;
const STAR_TWINKLE_SPEED = 0.015;
const STAR_MOVE_SPEED = 0.04;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

interface Star {
  x: number;
  y: number;
  r: number;
  alpha: number;
  twinkleDir: number;
  moveAngle: number;
  moveRadius: number;
  baseX: number;
  baseY: number;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Generate stars
    stars.current = Array.from({ length: STAR_COUNT }, () => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const r = randomBetween(STAR_MIN_RADIUS, STAR_MAX_RADIUS);
      const alpha = randomBetween(STAR_MIN_ALPHA, STAR_MAX_ALPHA);
      const twinkleDir = Math.random() > 0.5 ? 1 : -1;
      const moveAngle = Math.random() * Math.PI * 2;
      const moveRadius = randomBetween(0.2, 1.2);
      return {
        x,
        y,
        r,
        alpha,
        twinkleDir,
        moveAngle,
        moveRadius,
        baseX: x,
        baseY: y,
      };
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars.current) {
        // Twinkle
        star.alpha += star.twinkleDir * STAR_TWINKLE_SPEED * Math.random();
        if (star.alpha > STAR_MAX_ALPHA) {
          star.alpha = STAR_MAX_ALPHA;
          star.twinkleDir = -1;
        } else if (star.alpha < STAR_MIN_ALPHA) {
          star.alpha = STAR_MIN_ALPHA;
          star.twinkleDir = 1;
        }
        // Gentle movement (circular)
        star.moveAngle += STAR_MOVE_SPEED * (0.5 + Math.random() * 0.5) * 0.01;
        star.x = star.baseX + Math.cos(star.moveAngle) * star.moveRadius;
        star.y = star.baseY + Math.sin(star.moveAngle) * star.moveRadius;
        // Draw
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = '#fffbe6';
        ctx.shadowColor = '#fffbe6';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.restore();
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    // Handle resize
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Re-randomize base positions
      stars.current.forEach(star => {
        star.baseX = Math.random() * width;
        star.baseY = Math.random() * height;
      });
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 10,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default Starfield; 