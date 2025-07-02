import './ContactForm.css';

export default function ContactForm() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* --- COLUMNA IZQUIERDA: INFORMACIÓN --- */}
        <div className="contact-info-panel">
          <h2 className="contact-title">
            ¿Listo para el <span className="contact-title-accent">Futuro</span>?
          </h2>
          <p className="contact-subtitle">
            Nuestro equipo está listo para resolver todas tus dudas. Completa el formulario o contáctanos directamente a través de estos canales.
          </p>
          <div className="contact-info-cards">
            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24...z"/></svg>
              </div>
              <div className="info-card-content">
                <h4>Línea directa</h4>
                <p>+57 (1) 742 1940</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <div className="info-card-content">
                <h4>Email de contacto</h4>
                <p>info@uniempresarial.edu.co</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div className="info-card-content">
                <h4>Ubicación</h4>
                <p>Calle 67 # 5-27, Bogotá</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- COLUMNA DERECHA: FORMULARIO --- */}
        <div className="contact-form-panel">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Nombre Completo *</label>
              <input type="text" id="fullName" name="fullName" className="form-input" placeholder="Escribe tu nombre y apellido" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
              <input type="email" id="email" name="email" className="form-input" placeholder="tu.email@ejemplo.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="interest" className="form-label">Área de interés</label>
              <select id="interest" name="interest" className="form-select">
                <option value="">Selecciona un área</option>
                <option value="ingenieria">Ingeniería de Sistemas</option>
                <option value="administracion">Administración de Empresas</option>
                <option value="marketing">Marketing Digital</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensaje *</label>
              <textarea id="message" name="message" className="form-textarea" rows={4} placeholder="Cuéntanos cómo podemos ayudarte..." required></textarea>
            </div>
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" name="privacy" className="form-checkbox" required />
                <span className="checkmark"></span>
                <span>Acepto la <a href="#" className="privacy-link">Política de Privacidad</a>.*</span>
              </label>
            </div>
            <button type="submit" className="contact-form-btn">Enviar Consulta</button>
          </form>
        </div>
      </div>
    </section>
  );
}