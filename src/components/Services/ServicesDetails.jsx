import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ServicesDetails.css';
import Services_Data from '../../assets/services_data';

const ServicesDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = Services_Data.find(
    (s) => s.s_no === id
  );

  const handleBackToServices = () => {
    navigate('/');
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log("Section services non trouvée");
      }
    }, 150);
  };

  if (!service) {
    return (
      <div className="service-detail">
        <h2>Service non trouvé</h2>
        <button onClick={handleBackToServices} className="back-btn">
          ← Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div className="service-detail">
      <div className="service-card">
        <h1>{service.s_name}</h1>
        <p className="service-desc">{service.s_desc}</p>

        <div className="service-content">
          <h3>📊 Description détaillée</h3>
          <p>{service.detailedDescription}</p>

          <h3>⚙️ Ce que je propose</h3>
          <ul>
            {service.offerings.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3>🛠️ Technologies maîtrisées</h3>
          <div className="tech-badges">
            {service.technologies.map((tech, idx) => (
              <span key={idx} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="service-footer">
        <button onClick={handleBackToServices} className="back-btn">
          ← Retour aux services
        </button>
      </div>
    </div>
  );
};

export default ServicesDetails;