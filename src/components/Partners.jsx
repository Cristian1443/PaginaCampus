import { useEffect, useRef, useState } from 'react';
import './Partners.css';

// ... (El hook 'useOnScreen' no cambia) ...
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) { observer.observe(currentRef); }
    return () => { if (currentRef) { observer.unobserve(currentRef); } };
  }, [ref, options]);

  return [ref, isVisible];
};


export default function Partners() {
  const [panelRef, isPanelVisible] = useOnScreen({ threshold: 0.2 });
  // --- ¡NUEVO! Estado para controlar la pestaña activa en móvil ---
  const [activePartner, setActivePartner] = useState('uniempresarial');

  return (
    <section className="partners-section" id="partners">
      <div className="partners-container">
        {/* ... Títulos (sin cambios) ... */}
        <h2 className="partners-title">
          Una Alianza <span className="partners-title-highlight">Estratégica</span>
        </h2>
        <p className="partners-subtitle">
          Este proyecto es el resultado de la sinergia entre la visión educativa de Uniempresarial y la experiencia en innovación de la Fábrica de Soluciones FuSoft.
        </p>

        <div ref={panelRef} className={`partnership-panel ${isPanelVisible ? 'is-visible' : ''}`}>
          
          {/* --- FLUJO DE LOGOS (AHORA CON ONCLICK) --- */}
          <div className="alliance-flow">
            {/* Se añade onClick y una clase 'active' condicional */}
            <div 
              className={`partner-logo-wrapper ${activePartner === 'uniempresarial' ? 'active' : ''}`}
              onClick={() => setActivePartner('uniempresarial')}
            >
              <img src="/assets/img/logos/Logo-VirtuEmpresarial_color.png" alt="Uniempresarial" className="partner-logo-img" />
            </div>
            
            <div className="alliance-icon-wrapper">
              {/* El SVG se mantendrá sin cambios, pero lo ocultaremos en móvil con CSS */}
              <svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" className="alliance-svg">
                 {/* ... Contenido del SVG (sin cambios) ... */}
                <defs>
                  <linearGradient id="p-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#273474" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="p-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e4022c" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                <path d="M0 60 C 150 0, 150 120, 300 60" stroke="url(#p-gradient-1)" strokeWidth="4" fill="none" className="flow-line line-1" />
                <path d="M600 60 C 450 0, 450 120, 300 60" stroke="url(#p-gradient-2)" strokeWidth="4" fill="none" className="flow-line line-2" />
                <circle cx="300" cy="60" r="30" fill="#0f172a" stroke="#fff" strokeWidth="2" className="core-circle" />
                <text x="300" y="60" textAnchor="middle" dy=".3em" fill="#fff" fontSize="20" className="core-emoji">🚀</text>
              </svg>
            </div>

            {/* Se añade onClick y una clase 'active' condicional */}
            <div 
              className={`partner-logo-wrapper ${activePartner === 'fusoft' ? 'active' : ''}`}
              onClick={() => setActivePartner('fusoft')}
            >
              <img src="/assets/img/logos/fUSoftcomplete7.png" alt="FuSoft" className="partner-logo-img" />
            </div>
          </div>
          
          {/* --- CONTENIDO DESCRIPTIVO (AHORA CONDICIONAL) --- */}
          <div className="partnership-content">
            {/* Contenido de Uniempresarial */}
            <div className={`partner-details ${activePartner === 'uniempresarial' ? 'is-active' : ''}`}>
              <div className="partnership-column">
                  <h4>Innovación Conjunta</h4>
                  <p>La unión perfecta entre experiencia educativa e innovación tecnológica para crear la plataforma del futuro.</p>
                  <ul>
                    <li>Desarrollo de prototipos avanzados</li>
                    <li>Soluciones tecnológicas personalizadas</li>
                    <li>Investigación y desarrollo continuo</li>
                  </ul>
              </div>
            </div>

            {/* Contenido de FuSoft */}
            <div className={`partner-details ${activePartner === 'fusoft' ? 'is-active' : ''}`}>
              <div className="partnership-column">
                <h4>Fábrica de Soluciones</h4>
                <p>FuSoft aporta su maestría en el desarrollo de software para garantizar una plataforma robusta, escalable y segura.</p>
                <ul>
                  <li>Metodologías ágiles</li>
                  <li>Arquitectura de microservicios</li>
                  <li>Experiencia de usuario de alto nivel</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}