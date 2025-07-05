import './About.css';
import robotImage from '../../public/assets/img/imagenes/robot.jpeg'; // Importamos la imagen

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
          {/* REEMPLAZAMOS EL SVG POR LA IMAGEN */}
          <div className="about-image">
            <img src={robotImage} alt="Stuttgart Robot" />
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