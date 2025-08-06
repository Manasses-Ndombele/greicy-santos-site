import Header from './components/Header';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import Videos from './components/Videos';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import Metrics from './components/Metrics';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContactButton from './components/ContactModal';
import AnimatedSection from './components/AnimatedSection';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Merriweather, serif' }}>
      <Header activeSection={activeSection} />
      
      <main>
        <Hero />
        
        <AnimatedSection>
          <PhotoGallery />
        </AnimatedSection>
        
        <AnimatedSection>
          <Videos />
        </AnimatedSection>
        
        <AnimatedSection>
          <Brands />
        </AnimatedSection>
        
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        
        <AnimatedSection>
          <Metrics />
        </AnimatedSection>
        
        <AnimatedSection>
          <About />
        </AnimatedSection>
        
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      
      <Footer />
      <FloatingContactButton />
    </div>
  );
}

export default App;