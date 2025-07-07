import './About.css';
import { useRef, useEffect, useState } from 'react';

const benefits = [
  {
    icon: '🧠',
    title: 'Asistencia Inteligente',
    description: 'Disponible 24/7 para resolver tus dudas al instante.'
  },
  {
    icon: '🧭',
    title: 'Guía Personalizada',
    description: 'Recibe orientación adaptada a tu perfil y programa académico.'
  },
  {
    icon: '🚀',
    title: 'Navegación Intuitiva',
    description: 'Explora fácilmente cada rincón del campus sin perderte.'
  }
];

export default function About() {
  const aboutRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            setIsMuted(false);
            videoRef.current.play();
          } else {
            setIsMuted(true);
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.3 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-image">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="/assets/video/minisoft_web.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
        <div className="about-text-content">
          <h2 className="about-title">
            Conoce a Stuttgart
          </h2>
          <p className="about-description">
            "¡Hola! Soy tu guía en el Mega Campus del Futuro. Estoy aquí para potenciar tu aventura educativa y asegurar que aproveches al máximo cada recurso. ¡Empecemos!"
          </p>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-text">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="about-button">
            Chatear con Stuttgart <span className="about-btn-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}