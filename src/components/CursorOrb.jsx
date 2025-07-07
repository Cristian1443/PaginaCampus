// src/components/CursorOrb.jsx
import { useState, useEffect } from 'react';
import './CursorOrb.css';

export default function CursorOrb() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      setPosition({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      setPosition({ x: touch.clientX, y: touch.clientY });
    };

    // Eventos para desktop
    window.addEventListener('mousemove', handleMouseMove);

    // Eventos para móvil
    if (isMobile) {
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchstart', handleTouchStart);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <div
      className="cursor-orb"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}