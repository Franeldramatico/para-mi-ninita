import React, { useEffect, useRef, useState } from 'react';
import { Heart, Calendar, MapPin, Star } from 'lucide-react';

interface StoryMilestone {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  side: 'left' | 'right';
}

const storyMilestones: StoryMilestone[] = [
  {
    id: 1,
    date: "El comienzo",
    title: "Cuando nuestros destinos se cruzaron",
    description: "La conocí en una aplicación para hacer amigos. Desde el momento que la vi ya sentí nervios de lo hermosa que se ve. Su belleza me cautivó instantáneamente, aunque nunca nos hemos conocido en persona.",
    icon: <Star className="w-6 h-6" />,
    side: 'left'
  },
  {
    id: 2,
    date: "Primer encuentro",
    title: "La primera vez que mi corazón latió diferente",
    description: "Mi corazón siente nervios y enamoramiento cuando la escucho hablar, reír y su hermoso atractivo. Cada palabra, cada risa, cada momento compartido construyó los cimientos de algo eterno e inquebrantable.",
    icon: <Heart className="w-6 h-6" />,
    side: 'right'
  },
  {
    id: 3,
    date: "Nuestra conexión",
    title: "Cuando comprendí el significado del amor",
    description: "En tus ojos encontré mi hogar, en tu voz mi canción favorita, en tu alma el complemento perfecto de la mía.",
    icon: <MapPin className="w-6 h-6" />,
    side: 'left'
  },
  {
    id: 4,
    date: "Hoy y siempre",
    title: "Nuestro amor eterno",
    description: "Cada día a tu lado es una página nueva en nuestra historia gótica de amor, escrita con tinta de pasión y sellada con promesas eternas.",
    icon: <Calendar className="w-6 h-6" />,
    side: 'right'
  }
];

const OurStorySection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, index]);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-gothic relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gothic-wine rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gothic-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gothic-wine/50 transform rotate-45"></div>
        
        {/* Gothic crosses */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute gothic-cross animate-cross-glow opacity-30"
            style={{
              left: `${15 + i * 18}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
        
        {/* Floating bats */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gothic-wine/20 animate-bat-hover text-lg"
            style={{
              left: `${25 + i * 25}%`,
              top: `${20 + i * 30}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            🦇
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl md:text-6xl font-bold text-gothic-silver mb-4">
            Nuestra
            <span className="text-gothic-wine block">Historia</span>
          </h2>
          <div className="gothic-ornament" />
          <p className="text-lg text-gothic-silver/70 font-serif italic max-w-2xl mx-auto">
            "Cada momento contigo es un verso en el poema de nuestra eternidad"
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gothic-wine via-gothic-purple to-gothic-wine opacity-60"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {storyMilestones.map((milestone, index) => (
              <div
                key={milestone.id}
                ref={el => itemRefs.current[index] = el}
                className={`relative flex items-center ${
                  milestone.side === 'left' 
                    ? 'md:flex-row flex-col' 
                    : 'md:flex-row-reverse flex-col'
                } transition-all duration-1000 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Content card */}
                <div className={`md:w-5/12 w-full ${milestone.side === 'left' ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-card/50 backdrop-blur-sm border border-gothic-wine/30 rounded-lg p-6 shadow-gothic hover:shadow-glow transition-all duration-500 gothic-border">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-wine rounded-full flex items-center justify-center text-gothic-silver mr-4 shadow-glow">
                        {milestone.icon}
                      </div>
                      <span className="text-gothic-wine font-serif font-semibold">
                        {milestone.date}
                      </span>
                    </div>
                    
                    <h3 className="font-gothic text-xl font-semibold text-gothic-silver mb-3">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-gothic-silver/80 leading-relaxed font-serif">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-wine rounded-full border-4 border-background shadow-glow z-10"></div>

                {/* Empty space for opposite side */}
                <div className="md:w-5/12 w-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <div className="inline-block p-4 bg-card/30 backdrop-blur-sm rounded-full border border-gothic-wine/30 shadow-glow">
            <Heart className="w-8 h-8 text-gothic-wine animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection; 