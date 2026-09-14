import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const PETAL_COUNT = 24;
const PETAL_COLORS = ['#A8697A', '#EDDFC4', '#B7BB88'];

export default function PetalEffect() {
  const petals = useMemo(() => {
    return Array.from({ length: PETAL_COUNT }).map((_, i) => {
      const pseudoRandom1 = ((i * 17 + 7) % 100) / 100;
      const pseudoRandom2 = ((i * 23 + 13) % 100) / 100;
      const pseudoRandom3 = ((i * 31 + 19) % 100) / 100;
      const pseudoRandom4 = ((i * 41 + 29) % 100) / 100;

      return {
        id: i,
        x: pseudoRandom1 * 100,
        drift: (pseudoRandom2 * 16 - 8),
        size: pseudoRandom2 * 8 + 8,
        rotation: pseudoRandom3 * 360,
        duration: pseudoRandom4 * 10 + 10,
        delay: (i % 6) * 1.2,
        color: PETAL_COLORS[i % PETAL_COLORS.length],
        opacity: pseudoRandom3 * 0.3 + 0.25,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            x: `${petal.x}vw`,
            y: '-10vh',
            rotate: petal.rotation,
            opacity: 0,
          }}
          animate={{
            y: '110vh',
            x: `${petal.x + petal.drift}vw`,
            rotate: petal.rotation + 240,
            opacity: [0, petal.opacity, petal.opacity, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: petal.size,
            height: petal.size * 1.3,
            background: petal.color,
            borderRadius: '50% 0 50% 50%',
            boxShadow: '0 0 4px rgba(62,44,34,0.08)',
            transformOrigin: 'center'
          }}
        />
      ))}
    </div>
  );
}
