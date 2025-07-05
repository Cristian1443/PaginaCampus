import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Tour from './components/Tour';
import Integrations from './components/Integrations';
import Admisiones from './components/Admisiones';
import Programas from './components/Programas';
import PorQueElegirnos from './components/PorQueElegirnos';
import Partners from './components/Partners';
import Proximamente from './components/Proximamente';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CursorOrb from './components/CursorOrb'; // Importamos el nuevo componente


// 1. Importar la biblioteca AOS y sus estilos
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // 2. Inicializar AOS cuando el componente se monte
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en ms
      once: true,      // La animación solo ocurre una vez
      offset: 100,     // Margen antes de que la animación inicie
    });
  }, []);

  return (
    <>
      <CursorOrb />
      <Header />
      <Hero />
      <Features />
      <About />
      <Tour />
      <Integrations />
      <Admisiones />
      <Programas />
      <PorQueElegirnos />
      <Partners />
      <Proximamente />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;