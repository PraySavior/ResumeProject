import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faComment } from '@fortawesome/free-regular-svg-icons';

const Blog = () => {
    return ( 
    <div className="blogAll">
        <h2 className="headers">Blog On <strong>Medium</strong></h2>
        <div className="blogBoxes">
            <div className="blogBox">
                <div className="blogImgDiv">
                    <img src="https://preview.colorlib.com/theme/rezume/images/post_1.jpg.webp" alt="" />
                </div>
                    <div className="blogArt">
                        <a href="">Creative Product Designer From Facebook</a>
                        <p className="blogText">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        <p className="blogDate">
                            <a href="./App.js"><FontAwesomeIcon icon={faCalendar} /> Aug 7, 2018</a>
                            <a href="./App.js"><FontAwesomeIcon icon={faComment}  className='blogComment'/> 5 Comments</a>
                        </p>
                    </div>
            </div>
            <div className="blogBox">
                <div className="blogImgDiv">
                    <img src="https://preview.colorlib.com/theme/rezume/images/post_2.jpg.webp" alt="" />
                </div>
                    <div className="blogArt">
                        <a href="">Creative Product Designer From Facebook</a>
                        <p className="blogText">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        <p className="blogDate">
                            <a href="./App.js"><FontAwesomeIcon icon={faCalendar} /> Aug 7, 2018</a>
                            <a href="./App.js"><FontAwesomeIcon icon={faComment}  className='blogComment'/> 5 Comments</a>
                        </p>
                    </div>
            </div>
            <div className="blogBox">
                <div className="blogImgDiv">
                    <img src="https://preview.colorlib.com/theme/rezume/images/post_3.jpg.webp" alt="" />
                </div>
                    <div className="blogArt">
                        <a href="">Creative Product Designer From Facebook</a>
                        <p className="blogText">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        <p className="blogDate">
                            <a href="./App.js"><FontAwesomeIcon icon={faCalendar} /> Aug 7, 2018</a>
                            <a href="./App.js"><FontAwesomeIcon icon={faComment}  className='blogComment'/> 5 Comments</a>
                        </p>
                    </div>
            </div>
            
        </div>
    </div> 
    );
}
 
export default Blog;