import React, { useState, useEffect } from 'react';
import { Heart, BookOpen, Feather, Star, Moon, Crown } from 'lucide-react';

interface MomentCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  emotion: string;
}

const moments: MomentCard[] = [
  {
    id: 1,
    icon: <Heart className="w-8 h-8" />,
    title: "El primer latido",
    description: "Cuando mi corazón reconoció al tuyo entre millones de almas perdidas en la oscuridad.",
    emotion: "Amor eterno"
  },
  {
    id: 2,
    icon: <Star className="w-8 h-8" />,
    title: "Tu primera sonrisa",
    description: "La luz que atravesó las sombras de mi mundo y lo transformó en algo mágico.",
    emotion: "Iluminación"
  },
  {
    id: 3,
    icon: <Moon className="w-8 h-8" />,
    title: "Noches de susurros",
    description: "Conversaciones eternas bajo la luna gótica, donde nuestras almas se entrelazaron.",
    emotion: "Intimidad"
  },
  {
    id: 4,
    icon: <BookOpen className="w-8 h-8" />,
    title: "Promesas escritas",
    description: "Cada palabra que te dediqué, cada verso que nació de mi amor por ti.",
    emotion: "Devoción"
  },
  {
    id: 5,
    icon: <Feather className="w-8 h-8" />,
    title: "Caricias del alma",
    description: "Momentos donde el tiempo se detuvo y solo existíamos tú y yo en la eternidad.",
    emotion: "Ternura"
  },
  {
    id: 6,
    icon: <Crown className="w-8 h-8" />,
    title: "Mi reina gótica",
    description: "El día que comprendí que eres la soberana de mi corazón y mi destino.",
    emotion: "Adoración"
  }
];

const GallerySection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      moments.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gothic-dark to-gothic-black relative overflow-hidden">
      {/* Background gothic crosses */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute gothic-cross animate-cross-glow"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.7}s`,
              fontSize: `${1 + Math.random() * 0.5}rem`
            }}
          />
        ))}
      </div>

      {/* Floating bats */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gothic-wine/20 animate-bat-hover"
            style={{
              left: `${20 + i * 20}%`,
              top: `${15 + (i % 2) * 40}%`,
              animationDelay: `${i * 1.2}s`,
              fontSize: '1.2rem'
            }}
          >
            🦇
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl md:text-6xl font-bold text-gothic-silver mb-4 animate-shadow-dance">
            Momentos
            <span className="text-gothic-wine block">Eternos</span>
          </h2>
          <div className="gothic-ornament" />
          <p className="text-lg text-gothic-silver/70 font-serif italic max-w-2xl mx-auto">
            "Cada recuerdo contigo es un tesoro guardado en el cofre gótico de mi alma"
          </p>
          
          {/* Decorative gothic crosses */}
          <div className="flex items-center justify-center space-x-8 mt-6">
            <div className="gothic-cross animate-cross-glow opacity-60" style={{ animationDelay: '0s' }} />
            <div className="gothic-cross animate-cross-glow opacity-80" style={{ animationDelay: '0.5s' }} />
            <div className="gothic-cross animate-cross-glow opacity-60" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Moments grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <div
              key={moment.id}
              className={`group relative transition-all duration-1000 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative bg-card/20 backdrop-blur-sm border border-gothic-wine/30 rounded-lg p-8 gothic-border transition-all duration-500 hover:border-gothic-wine/60 hover:shadow-glow ${hoveredCard === index ? 'animate-shadow-dance' : ''}`}>
                {/* Floating cross decoration */}
                <div className="absolute -top-3 -right-3">
                  <div className="gothic-cross text-sm animate-cross-glow opacity-40" />
                </div>

                {/* Icon with glow effect */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-wine rounded-full flex items-center justify-center text-gothic-silver shadow-glow animate-gothic-pulse">
                    {moment.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="font-gothic text-xl font-semibold text-gothic-silver group-hover:text-gothic-wine transition-colors">
                    {moment.title}
                  </h3>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-gothic-wine/50 to-transparent" />
                  
                  <p className="text-gothic-silver/80 leading-relaxed font-serif text-sm">
                    {moment.description}
                  </p>
                  
                  <div className="inline-block px-3 py-1 bg-gothic-wine/20 rounded-full border border-gothic-wine/30">
                    <span className="text-gothic-wine text-xs font-serif font-semibold">
                      {moment.emotion}
                    </span>
                  </div>
                </div>

                {/* Hover overlay with gothic pattern */}
                <div className={`absolute inset-0 bg-gradient-wine rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-gothic-wine/30 group-hover:border-gothic-wine/60 transition-colors" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-gothic-wine/30 group-hover:border-gothic-wine/60 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration with animated crosses */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center space-x-6 mb-4">
            <div className="gothic-cross animate-cross-glow opacity-60" style={{ animationDelay: '0s' }} />
            <Heart className="w-8 h-8 text-gothic-wine animate-pulse-glow" />
            <div className="gothic-cross animate-cross-glow opacity-60" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-gothic-silver/60 font-serif italic">
            "Cada momento contigo es una eternidad de felicidad gótica"
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 