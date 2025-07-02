import { useState, useEffect } from 'react';
import './Header.css';

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'features', label: 'Campus' },
  { id: 'about', label: 'Stuttgart' },
  { id: 'tour', label: 'Espacios' },
  { id: 'integrations', label: 'Tecnología' },
  { id: 'partners', label: 'FuSoft' },
  { id: 'admisiones', label: 'Admisiones' },
  { id: 'programas', label: 'Programas' },
  { id: 'contact', label: 'Contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Manejar el estado de scroll
      setIsScrolled(window.scrollY > 20);

      // Manejar la sección activa
      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function para re-habilitar el scroll si el componente se desmonta
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header-fixed ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="header-nav">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <img src="/src/assets/img/logos/logo-blanco_11zon-300x46.png" alt="Logo Uniempresarial" className="logo-img" />
        </a>

        {/* --- Menú de Escritorio --- */}
        <ul className="nav-links-desktop">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className={activeSection === section.id ? 'active' : ''}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* --- Menú Móvil --- */}
        <div className={`nav-links-mobile-container ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links-mobile">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} onClick={closeMenu}>
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
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>
    </header>
  );
}