import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Tour from './components/Tour';
import Integrations from './components/Integrations';
import Admisiones from './components/Admisiones';
import AdmisionesProcess from './components/AdmisionesProcess'; // <-- 1. IMPORTAR
import PorQueElegirnos from './components/PorQueElegirnos';
import Partners from './components/Partners';
import Proximamente from './components/Proximamente';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CursorOrb from './components/CursorOrb';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <CursorOrb />
      <Header />
      <Admisiones />
      <AdmisionesProcess /> {/* <-- 2. AÑADIR EL COMPONENTE */}
      <Features />
      <About />
      <Tour />
      <PorQueElegirnos />
      <Partners />
      <Proximamente />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;