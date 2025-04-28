import React, { useRef, useEffect } from 'react';

interface AnimatedBackgroundProps {
  direction?: 'horizontal' | 'vertical';
  color?: string;
  opacity?: number;
  dotSize?: number;
  speed?: number; // pixels per second
  patternSize?: number;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  direction = 'horizontal',
  color = '#b0b8c1',
  opacity = 0.13,
  dotSize = 1.5,
  speed = 8, // px/sec, lower = slower
  patternSize = 28,
}) => {
  const patternRef = useRef<SVGPatternElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    let start: number | null = null;
    function animate(ts: number) {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000; // seconds
      const offset = (elapsed * speed) % patternSize;
      if (patternRef.current) {
        if (direction === 'horizontal') {
          patternRef.current.setAttribute('x', `${offset}`);
        } else {
          patternRef.current.setAttribute('y', `${offset}`);
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [direction, speed, patternSize]);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity }}
    >
      <svg className="w-full h-full" width="100%" height="100%">
        <defs>
          <pattern
            id="animated-dots"
            ref={patternRef}
            x="0"
            y="0"
            width={patternSize}
            height={patternSize}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={dotSize + 0.5}
              cy={dotSize + 0.5}
              r={dotSize}
              fill={color}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#animated-dots)" />
      </svg>
    </div>
  );
};

export default AnimatedBackground; 