import './Admisiones.css';

// --- Datos de los programas ---
const programsData = [
  {
    title: "Ingeniería de Software",
    description: "Crea, innova y lidera la revolución digital con proyectos tecnológicos de alto impacto.",
    icon: "💻",
    link: "https://uniempresarial.edu.co/programas-virtuales/"
  },
  {
    title: "Ingeniería Industrial",
    description: "Optimiza procesos y sistemas complejos para mejorar la productividad en cualquier sector.",
    icon: "🏭",
    link: "https://uniempresarial.edu.co/ingenieria-industrial-virtual/"
  },
  {
    title: "Marketing Digital",
    description: "Domina las estrategias y herramientas digitales para posicionar marcas en el mercado actual.",
    icon: "📈",
    link: "https://uniempresarial.edu.co/marketing-virtual/"
  },
  {
    title: "Administración de Empresas",
    description: "Desarrolla una visión global y habilidades gerenciales para liderar organizaciones hacia el éxito.",
    icon: "💼",
    link: "https://uniempresarial.edu.co/administracion-de-empresas-virtual/"
  }
];

export default function Admisiones() {
  return (
    <section className="admisiones-section-commercial" id="admisiones">
      
      {/* --- HERO SECTION --- */}
      <div className="hero-commercial">
        <div className="hero-overlay-commercial"></div>
        <div className="hero-content-commercial">
          <img 
            src="/assets/img/logos/virtuempresarialblanco.png"
            alt="Logo VirtuEmpresarial"
            className="hero-logo-commercial"
          />
          <h1 className="hero-title-commercial">
            Tu Futuro Profesional Comienza <span className="highlight">Aquí</span>
          </h1>
          <p className="hero-description-commercial">
            Explora nuestros programas 100% virtuales, diseñados para los líderes del mañana.
          </p>
        </div>
      </div>

      {/* --- PROGRAMS SECTION --- */}
      <div className="programs-section-commercial">
        <h2 className="programs-title-commercial">Nuestros Programas Virtuales</h2>
        <div className="programs-grid-commercial">
          {programsData.map((prog, index) => (
            <a 
              href={prog.link} 
              key={index} 
              className="program-card-commercial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="program-card-icon-commercial">{prog.icon}</div>
              <h3 className="program-card-title-commercial">{prog.title}</h3>
              <p className="program-card-description-commercial">{prog.description}</p>
              <span className="program-card-cta-commercial">
                Más Información →
              </span>
            </a>
          ))}
        </div>
      </div>
      
      {/* --- FINAL CTA --- */}
      <div className="final-cta-section">
        <h2 className="final-cta-title">¿Listo para dar el siguiente paso?</h2>
        <p className="final-cta-subtitle">Únete a una comunidad de innovadores y transforma tu futuro con nosotros.</p>
        <a href="#contact" className="final-cta-btn">
          Inicia tu Proceso Ahora
        </a>
      </div>
    </section>
  );
}