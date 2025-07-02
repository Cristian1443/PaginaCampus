import './Admisiones.css';

// --- Array de datos para los pasos de admisión ---
const admissionSteps = [
  {
    step: "01",
    title: "Explora y Descubre",
    description: "Navega por nuestros programas, conoce el campus virtual y resuelve tus dudas con nuestro equipo."
  },
  {
    step: "02",
    title: "Aplica en Línea",
    description: "Completa tu solicitud a través de nuestro portal digital de forma rápida, segura y sin papeleos."
  },
  {
    step: "03",
    title: "Inicia tu Futuro",
    description: "Una vez admitido, recibe tus credenciales y prepárate para una experiencia educativa transformadora."
  }
];

export default function Admisiones() {
  return (
    <section className="admisiones-section" id="admisiones">
      <div className="admisiones-content">
        <h2 className="admisiones-title-gradient">Tu Futuro Comienza Aquí</h2>
        <p className="admisiones-desc">
          Nuestro proceso de admisión es ágil, transparente y 100% digital. Únete a la nueva generación de líderes en solo 3 simples pasos.
        </p>
        
        {/* --- NUEVA SECCIÓN DE PASOS --- */}
        <div className="admisiones-steps-grid">
          {admissionSteps.map((item, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{item.step}</div>
              <div className="step-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" className="admisiones-btn">Comenzar mi Proceso</a>
      </div>
    </section>
  );
}