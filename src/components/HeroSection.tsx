import { useEffect, useState } from 'react';
import fondoParaElla from '../assets/fondo-para-ella.png';
import gothicPattern from '../assets/gothic-pattern.png';
import gothicMist from '../assets/gothic-mist.png';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    console.log('Fondo para ella:', fondoParaElla);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layer 1: Main background image */}
      <div 
        className="absolute inset-0 bg-contain md:bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${fondoParaElla})`,
          backgroundColor: 'hsl(var(--gothic-black))',
          filter: 'brightness(0.5) contrast(1.1)'
        }}
      />
      
      {/* Layer 2: Gothic pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `url(${gothicPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />
      
      {/* Layer 3: Mist effect */}
      <div 
        className="absolute inset-0 opacity-20 animate-float"
        style={{ 
          backgroundImage: `url(${gothicMist})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Layer 4: Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gothic-black/60 via-gothic-black/40 to-gothic-black/80" />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Gothic heart decoration - REMOVIDO */}
        
        {/* Mobile: Text above image */}
        <div className="md:hidden mb-8">
          {/* Main title for mobile */}
          <h1 className={`font-gothic text-4xl font-bold text-gothic-silver mb-4 transition-all duration-1000 delay-300 animate-shadow-dance ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Para Mi
            <span className="text-gothic-wine block mt-2">Wawita</span>
          </h1>
          
          {/* Subtitle for mobile */}
          <div className={`text-lg text-gothic-silver/80 mb-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-serif italic">
              "En las sombras de mi corazón, tu luz es eterna..."
            </p>
          </div>
          
          {/* Gothic crosses decoration for mobile above */}
          <div className={`flex items-center justify-center space-x-4 mb-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="gothic-cross animate-cross-glow opacity-60" style={{ animationDelay: '0s' }} />
            <div className="gothic-cross animate-cross-glow opacity-80" style={{ animationDelay: '0.5s' }} />
            <div className="gothic-cross animate-cross-glow opacity-60" style={{ animationDelay: '1s' }} />
          </div>
        </div>
        
        {/* Desktop: Text over image */}
        <div className="hidden md:block">
          {/* Main title */}
          <h1 className={`font-gothic text-5xl md:text-7xl lg:text-8xl font-bold text-gothic-silver mb-6 transition-all duration-1000 delay-300 animate-shadow-dance ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Para Mi
            <span className="text-gothic-wine block mt-2">Wawita</span>
          </h1>
          
          {/* Gothic crosses decoration */}
          <div className={`flex items-center justify-center space-x-6 mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="gothic-cross animate-cross-glow opacity-60" style={{ animationDelay: '0s' }} />
            <div className="gothic-cross animate-cross-glow opacity-80" style={{ animationDelay: '0.5s' }} />
            <div className="gothic-cross animate-cross-glow opacity-60" style={{ animationDelay: '1s' }} />
          </div>
          
          {/* Subtitle with typewriter effect */}
          <div className={`text-xl md:text-2xl text-gothic-silver/80 mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="animate-typewriter font-serif italic">
              "En las sombras de mi corazón, tu luz es eterna..."
            </p>
          </div>
          
          {/* Decorative ornament */}
          <div className={`gothic-ornament transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} />
          
          {/* Additional gothic decorations */}
          <div className={`flex items-center justify-center space-x-8 mb-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-gothic-wine/60 text-2xl animate-bat-hover">🦇</div>
            <div className="text-gothic-wine text-lg">❦</div>
            <div className="text-gothic-wine/60 text-2xl animate-bat-hover" style={{ animationDelay: '1s' }}>🦇</div>
          </div>
        </div>
        
        {/* Mobile: Text below image */}
        <div className="md:hidden mt-8">
          {/* Decorative ornament for mobile */}
          <div className={`gothic-ornament transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} />
          
          {/* Additional gothic decorations for mobile */}
          <div className={`flex items-center justify-center space-x-6 mb-6 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-gothic-wine/60 text-xl animate-bat-hover">🦇</div>
            <div className="text-gothic-wine text-base">❦</div>
            <div className="text-gothic-wine/60 text-xl animate-bat-hover" style={{ animationDelay: '1s' }}>🦇</div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center text-gothic-wine">
            <span className="text-lg md:text-sm font-serif mb-2 font-semibold">Descubre nuestra historia</span>
            <div className="w-6 h-10 border-2 border-gothic-wine rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gothic-wine rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gothic-wine/30 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 