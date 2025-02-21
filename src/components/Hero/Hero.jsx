import React from 'react';
import './Hero.css';
import photo from '../../assets/photo_Profil.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='accueil' className='hero'>
        <img src={photo} alt='Photo de Barry Tidiane' />
        <h1>Bonjour et bienvenue ! <span>Je suis Barry Tidiane,</span> Data Scientist en Île-de-France</h1>
        <p>
          Data Scientist passionné, je transforme des défis complexes en solutions concrètes. 
          Explorez mon portfolio pour découvrir comment mes modèles prédictifs et solutions 
          basées sur les données peuvent renforcer votre entreprise.
        </p>
        <div className='hero-action'>
            <div className='hero-connect'>
              <AnchorLink className='anchor-link' offset="80" href='#contact'>
                Me contacter
              </AnchorLink>
            </div>
            <div className='hero-resume'>
              Mon CV
            </div>
        </div>
    </div>
  );
}

export default Hero;
