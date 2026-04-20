import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import theme_pattern from '../../assets/right.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.png';

const Services = () => {
  return (
    <div id='services' className='services'>
      
      {/* Titre */}
      <div className='services-title'>
        <h1>Mes Services</h1>
        <img src={theme_pattern} alt='Motif décoratif' />
      </div>

      {/* Liste des services */}
      <div className='services-container'>
        {Services_Data.map((service, index) => (
          
          <Link 
            to={`/service/${service.s_no}`}  // ✅ Correction du template literal
            key={index} 
            className='service-link'
          >
            <div className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>

              <div className='services-readmore'>
                <p>En savoir plus</p>
                <img src={arrow_icon} alt="Flèche pour plus d'informations" />
              </div>
            </div>
          </Link>

        ))}
      </div>

    </div>
  );
};

export default Services;