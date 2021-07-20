import React from 'react';
import ContactItem from '../components/ContactItem';
import Tittle from '../components/Tittle';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';



function ContactPage() {
    return (
        <div>
        <div className="title">
        <Tittle title={'Contact'} span={'Contact'} />
        </div>
        <div className="ContactPage">
            <div className="map-sect">
                <iframe title="My map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14028.459861081445!2d77.4816581!3d28.4760842!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1625215092781!5m2!1sen!2sin" frameBorder="0" width="450" height="350" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
            <div className="contact-sect">
                <ContactItem icon={phone} text1={'+91 9667936252'} title={'Phone'} />
                <ContactItem icon={email} text1={'25sonali07@gmail.com'} title={'Email'} />
                <ContactItem icon={location} text1={'Gr.Noida'} title={'Location'} />
            </div>
        </div>
        </div>
    )
}

export default ContactPage;