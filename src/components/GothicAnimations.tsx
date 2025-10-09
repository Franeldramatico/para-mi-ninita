import { useEffect, useState } from 'react';

interface Bat {
  id: number;
  delay: number;
  top: string;
  size: number;
  duration: number;
}

const GothicAnimations = () => {
  const [bats, setBats] = useState<Bat[]>([]);

  useEffect(() => {
    // Create flying bats
    const createBats = () => {
      const newBats: Bat[] = [];
      for (let i = 0; i < 8; i++) {
        newBats.push({
          id: i,
          delay: i * 3000 + Math.random() * 2000,
          top: `${20 + Math.random() * 60}%`,
          size: 0.8 + Math.random() * 0.4,
          duration: 12000 + Math.random() * 6000
        });
      }
      setBats(newBats);
    };

    createBats();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Flying bats */}
      {bats.map((bat) => (
        <div
          key={bat.id}
          className="absolute text-gothic-wine/60 animate-bat-fly"
          style={{
            top: bat.top,
            fontSize: `${bat.size}rem`,
            animationDelay: `${bat.delay}ms`,
            animationDuration: `${bat.duration}ms`
          }}
        >
          🦇
        </div>
      ))}

      {/* Static hovering bats */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`static-${i}`}
          className="absolute text-gothic-wine/30 animate-bat-hover"
          style={{
            left: `${15 + i * 15}%`,
            top: `${30 + (i % 3) * 25}%`,
            fontSize: '1rem',
            animationDelay: `${i * 0.8}s`,
          }}
        >
          🦇
        </div>
      ))}

      {/* Gothic crosses scattered */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`cross-${i}`}
          className="absolute gothic-cross animate-cross-glow opacity-20"
          style={{
            left: `${10 + i * 25}%`,
            top: `${15 + (i % 2) * 50}%`,
            animationDelay: `${i * 1.5}s`,
            fontSize: '1.5rem'
          }}
        >
          ✠
        </div>
      ))}

      {/* Floating mist effects */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`mist-${i}`}
          className="absolute w-32 h-32 bg-gothic-purple/10 rounded-full blur-xl animate-mist-drift"
          style={{
            left: `${20 + i * 30}%`,
            top: `${25 + i * 20}%`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}

      {/* Gothic particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-gothic-wine rounded-full animate-gothic-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default GothicAnimations; 