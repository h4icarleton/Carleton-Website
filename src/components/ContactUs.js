import React from 'react';

const ContactUs = () => {
    var emailLink = <a href="mailto:carleton@hack4impact.org" target="_blank" rel="noopener noreferrer">carleton@hack4impact.org</a>;
    return (
        <footer className="contact-us-footer" style={{position: "fixed", bottom: 0, left: 0, height: "30px", width: "100%", padding: "0.3rem", backgroundColor: "rgba(255, 255, 255, 0.5)", fontSize: "18px"}}>
            <p>Any question about Hack4Impact@Carleton? <span style={{fontWeight: "bold"}}>Contact us:</span> {emailLink}</p>
        </footer>
    )
}

export default ContactUs;
