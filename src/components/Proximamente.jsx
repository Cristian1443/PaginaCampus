import './Proximamente.css';

export default function Proximamente() {
  return (
    <section className="proximamente-section" id="proximamente">
      <div className="proximamente-spotlight"></div>
      <div className="proximamente-panel">
        <div className="proximamente-illustration">
          {/* --- NUEVA ILUSTRACIÓN SVG --- */}
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e4022c" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <path d="M50 0L61.2 38.8L100 50L61.2 61.2L50 100L38.8 61.2L0 50L38.8 38.8L50 0Z" fill="url(#star-gradient)" className="star-shape" />
          </svg>
        </div>
        <h2 className="proximamente-title">El Futuro te Espera</h2>
        <p className="proximamente-desc">
          Pronto destacaremos las historias de quienes ya están transformando el mañana.
        </p>
        <p className="proximamente-motivador">
          El próximo caso de éxito puedes ser tú.
        </p>
        <a href="#contact" className="proximamente-btn">Inicia tu Historia</a>
      </div>
    </section>
  );
}