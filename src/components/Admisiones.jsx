import { useState, useEffect, useRef } from 'react';
import './Admisiones.css';

const admissionSteps = [
  {
    step: '01',
    title: 'Explora y Descubre',
    description: 'Conoce nuestros programas y resuelve tus dudas.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Aplica en Línea',
    description: 'Completa tu solicitud digitalmente, fácil y rápido.',
    icon: '📝',
  },
  {
    step: '03',
    title: 'Recibe tu Bienvenida',
    description: 'Te contactaremos para acompañarte en tu ingreso.',
    icon: '🎉',
  },
];

export default function Admisiones() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const stepsGridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };

  return (
    <section className="admisiones-section" id="admisiones">
      <div className="admisiones-hero-redesign">
        <img src="/assets/img/imagenes/hero.png" alt="Estudiantes UE Virtual" className="admisiones-hero-img" />
        <div className="admisiones-hero-overlay" />
        <div className="admisiones-hero-content-redesign">
          <h1 className="admisiones-hero-title">¡Comienza tu futuro en <span>UE Virtual</span>!</h1>
          <p className="admisiones-hero-subtitle">
            Vive la experiencia universitaria 100% digital, flexible y acompañada. ¡Haz parte de la nueva generación de líderes digitales!
          </p>
        </div>
      </div>

      <div className="admisiones-content-redesign">
        <h2 className="admisiones-steps-title">¿Cómo es el proceso?</h2>
        <div 
          className={`admisiones-steps-grid-redesign ${isVisible ? 'is-visible' : ''}`}
          ref={stepsGridRef}
        >
          {admissionSteps.map((item, index) => (
            <div key={index} className="step-card-redesign">
              <div className="step-icon">{item.icon}</div>
              <div className="step-number-redesign">{item.step}</div>
              <div className="step-content-redesign">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleStartProcess} className="admisiones-btn-redesign">
          Solicitar información
        </button>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="admisiones-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admisiones-modal-content" onClick={e => e.stopPropagation()}>
            <div className="admisiones-modal-icon">✅</div>
            <h3>¡Gracias por tu interés!</h3>
            <p>Nos comunicaremos contigo pronto por teléfono o correo electrónico para acompañarte en tu proceso de admisión.</p>
            <button className="admisiones-modal-close" onClick={() => setShowModal(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}