import { useEffect, useState } from 'react';
import { Quote, Heart, Feather } from 'lucide-react';

interface Message {
  id: number;
  type: 'poem' | 'quote' | 'letter';
  title: string;
  content: string;
  author?: string;
  delay: number;
}

const messages: Message[] = [
  {
    id: 1,
    type: 'poem',
    title: 'Oda a Mi Wawita',
    content: `En las sombras de la noche eterna,
tu luz guía mi alma inquieta.
Eres la rosa negra que florece
en el jardín gótico de mi corazón.

Cada latido de mi pecho
susurra tu nombre en verso,
cada respiración es un poema
dedicado a tu existencia.

Mi amor por ti trasciende
los límites del tiempo mortal,
es eterno como las estrellas
que vigilan nuestro amor.`,
    delay: 0
  },
  {
    id: 2,
    type: 'quote',
    title: 'Nuestro Amor Eterno',
    content: '"En un mundo de mortales pasajeros, encontré en ti la inmortalidad. Tu amor es el elixir que da vida eterna a mi alma gótica."',
    author: 'Para ti, mi amor',
    delay: 1000
  },
  {
    id: 3,
    type: 'letter',
    title: 'Carta desde las Sombras',
    content: `Mi querida wawita,

Desde las profundidades de mi ser, donde habitan las emociones más puras y oscuras, te escribo estas líneas impregnadas de amor eterno.

Eres tú quien ha transformado mi mundo de grises en un universo de matices infinitos. En tus ojos encuentro la luz que ilumina incluso los rincones más oscuros de mi alma.

Cada día a tu lado es un regalo envuelto en terciopelo negro y sellado con cera carmesí. Tu presencia es mi santuario, tu voz mi oración favorita.

Prometo amarte más allá de esta vida, en todas las dimensiones donde nuestras almas puedan encontrarse.

Con amor eterno e inquebrantable,
Tu compañero de sombras y luz`,
    delay: 2000
  }
];

const MessagesSection = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [activeMessage, setActiveMessage] = useState<number | null>(null);

  useEffect(() => {
    messages.forEach((message, index) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, index]);
      }, message.delay);
    });
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'poem':
        return <Feather className="w-6 h-6" />;
      case 'quote':
        return <Quote className="w-6 h-6" />;
      case 'letter':
        return <Heart className="w-6 h-6" />;
      default:
        return <Heart className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gothic-black to-gothic-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-gothic-wine rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-gothic-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-gothic-wine rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-1/4 w-3 h-3 bg-gothic-purple rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Gothic crosses */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute gothic-cross animate-cross-glow opacity-20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
        
        {/* Floating bats */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gothic-wine/15 animate-bat-hover"
            style={{
              left: `${20 + i * 20}%`,
              top: `${25 + (i % 2) * 40}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          >
            🦇
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl md:text-6xl font-bold text-gothic-silver mb-4">
            Susurros del
            <span className="text-gothic-wine block">Corazón</span>
          </h2>
          <div className="gothic-ornament" />
          <p className="text-lg text-gothic-silver/70 font-serif italic max-w-2xl mx-auto">
            "Palabras que nacen desde lo más profundo de mi alma para ti"
          </p>
        </div>

        {/* Messages */}
        <div className="space-y-12">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`transition-all duration-1000 ${
                visibleMessages.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div 
                className={`relative bg-card/20 backdrop-blur-sm border border-gothic-wine/30 rounded-lg p-8 gothic-border shadow-gothic hover:shadow-glow transition-all duration-500 cursor-pointer ${
                  activeMessage === index ? 'border-gothic-wine/60 shadow-glow' : ''
                }`}
                onClick={() => setActiveMessage(activeMessage === index ? null : index)}
              >
                {/* Message type icon */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-wine rounded-full flex items-center justify-center text-gothic-silver mr-4 shadow-glow">
                    {getIcon(message.type)}
                  </div>
                  <h3 className="font-gothic text-xl font-semibold text-gothic-silver">
                    {message.title}
                  </h3>
                </div>

                {/* Message content */}
                <div className="relative">
                  {message.type === 'poem' && (
                    <div className="text-gothic-silver/90 font-serif leading-relaxed whitespace-pre-line text-lg">
                      {message.content}
                    </div>
                  )}
                  
                  {message.type === 'quote' && (
                    <div className="text-center">
                      <blockquote className="text-xl md:text-2xl text-gothic-silver/90 font-serif italic leading-relaxed mb-4">
                        {message.content}
                      </blockquote>
                      {message.author && (
                        <cite className="text-gothic-wine font-serif font-semibold">
                          — {message.author}
                        </cite>
                      )}
                    </div>
                  )}
                  
                  {message.type === 'letter' && (
                    <div className="text-gothic-silver/90 font-serif leading-relaxed whitespace-pre-line">
                      {message.content}
                    </div>
                  )}
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gothic-wine/30"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gothic-wine/30"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gothic-wine"></div>
            <Heart className="w-8 h-8 text-gothic-wine animate-pulse-glow" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gothic-wine"></div>
          </div>
          <p className="text-gothic-silver/60 font-serif italic mt-4">
            Con amor infinito y eterno
          </p>
        </div>
      </div>
    </section>
  );
};

export default MessagesSection; 