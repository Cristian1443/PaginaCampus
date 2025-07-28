    import './AdmisionesProcess.css';
    import { FaUserEdit, FaComments, FaCheckCircle, FaFileSignature } from 'react-icons/fa';

    // --- Datos para los pasos de admisión ---
    const admissionSteps = [
    {
        icon: <FaUserEdit />,
        title: "1. Solicita tu Admisión",
        description: "Completa el formulario en línea con tu información personal y académica. Es el primer paso para unirte a nuestra comunidad."
    },
    {
        icon: <FaComments />,
        title: "2. Entrevista y Pruebas",
        description: "Participa en una entrevista con nuestro equipo de admisiones y realiza las pruebas de aptitud correspondientes a tu programa de interés."
    },
    {
        icon: <FaCheckCircle />,
        title: "3. Resultados de Admisión",
        description: "Recibirás una notificación por correo electrónico con el resultado de tu proceso. ¡Esperamos darte la bienvenida!"
    },
    {
        icon: <FaFileSignature />,
        title: "4. Formaliza tu Matrícula",
        description: "Una vez admitido, sigue las instrucciones para legalizar tu matrícula, realizar los pagos y seleccionar tus horarios."
    }
    ];


    export default function AdmisionesProcess() {
    return (
        <section className="admission-process-section" id="admission-process">
        <div className="admission-container">
            <div className="admission-header">
            <h2 className="admission-title">
                Tu Camino hacia <span className="admission-title-highlight">Uniempresarial</span>
            </h2>
            <p className="admission-subtitle">
                Nuestro proceso de admisión está diseñado para ser claro, ágil y acompañarte en cada etapa.
            </p>
            </div>

            <div className="admission-timeline">
            {admissionSteps.map((step, index) => (
                <div key={index} className="timeline-item">
                <div className="timeline-icon-wrapper">
                    <div className="timeline-icon">{step.icon}</div>
                </div>
                <div className="timeline-content">
                    <h3 className="timeline-title">{step.title}</h3>
                    <p className="timeline-description">{step.description}</p>
                </div>
                </div>
            ))}
            </div>
            
            <div className="admission-cta">
            <a href="#contact" className="admission-cta-btn">
                Iniciar mi Proceso Ahora
            </a>
            </div>
        </div>
        </section>
    );
    }