import React from 'react'
import Facebook from '../../Assets/images/facebook.svg'
import Twitter from '../../Assets/images/twitter.svg'
import YouTube from '../../Assets/images/youtube.svg'

const Contact = () => {
    return (
        <div className="contact">
            <div className="phoneEmail">
                <h2>555.555.5555</h2>
                <p>Or send us an email using our <a href="#">contact form</a>.</p>
            </div>

            <div className="addressSocial">
                <address>
                    <h5>
                        1234 Address, Springfield, MO 65806
                    </h5>
                    <p>
                        <a href="#">Get directions</a> to our office.
                    </p>
                </address>
                <div className="socialMedia">
                    <img src={Facebook} />
                    <img src={Twitter} />
                    <img src={YouTube} />
                </div>
            </div>
        </div>
    )
}

export default Contact
