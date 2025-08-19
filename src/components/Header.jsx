import { useState, useEffect } from 'react';
import './Header.css';

const sections = [
  { id: 'admisiones', label: 'Inicio' },
  { id: 'tour', label: 'Mi Aula' },
  { id: 'admission-process', label: 'Admisiones' },
  { id: 'contact', label: 'Contacto' },
];

const supportLinks = [
  { 
    label: 'GLPI', 
    url: 'https://helpdesk.uniempresarial.edu.co:4432/?_gl=1*o3nedz*_gcl_au*MTUzNDcxODc2OS4xNzQ4MDQ3MDMz*_ga*OTk0MTU2Njg3LjE3MjI5MDc0MjQ.*_ga_GRRFL9KFYX*czE3NTM4MDQ4NDckbzU4JGcxJHQxNzUzODA0OTM0JGo1NyRsMCRoMTg0MTMxODY1MA..',
    external: true
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Referencia al elemento que tiene el scroll (<html>)
    const scrollContainer = document.documentElement;

    const handleScroll = () => {
      // Usamos scrollContainer.scrollTop en lugar de window.scrollY
      const scrollTop = scrollContainer.scrollTop;
      
      // console.log('Scroll Top del contenedor:', scrollTop); // Puedes descomentar esto para verificar

      setIsScrolled(scrollTop > 20);

      const scrollPosition = scrollTop + window.innerHeight / 2;
      let currentSectionId = 'hero';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          currentSectionId = section.id;
          break;
        }
      }
      setActiveSection(currentSectionId);
    };

    // ❗️ CAMBIO CLAVE: El listener se añade al 'document'
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    // Ejecutar una vez para el estado inicial
    handleScroll();

    // Limpieza del listener
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  // Cerrar dropdown de soporte cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSupportDropdownOpen && !event.target.closest('.support-dropdown')) {
        setIsSupportDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSupportDropdownOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();
  };

  const toggleSupportDropdown = () => {
    setIsSupportDropdownOpen(!isSupportDropdownOpen);
  };

  const closeSupportDropdown = () => {
    setIsSupportDropdownOpen(false);
  };

  return (
    // Esta parte ya era correcta, la clase 'scrolled' se añade dinámicamente
    <header className={`header-fixed ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="header-nav">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <img 
            src={isScrolled ? "/assets/img/logos/virtuempresarialblanco.png" : "/assets/img/logos/logo-blanco_11zon-300x46.png"} 
            alt="Logo Uniempresarial" 
            className="logo-img" 
          />
        </a>

        {/* --- Menú de escritorio --- */}
        <ul className="nav-links-desktop">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className={activeSection === section.id ? 'active' : ''} onClick={() => handleLinkClick(section.id)}>
                {section.label}
              </a>
            </li>
          ))}
          
          {/* Menú desplegable de Soporte */}
          <li className="support-dropdown">
            <button 
              className={`support-dropdown-btn ${isSupportDropdownOpen ? 'active' : ''}`}
              onClick={toggleSupportDropdown}
            >
              Soporte
              <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {isSupportDropdownOpen && (
              <ul className="support-dropdown-menu">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        closeSupportDropdown();
                        // Forzar la apertura en nueva pestaña
                        window.open(link.url, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        

        
        {/* --- Menú móvil --- */}
        <div className={`nav-links-mobile-container ${isMenuOpen ? 'open' : ''}`}>
          <button className="mobile-close-btn" onClick={closeMenu} aria-label="Cerrar menú">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <ul className="nav-links-mobile">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className={activeSection === section.id ? 'active' : ''} onClick={() => handleLinkClick(section.id)}>
                  {section.label}
                </a>
              </li>
            ))}
            
            {/* Soporte en menú móvil */}
            <li className="mobile-support-section">
              <span className="mobile-support-title">Soporte</span>
              {supportLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    closeMenu();
                    // Forzar la apertura en nueva pestaña
                    window.open(link.url, '_blank', 'noopener,noreferrer');
                  }}
                  className="mobile-support-link"
                >
                  {link.label}
                </a>
              ))}
            </li>
          </ul>
        </div>

        {/* Botón de Hamburguesa */}
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Abrir menú" aria-expanded={isMenuOpen}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>
    </header>
  );
}