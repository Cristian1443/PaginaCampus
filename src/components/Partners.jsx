import './Partners.css';

export default function Partners() {
  return (
    <section className="partners-section" id="partners">
      <div className="partners-content">
        <h2 className="partners-title">
          Colaboración <span className="partners-title-yellow">Estratégica</span>
        </h2>
        <p className="partners-subtitle">
          Este proyecto ha sido prototipado en colaboración con la Fábrica de Soluciones FuSoft, líderes en innovación tecnológica
        </p>
        <div className="partners-logos" style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'18px',marginBottom:'32px'}}>
          <img src="/src/assets/img/logos/Logo uniempresarial rectangular CCB_Logo Completo Uniempresarial a color.png" alt="Uniempresarial" className="partner-logo" style={{height:'48px',background:'#fff',borderRadius:'8px',padding:'6px'}} />
          <span className="plus" style={{fontSize:'2.2rem',color:'#fff',fontWeight:'700'}}>+</span>
          <img src="/src/assets/img/logos/fUSoft extended 7.png" alt="FuSoft" className="partner-logo" style={{height:'48px',background:'#fff',borderRadius:'8px',padding:'6px'}} />
        </div>
        <div className="partners-main">
          <div className="partners-image">
            {/* Aquí puedes poner la imagen real cuando la tengas */}
            <svg width="420" height="260" viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="420" height="260" rx="18" fill="#e3f2fd"/>
              <rect x="30" y="40" width="90" height="50" rx="8" fill="#fff"/>
              <rect x="140" y="30" width="60" height="30" rx="6" fill="#fff"/>
              <rect x="210" y="60" width="70" height="40" rx="8" fill="#fff"/>
              <rect x="60" y="110" width="200" height="20" rx="6" fill="#bbdefb"/>
            </svg>
          </div>
          <div className="partners-cards">
            <div className="partners-card">
              <div className="partners-card-title">Innovación Conjunta</div>
              <div className="partners-card-desc">
                La alianza entre Uniempresarial y FuSoft representa la unión perfecta entre experiencia educativa e innovación tecnológica.
                <ul className="partners-list">
                  <li><span className="dot" style={{background:'#ffd600'}}></span>Desarrollo de prototipos avanzados</li>
                  <li><span className="dot" style={{background:'#ffd600'}}></span>Soluciones tecnológicas personalizadas</li>
                  <li><span className="dot" style={{background:'#ffd600'}}></span>Investigación y desarrollo continuo</li>
                </ul>
              </div>
            </div>
            <div className="partners-card partners-card-yellow">
              <div className="partners-card-title">Fábrica de Soluciones</div>
              <div className="partners-card-desc">
                FuSoft aporta su experiencia en el desarrollo de soluciones tecnológicas innovadoras para crear la plataforma educativa más avanzada del mercado.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
