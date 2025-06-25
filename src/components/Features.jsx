import './Features.css';

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-content">
        <h2 className="features-title-gradient">
          El Campus Virtual más <span className="features-title-yellow">Avanzado</span>
        </h2>
        <p className="features-subtitle">
          Nuestro campus cuenta con espacios virtuales interactivos diseñados para simular la experiencia universitaria más realista posible, integrando tecnología de vanguardia con metodologías pedagógicas innovadoras.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon feature-icon-blue">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#2563eb"/>
                <path d="M19 25C16.2386 25 14 22.7614 14 20C14 17.2386 16.2386 15 19 15C21.7614 15 24 17.2386 24 20C24 22.7614 21.7614 25 19 25Z" stroke="white" strokeWidth="2"/>
                <path d="M19 19V20.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="19" cy="17" r="1" fill="white"/>
              </svg>
            </div>
            <h3>Interacción Social</h3>
            <p>Espacios de encuentro y colaboración virtual</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-yellow">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#ffd600"/>
                <rect x="13" y="15" width="12" height="8" rx="2" stroke="white" strokeWidth="2"/>
                <path d="M13 17L19 21L25 17" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Recursos Digitales</h3>
            <p>Biblioteca y materiales de última generación</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-green">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#1de9b6"/>
                <path d="M19 13V25" stroke="white" strokeWidth="2"/>
                <path d="M13 19H25" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Simuladores</h3>
            <p>Práctica profesional en entornos realistas</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-purple">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#a259f7"/>
                <path d="M19 13L19 25" stroke="white" strokeWidth="2"/>
                <path d="M15 19L23 19" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3>IA Avanzada</h3>
            <p>Asistentes inteligentes personalizados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
