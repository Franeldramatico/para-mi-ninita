
import { Heart, Moon, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gothic-black py-12 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Gothic crosses */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute gothic-cross animate-cross-glow opacity-20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gothic-wine rounded-full animate-gothic-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Moon className="w-8 h-8 text-gothic-wine animate-pulse-glow" />
            <Heart className="w-10 h-10 text-gothic-wine animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
            <Star className="w-8 h-8 text-gothic-wine animate-pulse-glow" style={{ animationDelay: '1s' }} />
          </div>
          
          <h3 className="font-gothic text-2xl font-bold text-gothic-silver mb-4">
            Para Mi Wawita
          </h3>
          
          <p className="text-gothic-silver/70 font-serif italic max-w-2xl mx-auto mb-6">
            "En las sombras de la eternidad, nuestro amor brilla como la luz de las estrellas. 
            Cada momento contigo es un regalo del universo."
          </p>
          
          <div className="gothic-ornament" />
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-32 h-px bg-gradient-to-r from-transparent to-gothic-wine"></div>
          <div className="mx-4 text-gothic-wine">❦</div>
          <div className="w-32 h-px bg-gradient-to-l from-transparent to-gothic-wine"></div>
        </div>

        {/* Footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Love declaration */}
          <div className="text-center">
            <h4 className="font-gothic text-lg font-semibold text-gothic-silver mb-4">
              Mi Amor Eterno
            </h4>
            <p className="text-gothic-silver/70 font-serif text-sm leading-relaxed">
              "Eres el amor de mi vida, mi compañera eterna, mi alma gemela. 
              Contigo he encontrado la felicidad que nunca creí posible."
            </p>
          </div>

          {/* Our story */}
          <div className="text-center">
            <h4 className="font-gothic text-lg font-semibold text-gothic-silver mb-4">
              Nuestra Historia
            </h4>
            <p className="text-gothic-silver/70 font-serif text-sm leading-relaxed">
              "Cada día a tu lado es una página nueva en nuestra historia gótica de amor, 
              escrita con tinta de pasión y sellada con promesas eternas."
            </p>
          </div>

          {/* Forever promise */}
          <div className="text-center">
            <h4 className="font-gothic text-lg font-semibold text-gothic-silver mb-4">
              Promesa Eterna
            </h4>
            <p className="text-gothic-silver/70 font-serif text-sm leading-relaxed">
              "Prometo amarte más allá de esta vida, en todas las dimensiones donde 
              nuestras almas puedan encontrarse."
            </p>
          </div>
        </div>

        {/* Final decoration */}
        <div className="text-center">
          <div className="inline-block p-4 bg-card/30 backdrop-blur-sm rounded-full border border-gothic-wine/30 shadow-glow mb-6">
            <Heart className="w-8 h-8 text-gothic-wine animate-pulse-glow" />
          </div>
          
          <p className="text-gothic-silver/60 font-serif text-sm">
            "Con amor infinito y eterno — Para siempre, mi wawita"
          </p>
        </div>

        {/* Bottom border */}
        <div className="mt-8 pt-8 border-t border-gothic-wine/20">
          <div className="text-center">
            <p className="text-gothic-silver/50 font-serif text-xs">
              © 2024 - Creado con ❤️ para mi amor eterno
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 