import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const Resume = () => {
    return (
        <div className="resumeAll">
            <h2 className="headers">My <strong>Resume</strong></h2>
            <div className="resumeCenter">
                <div className="resumeBoxes">
                    <div className="resumeSplit">
                        <h2 className="resumeTop">Education</h2>
                        <div className="resumeBox">
                            <span className="date"><FontAwesomeIcon icon={faCalendar} /> March 2013 - Present</span>
                            <h3 className='resumeBoxHeader'>Masteral in Information Technology</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            <span className='school'>New York University</span>
                        </div>
                        <div className="resumeBox">
                            <span className="date"><FontAwesomeIcon icon={faCalendar} /> March 2013 - Present</span>
                            <h3 className='resumeBoxHeader'>Masteral in Information Technology</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            <span className='school'>New York University</span>
                        </div>
                        <div className="resumeBox">
                            <span className="date"><FontAwesomeIcon icon={faCalendar} /> March 2013 - Present</span>
                            <h3 className='resumeBoxHeader'>Masteral in Information Technology</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            <span className='school'>New York University</span>
                        </div>

                    </div>
                    <div className="resumeSplit">
                        <h2 className="resumeTop">Experience</h2>
                        <div className="resumeBox">
                            <span className="date"><FontAwesomeIcon icon={faCalendar} /> March 2013 - Present</span>
                            <h3 className='resumeBoxHeader'>Lead Product Designer</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            <span className='school'>Github</span>
                        </div>
                        <div className="resumeBox">
                            <span className="date"><FontAwesomeIcon icon={faCalendar} /> March 2013 - Present</span>
                            <h3 className='resumeBoxHeader'>Lead Product Designer</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            <span className='school'>Github</span>
                        </div>
                        <div className="resumeBox">
                            <span className="date"><FontAwesomeIcon icon={faCalendar} /> March 2013 - Present</span>
                            <h3 className='resumeBoxHeader'>Lead Product Designer</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            <span className='school'>Github</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutMe">
                <div className="imgDiv">
                    <img src="https://preview.colorlib.com/theme/rezume/images/image_1.jpg.webp" alt="" />
                </div>
                <div className="aboutMeTextBox">
                    <h2 className='leadHead'>About <strong>Me</strong></h2>
                    <p className='lead'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p className='leadNext'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p>
                        <a href="" className='button yellowButton'>Hire Me</a>
                        <a href="" className='button greyButton'>Download Cv</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Resume;