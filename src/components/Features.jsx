import './Features.css';

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-content">
        <h2 className="features-title-gradient">
          Un Campus Virtual <span className="features-title-yellow">Excepcional</span>
        </h2>
        <p className="features-subtitle">
          Descubre un entorno educativo diseñado para el éxito. Cada herramienta y espacio virtual ha sido creado para ofrecerte una experiencia de aprendizaje inmersiva, interactiva y sin límites.
        </p>
        <div className="features-grid">
          {/* --- TARJETA 1: Interacción Social --- */}
          <div className="feature-card">
            <div className="feature-icon feature-icon-blue">
              {/* Icono Mejorado: Representa comunicación y comunidad */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 00-12.234 0M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Interacción Social</h3>
            <p>Conecta, colabora y crea en espacios de encuentro virtual diseñados para el networking.</p>
          </div>

          {/* --- TARJETA 2: Recursos Digitales --- */}
          <div className="feature-card">
            <div className="feature-icon feature-icon-yellow">
              {/* Icono Mejorado: Representa una biblioteca o base de datos digital */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3>Recursos Digitales</h3>
            <p>Accede a una biblioteca infinita de conocimiento con materiales de última generación.</p>
          </div>

          {/* --- TARJETA 3: Simuladores Prácticos --- */}
          <div className="feature-card">
            <div className="feature-icon feature-icon-green">
              {/* Icono Mejorado: Representa un entorno de pruebas o simulación */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-1.732.86-3.322 2.25-4.337a3.75 3.75 0 115.253 5.253c-1.015 1.39-2.605 2.25-4.337 2.25H14.25v-3.163z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 18.75c-1.732 0-3.322-.86-4.337-2.25a3.75 3.75 0 115.253-5.253c1.39 1.015 2.25 2.605 2.25 4.337V18.75z" />
              </svg>
            </div>
            <h3>Simuladores Prácticos</h3>
            <p>Aplica tus conocimientos en entornos profesionales realistas y sin riesgos.</p>
          </div>
          
          {/* --- TARJETA 4: Asistencia con IA --- */}
          <div className="feature-card">
            <div className="feature-icon feature-icon-purple">
              {/* Icono Mejorado: Representa inteligencia y tecnología */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 3.75 3.75 0 00-7.467.495A3.75 3.75 0 0012 18z" />
              </svg>
            </div>
            <h3>Asistencia con IA</h3>
            <p>Tu asistente inteligente personal, Stuttgart, está disponible 24/7 para guiarte.</p>
          </div>
        </div>
      </div>
    </section>
  );
}