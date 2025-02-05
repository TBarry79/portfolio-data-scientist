import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo_profile2.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={footer_logo} alt=''/>
                <p>Data Scientist passionné, spécialisé en analyse des données et apprentissage automatique, j'optimise les processus décisionnels en transformant des données complexes en solutions impactantes.</p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt=''/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>© 2023 Tidiane Barry. Tous droits réservés.</p>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect whith me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer