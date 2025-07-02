import './Programas.css';

// --- Array de datos para los programas ---
const programsData = [
  {
    title: "Ingeniería de Software",
    description: "Forma parte de la revolución digital: aprende a crear, innovar y liderar proyectos tecnológicos de alto impacto.",
    skills: ["Desarrollo Full-Stack", "Arquitectura Cloud", "Inteligencia Artificial", "Ciberseguridad"],
    link: "#contact", // <-- AHORA EL BOTÓN LLEVA AL FORMULARIO DE CONTACTO
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    )
  },
  {
    title: "Marketing Digital",
    description: "Desarrolla estrategias creativas y domina las herramientas digitales para destacar en el competitivo mundo moderno.",
    skills: ["SEO y SEM", "Marketing de Contenidos", "Analítica de Datos", "Automatización"],
    link: "#contact", // <-- AHORA EL BOTÓN LLEVA AL FORMULARIO DE CONTACTO
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    )
  },
  {
    title: "Administración de Empresas",
    description: "Conviértete en un líder empresarial con visión global, habilidades de gestión y un fuerte enfoque en la innovación.",
    skills: ["Finanzas Corporativas", "Gestión del Talento", "Logística y Operaciones", "Emprendimiento"],
    link: "#contact", // <-- AHORA EL BOTÓN LLEVA AL FORMULARIO DE CONTACTO
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12M3 3v12" />
      </svg>
    )
  }
];

export default function Programas() {
  return (
    <section className="programas-section" id="programas">
      <div className="programas-content">
        <h2 className="programas-title-gradient">Nuestros Programas Insignia</h2>
        <p className="programas-subtitle">
          Carreras diseñadas para los desafíos del mañana, combinando una base teórica sólida con la aplicación práctica de tecnologías emergentes.
        </p>
        <div className="programas-grid">
          {programsData.map((prog, index) => (
            <div 
              key={index} 
              className="programa-card"
              // --- ESTILO EN LÍNEA PARA LA ANIMACIÓN ESCALONADA ---
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="programa-card-header">
                <div className="programa-icon">{prog.icon}</div>
                <h3>{prog.title}</h3>
              </div>
              <p className="programa-description">{prog.description}</p>
              <div className="programa-skills">
                <h4>Habilidades Clave:</h4>
                <ul className="programa-skills-list">
                  {prog.skills.map((skill, sIndex) => (
                    <li key={sIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
              <a href={prog.link} className="programa-card-cta">
                Ver programa completo <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}