
import { Heart } from 'lucide-react';

const CallToActionSection = () => {
  const handleDownloadCarta = () => {
    // Crear un enlace temporal para descargar el PDF
    const link = document.createElement('a');
    link.href = '/src/assets/cartita.pdf';
    link.download = 'Carta de Amor - Para Mi Wawita.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gothic-dark to-gothic-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Gothic crosses */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute gothic-cross animate-cross-glow opacity-30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
        
        {/* Floating bats */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gothic-wine/20 animate-bat-hover"
            style={{
              left: `${20 + i * 15}%`,
              top: `${25 + (i % 3) * 25}%`,
              animationDelay: `${i * 1}s`,
            }}
          >
            🦇
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section title */}
        <h2 className="font-gothic text-4xl md:text-6xl font-bold text-gothic-silver mb-6">
          Nuestro Amor
          <span className="text-gothic-wine block">Eterno</span>
        </h2>
        
        <div className="gothic-ornament" />
        
        <p className="text-xl text-gothic-silver/80 font-serif italic mb-12 max-w-3xl mx-auto">
          "En las sombras de la eternidad, nuestro amor brilla como la luz de las estrellas. 
          Cada latido de mi corazón es un susurro de tu nombre, cada respiración una oración de amor."
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button 
            onClick={handleDownloadCarta}
            className="group relative px-8 py-4 bg-gradient-wine text-gothic-silver font-gothic font-semibold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:scale-105 cursor-pointer"
          >
            <span className="flex items-center space-x-2">
              <Heart className="w-5 h-5 animate-pulse-glow" />
              <span>Descargar Mi Carta de Amor</span>
            </span>
            <div className="absolute inset-0 bg-gradient-wine rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </button>
        </div>

        {/* Decorative elements */}
        <div className="flex items-center justify-center space-x-8 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gothic-wine"></div>
          <Heart className="w-8 h-8 text-gothic-wine animate-pulse-glow" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gothic-wine"></div>
        </div>

        {/* Final message */}
        <div className="bg-card/20 backdrop-blur-sm border border-gothic-wine/30 rounded-lg p-8 gothic-border shadow-gothic">
          <p className="text-lg text-gothic-silver/90 font-serif leading-relaxed mb-4">
            "Mi querida wawita, eres el amor de mi vida, mi compañera eterna, mi alma gemela. 
            Contigo he encontrado la felicidad que nunca creí posible."
          </p>
          <p className="text-gothic-wine font-gothic font-semibold">
            — Con todo mi amor, para siempre
          </p>
        </div>

        {/* Bottom decoration */}
        <div className="mt-12">
          <div className="flex items-center justify-center space-x-6">
            <div className="gothic-cross animate-cross-glow opacity-60" style={{ animationDelay: '0s' }} />
            <div className="gothic-cross animate-cross-glow opacity-80" style={{ animationDelay: '0.5s' }} />
            <div className="gothic-cross animate-cross-glow opacity-60" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection; 