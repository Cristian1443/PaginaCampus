import { useState, useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  // --- Lógica para la animación de tecleado (existente) ---
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Mega Campus del Futuro"];
  const period = 2000;
  const [delta, setDelta] = useState(150 - Math.random() * 100);

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

  // --- NUEVA LÓGICA PARA LA ANIMACIÓN DE CONTEO ---
  const [studentCount, setStudentCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Función genérica para la animación de conteo
  const countUp = (setter, target, duration = 2000) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = Math.floor(progress * target);
      setter(currentVal);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setter(target); // Asegura que el valor final sea exacto
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Iniciar las animaciones de conteo
          countUp(setStudentCount, 25000);
          countUp(setSpaceCount, 150);
          observer.unobserve(entry.target); // Animar solo una vez
        }
      },
      { threshold: 0.5 } // Iniciar cuando el 50% de la sección sea visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);


  return (
    <section className="hero-section" id="hero">
      <div className="stars-bg"></div>
      <div className="twinkling-bg"></div>
      
      <div className="hero-content">
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
        <div className="hero-stats" ref={statsRef}>
          <div className={`hero-stat-card ${isVisible ? 'is-visible' : ''}`}>
            <span className="stat-number stat-blue">+{studentCount.toLocaleString('es-CO')}</span>
            <span className="stat-label">Estudiantes</span>
          </div>
          <div className={`hero-stat-card ${isVisible ? 'is-visible' : ''}`}>
            <span className="stat-number stat-yellow">+{spaceCount.toLocaleString('es-CO')}</span>
            <span className="stat-label">Espacios Virtuales</span>
          </div>
          <div className={`hero-stat-card ${isVisible ? 'is-visible' : ''}`}>
            <span className="stat-number stat-green">24/7</span>
            <span className="stat-label">Acceso Total</span>
          </div>
        </div>
      </div>
    </section>
  );
}