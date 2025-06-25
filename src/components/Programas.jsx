import './Programas.css';

export default function Programas() {
  return (
    <section className="programas-section" id="programas">
      <div className="programas-content">
        <h2 className="programas-title-gradient">Nuestros Programas</h2>
        <div className="programas-grid">
          <div className="programa-card">
            <div className="programa-icon programa-icon-blue">💻</div>
            <h3>Ingeniería de Software</h3>
            <p>Forma parte de la revolución digital: aprende a crear, innovar y liderar proyectos tecnológicos de alto impacto.</p>
          </div>
          <div className="programa-card">
            <div className="programa-icon programa-icon-yellow">📈</div>
            <h3>Marketing</h3>
            <p>Desarrolla estrategias creativas y domina las herramientas digitales para destacar en el mundo del marketing moderno.</p>
          </div>
          <div className="programa-card">
            <div className="programa-icon programa-icon-green">🏢</div>
            <h3>Administración de Empresas</h3>
            <p>Conviértete en un líder empresarial con visión global, habilidades de gestión y enfoque en la innovación.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 