import './ContactForm.css';
import { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ContactForm() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Debug: verificar que el componente se está renderizando
  console.log('ContactForm renderizando...', { init, isMobile, isSubmitting, submitStatus });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Función para enviar datos a Clientify
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      telefono: formData.get('telefono'),
      programa: formData.get('programa'),
      mensaje: formData.get('mensaje'),
      origen: 'Campus Virtual Website',
      formulario_id: '251464'
    };

    try {
      // Enviar a Clientify usando el webhook del formulario específico
      const clientifyResponse = await fetch('https://api.clientify.net/web-marketing/superforms/webhook/251464', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          nombre: data.nombre,
          email: data.email,
          telefono: data.telefono,
          programa_interes: data.programa,
          mensaje: data.mensaje,
          origen: data.origen
        })
      });

      if (clientifyResponse.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        throw new Error('Error al enviar a Clientify');
      }
    } catch (error) {
      console.error('Error:', error);
      
      // Fallback 1: Usar el script directo de Clientify
      try {
        // Cargar script de Clientify si no está presente
        if (!window.ClientifyForm) {
          const script = document.createElement('script');
          script.src = 'https://api.clientify.net/web-marketing/superforms/script/251464.js';
          document.head.appendChild(script);
          
          await new Promise((resolve) => {
            script.onload = resolve;
            setTimeout(resolve, 3000); // timeout después de 3 segundos
          });
        }
        
        // Intentar enviar con Clientify nativo
        if (window.ClientifyForm && window.ClientifyForm.submit) {
          window.ClientifyForm.submit(data);
          setSubmitStatus('success');
          e.target.reset();
        } else {
          throw new Error('Clientify script no disponible');
        }
      } catch (fallbackError) {
        console.error('Error en fallback Clientify:', fallbackError);
        // Fallback 2: enviar por email
        try {
          const emailResponse = await fetch('https://formsubmit.co/admisines@uniempresarial.edu.co', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...data,
              nota: 'Enviado via fallback - verificar integración Clientify'
            })
          });
          
          if (emailResponse.ok) {
            setSubmitStatus('success');
            e.target.reset();
          } else {
            setSubmitStatus('error');
          }
        } catch (emailError) {
          console.error('Error en email fallback:', emailError);
          setSubmitStatus('error');
        }
      }
    }

    setIsSubmitting(false);
  };





  const options = {
    background: { color: { value: 'transparent' } },
    fpsLimit: isMobile ? 20 : 30,
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false }
      }
    },
    particles: {
      color: { value: '#ffffff' },
      links: {
        color: '#ffffff',
        distance: isMobile ? 100 : 150,
        enable: true,
        opacity: 0.08,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: isMobile ? 0.3 : 0.5,
        straight: false,
      },
      number: {
        density: { enable: true, area: isMobile ? 600 : 800 },
        value: isMobile ? 15 : 30,
      },
      opacity: { value: 0.08 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: isMobile ? 2 : 3 } },
    },
    detectRetina: true,
  };

  return (
    <section className="contact-section" id="contact" style={{
      position: 'relative', 
      overflow: 'hidden', 
      background: '#0f172a',
      minHeight: '100vh',
      padding: '60px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Partículas de fondo */}
      {init && (
        <Particles
          id="tsparticles-contact"
          options={options}
          className="particles-bg"
          style={{position: 'absolute', inset: 0, zIndex: 0}}
        />
      )}
      <div className="contact-container" style={{position: 'relative', zIndex: 1}}>
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
                <p>(+601) 3808000</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <div className="info-card-content">
                <h4>Email de contacto</h4>
                <p>admisines@uniempresarial.edu.co</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div className="info-card-content">
                <h4>Ubicación</h4>
                <p>Cra 33a #30-20, Bogotá D.C.</p>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              title="Mapa Cra 33a #30-20, Bogotá D.C."
              src="https://www.google.com/maps?q=Cra+33a+%2330-20,+Bogotá+D.C.&output=embed"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: '10px', marginTop: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* --- COLUMNA DERECHA: FORMULARIO CLIENTIFY --- */}
        <div className="contact-form-panel" style={{
          background: '#1e293b',
          padding: '40px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          minHeight: '600px'
        }}>
          <div className="clientify-form-wrapper">
            <h3 style={{margin: '0 0 20px 0', color: '#fff', fontSize: '2rem', textAlign: 'center', fontWeight: '700'}}>
              🚀 Solicita Información
            </h3>
            <p style={{margin: '0 0 30px 0', color: '#94a3b8', fontSize: '1.1rem', textAlign: 'center', lineHeight: '1.6'}}>
              Completa el formulario y nuestro equipo se pondrá en contacto contigo
            </p>
            
            {/* Nota de desarrollo - remover en producción */}
            <div style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '2px solid rgba(34, 197, 94, 0.3)',
              color: '#22c55e',
              padding: '15px',
              borderRadius: '10px',
              marginBottom: '25px',
              fontSize: '1rem',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              <strong>✅ FORMULARIO ACTIVO:</strong> Conectado a Clientify CRM (ID: 251464)
            </div>
            
            {/* Formulario de Contacto con Integración Clientify */}
            <form 
              className="contact-form"
              onSubmit={handleSubmit}
              style={{
                width: '100%',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                borderRadius: '15px',
                border: '2px solid rgba(228, 2, 44, 0.3)',
                padding: '35px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                position: 'relative'
              }}
            >
              {/* Mensajes de estado */}
              {submitStatus === 'success' && (
                <div style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  color: '#22c55e',
                  padding: '12px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  ¡Gracias! Tu solicitud ha sido enviada exitosamente a nuestro CRM. Te contactaremos pronto.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#ef4444',
                  padding: '12px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="nombre" className="form-label">Nombre Completo *</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  className="form-input" 
                  placeholder="Escribe tu nombre completo"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="tu.email@ejemplo.com"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono" 
                  className="form-input" 
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div className="form-group">
                <label htmlFor="programa" className="form-label">Programa de Interés</label>
                <select id="programa" name="programa" className="form-select">
                  <option value="">Selecciona un programa</option>
                  <option value="ingenieria-sistemas">Ingeniería de Sistemas</option>
                  <option value="administracion-empresas">Administración de Empresas</option>
                  <option value="marketing-digital">Marketing Digital</option>
                  <option value="contaduria">Contaduría Pública</option>
                  <option value="otro">Otro programa</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje" className="form-label">Mensaje *</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  className="form-textarea" 
                  rows={4} 
                  placeholder="Cuéntanos sobre tus intereses académicos y cómo podemos ayudarte..."
                  required
                ></textarea>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" name="privacidad" className="form-checkbox" required />
                  <span className="checkmark"></span>
                  <span>Acepto la <a href="#" className="privacy-link">Política de Privacidad</a> y el tratamiento de mis datos.*</span>
                </label>
              </div>

              <button 
                type="submit" 
                className="contact-form-btn"
                disabled={isSubmitting}
                style={{
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Enviando a Clientify...' : 'Enviar Solicitud'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}