import { useState, useEffect, useRef } from 'react';
import './Admisiones.css';

const admissionSteps = [
  {
    step: '01',
    title: 'Explora y Descubre',
    description: 'Conoce nuestros programas académicos innovadores y resuelve todas tus dudas con nuestros asesores especializados.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
        <path d="M12 10h-2v3H9v-3H7V9h2V7h1v2h2v1z" fill="currentColor"/>
      </svg>
    ),
    color: '#273474'
  },
  {
    step: '02',
    title: 'Aplica en Línea',
    description: 'Completa tu solicitud de forma 100% digital mediante nuestra plataforma intuitiva y segura.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#e4022c'
  },
  {
    step: '03',
    title: 'Bienvenida Personalizada',
    description: 'Nuestro equipo te contactará para acompañarte en cada paso de tu proceso de ingreso universitario.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#273474'
  },
];

export default function Admisiones() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const stepsGridRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (stepsGridRef.current) {
      observer.observe(stepsGridRef.current);
    }

    return () => {
      if (stepsGridRef.current) {
        observer.unobserve(stepsGridRef.current);
      }
    };
  }, []);

  const handleStartProcess = (e) => {
    e.preventDefault();
    setShowModal(true);
    
    // Auto-cerrar el modal después de 6 segundos
    setTimeout(() => {
      setShowModal(false);
    }, 6000);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="admisiones-section-pro" id="admisiones">
      {/* Hero Section Mejorado */}
      <div className="admisiones-hero-pro" ref={heroRef}>
        <div className="hero-background">
          <img 
            src="/assets/img/imagenes/hero.png" 
            alt="Campus Virtual UE" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🎓</span>
            <span>Admisiones 2026</span>
          </div>
          
          <h1 className="hero-title">
            Tu futuro profesional comienza
            <span className="highlight"> aquí</span>
          </h1>
          
          <p className="hero-description">
            Únete a la nueva generación de líderes digitales con nuestra educación 100% virtual, 
            flexible y acompañada por los mejores profesionales del sector.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Empleabilidad</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Programas</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Soporte</span>
            </div>
          </div>
        </div>
      </div>

      {/* Proceso de Admisión */}
      <div className="admisiones-content-pro">
        <div className="section-header">
          <div className="section-badge">
            <span>Proceso Simple</span>
          </div>
          <h2 className="section-title">
            ¿Cómo funciona nuestro proceso de 
            <span className="gradient-text"> admisiones</span>?
          </h2>
          <p className="section-subtitle">
            Te acompañamos en cada paso hacia tu futuro académico y profesional
          </p>
        </div>

        <div 
          className={`steps-grid-pro ${isVisible ? 'animate-in' : ''}`}
          ref={stepsGridRef}
        >
          {admissionSteps.map((step, index) => (
            <div 
              key={index} 
              className={`step-card-pro ${hoveredCard === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ '--animation-delay': `${index * 0.15}s` }}
            >
              <div className="card-background"></div>
              
              <div className="step-header">
                <div className="step-icon-wrapper" style={{ '--step-color': step.color }}>
                  {step.icon}
                </div>
                <div className="step-number">{step.step}</div>
              </div>
              
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              
              <div className="step-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17l10-10M17 7H7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <button 
            onClick={handleStartProcess} 
            className="cta-button-pro"
          >
            <span className="button-text">Solicitar Información</span>
            <span className="button-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
          
          <p className="cta-note">
            ✨ <strong>Proceso 100% gratuito</strong> • Te contactamos en menos de 24 horas
          </p>
        </div>
      </div>

      {/* Modal Mejorado */}
      {showModal && (
        <div className="modal-overlay-pro" onClick={closeModal}>
          <div className="modal-content-pro" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="modal-icon">
              <div className="success-animation">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <h3 className="modal-title">¡Solicitud Recibida!</h3>
            <p className="modal-description">
              Gracias por tu interés en formar parte de nuestra comunidad académica. 
              Nuestro equipo de asesores se comunicará contigo muy pronto para acompañarte 
              en tu proceso de admisión.
            </p>
            
            <div className="modal-timeline">
              <div className="timeline-item">
                <span className="timeline-icon">📞</span>
                <span className="timeline-text">Te contactamos en 24h</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-icon">📋</span>
                <span className="timeline-text">Evaluamos tu perfil</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-icon">🎉</span>
                <span className="timeline-text">¡Bienvenido a UE!</span>
              </div>
            </div>
            
            <button className="modal-action-btn" onClick={closeModal}>
              Perfecto, entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
}