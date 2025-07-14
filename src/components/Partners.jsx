import './Partners.css';

export default function Partners() {
  return (
    <section className="partners-section" id="partners">
      <div className="partners-content">
        <h2 className="partners-title">
          Una Alianza <span className="partners-title-yellow">Estratégica</span>
        </h2>
        <p className="partners-subtitle">
          Este proyecto es el resultado de la sinergia entre la visión educativa de Uniempresarial y la experiencia en innovación de la Fábrica de Soluciones FuSoft.
        </p>

        {/* --- PANEL PRINCIPAL DE LA ALIANZA --- */}
        <div className="partnership-panel">
          <div className="partnership-logos">
            <div className="partner-logo-box">
              <img src="/assets/img/logos/Logo-VirtuEmpresarial_color.png" alt="Uniempresarial" className="partner-logo" />
            </div>
            <div className="partner-logo2-box">
              <img src="/assets/img/logos/fUSoftcomplete7.png" alt="FuSoft" className="partner-logo2" />
            </div>
          </div>

          <div className="partnership-showcase">
            <div className="partnership-illustration">
              {/* --- NUEVA ILUSTRACIÓN SVG --- */}
              <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '1%'}}>
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
                {/* Flujo izquierdo (Uniempresarial) */}
                <path d="M0 150 C 150 50, 150 250, 300 150" stroke="url(#p-gradient-1)" strokeWidth="4" fill="none" className="flow-line" />
                {/* Flujo derecho (FuSoft) */}
                <path d="M600 150 C 450 50, 450 250, 300 150" stroke="url(#p-gradient-2)" strokeWidth="4" fill="none" className="flow-line" style={{animationDelay: '0.5s'}}/>
                
                {/* Núcleo central (El Proyecto) */}
                <circle cx="300" cy="150" r="40" fill="#0f172a" stroke="#fff" strokeWidth="2" />
                <circle cx="300" cy="150" r="30" fill="none" stroke="#fff" strokeOpacity="0.5" strokeDasharray="5" className="core-ring"/>
                <text x="300" y="150" textAnchor="middle" dy=".3em" fill="#fff" fontSize="20">🚀</text>
              </svg>
            </div>
            <div className="partnership-content">
              <div className="partnership-column">
                <h4>Innovación Conjunta</h4>
                <p>La unión perfecta entre experiencia educativa e innovación tecnológica para crear la plataforma del futuro.</p>
                <ul>
                  <li>Desarrollo de prototipos avanzados</li>
                  <li>Soluciones tecnológicas personalizadas</li>
                  <li>Investigación y desarrollo continuo</li>
                </ul>
              </div>
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