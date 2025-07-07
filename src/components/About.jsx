import './About.css';
// Removemos la importación de la imagen del robot ya que usaremos el video

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
  // Función para manejar el hover del mouse en toda la sección
  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.muted = false;
    }
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.muted = true;
    }
  };

  return (
    <section 
      className="about-section" 
      id="about"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="about-container">
        <div className="about-image-wrapper">
          {/* REEMPLAZAMOS LA IMAGEN POR EL VIDEO DE MINISOFT */}
          <div className="about-image">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="/assets/video/minisoft.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
        <div className="about-text-content">
          <h2 className="about-title">
            Conoce a Stuttgart
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