import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section-bg" id="footer">
      <div className="footer-overlay"></div>
      <div className="footer-center-content">
        <div className="footer-titles">
          <h2 className="footer-title-gradient">El Futuro de la Educación</h2>
          <div className="footer-subtitle">Comienza Hoy</div>
        </div>
        <div className="footer-actions-mockup">
          <button className="footer-btn footer-btn-primary">
            Solicitar Información <span className="footer-btn-icon">→</span>
          </button>
          <button className="footer-btn footer-btn-secondary">
            <span className="footer-btn-icon footer-btn-icon-user">👤</span> Programar Demo
          </button>
        </div>
        <form className="footer-form-mockup">
          <div className="footer-form-title">¿Listo para el Futuro?</div>
          <div className="footer-form-fields">
            <input type="text" placeholder="Nombre completo" />
            <input type="email" placeholder="Email institucional" />
          </div>
          <input type="text" placeholder="Institución o empresa" />
          <textarea placeholder="Cuéntanos sobre tu interés en el campus virtual" rows={3}></textarea>
          <button type="submit" className="footer-form-btn">Únete al Futuro de la Educación</button>
        </form>
      </div>
      <div className="footer-legal-bar">
        <div className="footer-legal-left">
          <img src="/src/assets/img/logos/Logo uniempresarial rectangular CCB_Logo Completo Uniempresarial a color.png" alt="Logo Uniempresarial" className="footer-legal-logo" />
          <span className="footer-legal-name">Mega Campus del Futuro</span>
        </div>
        <div className="footer-legal-right">
          <span>© 2024 Uniempresarial - Todos los derechos reservados</span>
          <span>Desarrollado en colaboración con FuSoft</span>
        </div>
      </div>
    </footer>
  );
}
