import './Footer.css';

const Footer = () => {
    const emailLink = <a href="mailto:carleton@hack4impact.org" target="_blank" rel="noopener noreferrer">carleton@hack4impact.org</a>;
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="column-container">
                    <h1>Contact Us</h1>
                    <p>Any question about Hack4Impact@Carleton?</p> 
                    <p>Send us an email at {emailLink}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
