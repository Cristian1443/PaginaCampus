import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-uniempresarial">Uniempresarial</span><br />
          <span className="hero-megacampus">Mega Campus del <span className="hero-futuro">Futuro</span></span>
        </h1>
        <p className="hero-subtitle">
          ¡Bienvenidos al futuro de la educación! Una experiencia educativa inmersiva que redefine lo que significa aprender en el siglo XXI.
        </p>
        <div className="hero-actions">
          <button className="hero-btn hero-btn-primary">
            Explorar el Campus <span className="hero-btn-icon">→</span>
          </button>
          <button className="hero-btn hero-btn-secondary">
            <span className="hero-btn-icon hero-btn-play">▶</span> Ver Demo Interactivo
          </button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat-card">
            <span className="stat-number stat-blue">25.000+</span>
            <span className="stat-label">Estudiantes Conectados</span>
          </div>
          <div className="hero-stat-card">
            <span className="stat-number stat-yellow">150+</span>
            <span className="stat-label">Espacios Virtuales</span>
          </div>
          <div className="hero-stat-card">
            <span className="stat-number stat-green">24/7</span>
            <span className="stat-label">Acceso Disponible</span>
          </div>
        </div>
      </div>
    </section>
  );
}
