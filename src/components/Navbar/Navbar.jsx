import React, { useRef, useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo_profile2.png';
import underline from '../../assets/right.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {

  const [menu, setMenu] = useState('accueil');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='Logo' />
      <img src={menu_open} onClick={openMenu} alt='Ouvrir le menu' className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='Fermer le menu' className='nav-mob-close'/>
        
        <li>
          <AnchorLink className='anchor-link' href='#accueil'>
            <p onClick={() => setMenu('accueil')}>Accueil</p>
          </AnchorLink>
          {menu === 'accueil' ? <img src={underline} alt=''/> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#a-propos'>
            <p onClick={() => setMenu('a-propos')}>À propos de moi</p>
          </AnchorLink>
          {menu === 'a-propos' ? <img src={underline} alt=''/> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setMenu('services')}>Services</p>
          </AnchorLink>
          {menu === 'services' ? <img src={underline} alt=''/> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#portfolio'>
            <p onClick={() => setMenu('portfolio')}>Portfolio</p>
          </AnchorLink>
          {menu === 'portfolio' ? <img src={underline} alt=''/> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' ? <img src={underline} alt=''/> : <></>}
        </li>
      </ul>

      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Me contacter
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
