import './Integrations.css';

export default function Integrations() {
  return (
    <section className="integrations-section" id="integrations">
      <div className="integrations-content">
        <h2 className="integrations-title">
          Integración <span className="integrations-title-yellow">Tecnológica</span>
        </h2>
        <p className="integrations-subtitle">
          El Uniempresarial Mega Campus del Futuro se integra perfectamente con nuestras plataformas académicas existentes
        </p>
        <div className="integrations-main">
          <div className="integrations-image">
            {/* Aquí puedes poner la imagen real cuando la tengas */}
            <svg width="420" height="260" viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="420" height="260" rx="18" fill="#e3f2fd"/>
              <rect x="30" y="40" width="90" height="50" rx="8" fill="#fff"/>
              <rect x="140" y="30" width="60" height="30" rx="6" fill="#fff"/>
              <rect x="210" y="60" width="70" height="40" rx="8" fill="#fff"/>
              <rect x="60" y="110" width="200" height="20" rx="6" fill="#bbdefb"/>
            </svg>
          </div>
          <div className="integrations-cards">
            <div className="integration-card integration-card-blue">
              <div className="integration-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="8" fill="#2563eb"/>
                  <path d="M8 14H20M14 8V20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="integration-title">LMS Avanzado</div>
                <div className="integration-desc">Gestión completa del aprendizaje con seguimiento personalizado y analíticas en tiempo real.</div>
              </div>
            </div>
            <div className="integration-card integration-card-yellow">
              <div className="integration-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="8" fill="#ffd600"/>
                  <path d="M8 14H20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="14" cy="14" r="3" fill="#fff"/>
                </svg>
              </div>
              <div>
                <div className="integration-title">Conectividad Total</div>
                <div className="integration-desc">Sincronización automática entre dispositivos y plataformas para una experiencia sin interrupciones.</div>
              </div>
            </div>
            <div className="integration-card integration-card-green">
              <div className="integration-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="8" fill="#1de9b6"/>
                  <path d="M8 14H20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14 8V20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="integration-title">APIs Robustas</div>
                <div className="integration-desc">Integración fluida con sistemas externos y herramientas educativas de terceros.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
