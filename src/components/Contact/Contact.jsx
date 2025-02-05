import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/right.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "488c5aee-3ed0-4767-ad77-2f2a92fd94f1"); // Utiliser une variable d'environnement

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const result = await res.json();

            if (res.ok) {
                alert(result.message);
            } else {
                alert(`Erreur : ${result.message}`);
            }
        } catch (error) {
            alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Entrons en contact</h1>
                <img src={theme_pattern} alt='Motif décoratif' />
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Parlons-en</h1>
                    <p>Je suis disponible pour de nouveaux projets. N'hésitez pas à me contacter pour tout ce sur quoi vous aimeriez que je travaille.</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail_icon} alt="Icône d\'email" />
                            <p>tbarry.bt@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={call_icon} alt='Icône de téléphone' />
                            <p>+33651448604</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={location_icon} alt='Icône de localisation' />
                            <p>Ile-de-France, France</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor='name'>Votre nom</label>
                    <input type='text' id='name' name='name' placeholder='Entrez votre nom' required />
                    <label htmlFor='email'>Votre email</label>
                    <input type='email' id='email' name='email' placeholder='Entrez votre email' required />
                    <label htmlFor='message'>Écrivez votre message ici</label>
                    <textarea id='message' name='message' rows='8' placeholder='Entrez votre message' required></textarea>
                    <button type='submit' className='contact-submit'>Envoyer maintenant</button>
                </form>
            </div>
        </div>
    );
};

export default Contact