import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.css';
import logo1 from '../../assets/logo_profile2.png';
import logo2 from '../../assets/logo_alt.jpg';
import underline from '../../assets/right.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('accueil');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  // Détection du scroll pour changer le logo
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Vérifie si l'utilisateur est sur une page projet
  const isProjectPage = location.pathname.startsWith('/project/');

  // Navigation Links
  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'a-propos', label: 'À propos de moi' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  // Si on est sur une page projet, on masque la navbar
  if (isProjectPage) return null;

  return (
    <nav className={`navbar ${scrolling ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo dynamique au scroll */}
        <AnchorLink href="#accueil" className="logo-link">
          <img src={scrolling ? logo2 : logo1} alt="Logo" className="logo" />
        </AnchorLink>

        {/* Menu Mobile Toggle */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuOpen ? menu_close : menu_open} alt="Menu" />
        </button>

        {/* Navigation principale */}
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <AnchorLink
                className="anchor-link"
                href={`#${link.id}`}
                offset="80"  // Décale la position d'ancrage de 80px (à ajuster selon la hauteur de la Navbar)
                onClick={() => {
                  setMenu(link.id);
                  setMenuOpen(false);
                }}
              >
                <p>{link.label}</p>
              </AnchorLink>
              {menu === link.id && <img src={underline} alt="Soulignement" />}
            </li>
          ))}
        </ul>

        {/* Bouton de contact */}
        <div className="nav-connect">
          <AnchorLink className="anchor-link" href="#contact" offset="80">
            Me contacter
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
