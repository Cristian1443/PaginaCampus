import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* --- NUEVO FONDO ANIMADO MULTICAPA --- */}
      <div className="stars-bg"></div>
      <div className="twinkling-bg"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-uniempresarial">Uniempresarial</span>
          <span className="hero-megacampus">Mega Campus del Futuro</span>
        </h1>
        <p className="hero-subtitle">
          Bienvenido a una experiencia educativa inmersiva que redefine el aprendizaje en el siglo XXI. Tu futuro comienza ahora.
        </p>
        <div className="hero-actions">
          <a href="#features" className="hero-btn hero-btn-primary">
            Explorar Campus
          </a>
          <a href="#tour" className="hero-btn hero-btn-secondary">
            <span className="play-icon">▶</span>
            Ver Demo
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat-card">
            <span className="stat-number stat-blue">+25,000</span>
            <span className="stat-label">Estudiantes</span>
          </div>
          <div className="hero-stat-card">
            <span className="stat-number stat-yellow">+150</span>
            <span className="stat-label">Espacios Virtuales</span>
          </div>
          <div className="hero-stat-card">
            <span className="stat-number stat-green">24/7</span>
            <span className="stat-label">Acceso Total</span>
          </div>
        </div>
      </div>
    </section>
  );
}