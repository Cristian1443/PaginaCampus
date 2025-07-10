import { useState, useEffect } from 'react';
import './Header.css';

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'features', label: 'Mi Aula' },
  { id: 'about', label: 'Stuttgart' },
  { id: 'tour', label: 'Bienestar' },
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
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = 'hero';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const sectionTop = el.offsetTop;
          const sectionHeight = el.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header-fixed ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="header-nav">
        <a href="#hero" className="logo" onClick={closeMenu}>
          {/* Se usa el logo original. El CSS se encargará del color. */}
          <img src="/assets/img/logos/logo.png" alt="Logo Uniempresarial" className="logo-img" />
        </a>

        <ul className="nav-links-desktop">
          {sections.map((section) => (
            <li key={section.id}>
              <a 
                href={`#${section.id}`}
                className={activeSection === section.id ? 'active' : ''}
                onClick={() => {
                  setActiveSection(section.id);
                  closeMenu();
                }}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className={`nav-links-mobile-container ${isMenuOpen ? 'open' : ''}`}>
          <button className="mobile-close-btn" onClick={closeMenu} aria-label="Cerrar menú">
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
                  onClick={() => {
                    setActiveSection(section.id);
                    closeMenu();
                  }}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
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