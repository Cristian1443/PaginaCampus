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

  // --- LÓGICA DE PARTICLES (OPTIMIZADA PARA MÓVIL) ---
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []); // Removemos la dependencia de isMobile para que funcione en todos los dispositivos

  const particlesLoaded = (container) => {
    console.log("Particles loaded", container);
  };

  // Configuración optimizada para móviles
  const options = {
      background: {
          color: {
              value: 'transparent',
          },
      },
      fpsLimit: isMobile ? 20 : 30, // FPS más bajo en móvil para mejor rendimiento
      interactivity: {
          events: {
              onHover: {
                  enable: !isMobile, // Solo hover en desktop
                  mode: 'repulse',
              },
              onClick: {
                  enable: true, // Click funciona en ambos
                  mode: "push",
              }
          },
          modes: {
              repulse: {
                  distance: 100,
                  duration: 0.4,
              },
              push: {
                quantity: isMobile ? 2 : 4 // Menos partículas en móvil
              }
          },
      },
      particles: {
          color: {
              value: '#ffffff',
          },
          shadow: {
              enable: true,
              color: '#ffffff',
              blur: 5,
              offset: {
                  x: 0,
                  y: 0
              }
          },
          links: {
              color: '#ffffff',
              distance: isMobile ? 100 : 150, // Distancia menor en móvil
              enable: true,
              opacity: 0.4, // Mayor opacidad de las líneas para que se vean sobre la imagen
              width: 1.5, // Líneas más gruesas
          },
          move: {
              direction: 'none',
              enable: true,
              outModes: {
                  default: 'bounce',
              },
              random: false,
              speed: isMobile ? 0.5 : 0.8, // Velocidad menor en móvil
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: isMobile ? 600 : 800, // Área menor en móvil
              },
              value: isMobile ? 35 : 70, // Más partículas para compensar la imagen
          },
          opacity: {
              value: isMobile ? 0.5 : 0.7, // Mayor opacidad para que se vean sobre la imagen
          },
          shape: {
              type: 'circle',
          },
          size: {
              value: { min: 2, max: isMobile ? 4 : 6 }, // Partículas más grandes
          },
      },
      emitters: {
        direction: "top",
        life: {
          count: 0,
          duration: 0.1,
          delay: 0.1,
        },
        rate: {
          delay: isMobile ? 0.2 : 0.15, // Delay mayor en móvil
          quantity: isMobile ? 1 : 2, // Menos partículas por ráfaga en móvil
        },
        size: {
          width: 100,
          height: 0,
        },
        position: {
          x: 50,
          y: 100,
        },
      },
      detectRetina: true,
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
        {/* --- IMAGEN DE FONDO HERO (USANDO CSS BACKGROUND) --- */}

        {/* --- COMPONENTE DE PARTÍCULAS (OPTIMIZADO PARA MÓVIL) --- */}
        {init && (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className="particles-bg"
            />
        )}
      
      <div className="hero-content">
        <div className="hero-logo">
          <img 
            src="/assets/img/logos/virtuempresarialblanco.png" 
            alt="VirtuEmpresarial" 
            className="hero-logo-img"
          />
        </div>
        <h1 className="hero-title">
          Tu futuro profesional <span className="hero-accent">comienza ahora</span>
        </h1>
        <p className="hero-subtitle">
          Campus virtual de vanguardia para tu éxito académico
        </p>
        <div className="hero-actions">
          <a href="#admisiones" className="hero-btn hero-btn-primary">
            ¡Inscríbete Ya!
          </a>
          <a href="#tour" className="hero-btn hero-btn-secondary">
            <span className="play-icon">▶</span>
            Conoce el Campus
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