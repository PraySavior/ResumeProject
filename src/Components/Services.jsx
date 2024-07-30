import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import { faTv, faVideo } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    return ( 
        <div className="servicesAll">
            <h2 className="headers">My <strong>Services</strong></h2>
            <div className="servicesBoxes">
                <div className="serviceBox">
                    <span><FontAwesomeIcon icon={faWindowMaximize} /></span>
                    <h3>Web Design</h3>
                    <p className='serviceInfo'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p className='serviceLink'><a href="">Learn More </a></p>
                </div>
                <div className="serviceBox">
                    <span><FontAwesomeIcon icon={faTv} / ></span>
                    <h3>Search Engine Optimization</h3>
                    <p className='serviceInfo'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p className='serviceLink'><a href="">Learn More </a></p>
                </div>
                <div className="serviceBox">
                    <span><FontAwesomeIcon icon={faVideo}/></span>
                    <h3>Video Editing</h3>
                    <p className='serviceInfo'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    <p className='serviceLink'><a href="">Learn More </a></p>
                </div>
            </div>
        </div>
     );
}
 
export default Services;