import { useState, useEffect, useRef } from 'react';
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
    buttonText: "Mas Informacion",
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
  },
  {
    title: "Sistema de Gestión Académico SIGA",
    subtitle: "Gestiona tu vida académica de manera integral.",
    features: ["Consulta de calificaciones y notas", "Gestión de matrículas y horarios", "Trámites académicos en línea"],
    buttonText: "Acceder a SIGA",
    icon: "🎓",
    className: "tour-btn-red"
  },
  {
    title: "Bases de Datos",
    subtitle: "Acceso a recursos y bases de datos académicas.",
    features: ["Consulta de artículos científicos", "Recursos digitales actualizados", "Acceso remoto 24/7"],
    buttonText: "Acceder a Bases de Datos",
    icon: "🗄️",
    className: "tour-btn-blue",
    url: "https://login.intelproxy.com/v2/inicio?cuenta=hKppPLXejG2C4JkM&url="
  },
  {
    title: "Suite Office 365",
    subtitle: "Herramientas colaborativas para tu productividad.",
    features: ["Correo institucional", "Word, Excel, PowerPoint online", "Almacenamiento en la nube"],
    buttonText: "Acceder a Office 365",
    icon: "📨",
    className: "tour-btn-yellow",
    url: "https://login.microsoftonline.com/"
  },
];

// --- Datos de los psicólogos ---
const psicologos = [
  {
    nombre: "Jeison David Giraldo Fajardo",
    cargo: "Profesional de Permanencia Estudiantil",
    email: "jgiraldof@uniempresarial.edu.co",
    programas: ["Negocios internacionales", "Administración Turística", "Ingenieria de Software Noche"]
  },
  {
    nombre: "Lina Maria Cote Peña",
    cargo: "Profesional de Permanencia Estudiantil",
    email: "lcote@uniempresarial.edu.co",
    programas: ["Ingenieria de software diurno"]
  },
  {
    nombre: "David Sebastian Martínez Mora",
    cargo: "Profesional de Permanencia Estudiantil",
    email: "dsmartinezm@uniempresarial.edu.co",
    programas: ["Finanzas y comercio exterior", "Tecnología en gestión comercial", "Diseño de producto"]
  },
  {
    nombre: "David Octavio Mira Vergel",
    cargo: "Profesional de Permanencia Estudiantil",
    email: "dmirav@uniempresarial.edu.co",
    programas: ["Administración de empresas diurno/nocturno", "Tecnología en gestión del talento humano", "Tecnología en gestión de la producción industrial"]
  },
  {
    nombre: "Laura Marelvy Cuellar",
    cargo: "Profesional de Permanencia Estudiantil",
    email: "lcuellar@uniempresarial.edu.co",
    programas: ["Marketing", "Ingenieria industrial diurno/nocturno"]
  }
];

