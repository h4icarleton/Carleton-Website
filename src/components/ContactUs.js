import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './contact.css';

const ContactUs = () => {
    const location = useLocation();
    const [curLocation, setLocation] = useState({
        location: location.pathname
    });

    useEffect(()=> {
        setLocation(location.pathname);
    }, [location.pathname]);

    const emailLink = <a href="mailto:carleton@hack4impact.org" target="_blank" rel="noopener noreferrer">carleton@hack4impact.org</a>;
    return (
        <footer className="contact-us-footer" style={ curLocation === '/' ? {position: 'fixed'} : {}}>
            <p>Any question about Hack4Impact@Carleton? <span style={{fontWeight: "bold"}}>Contact us:</span> {emailLink}</p>
        </footer>
    )
}

export default ContactUs;
