import { useState, useEffect } from 'react';
import './Admisiones.css';

// --- Array de datos para los nuevos programas ---
const programsData = [
  {
    title: "Ingeniería de Software",
    description: "Crea, innova y lidera la revolución digital con proyectos tecnológicos de alto impacto.",
    icon: "💻",
    link: "#contact"
  },
  {
    title: "Ingeniería Industrial",
    description: "Optimiza procesos y sistemas complejos para mejorar la productividad y la eficiencia en cualquier sector.",
    icon: "🏭",
    link: "#contact"
  },
  {
    title: "Marketing Digital",
    description: "Domina las estrategias y herramientas digitales para posicionar marcas en el competitivo mercado actual.",
    icon: "📈",
    link: "#contact"
  },
  {
    title: "Administración de Empresas",
    description: "Desarrolla una visión global y habilidades gerenciales para liderar organizaciones hacia el éxito.",
    icon: "💼",
    link: "#contact"
  }
];

export default function Admisiones() {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'aquí';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 200; // Más rápido al borrar
    const deleteSpeed = 100;
    const pauseTime = 2000; // Pausa de 2 segundos cuando termina

    if (!isDeleting && currentIndex < fullText.length) {
      // Escribiendo
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typeSpeed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === fullText.length) {
      // Pausa antes de empezar a borrar
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);

      return () => clearTimeout(timeout);
    } else if (isDeleting && typedText.length > 0) {
      // Borrando
      const timeout = setTimeout(() => {
        setTypedText(prev => prev.slice(0, -1));
      }, deleteSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && typedText.length === 0) {
      // Reiniciar ciclo
      setIsDeleting(false);
      setCurrentIndex(0);
    }
  }, [currentIndex, fullText, isDeleting, typedText]);

  return (
    <section className="admisiones-section-pro" id="admisiones">
      {/* Hero Section */}
      <div className="admisiones-hero-pro">
        <div className="hero-background">
          <img 
            src="/assets/img/imagenes/hero.png" 
            alt="Campus Virtual UE" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          {/* Logo en el hero */}
          <img 
            src="/public/assets/img/logos/virtuempresarialblanco.png"
            alt="Logo VirtuEmpresarial"
            className="hero-logo-pro"
          />
          
          <h1 className="hero-title">
            Tu futuro profesional <br/> 
            comienza <span className="highlight typing-effect"> {typedText}</span>
          </h1>
          
          <p className="hero-description">
            Explora nuestros programas 100% virtuales, diseñados para los líderes del mañana y 
            acompañados por expertos de la industria.
          </p>
        </div>
      </div>

      {/* Sección de Programas - Semi-integrada */}
      <div className="programs-section-integrated">
        <div className="programs-grid-pro">
          {programsData.map((prog, index) => (
            <a href={prog.link} key={index} className="program-card-pro">
              <div className="program-card-icon">{prog.icon}</div>
              <h3 className="program-card-title">{prog.title}</h3>
              <p className="program-card-description">{prog.description}</p>
              <span className="program-card-cta">
                Más Información <span className="arrow">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}