import { useState } from 'react';
import './Integrations.css';

// --- Array de datos para las integraciones ---
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

export default function Integrations() {
  const [activeIntegration, setActiveIntegration] = useState('lms');

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
        
        <div className="integrations-panel">
          {/* Columna Izquierda: Visualización */}
          <div className="integrations-showcase">
            <div className="showcase-background"></div>
            {/* Las visualizaciones cambian según el estado `activeIntegration` */}
            <div className={`showcase-visual lms-visual ${activeIntegration === 'lms' ? 'active' : ''}`}>
                {/* Aquí podrías poner una imagen o un SVG complejo para LMS */}
                <p>Visualización del LMS</p>
            </div>
            <div className={`showcase-visual connectivity-visual ${activeIntegration === 'connectivity' ? 'active' : ''}`}>
                <p>Visualización de Conectividad</p>
            </div>
            <div className={`showcase-visual api-visual ${activeIntegration === 'api' ? 'active' : ''}`}>
                <p>Visualización de APIs</p>
            </div>
          </div>

          {/* Columna Derecha: Lista de Integraciones */}
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
      </div>
    </section>
  );
}