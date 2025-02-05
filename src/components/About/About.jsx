import React from 'react';
import './About.css';
import theme_pattern from '../../assets/right.svg';
import photo from '../../assets/photo_Profil.jpg';

const About = () => {
  return (
    <div id='a-propos' className='about'>
      <div className='about-title'>
        <h1>À propos de moi</h1>
        <img src={theme_pattern} alt='Motif décoratif' />
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={photo} alt='Photo de Barry Tidiane' />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>
              Depuis toujours, je suis fasciné par la manière dont les données
              peuvent raconter une histoire. Mon intérêt pour l'analyse de
              données est né de ma curiosité pour comprendre les tendances et
              comportements humains à travers les chiffres. Aujourd'hui, en tant
              que Data Scientist, je suis animé par le désir de résoudre des
              problèmes complexes grâce à des solutions data-driven.
            </p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'>
              <p>Python</p>
              <hr className='skill-bar' style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>SQL</p>
              <hr className='skill-bar' style={{ width: '60%' }} />
            </div>
            <div className='about-skill'>
              <p>Deep Learning</p>
              <hr className='skill-bar' style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>Cloud computing</p>
              <hr className='skill-bar' style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>NLP</p>
              <hr className='skill-bar' style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>MLOps</p>
              <hr className='skill-bar' style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>Power BI</p>
              <hr className='skill-bar' style={{ width: '50%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>1+</h1>
          <p>Années d'expériences</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>8+</h1>
          <p>Projets réalisés</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>2+</h1>
          <p>Certifications</p>
        </div>
      </div>
    </div>
  );
};

export default About;
