import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Gallery from './components/Gallery';
import Configurator from './components/Configurator';
import ServiceHub from './components/ServiceHub';
import LeadFunnel from './components/LeadFunnel';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
  };

  const handleConfigureComplete = (configurationText) => {
    setSelectedService(configurationText);
    // Smooth scroll down to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Premium Navigation Header */}
      <Header />

      {/* Hero Showcase Section */}
      <Hero 
        onExploreServices={() => scrollToSection('services')}
        onDesignYourOwn={() => scrollToSection('configurator')}
      />

      {/* Interactive before-after slider */}
      <BeforeAfterSlider />

      {/* Portfolio Gallery section */}
      <Gallery />

      {/* Service Explorer Hub containing search and tabs for 64 services */}
      <ServiceHub 
        onSelectService={handleSelectService}
        selectedService={selectedService}
      />

      {/* Interactive Customizer Configurator tool */}
      <Configurator onConfigureComplete={handleConfigureComplete} />

      {/* Dynamic Stepper Quote funnel */}
      <LeadFunnel prefilledService={selectedService} />

      {/* Testimonials from Checkatrade */}
      <Reviews />

      {/* Informational Footer */}
      <Footer />
    </>
  );
}

export default App;
