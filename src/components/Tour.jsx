import './Tour.css';

// --- Array de datos para las tarjetas del Tour ---
const tourStops = [
  {
    title: "Aulas Virtuales",
    subtitle: "Clases en tiempo real con tecnología inmersiva.",
    features: ["Pizarras digitales interactivas", "Transmisión en alta definición", "Participación activa de estudiantes"],
    buttonText: "Explorar Aulas",
    icon: "🖥️",
    className: "tour-btn-blue"
  },
  {
    title: "Biblioteca Digital",
    subtitle: "Acceso ilimitado a recursos académicos.",
    features: ["Millones de libros y publicaciones", "Búsqueda inteligente con IA", "Espacios de estudio personalizados"],
    buttonText: "Ver Biblioteca",
    icon: "📚",
    className: "tour-btn-yellow"
  },
  {
    title: "Simuladores Prácticos",
    subtitle: "Práctica profesional en entornos realistas.",
    features: ["Laboratorios virtuales especializados", "Simulaciones empresariales realistas", "Evaluación en tiempo real"],
    buttonText: "Ver Simuladores",
    icon: "🔬",
    className: "tour-btn-purple"
  },
  {
    title: "Espacios de Coformación",
    subtitle: "Interacción social y apoyo estudiantil.",
    features: ["Salones virtuales para networking", "Eventos culturales y deportivos", "Comunidades de interés dinámicas"],
    buttonText: "Unirme a Grupos",
    icon: "🤝",
    className: "tour-btn-orange"
  },
  {
    title: "Bienestar Universitario",
    subtitle: "Servicios y actividades para tu desarrollo integral.",
    features: ["Atención psicológica y consejería", "Programas de salud y deporte", "Actividades de integración y apoyo"],
    buttonText: "Solicitar Apoyo",
    icon: "❤️",
    className: "tour-btn-green"
  }
];


export default function Tour() {
  return (
    <section className="tour-section" id="tour">
      <div className="tour-content">
        <h2 className="tour-title">
          Un Recorrido por el Futuro
        </h2>
        <p className="tour-subtitle">
          Explora cada rincón de nuestro campus y descubre espacios diseñados para potenciar tu experiencia educativa.
        </p>
        <div className="tour-grid">
          {tourStops.map((stop, index) => (
            <div key={index} className="tour-card">
              <div className="tour-card-image">
                <div className="tour-card-icon">{stop.icon}</div>
              </div>
              <div className="tour-card-content">
                <h3>{stop.title}</h3>
                <p>{stop.subtitle}</p>
                <ul className="tour-list">
                  {stop.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <span className="dot"></span>{feature}
                    </li>
                  ))}
                </ul>
                <button className={`tour-btn ${stop.className}`}>
                  {stop.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}