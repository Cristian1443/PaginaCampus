import './ContactForm.css';
import { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ContactForm() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
            Nuestro equipo está listo para resolver todas tus dudas. Completa el formulario o contáctanos directamente.
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

        {/* --- COLUMNA DERECHA: FORMULARIO --- */}
        <div className="contact-form-panel" style={{
          background: '#1e293b',
          padding: '40px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div className="clientify-form-wrapper" style={{textAlign: 'center', width: '100%'}}>
            {/* Header con animación */}
            <div style={{marginBottom: '40px', position: 'relative'}}>
              <div style={{
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-accent) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px auto',
                fontSize: '2.5rem',
                boxShadow: '0 15px 35px rgba(228, 2, 44, 0.4), 0 5px 15px rgba(0, 0, 0, 0.3)',
                animation: 'pulse 2s infinite',
                position: 'relative'
              }}>
                <span style={{
                  background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}>
                  🎓
                </span>
              </div>
              
              <h3 style={{
                margin: '0 0 15px 0', 
                color: '#fff', 
                fontSize: '2.2rem', 
                fontWeight: '800',
                background: 'linear-gradient(135deg, #fff 0%, #cbd5e1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}>
                ¡Comienza Tu Futuro!
              </h3>
              
              <p style={{
                margin: '0 0 30px 0', 
                color: '#94a3b8', 
                fontSize: '1.1rem', 
                lineHeight: '1.7',
                maxWidth: '350px',
                
              }}>
                Accede a nuestro sistema de admisiones y da el primer paso hacia tu carrera profesional
              </p>
              
              {/* Decoración */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
                borderRadius: '1px'
              }}></div>
            </div>
            
            {/* Botones de Acción Mejorados */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%',
              maxWidth: '420px'
            }}>
              {/* Botón Principal - Formulario Clientify */}
              <a
                href="https://apps.clientify.net/forms/simpleembed/#/success/twostepformpopup/251464/11299"
                target="_blank"
                rel="noopener noreferrer"
                className="clientify-btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '15px',
                  padding: '20px 35px',
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, #ff1744 50%, var(--color-secondary) 100%)',
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  boxShadow: '0 10px 30px rgba(228, 2, 44, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px) scale(1.03)';
                  e.target.style.boxShadow = '0 15px 40px rgba(228, 2, 44, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                  e.target.style.background = 'linear-gradient(135deg, #ff1744 0%, var(--color-primary) 50%, var(--color-secondary) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 10px 30px rgba(228, 2, 44, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'linear-gradient(135deg, var(--color-primary) 0%, #ff1744 50%, var(--color-secondary) 100%)';
                }}
              >
                <span style={{
                  fontSize: '1.4rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}>🎯</span>
                <span>Solicitar Admisión</span>
                <span style={{
                  fontSize: '1rem',
                  opacity: '0.8'
                }}>→</span>
              </a>

              {/* Botón Secundario - WhatsApp */}
              <a
                href="https://wa.me/573808000?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20programas%20virtuales%20de%20Uniempresarial"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  padding: '16px 28px',
                  background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.02)';
                  e.target.style.boxShadow = '0 12px 35px rgba(37, 211, 102, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                  e.target.style.background = 'linear-gradient(135deg, #128c7e 0%, #25d366 100%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)';
                }}
              >
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <span style={{fontSize: '1.3rem'}}>💬</span>
                  <span>Chat en WhatsApp</span>
                </div>
                <span style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '4px 8px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  Respuesta inmediata
                </span>
              </a>

              {/* Botones Secundarios en Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginTop: '8px'
              }}>
                {/* Email */}
                <a
                  href="mailto:admisines@uniempresarial.edu.co?subject=Consulta sobre programas virtuales&body=Hola, me interesa conocer más sobre los programas virtuales de Uniempresarial."
                  className="contact-btn-secondary"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '16px 12px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: '#a5b4fc',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(99, 102, 241, 0.25)';
                    e.target.style.color = '#c7d2fe';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(99, 102, 241, 0.15)';
                    e.target.style.color = '#a5b4fc';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{fontSize: '1.5rem'}}>📧</span>
                  <span>Email</span>
                </a>

                {/* Teléfono */}
                <a
                  href="tel:+573808000"
                  className="phone-btn"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '16px 12px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    color: '#fbbf24',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(245, 158, 11, 0.25)';
                    e.target.style.color = '#fcd34d';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(245, 158, 11, 0.15)';
                    e.target.style.color = '#fbbf24';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{fontSize: '1.5rem'}}>📞</span>
                  <span>Llamar</span>
                </a>
              </div>

              {/* Información con mejores estilos */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                color: '#93c5fd',
                padding: '18px',
                borderRadius: '12px',
                fontSize: '0.9rem',
                textAlign: 'center',
                marginTop: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  animation: 'shimmer 3s infinite'
                }}></div>
                <div style={{position: 'relative', zIndex: 1}}>
                  <strong style={{color: '#60a5fa'}}>🔐 Proceso Seguro:</strong> Tu información está protegida con encriptación SSL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}