import React from 'react';
import './contact.css';

const ContactUs = () => {
    var emailLink = <a href="mailto:carleton@hack4impact.org" target="_blank" rel="noopener noreferrer">carleton@hack4impact.org</a>;
    return (
        <footer className="contact-us-footer">
            <p>Any question about Hack4Impact@Carleton? <span style={{fontWeight: "bold"}}>Contact us:</span> {emailLink}</p>
        </footer>
    )
}

export default ContactUs;
