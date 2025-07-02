import './PorQueElegirnos.css';

// --- Array de datos para los motivos ---
const reasons = [
  {
    title: "Innovación Educativa",
    description: "Metodologías activas, aprendizaje inmersivo y experiencias únicas para el siglo XXI.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    )
  },
  {
    title: "Tecnología de Vanguardia",
    description: "Plataforma robusta, IA, simuladores y recursos digitales de última generación a tu alcance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Acompañamiento Personalizado",
    description: "Asistencia 24/7, tutores y guías expertos que te acompañan en cada paso de tu formación académica.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 00-12.234 0M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Red de Aliados Globales",
    description: "Conexiones internacionales, convenios y oportunidades de intercambio académico y profesional.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    )
  }
];

export default function PorQueElegirnos() {
  return (
    <section className="elegir-section" id="elegir">
      <div className="elegir-container">
        <div className="elegir-ilustracion-wrapper">
          {/* --- NUEVA ILUSTRACIÓN SVG --- */}
          <svg className="elegir-main-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="svg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#273474" />
                <stop offset="100%" stopColor="#e4022c" />
              </linearGradient>
            </defs>
            <g opacity="0.1">
              <circle cx="250" cy="250" r="250" fill="url(#svg-gradient)" />
            </g>
            <g style={{ transformOrigin: 'center', animation: 'rotate 40s linear infinite' }}>
              <circle cx="250" cy="250" r="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
              <circle cx="250" cy="250" r="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
            </g>
            <circle cx="250" cy="250" r="80" fill="#0f172a" stroke="url(#svg-gradient)" strokeWidth="2" />
            <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="#fff" fontSize="40" fontWeight="bold">UE</text>
          </svg>
        </div>
        <div className="elegir-motivos">
          <h2 className="elegir-title-gradient">¿Por qué elegirnos?</h2>
          <p className="elegir-subtitle">
            Vamos más allá de la educación tradicional. Te ofrecemos un ecosistema de aprendizaje diseñado para el éxito en el mundo digital.
          </p>
          <div className="elegir-lista">
            {reasons.map((reason, index) => (
              <div key={index} className="elegir-motivo-card" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
                <div className="elegir-motivo-icon">{reason.icon}</div>
                <div className="elegir-motivo-text">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}