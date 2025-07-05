import { useState, useEffect, useRef } from 'react';
import './Hero.css';
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Importar Particles
import { loadSlim } from "@tsparticles/slim"; // Importar el preset slim (puedes elegir otros)

export default function Hero() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // --- DETECCIÓN DE DISPOSITIVO MÓVIL ---
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- LÓGICA DE PARTICLES (SOLO EN DESKTOP) ---
  useEffect(() => {
    if (!isMobile) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }
  }, [isMobile]);

  const particlesLoaded = (container) => {
    console.log("Particles loaded", container);
  };

  const options = {
      background: {
          color: {
              value: 'transparent',
          },
      },
      fpsLimit: 30, // Aumentar FPS para mejor fluidez
      interactivity: {
          events: {
              onHover: {
                  enable: true,
                  mode: 'repulse',
              },
              // AÑADIMOS EL EVENTO onClick
              onClick: {
                  enable: true,
                  mode: "push", // El modo 'push' añade partículas, pero usaremos 'emitters' para más control
              }
          },
          modes: {
              repulse: {
                  distance: 100,
                  duration: 0.4,
              },
              push: {
                quantity: 4 // Pequeña cantidad al hacer clic normal
              }
          },
      },
      particles: {
          color: {
              value: '#ffffff',
          },
          links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.2, // Aumentar opacidad de las líneas
              width: 1,
          },
          move: {
              direction: 'none',
              enable: true,
              outModes: {
                  default: 'bounce',
              },
              random: false,
              speed: 0.8, // Aumentar velocidad
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 50, // Más partículas
          },
          opacity: {
              value: 0.3, // Aumentar opacidad de las partículas
          },
          shape: {
              type: 'circle',
          },
          size: {
              value: { min: 1, max: 4 }, // Aumentar tamaño máximo
          },
      },
      // --- NUEVA CONFIGURACIÓN DE EMITTERS ---
      emitters: {
        direction: "top",
        life: {
          count: 0, // 0 = infinito
          duration: 0.1,
          delay: 0.1,
        },
        rate: {
          delay: 0.15,
          quantity: 2, // Cantidad de partículas por ráfaga
        },
        size: {
          width: 100,
          height: 0,
        },
        position: {
          x: 50,
          y: 100,
        },
        // Al hacer clic, se activará un emisor en esa posición
        // Esta configuración se activa con el modo 'emitter' en los eventos de interactividad,
        // pero `tsparticles` es lo suficientemente inteligente para usarlo con el click.
      },
      detectRetina: true,
  }

  // --- LÓGICA DE TYPING EFFECT (INDEPENDIENTE DE PARTÍCULAS) ---
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isTypingActive, setIsTypingActive] = useState(false);
  const toRotate = ["Mega Campus del Futuro"];
  const period = 20000; // 10 segundos de pausa
  const [delta, setDelta] = useState(150 - Math.random() * 100);

  useEffect(() => {
    // Activar el typing effect después de un pequeño delay
    const typingTimer = setTimeout(() => {
      setIsTypingActive(true);
    }, 500);

    return () => clearTimeout(typingTimer);
  }, []);

  useEffect(() => {
    if (!isTypingActive) return;
    
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker) };
  }, [delta, isTypingActive]); // Solo depende de delta y isTypingActive

  const tick = () => {
    setTypedText(currentText => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1);
      
      if (isDeleting) { 
        setDelta(prevDelta => prevDelta / 2); 
      }
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(prevLoop => prevLoop + 1);
        setDelta(150 - Math.random() * 100);
      }
      
      return updatedText;
    });
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
        {/* --- COMPONENTE DE PARTÍCULAS (SOLO EN DESKTOP) --- */}
        {init && !isMobile && (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className="particles-bg"
            />
        )}
      
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