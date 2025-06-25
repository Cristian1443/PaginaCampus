import './PorQueElegirnos.css';

export default function PorQueElegirnos() {
  return (
    <section className="elegir-section-claro" id="elegir">
      <div className="elegir-content-claro">
        <div className="elegir-ilustracion">
          {/* Ilustración SVG genérica de estudiantes/campus/tecnología */}
          <svg width="260" height="220" viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="130" cy="210" rx="110" ry="10" fill="#e3f2fd"/>
            <rect x="60" y="60" width="140" height="80" rx="18" fill="#bbdefb"/>
            <rect x="80" y="80" width="100" height="40" rx="10" fill="#fff"/>
            <circle cx="100" cy="100" r="12" fill="#ffd600"/>
            <circle cx="160" cy="100" r="12" fill="#1de9b6"/>
            <rect x="120" y="120" width="20" height="8" rx="4" fill="#3a7bd5"/>
            <rect x="130" y="40" width="12" height="30" rx="6" fill="#3a7bd5"/>
          </svg>
        </div>
        <div className="elegir-motivos">
          <h2 className="elegir-title-gradient-claro">¿Por qué elegirnos?</h2>
          <div className="elegir-lista">
            <div className="elegir-motivo-card elegir-motivo-blue">
              <div className="elegir-motivo-icon">🚀</div>
              <div>
                <h3>Innovación educativa</h3>
                <p>Metodologías activas, aprendizaje inmersivo y experiencias únicas para el siglo XXI.</p>
              </div>
            </div>
            <div className="elegir-motivo-card elegir-motivo-yellow">
              <div className="elegir-motivo-icon">💡</div>
              <div>
                <h3>Tecnología de vanguardia</h3>
                <p>Plataforma robusta, IA, simuladores y recursos digitales de última generación.</p>
              </div>
            </div>
            <div className="elegir-motivo-card elegir-motivo-green">
              <div className="elegir-motivo-icon">🤝</div>
              <div>
                <h3>Acompañamiento personalizado</h3>
                <p>Asistencia 24/7, tutores y guías que te acompañan en cada paso de tu formación.</p>
              </div>
            </div>
            <div className="elegir-motivo-card elegir-motivo-purple">
              <div className="elegir-motivo-icon">🌎</div>
              <div>
                <h3>Red de aliados internacionales</h3>
                <p>Conexiones globales, convenios y oportunidades de intercambio académico y profesional.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 