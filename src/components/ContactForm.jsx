import './ContactForm.css';

export default function ContactForm() {
  return (
    <section className="contact-form-section" id="contact">
      <div className="contact-form-overlay"></div>
      <div className="contact-form-container">
        <div className="contact-form-header">
          <h2 className="contact-form-title">
            ¿Listo para el <span className="contact-form-title-accent">Futuro</span>?
          </h2>
          <p className="contact-form-subtitle">
            Completa el formulario y nuestro equipo se pondrá en contacto contigo para resolver todas tus dudas sobre el Campus Virtual.
          </p>
        </div>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">Nombre *</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                className="form-input" 
                placeholder="Tu nombre completo"
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">Apellido *</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                className="form-input" 
                placeholder="Tu apellido completo"
                required 
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email institucional *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                placeholder="tu.email@institucion.edu.co"
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Teléfono</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="form-input" 
                placeholder="+57 300 123 4567"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="institution" className="form-label">Institución o empresa *</label>
            <input 
              type="text" 
              id="institution" 
              name="institution" 
              className="form-input" 
              placeholder="Nombre de tu institución educativa o empresa"
              required 
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="role" className="form-label">Cargo o rol *</label>
              <select id="role" name="role" className="form-select" required>
                <option value="">Selecciona tu cargo</option>
                <option value="estudiante">Estudiante</option>
                <option value="docente">Docente</option>
                <option value="directivo">Directivo</option>
                <option value="administrativo">Administrativo</option>
                <option value="padre">Padre de familia</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="interest" className="form-label">Área de interés</label>
              <select id="interest" name="interest" className="form-select">
                <option value="">Selecciona un área</option>
                <option value="ingenieria">Ingeniería de Sistemas</option>
                <option value="administracion">Administración de Empresas</option>
                <option value="contaduria">Contaduría Pública</option>
                <option value="psicologia">Psicología</option>
                <option value="derecho">Derecho</option>
                <option value="especializacion">Especialización</option>
                <option value="maestria">Maestría</option>
                <option value="doctorado">Doctorado</option>
                <option value="campus-virtual">Campus Virtual</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Mensaje *</label>
            <textarea 
              id="message" 
              name="message" 
              className="form-textarea" 
              rows={4}
              placeholder="Cuéntanos sobre tu interés en el campus virtual, qué información necesitas o cualquier consulta que tengas..."
              required
            ></textarea>
          </div>
          
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" name="privacy" className="form-checkbox" required />
              <span className="checkmark"></span>
              Acepto la <a href="#" className="privacy-link">Política de Privacidad</a> y autorizo el tratamiento de mis datos personales *
            </label>
          </div>
          
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" name="newsletter" className="form-checkbox" />
              <span className="checkmark"></span>
              Deseo recibir información sobre novedades académicas y eventos
            </label>
          </div>
          
          <button type="submit" className="contact-form-btn">
            <span className="btn-text">Enviar Consulta</span>
            <span className="btn-icon">→</span>
          </button>
        </form>
        
        <div className="contact-info-cards">
          <div className="contact-card">
            <div className="contact-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className="contact-card-content">
              <h4>Línea directa</h4>
              <p>+57 (1) 742 1940</p>
              <p>+57 300 123 4567</p>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="contact-card-content">
              <h4>Email de contacto</h4>
              <p>info@uniempresarial.edu.co</p>
              <p>admisiones@uniempresarial.edu.co</p>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="contact-card-content">
              <h4>Ubicación</h4>
              <p>Calle 67 # 5-27</p>
              <p>Bogotá, Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 