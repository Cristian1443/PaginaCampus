import { useState } from 'react';
import './Integrations.css';

const integrationsData = [
  {
    id: 'lms',
    icon: '📚',
    title: "LMS Avanzado",
    description: "Gestión completa del aprendizaje con seguimiento personalizado y analíticas en tiempo real para potenciar el éxito estudiantil."
  },
  {
    id: 'connectivity',
    icon: '🔄',
    title: "Conectividad Total",
    description: "Sincronización automática entre dispositivos y plataformas para una experiencia de aprendizaje fluida y sin interrupciones."
  },
  {
    id: 'api',
    icon: '🔌',
    title: "APIs Robustas",
    description: "Nuestra arquitectura abierta permite una integración fluida con sistemas externos y herramientas educativas de terceros."
  }
];

// Componente para la visualización, para mantener el JSX más limpio
const ShowcaseVisual = ({ type, isActive }) => {
  const visualMap = {
    lms: { class: 'lms-visual', text: 'Visualización del LMS' },
    connectivity: { class: 'connectivity-visual', text: 'Visualización de Conectividad' },
    api: { class: 'api-visual', text: 'Visualización de APIs' },
  };
  const visual = visualMap[type];
  return (
    <div className={`showcase-visual ${visual.class} ${isActive ? 'active' : ''}`}>
      <p>{visual.text}</p>
    </div>
  );
};

export default function Integrations() {
  const [activeIntegration, setActiveIntegration] = useState('lms');

  // Función para manejar el clic en el acordeón (permite abrir/cerrar)
  const handleAccordionClick = (id) => {
    setActiveIntegration(activeIntegration === id ? null : id);
  };

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
        
        {/* --- Layout de Escritorio (se oculta en móvil) --- */}
        <div className="integrations-panel-desktop">
          <div className="integrations-showcase">
            <div className="showcase-background"></div>
            <ShowcaseVisual type="lms" isActive={activeIntegration === 'lms'} />
            <ShowcaseVisual type="connectivity" isActive={activeIntegration === 'connectivity'} />
            <ShowcaseVisual type="api" isActive={activeIntegration === 'api'} />
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

        {/* --- NUEVO Acordeón para Móvil (se muestra solo en móvil) --- */}
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
                     <ShowcaseVisual type={item.id} isActive={true} />
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