import { useState, useEffect, useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from './particle-config'; // Importaremos la configuración desde un nuevo archivo
import './Hero.css';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Mega Campus del Futuro"];
  const period = 2000;
  const [delta, setDelta] = useState(150 - Math.random() * 100);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker) };
  }, [typedText]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, typedText.length - 1) : fullText.substring(0, typedText.length + 1);
    setTypedText(updatedText);
    if (isDeleting) { setDelta(prevDelta => prevDelta / 2); }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150 - Math.random() * 100);
    }
  }

  return (
    <section className="hero-section" id="hero">
      {/* El componente de partículas reemplaza el fondo CSS anterior */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleConfig}
      />
      
      <div className="hero-content" data-aos="fade-up">
        <h1 className="hero-title">
          <span className="hero-megacampus typing-effect">{typedText}</span>
        </h1>
        <p className="hero-subtitle">
          Bienvenido a una experiencia educativa inmersiva que redefine el aprendizaje en el siglo XXI. Tu futuro comienza ahora.
        </p>
        <div className="hero-actions">
          <a href="#features" className="hero-btn hero-btn-primary">
            Explorar Campus
          </a>
          <a href="#tour" className="hero-btn hero-btn-secondary">
            <span className="play-icon">▶</span>
            Ver Demo
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat-card" data-aos="fade-up" data-aos-delay="200">
            <span className="stat-number stat-blue">+25.000</span>
            <span className="stat-label">Estudiantes</span>
          </div>
          <div className="hero-stat-card" data-aos="fade-up" data-aos-delay="300">
            <span className="stat-number stat-yellow">+150</span>
            <span className="stat-label">Espacios Virtuales</span>
          </div>
          <div className="hero-stat-card" data-aos="fade-up" data-aos-delay="400">
            <span className="stat-number stat-green">24/7</span>
            <span className="stat-label">Acceso Total</span>
          </div>
        </div>
      </div>
    </section>
  );
}