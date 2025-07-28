import { useState, useEffect } from 'react';
import './Header.css';

const sections = [
  { id: 'admisiones', label: 'Inicio' },
  { id: 'tour', label: 'Mi Aula' },
  { id: 'admission-process', label: 'Admisiones' },
  { id: 'contact', label: 'Contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determina si el usuario ha hecho scroll
      setIsScrolled(window.scrollY > 20);

      // Lógica para resaltar la sección activa en el menú
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSectionId = 'hero';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const sectionTop = el.offsetTop;
          const sectionHeight = el.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSectionId);
    };

    // Añadir listeners y ejecutar una vez para el estado inicial
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Limpiar listeners al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Bloquear el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Función para manejar el clic en los enlaces y cerrar el menú
  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();
  };

  return (
    <header className={`header-fixed ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="header-nav">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <img 
            src="/assets/img/logos/logo-blanco_11zon-300x46.png" 
            alt="Logo Uniempresarial" 
            className="logo-img" 
          />
        </a>

        {/* Menú para Escritorio */}
        <ul className="nav-links-desktop">
          {sections.map((section) => (
            <li key={section.id}>
              <a 
                href={`#${section.id}`}
                className={activeSection === section.id ? 'active' : ''}
                onClick={() => handleLinkClick(section.id)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Contenedor del Menú Móvil */}
        <div className={`nav-links-mobile-container ${isMenuOpen ? 'open' : ''}`}>
          <button 
            className="mobile-close-btn" 
            onClick={closeMenu} 
            aria-label="Cerrar menú de navegación"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <ul className="nav-links-mobile">
            {sections.map((section) => (
              <li key={section.id}>
                <a 
                  href={`#${section.id}`}
                  className={activeSection === section.id ? 'active' : ''}
                  onClick={() => handleLinkClick(section.id)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Botón de Hamburguesa */}
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>
    </header>
  );
}