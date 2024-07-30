import { faFacebook, faInstagram, faLinkedin, faTwitter, faVimeo } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return ( 
        <div className="footerAll">
            <div className="footerContainer">
                <p className="footerCenter">Copyright © 2024 All rights reserved | This template is made with <span className="footerHeart">❤️</span> by <span className="footerAuthor">Ayxan</span></p>
                <p className="footerIcons">
                    <a href=""><FontAwesomeIcon icon={faFacebook}/></a>
                    <a href=""><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href=""><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href=""><FontAwesomeIcon icon={faVimeo}/></a>
                </p>
            </div>
        </div>
     );
}
 
export default Footer;