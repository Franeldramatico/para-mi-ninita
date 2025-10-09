import { useState, useEffect } from 'react';
import { Heart, ChevronUp } from 'lucide-react';

const ScrollNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);

      // Update active section
      const sections = ['hero', 'story', 'gallery', 'messages', 'cta'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const navigationItems = [
    { id: 'hero', label: 'Inicio', icon: '🏠' },
    { id: 'story', label: 'Historia', icon: '📖' },
    { id: 'gallery', label: 'Momentos', icon: '💕' },
    { id: 'messages', label: 'Mensajes', icon: '💌' },
    { id: 'cta', label: 'Amor', icon: '❤️' }
  ];

  return (
    <>
      {/* Fixed navigation dots - REMOVIDO */}

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-gradient-wine text-gothic-silver rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        title="Volver arriba"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Mobile navigation - REMOVIDO */}

      {/* Floating heart indicator */}
      <div className="fixed top-6 left-6 z-50">
        <div className="bg-card/50 backdrop-blur-sm rounded-full p-3 border border-gothic-wine/30 shadow-gothic">
          <Heart className="w-6 h-6 text-gothic-wine animate-pulse-glow" />
        </div>
      </div>
    </>
  );
};

export default ScrollNavigation; 