export default function Tour() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModalBienestar, setShowModalBienestar] = useState(false);
  const [showModalCoformacion, setShowModalCoformacion] = useState(false);
  const tourGridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (tourGridRef.current) {
      observer.observe(tourGridRef.current);
    }

    return () => {
      if (tourGridRef.current) {
        observer.unobserve(tourGridRef.current);
      }
    };
  }, []);

  const handleBienestarClick = () => {
    setShowModalBienestar(true);
  };
  const handleCoformacionClick = () => {
    setShowModalCoformacion(true);
  };
  const closeModalBienestar = () => setShowModalBienestar(false);
  const closeModalCoformacion = () => setShowModalCoformacion(false);

  return (
    <section className="tour-section" id="tour">
      <div className="tour-content">
        <h2 className="tour-title">
          Un Recorrido por el Futuro
        </h2>
        <p className="tour-subtitle">
          Explora cada rincón de nuestro campus y descubre espacios diseñados para potenciar tu experiencia educativa.
        </p>
        <div 
          className={`tour-grid ${isVisible ? 'is-visible' : ''}`}
          ref={tourGridRef}
        >
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
                {stop.url ? (
                  <a
                    href={stop.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`tour-btn ${stop.className}`}
                  >
                    {stop.buttonText}
                  </a>
                ) : stop.title === "Aulas Virtuales" ? (
                  <a 
                    href="https://campus.uniempresarial.edu.co/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`tour-btn ${stop.className}`}
                  >
                    {stop.buttonText}
                  </a>
                ) : stop.title === "Biblioteca Digital" ? (
                  <a 
                    href="https://bibliotecadigital.ccb.org.co/communities/61cb3250-7a4f-4f87-8642-fa5805134131" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`tour-btn ${stop.className}`}
                  >
                    {stop.buttonText}
                  </a>
                ) : stop.title === "Sistema de Gestión Académico SIGA" ? (
                  <a 
                    href="https://uniempresarial.datasae.co/siga_new/web/app.php/login_responsive" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`tour-btn ${stop.className}`}
                  >
                    {stop.buttonText}
                  </a>
                ) : stop.title === "Bienestar Universitario" ? (
                  <button 
                    className={`tour-btn ${stop.className}`}
                    onClick={handleBienestarClick}
                  >
                    {stop.buttonText}
                  </button>
                ) : stop.title === "Espacios de Coformación" ? (
                  <button 
                    className={`tour-btn ${stop.className}`}
                    onClick={handleCoformacionClick}
                  >
                    {stop.buttonText}
                  </button>
                ) : (
                  <button className={`tour-btn ${stop.className}`}>
                    {stop.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Bienestar Universitario */}
      {showModalBienestar && (
        <div className="modal-overlay" onClick={closeModalBienestar}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Apoyo Psicológico y Permanencia Estudiantil</h2>
              <button className="modal-close" onClick={closeModalBienestar}>×</button>
            </div>
            <div className="modal-body">
              <p className="modal-description">
                Nuestros profesionales de permanencia estudiantil están aquí para apoyarte en tu desarrollo académico y personal.
              </p>
              <div className="psicologos-grid">
                {psicologos.map((psicologo, index) => (
                  <div key={index} className="psicologo-card">
                    <div className="psicologo-header">
                      <h3>{psicologo.nombre}</h3>
                      <span className="psicologo-cargo">{psicologo.cargo}</span>
                    </div>
                    <div className="psicologo-email">
                      <strong>Email:</strong> 
                      <a href={`mailto:${psicologo.email}`}>{psicologo.email}</a>
                    </div>
                    <div className="psicologo-programas">
                      <strong>Programas que atiende:</strong>
                      <ul>
                        {psicologo.programas.map((programa, pIndex) => (
                          <li key={pIndex}>{programa}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Espacios de Coformación */}
      {showModalCoformacion && (
        <div className="modal-overlay" onClick={closeModalCoformacion}>
          <div className="modal-content coformacion-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModalCoformacion} style={{position: 'absolute', top: 18, right: 18, zIndex: 10}}>×</button>
            
            <div className="coformacion-header">
              <div className="coformacion-logo-section">
                <div className="coformacion-logo">
                  <div className="logo-graphic">
                    <div className="logo-u">U</div>
                    <div className="logo-dot"></div>
                  </div>
                  <div className="logo-text">
                    <h3>Uniempresarial</h3>
                    <p>Fundación Universitaria Empresarial</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="coformacion-content">
              <div className="coformacion-section">
                <h2 className="coformacion-title">Modelo Dual</h2>
                <p className="coformacion-description">
                  Modelo pedagógico que combina el aprendizaje en aula con el aprendizaje en entornos empresariales reales.
                </p>
                <div className="coformacion-highlight">
                  APRENDER HACIENDO EN EL CONTEXTO EMPRESARIAL
                </div>
              </div>

              <div className="coformacion-section">
                <h2 className="coformacion-title">¿Qué es la Coformación?</h2>
                <p className="coformacion-description">
                  Es un espacio académico del plan de estudios (práctica) que realiza el estudiante matriculado en programas académicos virtual dual. La formación se desarrolla en un ambiente de aprendizaje empresarial, articulada por un eje de conocimiento definido en la ruta formativa.
                </p>
              </div>

              <div className="coformacion-partnership">
                <span className="partnership-label">Una filial de:</span>
                <div className="partnership-logos">
                  <div className="partnership-logo">
                    <div className="logo-graphic">
                      <div className="logo-u">U</div>
                      <div className="logo-dot"></div>
                    </div>
                    <span>Uniempresarial</span>
                  </div>
                  <div className="partnership-logo">
                    <div className="ccb-logo">
                      <span className="ccb-c">C</span>
                      <span className="ccb-c">C</span>
                    </div>
                    <span>Cámara de Comercio de Bogotá</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}