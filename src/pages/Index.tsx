import HeroSection from '../components/HeroSection';
import OurStorySection from '../components/OurStorySection';
import GallerySection from '../components/GallerySection';
import MessagesSection from '../components/MessagesSection';
import CallToActionSection from '../components/CallToActionSection';
import ScrollNavigation from '../components/ScrollNavigation';
import GothicAnimations from '../components/GothicAnimations';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global gothic animations layer */}
      <GothicAnimations />
      
      {/* Smooth scroll container */}
      <div className="scroll-smooth relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="story">
          <OurStorySection />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>
        <div id="messages">
          <MessagesSection />
        </div>
        <div id="cta">
          <CallToActionSection />
        </div>
        <Footer />
      </div>
      
      {/* Navigation overlay */}
      <ScrollNavigation />
    </div>
  );
};

export default Index; 