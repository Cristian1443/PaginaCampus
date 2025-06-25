import './Tour.css';

export default function Tour() {
  return (
    <section className="tour-section" id="tour">
      <div className="tour-content">
        <h2 className="tour-title">
          Tour Virtual de Espacios
        </h2>
        <p className="tour-subtitle">
          Explora cada rincón de nuestro campus virtual y descubre espacios diseñados para potenciar tu experiencia educativa
        </p>
        <div className="tour-grid">
          {/* Aulas Virtuales */}
          <div className="tour-card">
            <div className="tour-card-image">
              {/* Aquí iría la imagen de fondo del aula virtual */}
            </div>
            <div className="tour-card-content">
              <h3>Aulas Virtuales</h3>
              <p>Clases en tiempo real con tecnología inmersiva</p>
              <ul className="tour-list">
                <li><span className="dot"></span>Pizarras digitales interactivas</li>
                <li><span className="dot"></span>Transmisión en alta definición</li>
                <li><span className="dot"></span>Participación activa de estudiantes</li>
              </ul>
              <button className="tour-btn tour-btn-blue">Explorar Aulas</button>
            </div>
          </div>
          {/* Biblioteca Digital */}
          <div className="tour-card">
            <div className="tour-card-image">
              {/* Aquí iría la imagen de fondo de la biblioteca digital */}
            </div>
            <div className="tour-card-content">
              <h3>Biblioteca Digital</h3>
              <p>Acceso ilimitado a recursos académicos</p>
              <ul className="tour-list">
                <li><span className="dot"></span>Millones de libros y publicaciones</li>
                <li><span className="dot"></span>Búsqueda inteligente con IA</li>
                <li><span className="dot"></span>Espacios de estudio personalizados</li>
              </ul>
              <button className="tour-btn tour-btn-yellow">Ver Biblioteca</button>
            </div>
          </div>
          {/* Simuladores */}
          <div className="tour-card">
            <div className="tour-card-image">
              {/* Aquí iría la imagen de fondo de simuladores */}
            </div>
            <div className="tour-card-content">
              <h3>Simuladores</h3>
              <p>Práctica profesional en entornos realistas</p>
              <ul className="tour-list">
                <li><span className="dot"></span>Laboratorios virtuales especializados</li>
                <li><span className="dot"></span>Simulaciones empresariales realistas</li>
                <li><span className="dot"></span>Evaluación en tiempo real</li>
              </ul>
              <button className="tour-btn tour-btn-purple">Ver Simuladores</button>
            </div>
          </div>
          {/* Bienestar Universitario (antes Recreación) */}
          <div className="tour-card">
            <div className="tour-card-image">
              {/* Aquí iría la imagen de fondo de bienestar universitario */}
            </div>
            <div className="tour-card-content">
              <h3>Coformacion </h3>
              <p>Espacios de interacción social y apoyo estudiantil</p>
              <ul className="tour-list">
                <li><span className="dot"></span>Salones virtuales</li>
                <li><span className="dot"></span>Eventos culturales y deportivos</li>
                <li><span className="dot"></span>Networking estudiantil dinámico</li>
              </ul>
              <button className="tour-btn tour-btn-orange">Ver Bienestar</button>
            </div>
          </div>
          {/* Nueva tarjeta: Bienestar Universitario */}
          <div className="tour-card">
            <div className="tour-card-image">
              {/* Aquí iría la imagen de fondo de bienestar universitario */}
            </div>
            <div className="tour-card-content">
              <h3>Bienestar Universitario</h3>
              <p>Servicios y actividades para tu bienestar integral</p>
              <ul className="tour-list">
                <li><span className="dot"></span>Atención psicológica y consejería</li>
                <li><span className="dot"></span>Programas de salud y deporte</li>
                <li><span className="dot"></span>Actividades de integración y apoyo</li>
              </ul>
              <button className="tour-btn tour-btn-green">Solicitar Apoyo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
