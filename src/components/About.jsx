import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-panel">
        <div className="about-text">
          <h2 className="about-title">
            Conoce a <span className="about-title-yellow">Stuttgart</span>
          </h2>
          <p className="about-description">
            "¡Hola, soy Stuttgart! Tu guía personal en el Uniempresarial Mega Campus del Futuro. Aquí comenzará tu aventura educativa. Sígueme para conocer nuestras increíbles instalaciones."
          </p>
          <ul className="about-benefits">
            <li><span className="dot"></span>Asistente personal inteligente disponible 24/7</li>
            <li><span className="dot"></span>Guía personalizada según tu perfil académico</li>
            <li><span className="dot"></span>Respuesta inmediata a todas tus consultas</li>
            <li><span className="dot"></span>Navegación intuitiva por todo el campus</li>
          </ul>
          <button className="about-button">
            Chatear con Stuttgart <span className="about-btn-icon">→</span>
          </button>
        </div>
        <div className="about-image">
          {/* Ilustración SVG moderna de asistente virtual */}
          <svg viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#1e40af', stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 1}} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Fondo con patrón sutil */}
            <rect width="320" height="420" rx="32" fill="url(#robotGradient)" opacity="0.1"/>
            
            {/* Cuerpo principal del robot */}
            <rect x="80" y="120" width="160" height="200" rx="20" fill="url(#robotGradient)" filter="url(#glow)"/>
            
            {/* Pantalla principal */}
            <rect x="100" y="140" width="120" height="80" rx="12" fill="#1e293b"/>
            <rect x="110" y="150" width="100" height="60" rx="8" fill="url(#screenGradient)"/>
            
            {/* Elementos de la pantalla */}
            <circle cx="130" cy="170" r="4" fill="#fff"/>
            <circle cx="150" cy="170" r="4" fill="#fff"/>
            <rect x="130" y="180" width="40" height="3" rx="1.5" fill="#fff"/>
            <rect x="140" y="185" width="20" height="2" rx="1" fill="#fff"/>
            
            {/* Antena */}
            <rect x="155" y="100" width="4" height="30" rx="2" fill="#f59e0b"/>
            <circle cx="157" cy="95" r="6" fill="#f59e0b"/>
            
            {/* Brazos */}
            <rect x="60" y="160" width="25" height="8" rx="4" fill="url(#robotGradient)"/>
            <rect x="235" y="160" width="25" height="8" rx="4" fill="url(#robotGradient)"/>
            
            {/* Base */}
            <rect x="100" y="320" width="120" height="20" rx="10" fill="#f59e0b"/>
            <rect x="110" y="325" width="100" height="10" rx="5" fill="#d97706"/>
            
            {/* Elementos decorativos */}
            <circle cx="120" cy="200" r="3" fill="#f59e0b" opacity="0.8"/>
            <circle cx="200" cy="200" r="3" fill="#f59e0b" opacity="0.8"/>
            <rect x="140" y="240" width="40" height="4" rx="2" fill="#f59e0b" opacity="0.6"/>
            
            {/* Partículas de energía */}
            <circle cx="90" cy="150" r="2" fill="#3b82f6" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="230" cy="150" r="2" fill="#3b82f6" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.5s"/>
            </circle>
            <circle cx="160" cy="110" r="1.5" fill="#f59e0b" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" begin="1s"/>
            </circle>
          </svg>
        </div>
      </div>
    </section>
  );
}

