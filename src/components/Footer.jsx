import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section" id="footer">
      <div className="footer-container">
        {/* --- SECCIÓN SUPERIOR: MARCA Y CTA --- */}
        <div className="footer-top">
          <div className="footer-brand">
            <img 
              src="../../public/assets/img/logos/Logo_uniempresarial_rectangular_CCB_Logo_Completo_Uniempresarial_a_color.png" 
              alt="Logo Uniempresarial" 
              className="footer-logo" 
            />
            <p className="footer-description">
              Transformando la educación superior con tecnología de vanguardia para los líderes del mañana.
            </p>
          </div>
          <div className="footer-subscribe">
            <h4>Mantente Actualizado</h4>
            <p>Recibe las últimas noticias, eventos y novedades académicas directamente en tu correo.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Ingresa tu email" required />
              <button type="submit">Suscribirse</button>
            </form>
          </div>
        </div>

        {/* --- SECCIÓN INFERIOR: ENLACES Y CONTACTO --- */}
        <div className="footer-bottom">
          <div className="footer-links-column">
            <h5>Programas</h5>
            <ul>
              <li><a href="#">Ingeniería de Software</a></li>
              <li><a href="#">Administración de Empresas</a></li>
              <li><a href="#">Marketing Digital</a></li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h5>Servicios</h5>
            <ul>
              <li><a href="#">Admisiones</a></li>
              <li><a href="#">Biblioteca Virtual</a></li>
              <li><a href="#">Bienestar Universitario</a></li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h5>Contacto</h5>
            <ul>
              <li>+57 (1) 742 1940</li>
              <li>info@uniempresarial.edu.co</li>
              <li>Calle 67 # 5-27, Bogotá</li>
            </ul>
          </div>
          <div className="footer-social-column">
            <h5>Síguenos</h5>
            <div className="social-links">
              {/* Aquí puedes agregar tus SVGs de redes sociales */}
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="LinkedIn">IN</a>
              <a href="#" aria-label="Instagram">IG</a>
            </div>
          </div>
        </div>

        {/* --- BARRA LEGAL --- */}
        <div className="footer-legal-bar">
          <p>© 2025 Fundación Universitaria Empresarial. Todos los derechos reservados.</p>
          <p>Desarrollado por <strong>FuSoft</strong></p>
        </div>
      </div>
    </footer>
  );
}