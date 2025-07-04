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
      setIsScrolled(window.scrollY > 20);

      let current = 'hero';
      const offset = 120; // Mayor offset por el alto del header
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
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
          <img src="../../public/assets/img/logos/logoue.png" alt="Logo Uniempresarial" className="logo-img" />
        </a>

        <ul className="nav-links-desktop">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className={activeSection === section.id ? 'active' : ''}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        
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