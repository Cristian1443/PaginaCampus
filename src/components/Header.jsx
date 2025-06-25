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
  { id: 'footer', label: 'Contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-fixed">
      <nav className="header-nav">
        <div className="logo">
          <img src="/src/assets/img/logos/logo ue.png" alt="Logo" className="logo-placeholder" />
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={closeMenu}
                className={activeSection === section.id ? 'active' : ''}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        <button 
          className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
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
