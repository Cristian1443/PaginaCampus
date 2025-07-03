import { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useSpring } from 'framer-motion';
import './Features.css';

// Datos de las tarjetas
const featuresData = [
  {
    id: 'social',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 00-12.234 0M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconClass: 'feature-icon-blue',
    title: 'Interacción Social',
    description: 'Conecta, colabora y crea en espacios de encuentro virtual diseñados para el networking.',
  },
  {
    id: 'digital',
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    iconClass: 'feature-icon-yellow',
    title: 'Recursos Digitales',
    description: 'Accede a una biblioteca infinita de conocimiento con materiales de última generación.',
  },
  {
    id: 'simulators',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-1.732.86-3.322 2.25-4.337a3.75 3.75 0 115.253 5.253c-1.015 1.39-2.605 2.25-4.337 2.25H14.25v-3.163z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 18.75c-1.732 0-3.322-.86-4.337-2.25a3.75 3.75 0 115.253-5.253c1.39 1.015 2.25 2.605 2.25 4.337V18.75z" />
      </svg>
    ),
    iconClass: 'feature-icon-green',
    title: 'Simuladores Prácticos',
    description: 'Aplica tus conocimientos en entornos profesionales realistas y sin riesgos.',
  },
  {
    id: 'ai',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 3.75 3.75 0 00-7.467.495A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    iconClass: 'feature-icon-purple',
    title: 'Asistencia con IA',
    description: 'Tu asistente inteligente personal, Stuttgart, está disponible 24/7 para guiarte.',
  }
];

const springValues = { damping: 30, stiffness: 100, mass: 1.5 };

// Componente individual para la tarjeta
const TiltedFeatureCard = ({ feature, isVisible, index }) => {
  const ref = useRef(null);

  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);
  const scale = useSpring(1, springValues);

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -14;
    const rotationY = (offsetX / (rect.width / 2)) * 14;
    rotateX.set(rotationX);
    rotateY.set(rotationY);
    scale.set(1.05);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      className="feature-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <motion.div
        className="feature-card-inner"
        style={{ rotateX, rotateY, scale }}
      >
        <div className={`feature-icon ${feature.iconClass}`}>
          {feature.icon}
        </div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </motion.div>
    </motion.div>
  );
};


export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.1 }
    );
    if (featuresRef.current) observer.observe(featuresRef.current);
    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
    };
  }, []);

  return (
    <section className="features-section" id="features">
      <div className="features-content">
        <h2 className="features-title-gradient">
          Un Campus Virtual <span className="features-title-yellow">Excepcional</span>
        </h2>
        <p className="features-subtitle">
          Descubre un entorno educativo diseñado para el éxito. Cada herramienta y espacio virtual ha sido creado para ofrecerte una experiencia de aprendizaje inmersiva, interactiva y sin límites.
        </p>
        <div className="features-grid" ref={featuresRef}>
          {featuresData.map((feature, index) => (
            <TiltedFeatureCard 
              key={feature.id} 
              feature={feature} 
              isVisible={isVisible}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}