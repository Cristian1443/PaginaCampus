// src/components/CursorOrb.jsx
import { useState, useEffect } from 'react';
import './CursorOrb.css';

export default function CursorOrb() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-orb"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}