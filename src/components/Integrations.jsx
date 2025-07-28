import { useState } from 'react';
import './Integrations.css';

// RUTAS CORREGIDAS: Ahora son strings directos, no imports
const integrationsData = [
  {
    id: 'lms',
    icon: '📚',
    image: '/assets/img/imagenes/LSM.png',
    title: "LMS Avanzado",
    description: "Gestión completa del aprendizaje con seguimiento personalizado y analíticas en tiempo real para potenciar el éxito estudiantil."
  },
  {
    id: 'connectivity',
    icon: '🔄',
    image: '/assets/img/imagenes/conectividad.png',
    title: "Conectividad Total",
    description: "Sincronización automática entre dispositivos y plataformas para una experiencia de aprendizaje fluida y sin interrupciones."
  },
  {
    id: 'api',
    icon: '🔌',
    image: '/assets/img/imagenes/Apis.png',
    title: "APIs Robustas",
    description: "Nuestra arquitectura abierta permite una integración fluida con sistemas externos y herramientas educativas de terceros."
  }
];

export default function Integrations() {
  const [activeIntegration, setActiveIntegration] = useState('lms');

  const handleAccordionClick = (id) => {
    setActiveIntegration(activeIntegration === id ? null : id);
  };

  const activeIntegrationData = integrationsData.find(item => item.id === activeIntegration);

  return (
    <section className="integrations-section" id="integrations">
      <div className="integrations-content">
        <div className="integrations-header">
          <h2 className="integrations-title">
            Ecosistema Tecnológico <span className="integrations-title-yellow">Unificado</span>
          </h2>
          <p className="integrations-subtitle">
            El campus se integra perfectamente con nuestras plataformas académicas existentes, creando una experiencia educativa sin fisuras.
          </p>
        </div>
        
        <div className="integrations-panel-desktop">
          <div className="integrations-showcase">
            <div className="showcase-background"></div>
            {activeIntegrationData && (
              <img
                src={activeIntegrationData.image}
                alt={activeIntegrationData.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
              />
            )}
          </div>
          <div className="integrations-list">
            {integrationsData.map((item) => (
              <div 
                key={item.id} 
                className={`integration-item ${activeIntegration === item.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveIntegration(item.id)}
              >
                <div className="integration-item-icon">{item.icon}</div>
                <div className="integration-item-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="integrations-accordion-mobile">
          {integrationsData.map((item) => (
            <div key={item.id} className={`accordion-item ${activeIntegration === item.id ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => handleAccordionClick(item.id)}>
                <div className="integration-item-icon">{item.icon}</div>
                <h3 className="accordion-title">{item.title}</h3>
                <div className="accordion-toggle-icon"></div>
              </div>
              <div className="accordion-body">
                <div className="accordion-content">
                  <p>{item.description}</p>
                  <div className="accordion-visual-placeholder">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px' }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}