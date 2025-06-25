import './Proximamente.css';

export default function Proximamente() {
  return (
    <section className="proximamente-section" id="proximamente">
      <div className="proximamente-bg-svg">
        {/* Fondo decorativo SVG de ondas */}
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="proximamente-waves">
          <path fill="#233a6b" fillOpacity="0.5" d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,197.3C840,181,960,107,1080,101.3C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>
      <div className="proximamente-panel">
        <div className="proximamente-ilustracion">
          {/* Ícono de trofeo SVG */}
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="90" height="90" rx="20" fill="#e3f2fd"/>
            <g>
              <path d="M45 65C55 65 62 58 62 48V32H28V48C28 58 35 65 45 65Z" fill="#ffd600" stroke="#3a7bd5" strokeWidth="2"/>
              <circle cx="45" cy="28" r="10" fill="#fff" stroke="#3a7bd5" strokeWidth="2"/>
              <path d="M28 36C22 36 18 40 18 46C18 52 23 56 28 56" stroke="#3a7bd5" strokeWidth="2"/>
              <path d="M62 36C68 36 72 40 72 46C72 52 67 56 62 56" stroke="#3a7bd5" strokeWidth="2"/>
              <rect x="38" y="70" width="14" height="6" rx="3" fill="#3a7bd5"/>
            </g>
          </svg>
        </div>
        <h2 className="proximamente-title-gradient">¡Próximamente!</h2>
        <p className="proximamente-desc">
          Muy pronto conocerás las historias de quienes ya están transformando su futuro en nuestro campus virtual.
        </p>
        <div className="proximamente-motivador">¡Tú puedes ser el próximo caso de éxito!</div>
        <a href="#footer" className="proximamente-btn">Quiero ser el próximo caso de éxito</a>
      </div>
    </section>
  );
} 