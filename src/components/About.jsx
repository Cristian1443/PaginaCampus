import './About.css';

// Array de beneficios para mapear y crear tarjetas
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
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          {/* La ilustración de Stuttgart ahora tendrá su propia animación */}
          <div className="about-image">
            <svg viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* El código del SVG se mantiene igual */}
                <defs>
                  <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#1e40af', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <rect x="80" y="120" width="160" height="200" rx="20" fill="url(#robotGradient)"/>
                <rect x="100" y="140" width="120" height="80" rx="12" fill="#1e293b"/>
                <rect x="110" y="150" width="100" height="60" rx="8" fill="url(#screenGradient)"/>
                <circle cx="130" cy="170" r="4" fill="#fff"/>
                <circle cx="150" cy="170" r="4" fill="#fff"/>
                <rect x="130" y="180" width="40" height="3" rx="1.5" fill="#fff"/>
                <rect x="140" y="185" width="20" height="2" rx="1" fill="#fff"/>
                <rect x="155" y="100" width="4" height="30" rx="2" fill="#f59e0b"/>
                <circle cx="157" cy="95" r="6" fill="#f59e0b"/>
                <rect x="60" y="160" width="25" height="8" rx="4" fill="url(#robotGradient)"/>
                <rect x="235" y="160" width="25" height="8" rx="4" fill="url(#robotGradient)"/>
                <rect x="100" y="320" width="120" height="20" rx="10" fill="#f59e0b"/>
                <rect x="110" y="325" width="100" height="10" rx="5" fill="#d97706"/>
            </svg>
          </div>
        </div>
        <div className="about-text-content">
          <h2 className="about-title">
            Conoce a <span className="about-title-yellow">Stuttgart</span>
          </h2>
          <p className="about-description">
            "¡Hola! Soy tu guía en el Mega Campus del Futuro. Estoy aquí para potenciar tu aventura educativa y asegurar que aproveches al máximo cada recurso. ¡Empecemos!"
          </p>
          
          {/* --- NUEVAS TARJETAS DE BENEFICIOS --- */}
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