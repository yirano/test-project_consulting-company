import React from 'react'
import Image from '../../Assets/images/discussing.jpeg'

const Card = () => {
    return (
        <div className="card">
            <div className="cardImage">
                <img src={Image} />
            </div>
            <div className="cardDesc">

                {/* ! This needs to work dynamically w/o hard-coded <span/> */}
                <h4>See our <span>Expertise</span></h4>
                <p>Lorem ipsum imperdiet rhoncus at lecturs In felis lobortis volupat auctor quam. In lecturs. Ut tincidunt pharetra nibh. Urna vitae. Ipsum mi. Vitae. Consectetur augue nec nisi a Quisque urna ac, elit. Amet fementum pharetra</p>
            </div>
            <div className="cardButton">
                <button>Click</button>
            </div>
        </div>
    )
}

export default Card
