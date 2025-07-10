import "./Footer.css";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-section" id="footer">
      <div className="footer-container">
        {/* --- SECCIÓN SUPERIOR: MARCA Y CTA --- */}
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/assets/img/logos/LogouniempresarialrectangularCCBLogoCompletoUniempresarialacolor.png"
              alt="Logo Uniempresarial"
              className="footer-logo"
            />
            <p className="footer-description">
              Transformando la educación superior con tecnología de vanguardia
              para los líderes del mañana.
            </p>
          </div>
          <div className="footer-subscribe">
            <h4>Mantente Actualizado</h4>
            <p>
              Recibe las últimas noticias, eventos y novedades académicas
              directamente en tu correo.
            </p>
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
              <li>
                <a href="#programas">Ingeniería de Software</a>
              </li>
              <li>
                <a href="#programas">Administración de Empresas</a>
              </li>
              <li>
                <a href="#programas">Marketing Digital</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h5>Servicios</h5>
            <ul>
              <li>
                <a href="#admisiones">Admisiones</a>
              </li>
              <li>
                <a href="https://bibliotecadigital.ccb.org.co/communities/61cb3250-7a4f-4f87-8642-fa5805134131" target="_blank" rel="noopener noreferrer">Biblioteca Virtual</a>
              </li>
              <li>
                <a href="#" >Bienestar Universitario</a>
              </li>
              <li>
                <a href="https://login.intelproxy.com/v2/inicio?cuenta=hKppPLXejG2C4JkM&url=" target="_blank" rel="noopener noreferrer">Bases de Datos</a>
              </li>
              <li>
                <a href="https://login.microsoftonline.com/" target="_blank" rel="noopener noreferrer">Suite Office 365</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h5>Contacto</h5>
            <ul>
              <li>(+601) 3808000</li>
              <li>admisines@uniempresarial.edu.co</li>
              <li>Cra 33a #30-20, Bogotá D.C.</li>
            </ul>
          </div>
          <div className="footer-social-column">
            <h5>Síguenos</h5>
            <div className="social-links">
              <a href="https://www.facebook.com/uniempresarial/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF size={24} color="#fff" />
              </a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fuempresarial" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <FaXTwitter size={24} color="#fff" />
              </a>
              <a href="https://www.instagram.com/uniempresarial/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={24} color="#fff" />
              </a>
              <a href="https://www.youtube.com/channel/UC7Gal38pmeQ2QxrH0VJwOzg" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube size={24} color="#fff" />
              </a>
            </div>
          </div>
        </div>

        {/* --- BARRA LEGAL --- */}
        <div className="footer-legal-bar">
          <p>
            © 2025 Fundación Universitaria Empresarial. Todos los derechos
            reservados.
          </p>
          <p>
            Desarrollado por <strong>FuSoft</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
