const Touch = () => {
    return (
        <div className="touchAll">
            <h2 className="headers">Get in <strong>Touch</strong></h2>
            <div className="contactBoxes">
                <div className="contactInputs">
                    <h3 className="contactHeaders">Get in Touch</h3>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="number" placeholder="Your Number" />
                    <textarea name="" id="" placeholder="Write a Message"></textarea>
                    <a href="" className="contactSend">Send Message</a>
                </div>
                <div className="contactDetails">
                    <h3 className="contactHeaders">My Contact Details</h3>
                    <li className="contactList">
                        <p className="contactType">Email</p>
                        <p className="contactContent">site@gmail.com</p>
                    </li>
                    <li className="contactList">
                        <p className="contactType">Phone</p>
                        <p className="contactContent">+30 976 1382 9921</p>
                    </li>
                    <li className="contactList">
                        <p className="contactType">Fax</p>
                        <p className="contactContent">+30 976 1382 9922</p>
                    </li>
                    <li className="contactList">
                        <p className="contactType">Adress</p>
                        <p className="contactContent">San Francisco, CA</p>
                        <p className="contactContent">4th Floor8 Lower</p>
                        <p className="contactContent">San Francisco street, M1 50F</p>
                    </li>
                </div>
            </div>
        </div>
    );
}

export default Touch;