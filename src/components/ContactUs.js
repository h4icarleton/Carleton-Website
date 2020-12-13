import React from 'react';

const ContactUs = () => {
    var emailLink = <a href="mailto:carleton@hack4impact.org" target="_blank" rel="noopener noreferrer">carleton@hack4impact.org</a>;
    return (
        <footer class="contact-us-footer" style={{position: "fixed", bottom: 0, left: 0, height: "25px", width: "100%", padding: "0.3rem", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
            <p>Any question about Hack4Impact@Carleton? Contact us: {emailLink}</p>
        </footer>
    )
}

export default ContactUs;
